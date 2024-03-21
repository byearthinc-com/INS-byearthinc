"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintingManager__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Blocked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "BlocklistDisabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "BlocklistEnabled",
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
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "DomainPurchase",
        type: "event",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "tld",
                type: "string",
            },
        ],
        name: "NewTld",
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
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
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
        ],
        name: "RemoveTld",
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "recepient",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "Withdrawal",
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
                internalType: "address[]",
                name: "addrs",
                type: "address[]",
            },
        ],
        name: "addProxyReaders",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "tld",
                type: "string",
            },
            {
                internalType: "bool",
                name: "isExpirable",
                type: "bool",
            },
        ],
        name: "addTld",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "buy",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "buyForErc20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tld",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
        ],
        name: "claim",
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
                name: "tld",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
        ],
        name: "claimTo",
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
                name: "tld",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        name: "claimToWithRecords",
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
        inputs: [],
        name: "cnsMintingController",
        outputs: [
            {
                internalType: "contract IMintingController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cnsResolver",
        outputs: [
            {
                internalType: "contract IResolver",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cnsURIPrefixController",
        outputs: [
            {
                internalType: "contract IURIPrefixController",
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
                internalType: "contract IUNSRegistry",
                name: "unsRegistry_",
                type: "address",
            },
            {
                internalType: "contract IMintingController",
                name: "cnsMintingController_",
                type: "address",
            },
            {
                internalType: "contract IURIPrefixController",
                name: "cnsURIPrefixController_",
                type: "address",
            },
            {
                internalType: "contract IResolver",
                name: "cnsResolver_",
                type: "address",
            },
            {
                internalType: "address",
                name: "unsOperator_",
                type: "address",
            },
            {
                internalType: "address",
                name: "forwarder",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "isBlocked",
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
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "issueExpirableWithRecords",
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
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "issueWithRecords",
        outputs: [],
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
        inputs: [],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
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
                internalType: "uint256",
                name: "tld",
                type: "uint256",
            },
        ],
        name: "removeTld",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
            {
                internalType: "uint256",
                name: "tokenId",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "revoke",
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
                name: "forwarder",
                type: "address",
            },
        ],
        name: "setForwarder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "setOperator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "setTokenURIPrefix",
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
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "unsOperator",
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
        inputs: [],
        name: "unsRegistry",
        outputs: [
            {
                internalType: "contract IUNSRegistry",
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
                internalType: "address",
                name: "recepient",
                type: "address",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "recepient",
                type: "address",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50614ec7806100206000396000f3fe6080604052600436106102ae5760003560e01c8063906cecc111610175578063b9998a24116100dc578063d547741f11610095578063f2fde38b1161006f578063f2fde38b14610892578063f5243bc4146108b2578063f940e385146108d2578063ffa1ad74146108f257600080fd5b8063d547741f1461083f578063d7db74c71461085f578063ec5273891461087257600080fd5b8063b9998a241461077d578063cc2a9a5b1461079d578063cc2c3fc4146107bd578063ceeb4f50146107dd578063d1f5692c146107fd578063d53913931461081d57600080fd5b8063a3a3f7f61161012e578063a3a3f7f614610690578063a3f4df7e146106b0578063a849d65c146106fd578063aa271e1a1461071d578063b0aa98c71461073d578063b3ab15fb1461075d57600080fd5b8063906cecc1146105e657806391d1485414610606578063983b2d5614610626578063986502751461064657806399e0dd7c1461065b578063a217fddf1461067b57600080fd5b80635b6fa8db11610219578063715018a6116101d2578063715018a61461054b57806371e2a6571461056057806377a2a5891461058057806381c81d35146105a05780638456cb59146105b35780638da5cb5b146105c857600080fd5b80635b6fa8db146104a35780635c975abb146104c35780635cd7e3b3146104d85780635e22cd86146104f85780635fc1964f14610518578063634486da1461053857600080fd5b80633092afd51161026b5780633092afd5146103a857806336568abe146103c85780633f41b614146103e85780633f4ba83a1461042057806351cff8d914610435578063572b6c051461045557600080fd5b806301ffc9a7146102b35780631edb948e146102e857806320c5429b1461030a578063248a9ca31461032a578063268b15ed146103685780632f2ff15d14610388575b600080fd5b3480156102bf57600080fd5b506102d36102ce366004613d6b565b610923565b60405190151581526020015b60405180910390f35b3480156102f457600080fd5b50610308610303366004613dba565b61095a565b005b34801561031657600080fd5b50610308610325366004613de6565b610b03565b34801561033657600080fd5b5061035a610345366004613de6565b60009081526097602052604090206001015490565b6040519081526020016102df565b34801561037457600080fd5b50610308610383366004613e40565b610c26565b34801561039457600080fd5b506103086103a3366004613eab565b610cb9565b3480156103b457600080fd5b506103086103c3366004613edb565b610ce3565b3480156103d457600080fd5b506103086103e3366004613eab565b610cf7565b3480156103f457600080fd5b5060c954610408906001600160a01b031681565b6040516001600160a01b0390911681526020016102df565b34801561042c57600080fd5b50610308610d85565b34801561044157600080fd5b50610308610450366004613edb565b610d97565b34801561046157600080fd5b506102d3610470366004613edb565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b3480156104af57600080fd5b5060cc54610408906001600160a01b031681565b3480156104cf57600080fd5b506102d3610e37565b3480156104e457600080fd5b506103086104f3366004613f4a565b610e4d565b34801561050457600080fd5b50610308610513366004614009565b6110b1565b34801561052457600080fd5b50610308610533366004614143565b6112f6565b610308610546366004613edb565b61133e565b34801561055757600080fd5b50610308611401565b34801561056c57600080fd5b5061030861057b366004614143565b611413565b34801561058c57600080fd5b5060ce54610408906001600160a01b031681565b6103086105ae366004613edb565b61145b565b3480156105bf57600080fd5b506103086114d8565b3480156105d457600080fd5b506033546001600160a01b0316610408565b3480156105f257600080fd5b506103086106013660046141e1565b6114e8565b34801561061257600080fd5b506102d3610621366004613eab565b61156e565b34801561063257600080fd5b50610308610641366004613edb565b611599565b34801561065257600080fd5b506103086115aa565b34801561066757600080fd5b5061030861067636600461423c565b6115c4565b34801561068757600080fd5b5061035a600081565b34801561069c57600080fd5b506103086106ab36600461427d565b6116ab565b3480156106bc57600080fd5b506106f0604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b6040516102df9190614323565b34801561070957600080fd5b5060cb54610408906001600160a01b031681565b34801561072957600080fd5b506102d3610738366004613edb565b6116f4565b34801561074957600080fd5b506102d3610758366004613de6565b61170e565b34801561076957600080fd5b50610308610778366004613edb565b61176c565b34801561078957600080fd5b50610308610798366004613edb565b611796565b3480156107a957600080fd5b506103086107b8366004614336565b6117db565b3480156107c957600080fd5b5060ca54610408906001600160a01b031681565b3480156107e957600080fd5b506103086107f83660046143b8565b611c79565b34801561080957600080fd5b5061030861081836600461446d565b611d1d565b34801561082957600080fd5b5061035a600080516020614e9b83398151915281565b34801561084b57600080fd5b5061030861085a366004613eab565b611dd4565b61030861086d3660046144a2565b611df9565b34801561087e57600080fd5b5061030861088d366004613de6565b611f89565b34801561089e57600080fd5b506103086108ad366004613edb565b611ffb565b3480156108be57600080fd5b506103086108cd366004614597565b612017565b3480156108de57600080fd5b506103086108ed3660046146af565b6121c9565b3480156108fe57600080fd5b506106f060405180604001604052806005815260200164302e352e3160d81b81525081565b60006001600160e01b03198216637965db0b60e01b148061095457506301ffc9a760e01b6001600160e01b03198316145b92915050565b610965610738612345565b61098a5760405162461bcd60e51b8152600401610981906146dd565b60405180910390fd5b60c95460405163baef73e960e01b8152600481018390526000916001600160a01b03169063baef73e990602401602060405180830381865afa1580156109d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f89190614712565b9050806001600160401b0316600003610a235760405162461bcd60e51b81526004016109819061472f565b806001600160401b0316836001600160401b031611610a905760405162461bcd60e51b815260206004820152602360248201527f4d696e74696e674d616e616765723a204558504952595f4e4f545f455854454e60448201526211115160ea1b6064820152608401610981565b60c954604051631fb9763760e11b81526001600160401b0385166004820152602481018490526001600160a01b0390911690633f72ec6e906044015b600060405180830381600087803b158015610ae657600080fd5b505af1158015610afa573d6000803e3d6000fd5b50505050505050565b610b0e610738612345565b610b2a5760405162461bcd60e51b8152600401610981906146dd565b60c95460405163baef73e960e01b8152600481018390526001600160a01b039091169063baef73e990602401602060405180830381865afa158015610b73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b979190614712565b6001600160401b0316600003610bbf5760405162461bcd60e51b81526004016109819061472f565b60c954604051637eee288d60e01b8152306004820152602481018390526001600160a01b0390911690637eee288d90604401600060405180830381600087803b158015610c0b57600080fd5b505af1158015610c1f573d6000803e3d6000fd5b5050505050565b8282828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250610c699350859250849150612354565b610c71610e37565b15610c8e5760405162461bcd60e51b815260040161098190614772565b6060610afa610c9b612345565b610cae88610ca9898961252b565b612557565b838460006001612668565b600082815260976020526040902060010154610cd481612bbc565b610cde8383612bcd565b505050565b610ceb612c54565b610cf481612ccd565b50565b610cff612345565b6001600160a01b0316816001600160a01b031614610d775760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610981565b610d818282612ce5565b5050565b610d8d612c54565b610d95612d6a565b565b610d9f612c54565b6001600160a01b038116610db257600080fd5b60405147906001600160a01b0383169082156108fc029083906000818181858888f19350505050158015610dea573d6000803e3d6000fd5b50604080516001600160a01b03841681526020810183905260008183015290517e1a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a9181900360600190a15050565b600080516020614e7b8339815191525460ff1690565b610e57868861479c565b8051600203610e8c57610e6b610738612345565b610e875760405162461bcd60e51b815260040161098190614866565b610fd1565b6000610e9782612e12565b60c9549092506001600160a01b0316905063430c2081610eb5612345565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101849052604401602060405180830381865afa158015610f00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2491906148aa565b80610fb3575060c95460ce5460405163430c208160e01b81526001600160a01b0391821660048201526024810184905291169063430c208190604401602060405180830381865afa158015610f7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa191906148aa565b8015610fb35750610fb3610738612345565b610fcf5760405162461bcd60e51b8152600401610981906148c7565b505b610fdb878961479c565b6000600282511015610fff5760405162461bcd60e51b815260040161098190614916565b611054611033600084600186516110169190614971565b8151811061102657611026614984565b6020026020010151612e4d565b8360008151811061104657611046614984565b602002602001015183612354565b61105c610e37565b156110795760405162461bcd60e51b815260040161098190614772565b6110a38b6110878b8d61479c565b6110918a8c61479c565b61109b898b61479c565b600089612668565b505050505050505050505050565b6110bb878961479c565b80516002036110f0576110cf610738612345565b6110eb5760405162461bcd60e51b815260040161098190614866565b611235565b60006110fb82612e12565b60c9549092506001600160a01b0316905063430c2081611119612345565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101849052604401602060405180830381865afa158015611164573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061118891906148aa565b80611217575060c95460ce5460405163430c208160e01b81526001600160a01b0391821660048201526024810184905291169063430c208190604401602060405180830381865afa1580156111e1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120591906148aa565b80156112175750611217610738612345565b6112335760405162461bcd60e51b8152600401610981906148c7565b505b61123f888a61479c565b836002825110156112625760405162461bcd60e51b815260040161098190614916565b611279611033600084600186516110169190614971565b611281610e37565b1561129e5760405162461bcd60e51b815260040161098190614772565b60028a146112be5760405162461bcd60e51b81526004016109819061499a565b6112e78c6112cc8c8e61479c565b6112d68b8d61479c565b6112e08a8c61479c565b8989612668565b50505050505050505050505050565b6112fe612c54565b60005b8151811015610d815761132c82828151811061131f5761131f614984565b6020026020010151612ccd565b80611336816149e0565b915050611301565b611349610738612345565b6113655760405162461bcd60e51b8152600401610981906146dd565b6001600160a01b0381166113bb5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610981565b6113c481612f01565b6113cc6115aa565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610d81573d6000803e3d6000fd5b611409612c54565b610d956000612f19565b61141b612c54565b60005b8151811015610d815761144982828151811061143c5761143c614984565b6020026020010151612f01565b80611453816149e0565b91505061141e565b611466610738612345565b6114825760405162461bcd60e51b8152600401610981906146dd565b6001600160a01b0381166113c45760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610981565b6114e0612c54565b610d95612f6b565b8282828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525061152b9350859250849150612354565b611533610e37565b156115505760405162461bcd60e51b815260040161098190614772565b606061156487610cae88610ca9898961252b565b5050505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6115a1612c54565b610cf481612f01565b610d95600080516020614e9b8339815191526103e3612345565b6115cc612c54565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906115fe90859085906004016149f9565b600060405180830381600087803b15801561161857600080fd5b505af115801561162c573d6000803e3d6000fd5b505060cb546001600160a01b0316159150610d8190505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c9061167590859085906004016149f9565b600060405180830381600087803b15801561168f57600080fd5b505af11580156116a3573d6000803e3d6000fd5b505050505050565b6116b3612c54565b610cde83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250859250612fd3915050565b6000610954600080516020614e9b8339815191528361156e565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd696020820152908101829052600090611762906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b611774612c54565b60ce80546001600160a01b0319166001600160a01b0392909216919091179055565b61179e612c54565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b600054610100900460ff16158080156117fb5750600054600160ff909116105b806118155750303b158015611815575060005460ff166001145b6118785760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610981565b6000805460ff19166001179055801561189b576000805461ff0019166101001790555b60c980546001600160a01b03199081166001600160a01b038a81169190911790925560ca8054821689841617905560cb8054821688841617905560cc8054821687841617905560ce80549091169185169190911790556118f96130f3565b61190161312a565b61190a82613163565b61191261318a565b604080516103008101825260066102c082018181526563727970746f60d01b6102e0840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a815269313637b1b5b1b430b4b760b11b818401526080850152845180860186526007808252663134ba31b7b4b760c91b8285015260a0860191909152855180870187528281526207070760eb1b8185015260c0860152855180870187528281526264616f60e81b8185015260e086015285518087018752918252621e9a5b60ea1b8284015261010085019190915284518086018652908152663837b63cb3b7b760c91b8183015261012084015283518085018552600b81526a756e73746f707061626c6560a81b81830152610140840152835180850185528281526535b632bb32b960d11b8183015261016084015283518085018552600280825261686960f01b8284015261018085019190915284518086018652838152656b726573757360d01b818401526101a085015284518086018652600580825264616e696d6560d81b828501526101c086019190915285518087018752818152646d616e676160d81b818501526101e086015285518087018752600981526862696e616e6365757360b81b8185015261020086015285518087018752818152647265616c6d60d81b818501526102208601528551808701875291825261676f60f01b82840152610240850191909152845180860186526008815267185b1d1a5b5a5cdd60c21b818401526102608501528451808601865290815264707564677960d81b8183015261028084015283518085019094529083526530bab9ba34b760d11b908301526102a081019190915260005b6016811015611c0357611bf1828260168110611be557611be5614984565b60200201516000612fd3565b80611bfb816149e0565b915050611bc7565b50611c2a60405180604001604052806003815260200162636f6d60e81b8152506001612fd3565b508015610afa576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150505050505050565b8686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250611cbc9350859250849150612354565b611cc4610e37565b15611ce15760405162461bcd60e51b815260040161098190614772565b611d108a611cf38b610ca98c8c61252b565b611cfd888a61479c565b611d07878961479c565b60006001612668565b5050505050505050505050565b611d25612c54565b60005b81811015610cde5760c9546001600160a01b03166350960239848484818110611d5357611d53614984565b9050602002016020810190611d689190613edb565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b158015611da957600080fd5b505af1158015611dbd573d6000803e3d6000fd5b505050508080611dcc906149e0565b915050611d28565b600082815260976020526040902060010154611def81612bbc565b610cde8383612ce5565b611e03898b61479c565b6000600282511015611e275760405162461bcd60e51b815260040161098190614916565b611e3e611033600084600186516110169190614971565b611e46610e37565b15611e635760405162461bcd60e51b815260040161098190614772565b60028b14611e835760405162461bcd60e51b81526004016109819061499a565b611ec98d8d8d898960008a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506131ca92505050565b84341015611f195760405162461bcd60e51b815260206004820181905260248201527f4d696e74696e674d616e616765723a204e4f545f454e4f5547485f46554e44536044820152606401610981565b611f2b8d8d8d8d8d8d8d8c600061338a565b843411156112e757611f3b612345565b6001600160a01b03166108fc611f518734614971565b6040518115909202916000818181858888f19350505050158015611f79573d6000803e3d6000fd5b5050505050505050505050505050565b611f91612c54565b611f9a81613446565b611fb65760405162461bcd60e51b815260040161098190614a28565b600081815260cd60205260408120611fcd91613d1d565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b612003612c54565b61200c8161346c565b610cf46000826134e2565b6120218a8c61479c565b60006002825110156120455760405162461bcd60e51b815260040161098190614916565b61205c611033600084600186516110169190614971565b612064610e37565b156120815760405162461bcd60e51b815260040161098190614772565b60028c146120a15760405162461bcd60e51b81526004016109819061499a565b6120e68e8e8e8a898b8a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506131ca92505050565b856001600160a01b03166323b872dd6120fd612345565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604481018890526064016020604051808303816000875af1158015612150573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061217491906148aa565b6121b85760405162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881313d5d7d31155915317d1905253605a1b6044820152606401610981565b611f798e8e8e8e8e8e8e8c8e61338a565b6121d1612c54565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015612218573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061223c9190614a6a565b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018390529192509084169063a9059cbb906044016020604051808303816000875af115801561228f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122b391906148aa565b6122f75760405162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881313d5d7d31155915317d1905253605a1b6044820152606401610981565b604080516001600160a01b0384811682526020820184905285168183015290517e1a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a9181900360600190a1505050565b600061234f6134ec565b905090565b61235d83613446565b6123795760405162461bcd60e51b815260040161098190614a28565b600083815260cf602052604090205460ff1615156001600160401b0382161515146123f55760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544c445f455850495241424c455f4d496044820152650a69a82a886960d31b6064820152608401610981565b60006124288360408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a816000015111156124d057612453612447826000600a613532565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b8036124d05760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b6064820152608401610981565b6124d983613571565b6125255760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a204c4142454c5f494e56414c49440000006044820152606401610981565b50505050565b60608282604051602001612540929190614a83565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b6060815260200190600190039081612571579050509050828160008151811061259c5761259c614984565b602002602001018190525060cd600085815260200190815260200160002080546125c590614aab565b80601f01602080910402602001604051908101604052809291908181526020018280546125f190614aab565b801561263e5780601f106126135761010080835404028352916020019161263e565b820191906000526020600020905b81548152906001019060200180831161262157829003601f168201915b50505050508160018151811061265657612656614984565b60209081029190910101529392505050565b600080600061267688612e12565b91509150838015612688575060028851115b801561270a575060c9546040516331a9108f60e11b8152600481018390526001600160a01b038b8116921690636352211e90602401602060405180830381865afa1580156126da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126fe9190614ae5565b6001600160a01b031614155b1561276a5760405162461bcd60e51b815260206004820152602a60248201527f4d696e74696e674d616e616765723a20524556455253455f5245434f52445f4e60448201526913d517d0531313d5d15160b21b6064820152608401610981565b60c954604051634f558e7960e01b8152600481018490526001600160a01b0390911690634f558e7990602401602060405180830381865afa1580156127b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127d791906148aa565b80156128c8575060c9546040516331a9108f60e11b81526004810184905230916001600160a01b031690636352211e90602401602060405180830381865afa158015612827573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061284b9190614ae5565b6001600160a01b031614806128c8575060c95460405163d9548e5360e01b8152600481018490526001600160a01b039091169063d9548e5390602401602060405180830381865afa1580156128a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128c891906148aa565b156129b9576001600160401b0385161561294a5760c954604051631fb9763760e11b81526001600160401b0387166004820152602481018490526001600160a01b0390911690633f72ec6e90604401600060405180830381600087803b15801561293157600080fd5b505af1158015612945573d6000803e3d6000fd5b505050505b60c954604051630fb8df0360e11b81526001600160a01b0390911690631f71be0690612982908c908c908c908c908b90600401614b57565b600060405180830381600087803b15801561299c57600080fd5b505af11580156129b0573d6000803e3d6000fd5b50505050612bb0565b6129c2826136d5565b6129cb88613734565b80156129d8575087516002145b80156129eb57506001600160401b038516155b15612ac95760ca5488516001600160a01b039091169063c36c2125908b908b90600090612a1a57612a1a614984565b602090810291909101015160cc546040516001600160e01b031960e086901b168152612a549392916001600160a01b031690600401614bb6565b600060405180830381600087803b158015612a6e57600080fd5b505af1158015612a82573d6000803e3d6000fd5b50505050600087511115612ac45760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae7490612982908a908a908790600401614beb565b612bb0565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b790612b01908c908c908c908c908b90600401614b57565b600060405180830381600087803b158015612b1b57600080fd5b505af1158015612b2f573d6000803e3d6000fd5b505050506001600160401b03851615612bb05760c954604051631fb9763760e11b81526001600160401b0387166004820152602481018490526001600160a01b0390911690633f72ec6e90604401600060405180830381600087803b158015612b9757600080fd5b505af1158015612bab573d6000803e3d6000fd5b505050505b50979650505050505050565b610cf481612bc8612345565b61378e565b612bd7828261156e565b610d815760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055612c10612345565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b612c5c612345565b6001600160a01b0316612c776033546001600160a01b031690565b6001600160a01b031614610d955760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610981565b610cf4600080516020614e9b83398151915282611dd4565b612cef828261156e565b15610d815760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19169055612d26612345565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b612d72610e37565b612db55760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b6044820152606401610981565b600080516020614e7b833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa612df5612345565b6040516001600160a01b03909116815260200160405180910390a1565b805160009081905b8015612e4757829150612e338285611016600185614971565b925080612e3f81614c21565b915050612e1a565b50915091565b60008151600003612ea05760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d50545900000000006044820152606401610981565b8282604051602001612eb29190614c38565b60405160208183030381529060405280519060200120604051602001612ee2929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b610cf4600080516020614e9b833981519152826134e2565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b612f73610e37565b15612f905760405162461bcd60e51b815260040161098190614772565b600080516020614e7b833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258612df5612345565b6000612fe0600084612e4d565b600081815260cd60205260409020909150612ffb8482614c9a565b50600081815260cf602052604090819020805460ff19168415151790555181907f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf898090613048908690614323565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e7990602401602060405180830381865afa158015613099573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130bd91906148aa565b610cde5760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c6090610acc9084908790600401614d59565b600054610100900460ff1661311a5760405162461bcd60e51b815260040161098190614d7a565b610d95613125612345565b612f19565b600054610100900460ff166131515760405162461bcd60e51b815260040161098190614d7a565b610d95600061315e612345565b6134e2565b600054610100900460ff1661179e5760405162461bcd60e51b815260040161098190614d7a565b600054610100900460ff166131b15760405162461bcd60e51b815260040161098190614d7a565b600080516020614e7b833981519152805460ff19169055565b60006131de6131d9878961479c565b612e12565b506040516bffffffffffffffffffffffff1930606090811b821660208401524660348401528b811b82166054840152606883018490526001600160c01b031960c08a901b1660888401526090830188905286901b1660b08201529091506000906132ba9084906132b49060c401604051602081830303815290604052805190602001206040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b906137f2565b90506132c5816116f4565b61331d5760405162461bcd60e51b8152602060048201526024808201527f4d696e74696e674d616e616765723a205349474e45525f49535f4e4f545f4d49604482015263272a22a960e11b6064820152608401610981565b42866001600160401b03161161337f5760405162461bcd60e51b815260206004820152602160248201527f4d696e74696e674d616e616765723a20455850495245445f5349474e415455526044820152604560f81b6064820152608401610981565b505050505050505050565b60006133d18a61339a8a8c61479c565b6133a4898b61479c565b6133ae888a61479c565b60008f6001600160a01b03166133c2612345565b6001600160a01b031614612668565b9050896001600160a01b03166133e5612345565b6001600160a01b0316827fa545b6fd3355e8d57f8c8147bafe740545bd3ea1f94bef2576a6d532a7c3b60586866040516134329291909182526001600160a01b0316602082015260400190565b60405180910390a450505050505050505050565b600081815260cd60205260408120805482919061346290614aab565b9050119050919050565b613474612c54565b6001600160a01b0381166134d95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610981565b610cf481612f19565b610d818282612bcd565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b0316330361352d575060331936013560601c90565b503390565b604080518082019091526000808252602082015260405180604001604052808381526020018486602001516135679190614dc5565b9052949350505050565b6000815160000361358457506000919050565b60208201805160f81c603081108015906135a2575060398160ff1611155b1580156135c4575060618160ff16101580156135c25750607a8160ff1611155b155b156135d3575060009392505050565b83516001811115613641576135f5836135ed600184614971565b015160f81c90565b915060308260ff161015801561360f575060398260ff1611155b158015613631575060618260ff161015801561362f5750607a8260ff1611155b155b1561364157506000949350505050565b60015b61364f600183614971565b8110156136c9578381015160f81c9250602d8314801590613685575060308360ff1610158015613683575060398360ff1611155b155b80156136a6575060618360ff16101580156136a45750607a8360ff1611155b155b156136b75750600095945050505050565b806136c1816149e0565b915050613644565b50600195945050505050565b6136de8161170e565b1561372b5760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b45440000006044820152606401610981565b610cf481613816565b60008061374b600084600186516110169190614971565b60ca549091506001600160a01b0316158015906137875750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b613798828261156e565b610d81576137b0816001600160a01b0316601461389a565b6137bb83602061389a565b6040516020016137cc929190614dd8565b60408051601f198184030181529082905262461bcd60e51b825261098191600401614323565b60008060006138018585613a35565b9150915061380e81613a7a565b509392505050565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd69602082015290810182905260019061385590606001611749565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b606060006138a9836002614e4d565b6138b4906002614dc5565b6001600160401b038111156138cb576138cb6140da565b6040519080825280601f01601f1916602001820160405280156138f5576020820181803683370190505b509050600360fc1b8160008151811061391057613910614984565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061393f5761393f614984565b60200101906001600160f81b031916908160001a9053506000613963846002614e4d565b61396e906001614dc5565b90505b60018111156139e6576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106139a2576139a2614984565b1a60f81b8282815181106139b8576139b8614984565b60200101906001600160f81b031916908160001a90535060049490941c936139df81614c21565b9050613971565b5083156137875760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610981565b6000808251604103613a6b5760208301516040840151606085015160001a613a5f87828585613c30565b94509450505050613a73565b506000905060025b9250929050565b6000816004811115613a8e57613a8e614e64565b03613a965750565b6001816004811115613aaa57613aaa614e64565b03613af75760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610981565b6002816004811115613b0b57613b0b614e64565b03613b585760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610981565b6003816004811115613b6c57613b6c614e64565b03613bc45760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610981565b6004816004811115613bd857613bd8614e64565b03610cf45760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610981565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613c675750600090506003613d14565b8460ff16601b14158015613c7f57508460ff16601c14155b15613c905750600090506004613d14565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613ce4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613d0d57600060019250925050613d14565b9150600090505b94509492505050565b508054613d2990614aab565b6000825580601f10613d39575050565b601f016020900490600052602060002090810190610cf491905b80821115613d675760008155600101613d53565b5090565b600060208284031215613d7d57600080fd5b81356001600160e01b03198116811461378757600080fd5b6001600160401b0381168114610cf457600080fd5b8035613db581613d95565b919050565b60008060408385031215613dcd57600080fd5b8235613dd881613d95565b946020939093013593505050565b600060208284031215613df857600080fd5b5035919050565b60008083601f840112613e1157600080fd5b5081356001600160401b03811115613e2857600080fd5b602083019150836020828501011115613a7357600080fd5b600080600060408486031215613e5557600080fd5b8335925060208401356001600160401b03811115613e7257600080fd5b613e7e86828701613dff565b9497909650939450505050565b6001600160a01b0381168114610cf457600080fd5b8035613db581613e8b565b60008060408385031215613ebe57600080fd5b823591506020830135613ed081613e8b565b809150509250929050565b600060208284031215613eed57600080fd5b813561378781613e8b565b60008083601f840112613f0a57600080fd5b5081356001600160401b03811115613f2157600080fd5b6020830191508360208260051b8501011115613a7357600080fd5b8015158114610cf457600080fd5b60008060008060008060008060a0898b031215613f6657600080fd5b8835613f7181613e8b565b975060208901356001600160401b0380821115613f8d57600080fd5b613f998c838d01613ef8565b909950975060408b0135915080821115613fb257600080fd5b613fbe8c838d01613ef8565b909750955060608b0135915080821115613fd757600080fd5b50613fe48b828c01613ef8565b9094509250506080890135613ff881613f3c565b809150509295985092959890939650565b600080600080600080600080600060c08a8c03121561402757600080fd5b893561403281613e8b565b985060208a01356001600160401b038082111561404e57600080fd5b61405a8d838e01613ef8565b909a50985060408c013591508082111561407357600080fd5b61407f8d838e01613ef8565b909850965060608c013591508082111561409857600080fd5b506140a58c828d01613ef8565b90955093505060808a01356140b981613d95565b915060a08a01356140c981613f3c565b809150509295985092959850929598565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715614118576141186140da565b604052919050565b60006001600160401b03821115614139576141396140da565b5060051b60200190565b6000602080838503121561415657600080fd5b82356001600160401b0381111561416c57600080fd5b8301601f8101851361417d57600080fd5b803561419061418b82614120565b6140f0565b81815260059190911b820183019083810190878311156141af57600080fd5b928401925b828410156141d65783356141c781613e8b565b825292840192908401906141b4565b979650505050505050565b600080600080606085870312156141f757600080fd5b843561420281613e8b565b93506020850135925060408501356001600160401b0381111561422457600080fd5b61423087828801613dff565b95989497509550505050565b6000806020838503121561424f57600080fd5b82356001600160401b0381111561426557600080fd5b61427185828601613dff565b90969095509350505050565b60008060006040848603121561429257600080fd5b83356001600160401b038111156142a857600080fd5b6142b486828701613dff565b90945092505060208401356142c881613f3c565b809150509250925092565b60005b838110156142ee5781810151838201526020016142d6565b50506000910152565b6000815180845261430f8160208601602086016142d3565b601f01601f19169290920160200192915050565b60208152600061378760208301846142f7565b60008060008060008060c0878903121561434f57600080fd5b863561435a81613e8b565b9550602087013561436a81613e8b565b9450604087013561437a81613e8b565b9350606087013561438a81613e8b565b9250608087013561439a81613e8b565b915060a08701356143aa81613e8b565b809150509295509295509295565b60008060008060008060008060a0898b0312156143d457600080fd5b88356143df81613e8b565b97506020890135965060408901356001600160401b038082111561440257600080fd5b61440e8c838d01613dff565b909850965060608b013591508082111561442757600080fd5b6144338c838d01613ef8565b909650945060808b013591508082111561444c57600080fd5b506144598b828c01613ef8565b999c989b5096995094979396929594505050565b6000806020838503121561448057600080fd5b82356001600160401b0381111561449657600080fd5b61427185828601613ef8565b600080600080600080600080600080600060e08c8e0312156144c357600080fd5b6144cc8c613ea0565b9a506001600160401b038060208e013511156144e757600080fd5b6144f78e60208f01358f01613ef8565b909b50995060408d013581101561450d57600080fd5b61451d8e60408f01358f01613ef8565b909950975060608d013581101561453357600080fd5b6145438e60608f01358f01613ef8565b909750955061455460808e01613daa565b945060a08d013593508060c08e0135111561456e57600080fd5b5061457f8d60c08e01358e01613dff565b81935080925050509295989b509295989b9093969950565b6000806000806000806000806000806000806101008d8f0312156145ba57600080fd5b6145c38d613ea0565b9b506001600160401b0360208e013511156145dd57600080fd5b6145ed8e60208f01358f01613ef8565b909b5099506001600160401b0360408e0135111561460a57600080fd5b61461a8e60408f01358f01613ef8565b90995097506001600160401b0360608e0135111561463757600080fd5b6146478e60608f01358f01613ef8565b909750955061465860808e01613daa565b945061466660a08e01613ea0565b935060c08d013592506001600160401b0360e08e0135111561468757600080fd5b6146978e60e08f01358f01613dff565b81935080925050509295989b509295989b509295989b565b600080604083850312156146c257600080fd5b82356146cd81613e8b565b91506020830135613ed081613e8b565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b60006020828403121561472457600080fd5b815161378781613d95565b60208082526023908201527f4d696e74696e674d616e616765723a20544f4b454e5f4e4f545f455850495241604082015262424c4560e81b606082015260800190565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b60006147aa61418b84614120565b80848252602080830192508560051b8501368111156147c857600080fd5b855b8181101561485a5780356001600160401b03808211156147ea5760008081fd5b90880190601f36818401126147ff5760008081fd5b823582811115614811576148116140da565b614822818301601f191688016140f0565b9250808352368782860101111561483b57600091508182fd5b80878501888501376000908301870152508652509382019382016147ca565b50919695505050505050565b60208082526024908201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604082015263272a22a960e11b606082015260800190565b6000602082840312156148bc57600080fd5b815161378781613f3c565b6020808252602f908201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060408201526e282927ab22a22fa7a92fa7aba722a960891b606082015260800190565b60208082526025908201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456040820152642627abaf9960d91b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b818103818111156109545761095461495b565b634e487b7160e01b600052603260045260246000fd5b60208082526026908201527f4d696e74696e674d616e616765723a20535542444f4d41494e535f4e4f545f41604082015265131313d5d15160d21b606082015260800190565b6000600182016149f2576149f261495b565b5060010190565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b600060208284031215614a7c57600080fd5b5051919050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b600181811c90821680614abf57607f821691505b602082108103614adf57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215614af757600080fd5b815161378781613e8b565b600081518084526020808501808196508360051b8101915082860160005b85811015614b4a578284038952614b388483516142f7565b98850198935090840190600101614b20565b5091979650505050505050565b6001600160a01b038616815260a060208201819052600090614b7b90830187614b02565b8281036040840152614b8d8187614b02565b90508281036060840152614ba18186614b02565b91505082151560808301529695505050505050565b600060018060a01b03808616835260606020840152614bd860608401866142f7565b9150808416604084015250949350505050565b606081526000614bfe6060830186614b02565b8281036020840152614c108186614b02565b915050826040830152949350505050565b600081614c3057614c3061495b565b506000190190565b60008251614c4a8184602087016142d3565b9190910192915050565b601f821115610cde57600081815260208120601f850160051c81016020861015614c7b5750805b601f850160051c820191505b818110156116a357828155600101614c87565b81516001600160401b03811115614cb357614cb36140da565b614cc781614cc18454614aab565b84614c54565b602080601f831160018114614cfc5760008415614ce45750858301515b600019600386901b1c1916600185901b1785556116a3565b600085815260208120601f198616915b82811015614d2b57888601518255948401946001909101908401614d0c565b5085821015614d495787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b828152604060208201526000614d7260408301846142f7565b949350505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b808201808211156109545761095461495b565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351614e108160178501602088016142d3565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351614e418160288401602088016142d3565b01602801949350505050565b80820281158282048414176109545761095461495b565b634e487b7160e01b600052602160045260246000fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class MintingManager__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MintingManager__factory = MintingManager__factory;
MintingManager__factory.bytecode = _bytecode;
MintingManager__factory.abi = _abi;
