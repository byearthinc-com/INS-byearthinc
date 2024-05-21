// @author Unstoppable Domains, Inc.
// @date April 25th, 2024

pragma solidity 0.8.24;

import {Initializable} from '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import {ContextUpgradeable} from '@openzeppelin/contracts-upgradeable/utils/ContextUpgradeable.sol';
import {ReentrancyGuardUpgradeable} from '@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol';
import {PausableUpgradeable} from '@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol';
import {IERC20} from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import {ERC2771RegistryContext} from '../metatx/ERC2771RegistryContext.sol';
import {Forwarder} from '../metatx/Forwarder.sol';
import {MinterRole} from '../roles/MinterRole.sol';
import {ISeaportProxyBuyer, OrderIsNotFulfiled, RecipientIsZeroAddress, InvalidZone} from './ISeaportProxyBuyer.sol';
import {ConsiderationInterface} from 'seaport-types/src/interfaces/ConsiderationInterface.sol';
import {AdvancedOrder, CriteriaResolver, OrderComponents, OrderParameters} from 'seaport-types/src/lib/ConsiderationStructs.sol';

contract SeaportProxyBuyer is
    Initializable,
    ContextUpgradeable,
    ReentrancyGuardUpgradeable,
    ERC2771RegistryContext,
    Forwarder,
    MinterRole,
    PausableUpgradeable,
    ISeaportProxyBuyer
{
    string public constant NAME = 'Seaport Proxy Buyer';
    string public constant VERSION = '0.0.1';

    ConsiderationInterface private _seaport;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(ConsiderationInterface seaport) public initializer {
        _seaport = seaport;

        __ReentrancyGuard_init_unchained();
        __Context_init_unchained();
        __ERC2771RegistryContext_init_unchained();
        __Forwarder_init_unchained();
        __Ownable_init_unchained();
        __MinterRole_init_unchained();
        __Pausable_init_unchained();
    }

    function fulfillAdvancedOrder(
        AdvancedOrder calldata advancedOrder,
        CriteriaResolver[] calldata criteriaResolvers,
        bytes32 fulfillerConduitKey,
        address recipient
    ) external onlyMinter nonReentrant whenNotPaused returns (bool fulfilled) {
        if (recipient == address(0)) {
            revert RecipientIsZeroAddress();
        }
        if (advancedOrder.parameters.zone != address(this)) {
            revert InvalidZone();
        }

        OrderComponents memory orderComponents;
        orderComponents.offerer = advancedOrder.parameters.offerer;
        orderComponents.zone = advancedOrder.parameters.zone;
        orderComponents.offer = advancedOrder.parameters.offer;
        orderComponents.consideration = advancedOrder.parameters.consideration;
        orderComponents.orderType = advancedOrder.parameters.orderType;
        orderComponents.startTime = advancedOrder.parameters.startTime;
        orderComponents.endTime = advancedOrder.parameters.endTime;
        orderComponents.zoneHash = advancedOrder.parameters.zoneHash;
        orderComponents.salt = advancedOrder.parameters.salt;
        orderComponents.conduitKey = advancedOrder.parameters.conduitKey;
        orderComponents.counter = _seaport.getCounter(orderComponents.offerer);

        _protectTokenOperation(uint256(_seaport.getOrderHash(orderComponents)));

        fulfilled = _seaport.fulfillAdvancedOrder(advancedOrder, criteriaResolvers, fulfillerConduitKey, recipient);
        if (!fulfilled) {
            revert OrderIsNotFulfiled();
        }
    }

    function approve(address token) external onlyOwner nonReentrant whenNotPaused {
        IERC20(token).approve(address(_seaport), type(uint256).max);
    }

    function withdraw(address token, address recipient, uint256 amount) external onlyOwner nonReentrant whenNotPaused {
        IERC20(token).transfer(recipient, amount);
    }

    function pause() external onlyOwner whenNotPaused {
        _pause();
    }

    function unpause() external onlyOwner whenPaused {
        _unpause();
    }

    function _msgSender() internal view override(ContextUpgradeable, ERC2771RegistryContext) returns (address) {
        return super._msgSender();
    }

    function _msgData() internal view override(ContextUpgradeable, ERC2771RegistryContext) returns (bytes calldata) {
        return super._msgData();
    }

    function _protectTokenOperation(uint256 tokenId) internal {
        if (isTrustedForwarder(msg.sender)) {
            _validateForwardedToken(tokenId);
        } else {
            _invalidateNonce(tokenId);
        }
    }

    uint256[50] private __gap;
}
