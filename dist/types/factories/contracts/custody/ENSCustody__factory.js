"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENSCustody__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "CustodyNotEnoughBalance",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "InvalidForwardedToken",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "InvalidOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidSignature",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "InvalidToken",
        type: "error",
    },
    {
        inputs: [],
        name: "OperationProhibited",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "Unauthorised",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "UnknownToken",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "Parked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
            },
        ],
        name: "RoleAdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleGranted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleRevoked",
        type: "event",
    },
    {
        inputs: [],
        name: "DEFAULT_ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MINTER_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "NAME",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "VERSION",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "addMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
            },
        ],
        name: "addMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "receiver",
                type: "address",
            },
        ],
        name: "closeMinter",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "commitment",
                type: "bytes32",
            },
        ],
        name: "commit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
        ],
        name: "getRoleAdmin",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "hasRole",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "controller",
                type: "address",
            },
            {
                internalType: "address",
                name: "wrapper",
                type: "address",
            },
            {
                internalType: "address",
                name: "registrar",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isMinter",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "forwarder",
                type: "address",
            },
        ],
        name: "isTrustedForwarder",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "secret",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
            {
                internalType: "bool",
                name: "reverseRecord",
                type: "bool",
            },
            {
                internalType: "uint16",
                name: "ownerControlledFuses",
                type: "uint16",
            },
            {
                internalType: "bool",
                name: "selfCustody",
                type: "bool",
            },
        ],
        name: "makeCommitment",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
        ],
        name: "multicall",
        outputs: [
            {
                internalType: "bytes[]",
                name: "results",
                type: "bytes[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "nonceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "secret",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
            {
                internalType: "bool",
                name: "reverseRecord",
                type: "bool",
            },
            {
                internalType: "uint16",
                name: "ownerControlledFuses",
                type: "uint16",
            },
            {
                internalType: "bool",
                name: "selfCustody",
                type: "bool",
            },
        ],
        name: "register",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "removeMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
            },
        ],
        name: "removeMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "renew",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "rentPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "receiver",
                type: "address",
            },
        ],
        name: "rotateMinter",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "internalTransfer",
                type: "bool",
            },
        ],
        name: "safeTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "baseRegistrar",
                type: "address",
            },
        ],
        name: "setBaseRegistrar",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes",
                    },
                ],
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "verify",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b506200001c62000022565b620000e4565b600054610100900460ff16156200008f5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161015620000e2576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6138de80620000f46000396000f3fe6080604052600436106102345760003560e01c80638da5cb5b1161012e578063acf1a841116100ab578063d547741f1161006f578063d547741f146106e5578063f14fcbc814610705578063f23a6e6114610725578063f2fde38b14610745578063ffa1ad741461076557600080fd5b8063acf1a84114610643578063bc197c8114610663578063c0c53b8b14610683578063cf015853146106a3578063d5391393146106c357600080fd5b8063a217fddf116100f2578063a217fddf1461058a578063a3f4df7e1461059f578063a4247400146105d6578063aa271e1a146105f6578063ac9650d81461061657600080fd5b80638da5cb5b146104f757806391d1485414610515578063983b2d56146105355780639865027514610555578063a0e3aef11461056a57600080fd5b8063572b6c05116101bc5780636ccbae5f116101805780636ccbae5f1461046f578063715018a61461048f57806371e2a657146104a457806381c81d35146104c457806383e7f6ff146104d757600080fd5b8063572b6c05146103bb5780635fc1964f146103e4578063634486da146104045780636352211e146104175780636a8be89e1461044f57600080fd5b8063248a9ca311610203578063248a9ca3146102fd5780632f2ff15d1461033b5780633092afd51461035b57806336568abe1461037b578063423f6cef1461039b57600080fd5b806301ffc9a7146102405780630addc35414610275578063150b7a02146102975780631bf7e13e146102d057600080fd5b3661023b57005b600080fd5b34801561024c57600080fd5b5061026061025b366004612914565b610796565b60405190151581526020015b60405180910390f35b34801561028157600080fd5b50610295610290366004612963565b6107dc565b005b3480156102a357600080fd5b506102b76102b23660046129e2565b610969565b6040516001600160e01b0319909116815260200161026c565b3480156102dc57600080fd5b506102f06102eb366004612a54565b610abb565b60405161026c9190612b14565b34801561030957600080fd5b5061032d610318366004612b27565b600090815260fb602052604090206001015490565b60405190815260200161026c565b34801561034757600080fd5b50610295610356366004612b40565b610b87565b34801561036757600080fd5b50610295610376366004612b70565b610bb1565b34801561038757600080fd5b50610295610396366004612b40565b610bc5565b3480156103a757600080fd5b506102956103b6366004612b8d565b610c53565b3480156103c757600080fd5b506102606103d6366004612b70565b6001600160a01b0316301490565b3480156103f057600080fd5b506102956103ff366004612c22565b610cf1565b610295610412366004612b70565b610d39565b34801561042357600080fd5b50610437610432366004612b27565b610dfc565b6040516001600160a01b03909116815260200161026c565b34801561045b57600080fd5b5061029561046a366004612b70565b610e07565b34801561047b57600080fd5b5061032d61048a366004612b27565b610e50565b34801561049b57600080fd5b50610295610e96565b3480156104b057600080fd5b506102956104bf366004612c22565b610eaa565b6102956104d2366004612b70565b610ef2565b3480156104e357600080fd5b5061032d6104f2366004612cc0565b610f6f565b34801561050357600080fd5b506097546001600160a01b0316610437565b34801561052157600080fd5b50610260610530366004612b40565b611012565b34801561054157600080fd5b50610295610550366004612b70565b61103d565b34801561056157600080fd5b5061029561104e565b34801561057657600080fd5b5061032d610585366004612dd0565b611068565b34801561059657600080fd5b5061032d600081565b3480156105ab57600080fd5b506102f06040518060400160405280600b81526020016a454e5320437573746f647960a81b81525081565b3480156105e257600080fd5b506102606105f1366004612a54565b611114565b34801561060257600080fd5b50610260610611366004612b70565b611167565b34801561062257600080fd5b50610636610631366004612ea9565b611181565b60405161026c9190612eea565b34801561064f57600080fd5b5061029561065e366004612cc0565b61125d565b34801561066f57600080fd5b506102b761067e366004612f4c565b611416565b34801561068f57600080fd5b5061029561069e36600461300a565b6114cf565b3480156106af57600080fd5b506102956106be366004613055565b611678565b3480156106cf57600080fd5b5061032d60008051602061389283398151915281565b3480156106f157600080fd5b50610295610700366004612b40565b611785565b34801561071157600080fd5b50610295610720366004612b27565b6117aa565b34801561073157600080fd5b506102b7610740366004613137565b61181e565b34801561075157600080fd5b50610295610760366004612b70565b6118af565b34801561077157600080fd5b506102f060405180604001604052806005815260200164302e312e3360d81b81525081565b60006001600160e01b03198216630a85bd0160e11b14806107c757506001600160e01b03198216630271189760e51b145b806107d657506107d6826118cb565b92915050565b816107e5611900565b6001600160a01b03166107f78261190f565b6001600160a01b03161461083e578061080e611900565b604051637ea58b1160e01b815260048101929092526001600160a01b031660248201526044015b60405180910390fd5b61084783611a25565b811561085c576108578385611a3e565b610963565b604080517f0a8885dd093a12d378a27df09bde33e3caca641a3d6970e06805fde8e847cb4660208201529081018490526000906108b0906060015b6040516020818303038152906040528051906020012090565b80546001600160a01b0319166001600160a01b039290921691909117905560006000805160206138b283398151915254604051637921219560e11b81523060048201526001600160a01b038781166024830152604482018790526001606483015260a06084830152600060a48301529091169150819063f242432a9060c401600060405180830381600087803b15801561094957600080fd5b505af115801561095d573d6000803e3d6000fd5b50505050505b50505050565b7ff851d5f4fccb32d2a48561b7acc01b5d4d46b7e138d49f887026f203b08c5004546000906001600160a01b0316806109a0611900565b6001600160a01b031603610a9957600080806109be868801886131b2565b9250925092506109cd83611ac9565b6001600160a01b03841663b88d4fde306000805160206138b2833981519152546040516001600160a01b03909116908c90610a1390879030906000908b90602001613213565b6040516020818303038152906040526040518563ffffffff1660e01b8152600401610a419493929190613253565b600060405180830381600087803b158015610a5b57600080fd5b505af1158015610a6f573d6000803e3d6000fd5b50505050610a85610a7f82611afb565b84611a3e565b50630a85bd0160e11b9350610ab292505050565b6040516344e7d94960e01b815260040160405180910390fd5b95945050505050565b606060005a9050610acd858585611114565b610aea57604051638baa579f60e01b815260040160405180910390fd5b610b7c610afa6020870187612b70565b30604088013584610b0e60608b018b613286565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b9081908401838280828437600092019190915250611b8092505050565b9150505b9392505050565b600082815260fb6020526040902060010154610ba281611c61565b610bac8383611c72565b505050565b610bb9611cf9565b610bc281611d72565b50565b610bcd611900565b6001600160a01b0316816001600160a01b031614610c455760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610835565b610c4f8282611d8a565b5050565b80610c5c611900565b6001600160a01b0316610c6e8261190f565b6001600160a01b031614610c85578061080e611900565b6040516302b770d560e21b81526001600160a01b038416600482015260248101839052600060448201523090630addc35490606401600060405180830381600087803b158015610cd457600080fd5b505af1158015610ce8573d6000803e3d6000fd5b50505050505050565b610cf9611cf9565b60005b8151811015610c4f57610d27828281518110610d1a57610d1a6132cc565b6020026020010151611d72565b80610d31816132f8565b915050610cfc565b610d44610611611900565b610d605760405162461bcd60e51b815260040161083590613311565b6001600160a01b038116610db65760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610835565b610dbf81611e0f565b610dc761104e565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610c4f573d6000803e3d6000fd5b60006107d68261190f565b610e0f611cf9565b7ff851d5f4fccb32d2a48561b7acc01b5d4d46b7e138d49f887026f203b08c500480546001600160a01b0319166001600160a01b0392909216919091179055565b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a838156020820152908101829052600090610e8f90606001610897565b5492915050565b610e9e611cf9565b610ea86000611e27565b565b610eb2611cf9565b60005b8151811015610c4f57610ee0828281518110610ed357610ed36132cc565b6020026020010151611e0f565b80610eea816132f8565b915050610eb5565b610efd610611611900565b610f195760405162461bcd60e51b815260040161083590613311565b6001600160a01b038116610dbf5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610835565b60008051602061384b833981519152546040516383e7f6ff60e01b81526000916001600160a01b031690829082906383e7f6ff90610fb59089908990899060040161336f565b6040805180830381865afa158015610fd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff59190613393565b60208101518151919250611008916133e1565b9695505050505050565b600091825260fb602090815260408084206001600160a01b0393909316845291905290205460ff1690565b611045611cf9565b610bc281611e0f565b610ea8600080516020613892833981519152610396611900565b60008051602061384b833981519152546000906001600160a01b0316806365a69dcf8d856110965730611098565b8d5b8d8d8d8d8d8d8d6040518a63ffffffff1660e01b81526004016110c399989796959493929190613485565b602060405180830381865afa1580156110e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110491906134f5565b9c9b505050505050505050505050565b600061115f6111228561350e565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611e7992505050565b949350505050565b60006107d660008051602061389283398151915283611012565b6060600061118f8385613598565b90503033036112545760005b83811015611252576112226111ae611900565b6111b6611fb8565b8787858181106111c8576111c86132cc565b90506020028101906111da9190613286565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525060408051602081019091529081529250611fcc915050565b828281518110611234576112346132cc565b6020026020010181905250808061124a906132f8565b91505061119b565b505b61115f81611ffc565b611268610611611900565b6112845760405162461bcd60e51b815260040161083590613311565b6002603354036112d65760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610835565b600260335560008051602061384b833981519152546040516383e7f6ff60e01b81526001600160a01b039091169060009082906383e7f6ff906113219088908890889060040161336f565b6040805180830381865afa15801561133d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113619190613393565b60208101518151919250611374916133e1565b4710156113945760405163050205f960e01b815260040160405180910390fd5b816001600160a01b031663acf1a841826020015183600001516113b791906133e1565b8787876040518563ffffffff1660e01b81526004016113d89392919061336f565b6000604051808303818588803b1580156113f157600080fd5b505af1158015611405573d6000803e3d6000fd5b505060016033555050505050505050565b60006000805160206138b2833981519152546001600160a01b0316611439611900565b6001600160a01b031614611460576040516344e7d94960e01b815260040160405180910390fd5b600061146e83850185612b70565b905061147981611ac9565b60005b878110156114b8576114a6898983818110611499576114996132cc565b9050602002013583611a3e565b806114b0816132f8565b91505061147c565b5063bc197c8160e01b9a9950505050505050505050565b600054610100900460ff16158080156114ef5750600054600160ff909116105b806115095750303b158015611509575060005460ff166001145b61156c5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610835565b6000805460ff19166001179055801561158f576000805461ff0019166101001790555b60008051602061384b83398151915280546001600160a01b038087166001600160a01b0319928316179092556000805160206138b283398151915280548684169083161790557ff851d5f4fccb32d2a48561b7acc01b5d4d46b7e138d49f887026f203b08c500480549285169290911691909117905561160d61212d565b61161561215b565b61161d61215b565b611625612182565b61162d6121b9565b8015610963576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150505050565b611683610611611900565b61169f5760405162461bcd60e51b815260040161083590613311565b6002603354036116f15760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610835565b6002603381905550600061173a8c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611afb92505050565b905061174581611a25565b6117638c8c846117555730611757565b8c5b8c8c8c8c8c8c8c6121f2565b8161177257611772818b611a3e565b5050600160335550505050505050505050565b600082815260fb60205260409020600101546117a081611c61565b610bac8383611d8a565b600060008051602061384b83398151915254604051631e29f97960e31b8152600481018490526001600160a01b039091169150819063f14fcbc890602401600060405180830381600087803b15801561180257600080fd5b505af1158015611816573d6000803e3d6000fd5b505050505050565b60006000805160206138b2833981519152546001600160a01b0316611841611900565b6001600160a01b031614611868576040516344e7d94960e01b815260040160405180910390fd5b6001600160a01b0386161561189c57600061188583850185612b70565b905061189081611ac9565b61189a8682611a3e565b505b5063f23a6e6160e01b9695505050505050565b6118b7611cf9565b6118c08161233d565b610bc26000826123b3565b60006001600160e01b03198216637965db0b60e01b14806107d657506301ffc9a760e01b6001600160e01b03198316146107d6565b600061190a6123bd565b905090565b604080517f0a8885dd093a12d378a27df09bde33e3caca641a3d6970e06805fde8e847cb46602082015290810182905260009061194e90606001610897565b546001600160a01b031690508061197b5760405163124bad6360e31b815260048101839052602401610835565b306000805160206138b2833981519152546040516331a9108f60e11b8152600481018590526001600160a01b0390911690636352211e90602401602060405180830381865afa1580156119d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119f6919061360b565b6001600160a01b031614611a20576040516303b673fd60e21b815260048101839052602401610835565b919050565b303303611a3557610bc2816123d8565b610bc281612402565b604080517f0a8885dd093a12d378a27df09bde33e3caca641a3d6970e06805fde8e847cb4660208201529081018390528190611a7c90606001610897565b80546001600160a01b0319166001600160a01b039283161790556040519082169083907f45aa97e368889fb3527c1db60c59c2ae91e82f21778613449e46d4208c1c4b1290600090a35050565b6001600160a01b038116610bc25760405163b20f76e360e01b81526001600160a01b0382166004820152602401610835565b60007f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae60001b82604051602001611b329190613628565b60405160208183030381529060405280519060200120604051602001611b62929190918252602082015260400190565b60408051601f19818403018152919052805160209091012092915050565b6060611b8b85612402565b600080876001600160a01b031686611ba58b8a8989611fcc565b604051611bb29190613628565b60006040518083038160008787f1925050503d8060008114611bf0576040519150601f19603f3d011682016040523d82523d6000602084013e611bf5565b606091505b509092509050611c06603f87613644565b5a11611c1457611c14613666565b611c5482826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c4544000000000000815250612468565b9998505050505050505050565b610bc281611c6d611900565b6124a1565b611c7c8282611012565b610c4f57600082815260fb602090815260408083206001600160a01b03851684529091529020805460ff19166001179055611cb5611900565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b611d01611900565b6001600160a01b0316611d1c6097546001600160a01b031690565b6001600160a01b031614610ea85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610835565b610bc260008051602061389283398151915282611785565b611d948282611012565b15610c4f57600082815260fb602090815260408083206001600160a01b03851684529091529020805460ff19169055611dcb611900565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b610bc2600080516020613892833981519152826123b3565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f90602401602060405180830381865afa158015611ec0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ee491906134f5565b90506000611f92866060015180519060200120868860200151604051602001611f329392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b905081866020015114801561100857508551611008906001600160a01b03168286612505565b6000303303611fc95750601f193601355b90565b6060828585604051602001611fe39392919061367c565b6040516020818303038152906040529050949350505050565b606081516001600160401b0381111561201757612017612bb9565b60405190808252806020026020018201604052801561204a57816020015b60608152602001906001900390816120355790505b50905060005b825181101561212757600080306001600160a01b0316858481518110612078576120786132cc565b602002602001015160405161208d9190613628565b600060405180830381855af49150503d80600081146120c8576040519150601f19603f3d011682016040523d82523d6000602084013e6120cd565b606091505b50915091506120f5828260405180606001604052806027815260200161386b60279139612468565b848481518110612107576121076132cc565b60200260200101819052505050808061211f906132f8565b915050612050565b50919050565b600054610100900460ff166121545760405162461bcd60e51b8152600401610835906136bb565b6001603355565b600054610100900460ff16610ea85760405162461bcd60e51b8152600401610835906136bb565b600054610100900460ff166121a95760405162461bcd60e51b8152600401610835906136bb565b610ea86121b4611900565b611e27565b600054610100900460ff166121e05760405162461bcd60e51b8152600401610835906136bb565b610ea860006121ed611900565b6123b3565b60008051602061384b833981519152546040516383e7f6ff60e01b81526001600160a01b039091169060009082906383e7f6ff90612238908f908f908e9060040161336f565b6040805180830381865afa158015612254573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122789190613393565b6020810151815191925061228b916133e1565b4710156122ab5760405163050205f960e01b815260040160405180910390fd5b816001600160a01b03166374694a2b826020015183600001516122ce91906133e1565b8e8e8e8e8e8e8e8e8e8e6040518c63ffffffff1660e01b81526004016122fd9a99989796959493929190613706565b6000604051808303818588803b15801561231657600080fd5b505af115801561232a573d6000803e3d6000fd5b5050505050505050505050505050505050565b612345611cf9565b6001600160a01b0381166123aa5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610835565b610bc281611e27565b610c4f8282611c72565b60003033036123d3575060331936013560601c90565b503390565b6123e0611fb8565b8114610bc257604051635637b6af60e11b815260048101829052602401610835565b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a8381560208201529081018290526000906060016040516020818303038152906040528051906020012090506124578190565b546124639060016133e1565b905550565b60608315612477575081610b80565b8251156124875782518084602001fd5b8160405162461bcd60e51b81526004016108359190612b14565b6124ab8282611012565b610c4f576124c3816001600160a01b03166014612647565b6124ce836020612647565b6040516020016124df929190613778565b60408051601f198184030181529082905262461bcd60e51b825261083591600401612b14565b600080600061251485856127e2565b9092509050600081600481111561252d5761252d6137ed565b14801561254b5750856001600160a01b0316826001600160a01b0316145b1561255b57600192505050610b80565b600080876001600160a01b0316631626ba7e60e01b8888604051602401612583929190613803565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516125c19190613628565b600060405180830381855afa9150503d80600081146125fc576040519150601f19603f3d011682016040523d82523d6000602084013e612601565b606091505b5091509150818015612614575080516020145b801561263b57508051630b135d3f60e11b9061263990830160209081019084016134f5565b145b98975050505050505050565b6060600061265683600261381c565b6126619060026133e1565b6001600160401b0381111561267857612678612bb9565b6040519080825280601f01601f1916602001820160405280156126a2576020820181803683370190505b509050600360fc1b816000815181106126bd576126bd6132cc565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106126ec576126ec6132cc565b60200101906001600160f81b031916908160001a905350600061271084600261381c565b61271b9060016133e1565b90505b6001811115612793576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061274f5761274f6132cc565b1a60f81b828281518110612765576127656132cc565b60200101906001600160f81b031916908160001a90535060049490941c9361278c81613833565b905061271e565b508315610b805760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610835565b60008082516041036128185760208301516040840151606085015160001a61280c87828585612827565b94509450505050612820565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561285e575060009050600361290b565b8460ff16601b1415801561287657508460ff16601c14155b15612887575060009050600461290b565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156128db573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166129045760006001925092505061290b565b9150600090505b94509492505050565b60006020828403121561292657600080fd5b81356001600160e01b031981168114610b8057600080fd5b6001600160a01b0381168114610bc257600080fd5b80358015158114611a2057600080fd5b60008060006060848603121561297857600080fd5b83356129838161293e565b92506020840135915061299860408501612953565b90509250925092565b60008083601f8401126129b357600080fd5b5081356001600160401b038111156129ca57600080fd5b60208301915083602082850101111561282057600080fd5b6000806000806000608086880312156129fa57600080fd5b8535612a058161293e565b94506020860135612a158161293e565b93506040860135925060608601356001600160401b03811115612a3757600080fd5b612a43888289016129a1565b969995985093965092949392505050565b600080600060408486031215612a6957600080fd5b83356001600160401b0380821115612a8057600080fd5b9085019060808288031215612a9457600080fd5b90935060208501359080821115612aaa57600080fd5b50612ab7868287016129a1565b9497909650939450505050565b60005b83811015612adf578181015183820152602001612ac7565b50506000910152565b60008151808452612b00816020860160208601612ac4565b601f01601f19169290920160200192915050565b602081526000610b806020830184612ae8565b600060208284031215612b3957600080fd5b5035919050565b60008060408385031215612b5357600080fd5b823591506020830135612b658161293e565b809150509250929050565b600060208284031215612b8257600080fd5b8135610b808161293e565b60008060408385031215612ba057600080fd5b8235612bab8161293e565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715612bf757612bf7612bb9565b604052919050565b60006001600160401b03821115612c1857612c18612bb9565b5060051b60200190565b60006020808385031215612c3557600080fd5b82356001600160401b03811115612c4b57600080fd5b8301601f81018513612c5c57600080fd5b8035612c6f612c6a82612bff565b612bcf565b81815260059190911b82018301908381019087831115612c8e57600080fd5b928401925b82841015612cb5578335612ca68161293e565b82529284019290840190612c93565b979650505050505050565b600080600060408486031215612cd557600080fd5b83356001600160401b03811115612ceb57600080fd5b612cf7868287016129a1565b909790965060209590950135949350505050565b600082601f830112612d1c57600080fd5b81356001600160401b03811115612d3557612d35612bb9565b612d48601f8201601f1916602001612bcf565b818152846020838601011115612d5d57600080fd5b816020850160208301376000918101602001919091529392505050565b60008083601f840112612d8c57600080fd5b5081356001600160401b03811115612da357600080fd5b6020830191508360208260051b850101111561282057600080fd5b803561ffff81168114611a2057600080fd5b6000806000806000806000806000806101208b8d031215612df057600080fd5b8a356001600160401b0380821115612e0757600080fd5b612e138e838f01612d0b565b9b5060208d01359150612e258261293e565b90995060408c0135985060608c0135975060808c013590612e458261293e565b90965060a08c01359080821115612e5b57600080fd5b50612e688d828e01612d7a565b9096509450612e7b905060c08c01612953565b9250612e8960e08c01612dbe565b9150612e986101008c01612953565b90509295989b9194979a5092959850565b60008060208385031215612ebc57600080fd5b82356001600160401b03811115612ed257600080fd5b612ede85828601612d7a565b90969095509350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015612f3f57603f19888603018452612f2d858351612ae8565b94509285019290850190600101612f11565b5092979650505050505050565b60008060008060008060008060a0898b031215612f6857600080fd5b8835612f738161293e565b97506020890135612f838161293e565b965060408901356001600160401b0380821115612f9f57600080fd5b612fab8c838d01612d7a565b909850965060608b0135915080821115612fc457600080fd5b612fd08c838d01612d7a565b909650945060808b0135915080821115612fe957600080fd5b50612ff68b828c016129a1565b999c989b5096995094979396929594505050565b60008060006060848603121561301f57600080fd5b833561302a8161293e565b9250602084013561303a8161293e565b9150604084013561304a8161293e565b809150509250925092565b60008060008060008060008060008060006101208c8e03121561307757600080fd5b6001600160401b03808d35111561308d57600080fd5b61309a8e8e358f016129a1565b909c509a506130ac60208e013561293e565b60208d0135995060408d0135985060608d013597506130ce60808e013561293e565b60808d013596508060a08e013511156130e657600080fd5b506130f78d60a08e01358e01612d7a565b909550935061310860c08d01612953565b925061311660e08d01612dbe565b91506131256101008d01612953565b90509295989b509295989b9093969950565b60008060008060008060a0878903121561315057600080fd5b863561315b8161293e565b9550602087013561316b8161293e565b9450604087013593506060870135925060808701356001600160401b0381111561319457600080fd5b6131a089828a016129a1565b979a9699509497509295939492505050565b6000806000606084860312156131c757600080fd5b83356131d28161293e565b925060208401356131e28161293e565b915060408401356001600160401b038111156131fd57600080fd5b61320986828701612d0b565b9150509250925092565b6080815260006132266080830187612ae8565b6001600160a01b03958616602084015261ffff949094166040830152509216606090920191909152919050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061100890830184612ae8565b6000808335601e1984360301811261329d57600080fd5b8301803591506001600160401b038211156132b757600080fd5b60200191503681900382131561282057600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161330a5761330a6132e2565b5060010190565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b604081526000613383604083018587613346565b9050826020830152949350505050565b6000604082840312156133a557600080fd5b604051604081018181106001600160401b03821117156133c7576133c7612bb9565b604052825181526020928301519281019290925250919050565b808201808211156107d6576107d66132e2565b81835260006020808501808196508560051b810191508460005b878110156134785782840389528135601e1988360301811261342f57600080fd5b870185810190356001600160401b0381111561344a57600080fd5b80360382131561345957600080fd5b613464868284613346565b9a87019a955050509084019060010161340e565b5091979650505050505050565b60006101008083526134998184018d612ae8565b6001600160a01b038c81166020860152604085018c9052606085018b90528916608085015283810360a085015290506134d38187896133f4565b94151560c0840152505061ffff9190911660e090910152979650505050505050565b60006020828403121561350757600080fd5b5051919050565b60006080823603121561352057600080fd5b604051608081016001600160401b03828210818311171561354357613543612bb9565b81604052843591506135548261293e565b8183526020850135602084015260408501356040840152606085013591508082111561357f57600080fd5b5061358c36828601612d0b565b60608301525092915050565b60006135a6612c6a84612bff565b80848252602080830192508560051b8501368111156135c457600080fd5b855b818110156135ff5780356001600160401b038111156135e55760008081fd5b6135f136828a01612d0b565b8652509382019382016135c6565b50919695505050505050565b60006020828403121561361d57600080fd5b8151610b808161293e565b6000825161363a818460208701612ac4565b9190910192915050565b60008261366157634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052600160045260246000fd5b6000845161368e818460208901612ac4565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600061010080835261371b8184018d8f613346565b6001600160a01b038c81166020860152604085018c9052606085018b90528916608085015283810360a085015290506137558187896133f4565b94151560c0840152505061ffff9190911660e09091015298975050505050505050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516137b0816017850160208801612ac4565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516137e1816028840160208801612ac4565b01602801949350505050565b634e487b7160e01b600052602160045260246000fd5b82815260406020820152600061115f6040830184612ae8565b80820281158282048414176107d6576107d66132e2565b600081613842576138426132e2565b50600019019056fe412386de53449251cbf7ce1f4c6a038bf9c0746e62d331b08ef0c3fa7d0ab672416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c65649f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660793a5062d506d35cc8f1beda67ee5028c16bfcd9c923d5bfc439c04bd929b1a164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class ENSCustody__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.ENSCustody__factory = ENSCustody__factory;
ENSCustody__factory.bytecode = _bytecode;
ENSCustody__factory.abi = _abi;
