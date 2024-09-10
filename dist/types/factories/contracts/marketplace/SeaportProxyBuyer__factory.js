"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaportProxyBuyer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
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
        inputs: [],
        name: "InvalidSignature",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidZone",
        type: "error",
    },
    {
        inputs: [],
        name: "OrderIsNotFulfiled",
        type: "error",
    },
    {
        inputs: [],
        name: "RecipientIsZeroAddress",
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
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "orderHash",
                        type: "bytes32",
                    },
                    {
                        internalType: "address",
                        name: "fulfiller",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "offerer",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "enum ItemType",
                                name: "itemType",
                                type: "uint8",
                            },
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "identifier",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct SpentItem[]",
                        name: "offer",
                        type: "tuple[]",
                    },
                    {
                        components: [
                            {
                                internalType: "enum ItemType",
                                name: "itemType",
                                type: "uint8",
                            },
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "identifier",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                            {
                                internalType: "address payable",
                                name: "recipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct ReceivedItem[]",
                        name: "consideration",
                        type: "tuple[]",
                    },
                    {
                        internalType: "bytes",
                        name: "extraData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "orderHashes",
                        type: "bytes32[]",
                    },
                    {
                        internalType: "uint256",
                        name: "startTime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "endTime",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "zoneHash",
                        type: "bytes32",
                    },
                ],
                internalType: "struct ZoneParameters",
                name: "",
                type: "tuple",
            },
        ],
        name: "authorizeOrder",
        outputs: [
            {
                internalType: "bytes4",
                name: "authorizedOrderMagicValue",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
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
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "offerer",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "zone",
                                type: "address",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                ],
                                internalType: "struct OfferItem[]",
                                name: "offer",
                                type: "tuple[]",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "address payable",
                                        name: "recipient",
                                        type: "address",
                                    },
                                ],
                                internalType: "struct ConsiderationItem[]",
                                name: "consideration",
                                type: "tuple[]",
                            },
                            {
                                internalType: "enum OrderType",
                                name: "orderType",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256",
                                name: "startTime",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endTime",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "zoneHash",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "conduitKey",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "totalOriginalConsiderationItems",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct OrderParameters",
                        name: "parameters",
                        type: "tuple",
                    },
                    {
                        internalType: "uint120",
                        name: "numerator",
                        type: "uint120",
                    },
                    {
                        internalType: "uint120",
                        name: "denominator",
                        type: "uint120",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "extraData",
                        type: "bytes",
                    },
                ],
                internalType: "struct AdvancedOrder",
                name: "advancedOrder",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "orderIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "enum Side",
                        name: "side",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256",
                        name: "index",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "identifier",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "criteriaProof",
                        type: "bytes32[]",
                    },
                ],
                internalType: "struct CriteriaResolver[]",
                name: "criteriaResolvers",
                type: "tuple[]",
            },
            {
                internalType: "bytes32",
                name: "fulfillerConduitKey",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "fulfillAdvancedOrder",
        outputs: [
            {
                internalType: "bool",
                name: "fulfilled",
                type: "bool",
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
                internalType: "contract ConsiderationInterface",
                name: "seaport",
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
        inputs: [
            {
                components: [
                    {
                        internalType: "bytes32",
                        name: "orderHash",
                        type: "bytes32",
                    },
                    {
                        internalType: "address",
                        name: "fulfiller",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "offerer",
                        type: "address",
                    },
                    {
                        components: [
                            {
                                internalType: "enum ItemType",
                                name: "itemType",
                                type: "uint8",
                            },
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "identifier",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct SpentItem[]",
                        name: "offer",
                        type: "tuple[]",
                    },
                    {
                        components: [
                            {
                                internalType: "enum ItemType",
                                name: "itemType",
                                type: "uint8",
                            },
                            {
                                internalType: "address",
                                name: "token",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "identifier",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                            {
                                internalType: "address payable",
                                name: "recipient",
                                type: "address",
                            },
                        ],
                        internalType: "struct ReceivedItem[]",
                        name: "consideration",
                        type: "tuple[]",
                    },
                    {
                        internalType: "bytes",
                        name: "extraData",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "orderHashes",
                        type: "bytes32[]",
                    },
                    {
                        internalType: "uint256",
                        name: "startTime",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "endTime",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32",
                        name: "zoneHash",
                        type: "bytes32",
                    },
                ],
                internalType: "struct ZoneParameters",
                name: "",
                type: "tuple",
            },
        ],
        name: "validateOrder",
        outputs: [
            {
                internalType: "bytes4",
                name: "validOrderMagicValue",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
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
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801562000010575f80fd5b506200001b62000021565b620000e0565b5f54610100900460ff16156200008d5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b5f5460ff9081161015620000de575f805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b612f2c80620000ee5f395ff3fe6080604052600436106101f1575f3560e01c80638456cb5911610108578063aa271e1a1161009d578063d9caed121161006d578063d9caed12146105ac578063daea85c5146105cb578063e7acab24146105ea578063f2fde38b14610609578063ffa1ad7414610628575f80fd5b8063aa271e1a1461052f578063c4d66de81461054e578063d53913931461056d578063d547741f1461058d575f80fd5b806398650275116100d857806398650275146104ab578063a217fddf146104bf578063a3f4df7e146104d2578063a424740014610510575f80fd5b80638456cb59146104325780638da5cb5b1461044657806391d148541461046d578063983b2d561461048c575f80fd5b80633f4ba83a11610189578063634486da11610159578063634486da146103ba5780636ccbae5f146103cd578063715018a6146103ec57806371e2a6571461040057806381c81d351461041f575f80fd5b80633f4ba83a14610347578063572b6c051461035b5780635c975abb146103835780635fc1964f1461039b575f80fd5b8063248a9ca3116101c4578063248a9ca3146102ac5780632f2ff15d146102e85780633092afd51461030957806336568abe14610328575f80fd5b806301e4d72a146101f557806301ffc9a71461023257806317b1f942146102615780631bf7e13e14610280575b5f80fd5b348015610200575f80fd5b5061021461020f366004611f02565b610658565b6040516001600160e01b031990911681526020015b60405180910390f35b34801561023d575f80fd5b5061025161024c366004611f39565b61066e565b6040519015158152602001610229565b34801561026c575f80fd5b5061021461027b366004611f02565b6106a4565b34801561028b575f80fd5b5061029f61029a366004611f60565b6106bb565b6040516102299190612042565b3480156102b7575f80fd5b506102da6102c6366004612054565b5f90815260fb602052604090206001015490565b604051908152602001610229565b3480156102f3575f80fd5b5061030761030236600461208f565b610784565b005b348015610314575f80fd5b506103076103233660046120bd565b6107ad565b348015610333575f80fd5b5061030761034236600461208f565b6107c1565b348015610352575f80fd5b50610307610854565b348015610366575f80fd5b506102516103753660046120bd565b6001600160a01b0316301490565b34801561038e575f80fd5b5061012d5460ff16610251565b3480156103a6575f80fd5b506103076103b5366004612144565b61086e565b6103076103c83660046120bd565b6108ab565b3480156103d8575f80fd5b506102da6103e7366004612054565b61096b565b3480156103f7575f80fd5b506103076109c4565b34801561040b575f80fd5b5061030761041a366004612144565b6109d5565b61030761042d3660046120bd565b610a12565b34801561043d575f80fd5b50610307610a8f565b348015610451575f80fd5b506097546040516001600160a01b039091168152602001610229565b348015610478575f80fd5b5061025161048736600461208f565b610aa7565b348015610497575f80fd5b506103076104a63660046120bd565b610ad1565b3480156104b6575f80fd5b50610307610ae2565b3480156104ca575f80fd5b506102da5f81565b3480156104dd575f80fd5b5061029f6040518060400160405280601381526020017229b2b0b837b93a10283937bc3c90213abcb2b960691b81525081565b34801561051b575f80fd5b5061025161052a366004611f60565b610afb565b34801561053a575f80fd5b506102516105493660046120bd565b610b4c565b348015610559575f80fd5b506103076105683660046120bd565b610b64565b348015610578575f80fd5b506102da5f80516020612f0083398151915281565b348015610598575f80fd5b506103076105a736600461208f565b610cbb565b3480156105b7575f80fd5b506103076105c63660046121e4565b610cdf565b3480156105d6575f80fd5b506103076105e53660046120bd565b610d89565b3480156105f5575f80fd5b50610251610604366004612222565b610e36565b348015610614575f80fd5b506103076106233660046120bd565b611276565b348015610633575f80fd5b5061029f60405180604001604052806005815260200164302e312e3160d81b81525081565b5f610661611291565b5062f26b9560e11b919050565b5f6001600160e01b03198216637965db0b60e01b148061069e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b5f6106ad611291565b50630bd8fca160e11b919050565b60605f5a90506106cc858585610afb565b6106e957604051638baa579f60e01b815260040160405180910390fd5b6107796106f960208701876120bd565b3060408801358461070d60608b018b6122d4565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b90819084018382808284375f920191909152506112d892505050565b9150505b9392505050565b5f82815260fb602052604090206001015461079e816113b6565b6107a883836113c7565b505050565b6107b561144d565b6107be816114c6565b50565b6107c96114dd565b6001600160a01b0316816001600160a01b0316146108465760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61085082826114eb565b5050565b61085c61144d565b61086461156f565b61086c6115b9565b565b61087661144d565b5f5b8151811015610850576108a382828151811061089657610896612316565b60200260200101516114c6565b600101610878565b6108b66105496114dd565b6108d25760405162461bcd60e51b815260040161083d9061232a565b6001600160a01b0381166109285760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d505459000000604482015260640161083d565b61093181611612565b610939610ae2565b6040516001600160a01b038216903480156108fc02915f818181858888f19350505050158015610850573d5f803e3d5ffd5b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a8381560208201529081018290525f906109bd906060016040516020818303038152906040528051906020012090565b5492915050565b6109cc61144d565b61086c5f611629565b6109dd61144d565b5f5b815181101561085057610a0a8282815181106109fd576109fd612316565b6020026020010151611612565b6001016109df565b610a1d6105496114dd565b610a395760405162461bcd60e51b815260040161083d9061232a565b6001600160a01b0381166109315760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d505459000000604482015260640161083d565b610a9761144d565b610a9f611291565b61086c61167a565b5f91825260fb602090815260408084206001600160a01b0393909316845291905290205460ff1690565b610ad961144d565b6107be81611612565b61086c5f80516020612f008339815191526103426114dd565b5f610b44610b088561235f565b3085858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506116b992505050565b949350505050565b5f61069e5f80516020612f0083398151915283610aa7565b5f54610100900460ff1615808015610b8257505f54600160ff909116105b80610b9b5750303b158015610b9b57505f5460ff166001145b610bfe5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161083d565b5f805460ff191660011790558015610c1f575f805461ff0019166101001790555b61015f80546001600160a01b0319166001600160a01b038416179055610c436117f4565b610c4b611821565b610c53611821565b610c5b611821565b610c63611847565b610c6b61187d565b610c736118b4565b8015610850575f805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b5f82815260fb6020526040902060010154610cd5816113b6565b6107a883836114eb565b610ce761144d565b600260335403610d095760405162461bcd60e51b815260040161083d9061241b565b600260335560405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015610d5a573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d7e9190612452565b505060016033555050565b610d9161144d565b600260335403610db35760405162461bcd60e51b815260040161083d9061241b565b600260335561015f5460405163095ea7b360e01b81526001600160a01b0391821660048201525f1960248201529082169063095ea7b3906044016020604051808303815f875af1158015610e09573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e2d9190612452565b50506001603355565b5f610e426105496114dd565b610e5e5760405162461bcd60e51b815260040161083d9061232a565b600260335403610e805760405162461bcd60e51b815260040161083d9061241b565b6002603355610e8d611291565b6001600160a01b038216610eb4576040516311d000e160e31b815260040160405180910390fd5b30610ebf8780612471565b610ed09060408101906020016120bd565b6001600160a01b031614610ef757604051639d3c586b60e01b815260040160405180910390fd5b61015f546040805161016081019091526111cf916001600160a01b0316906379df72bd9080610f268b80612471565b610f349060208101906120bd565b6001600160a01b03168152602001610f4c8b80612471565b610f5d9060408101906020016120bd565b6001600160a01b03168152602001610f758b80612471565b610f83906040810190612490565b808060200260200160405190810160405280939291908181526020015f905b82821015610fce57610fbf60a083028601368190038101906124e2565b81526020019060010190610fa2565b5050509183525050602001610fe38b80612471565b610ff190606081019061255f565b808060200260200160405190810160405280939291908181526020015f905b8282101561103c5761102d60c083028601368190038101906125a3565b81526020019060010190611010565b50505091835250506020016110518b80612471565b6110629060a081019060800161263e565b600481111561107357611073612657565b81526020016110828b80612471565b60a0013581526020016110958b80612471565b60c0013581526020016110a88b80612471565b60e0013581526020016110bb8b80612471565b610100013581526020016110cf8b80612471565b6101200135815261015f546020909101906001600160a01b031663f07ec3736110f88d80612471565b6111069060208101906120bd565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015611148573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061116c919061266b565b8152506040518263ffffffff1660e01b815260040161118b9190612790565b602060405180830381865afa1580156111a6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111ca919061266b565b6118e7565b61015f546040516339eb2ac960e21b81526001600160a01b039091169063e7acab24906112089089908990899089908990600401612b7d565b6020604051808303815f875af1158015611224573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112489190612452565b90508061126857604051636725093760e01b815260040160405180910390fd5b600160335595945050505050565b61127e61144d565b61128781611900565b6107be5f82611976565b61012d5460ff161561086c5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161083d565b60606112e385611980565b5f80876001600160a01b0316866112fc8b8a89896119e5565b6040516113099190612d53565b5f604051808303815f8787f1925050503d805f8114611343576040519150601f19603f3d011682016040523d82523d5f602084013e611348565b606091505b509092509050611359603f87612d78565b5a1161136757611367612d97565b6113a782826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c4544000000000000815250611a15565b925050505b9695505050505050565b6107be816113c26114dd565b611a4e565b6113d18282610aa7565b610850575f82815260fb602090815260408083206001600160a01b03851684529091529020805460ff191660011790556114096114dd565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6114556114dd565b6001600160a01b03166114706097546001600160a01b031690565b6001600160a01b03161461086c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161083d565b6107be5f80516020612f0083398151915282610cbb565b5f6114e6611ab2565b905090565b6114f58282610aa7565b15610850575f82815260fb602090815260408083206001600160a01b03851684529091529020805460ff1916905561152b6114dd565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b61012d5460ff1661086c5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161083d565b6115c161156f565b61012d805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6115f56114dd565b6040516001600160a01b03909116815260200160405180910390a1565b6107be5f80516020612f0083398151915282611976565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b611682611291565b61012d805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586115f56114dd565b6040838101519051636ccbae5f60e01b815260048101919091525f9081903090636ccbae5f90602401602060405180830381865afa1580156116fd573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611721919061266b565b90505f6117ce86606001518051906020012086886020015160405160200161176e9392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b90508186602001511480156113ac575085516113ac906001600160a01b03168286611acf565b5f54610100900460ff1661181a5760405162461bcd60e51b815260040161083d90612dab565b6001603355565b5f54610100900460ff1661086c5760405162461bcd60e51b815260040161083d90612dab565b5f54610100900460ff1661186d5760405162461bcd60e51b815260040161083d90612dab565b61086c6118786114dd565b611629565b5f54610100900460ff166118a35760405162461bcd60e51b815260040161083d90612dab565b61086c5f6118af6114dd565b611976565b5f54610100900460ff166118da5760405162461bcd60e51b815260040161083d90612dab565b61012d805460ff19169055565b3033036118f7576107be81611c0a565b6107be81611980565b61190861144d565b6001600160a01b03811661196d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161083d565b6107be81611629565b61085082826113c7565b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a8381560208201529081018290525f906060016040516020818303038152906040528051906020012090506119d48190565b546119e0906001612df6565b905550565b60608285856040516020016119fc93929190612e09565b6040516020818303038152906040529050949350505050565b60608315611a2457508161077d565b825115611a345782518084602001fd5b8160405162461bcd60e51b815260040161083d9190612042565b611a588282610aa7565b61085057611a70816001600160a01b03166014611c34565b611a7b836020611c34565b604051602001611a8c929190612e47565b60408051601f198184030181529082905262461bcd60e51b825261083d91600401612042565b5f303303611ac7575060331936013560601c90565b503390565b90565b5f805f611adc8585611dc9565b90925090505f816004811115611af457611af4612657565b148015611b125750856001600160a01b0316826001600160a01b0316145b15611b225760019250505061077d565b5f80876001600160a01b0316631626ba7e60e01b8888604051602401611b49929190612ebb565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611b879190612d53565b5f60405180830381855afa9150503d805f8114611bbf576040519150601f19603f3d011682016040523d82523d5f602084013e611bc4565b606091505b5091509150818015611bd7575080516020145b8015611bfe57508051630b135d3f60e11b90611bfc908301602090810190840161266b565b145b98975050505050505050565b611c12611e0b565b81146107be57604051635637b6af60e11b81526004810182905260240161083d565b60605f611c42836002612ed3565b611c4d906002612df6565b6001600160401b03811115611c6457611c646120d8565b6040519080825280601f01601f191660200182016040528015611c8e576020820181803683370190505b509050600360fc1b815f81518110611ca857611ca8612316565b60200101906001600160f81b03191690815f1a905350600f60fb1b81600181518110611cd657611cd6612316565b60200101906001600160f81b03191690815f1a9053505f611cf8846002612ed3565b611d03906001612df6565b90505b6001811115611d7a576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611d3757611d37612316565b1a60f81b828281518110611d4d57611d4d612316565b60200101906001600160f81b03191690815f1a90535060049490941c93611d7381612eea565b9050611d06565b50831561077d5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161083d565b5f808251604103611dfd576020830151604084015160608501515f1a611df187828585611e1d565b94509450505050611e04565b505f905060025b9250929050565b5f303303611acc5750601f1936013590565b5f807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611e5257505f90506003611ef9565b8460ff16601b14158015611e6a57508460ff16601c14155b15611e7a57505f90506004611ef9565b604080515f8082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611ecb573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b038116611ef3575f60019250925050611ef9565b91505f90505b94509492505050565b5f60208284031215611f12575f80fd5b81356001600160401b03811115611f27575f80fd5b8201610140818503121561077d575f80fd5b5f60208284031215611f49575f80fd5b81356001600160e01b03198116811461077d575f80fd5b5f805f60408486031215611f72575f80fd5b83356001600160401b0380821115611f88575f80fd5b9085019060808288031215611f9b575f80fd5b90935060208501359080821115611fb0575f80fd5b818601915086601f830112611fc3575f80fd5b813581811115611fd1575f80fd5b876020828501011115611fe2575f80fd5b6020830194508093505050509250925092565b5f5b8381101561200f578181015183820152602001611ff7565b50505f910152565b5f815180845261202e816020860160208601611ff5565b601f01601f19169290920160200192915050565b602081525f61077d6020830184612017565b5f60208284031215612064575f80fd5b5035919050565b6001600160a01b03811681146107be575f80fd5b803561208a8161206b565b919050565b5f80604083850312156120a0575f80fd5b8235915060208301356120b28161206b565b809150509250929050565b5f602082840312156120cd575f80fd5b813561077d8161206b565b634e487b7160e01b5f52604160045260245ffd5b604051608081016001600160401b038111828210171561210e5761210e6120d8565b60405290565b604051601f8201601f191681016001600160401b038111828210171561213c5761213c6120d8565b604052919050565b5f6020808385031215612155575f80fd5b82356001600160401b038082111561216b575f80fd5b818501915085601f83011261217e575f80fd5b813581811115612190576121906120d8565b8060051b91506121a1848301612114565b81815291830184019184810190888411156121ba575f80fd5b938501935b83851015611bfe57843592506121d48361206b565b82825293850193908501906121bf565b5f805f606084860312156121f6575f80fd5b83356122018161206b565b925060208401356122118161206b565b929592945050506040919091013590565b5f805f805f60808688031215612236575f80fd5b85356001600160401b038082111561224c575f80fd5b9087019060a0828a03121561225f575f80fd5b90955060208701359080821115612274575f80fd5b818801915088601f830112612287575f80fd5b813581811115612295575f80fd5b8960208260051b85010111156122a9575f80fd5b602083019650809550505050604086013591506122c86060870161207f565b90509295509295909350565b5f808335601e198436030181126122e9575f80fd5b8301803591506001600160401b03821115612302575f80fd5b602001915036819003821315611e04575f80fd5b634e487b7160e01b5f52603260045260245ffd5b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b5f6080823603121561236f575f80fd5b6123776120ec565b82356123828161206b565b8152602083810135818301526040808501359083015260608401356001600160401b03808211156123b1575f80fd5b9085019036601f8301126123c3575f80fd5b8135818111156123d5576123d56120d8565b6123e7601f8201601f19168501612114565b915080825236848285010111156123fc575f80fd5b80848401858401375f9082019093019290925250606082015292915050565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b5f60208284031215612462575f80fd5b8151801515811461077d575f80fd5b5f823561015e19833603018112612486575f80fd5b9190910192915050565b5f808335601e198436030181126124a5575f80fd5b8301803591506001600160401b038211156124be575f80fd5b602001915060a081023603821315611e04575f80fd5b80356006811061208a575f80fd5b5f60a082840312156124f2575f80fd5b60405160a081018181106001600160401b0382111715612514576125146120d8565b604052612520836124d4565b815260208301356125308161206b565b806020830152506040830135604082015260608301356060820152608083013560808201528091505092915050565b5f808335601e19843603018112612574575f80fd5b8301803591506001600160401b0382111561258d575f80fd5b602001915060c081023603821315611e04575f80fd5b5f60c082840312156125b3575f80fd5b60405160c081018181106001600160401b03821117156125d5576125d56120d8565b6040526125e1836124d4565b815260208301356125f18161206b565b8060208301525060408301356040820152606083013560608201526080830135608082015260a08301356126248161206b565b60a08201529392505050565b80356005811061208a575f80fd5b5f6020828403121561264e575f80fd5b61077d82612630565b634e487b7160e01b5f52602160045260245ffd5b5f6020828403121561267b575f80fd5b5051919050565b6006811061269257612692612657565b9052565b5f815180845260208085019450602084015f5b838110156126ff5781516126be888251612682565b838101516001600160a01b03168885015260408082015190890152606080820151908901526080908101519088015260a090960195908201906001016126a9565b509495945050505050565b5f815180845260208085019450602084015f5b838110156126ff578151612732888251612682565b808401516001600160a01b0390811689860152604080830151908a0152606080830151908a0152608080830151908a015260a091820151169088015260c0909601959082019060010161271d565b6005811061269257612692612657565b602081526127aa6020820183516001600160a01b03169052565b5f60208301516127c560408401826001600160a01b03169052565b5060408301516101608060608501526127e2610180850183612696565b91506060850151601f198584030160808601526127ff838261270a565b925050608085015161281460a0860182612780565b5060a085015160c085015260c085015160e085015260e0850151610100818187015280870151915050610120818187015280870151915050610140818187015280870151838701525050508091505092915050565b5f808335601e1984360301811261287e575f80fd5b83016020810192503590506001600160401b0381111561289c575f80fd5b60a081023603821315611e04575f80fd5b8183525f60208085019450825f5b858110156126ff576128d5876128d0846124d4565b612682565b828201356128e28161206b565b6001600160a01b03168388015260408281013590880152606080830135908801526080808301359088015260a096870196909101906001016128bb565b5f808335601e19843603018112612934575f80fd5b83016020810192503590506001600160401b03811115612952575f80fd5b60c081023603821315611e04575f80fd5b8183525f60208085019450825f5b858110156126ff57612986876128d0846124d4565b828201356129938161206b565b6001600160a01b039081168885015260408381013590890152606080840135908901526080808401359089015260a090838201356129d08161206b565b169088015260c0968701969190910190600101612971565b80356001600160781b038116811461208a575f80fd5b5f808335601e19843603018112612a13575f80fd5b83016020810192503590506001600160401b03811115612a31575f80fd5b803603821315611e04575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b8183525f6001600160fb1b03831115612a7e575f80fd5b8260051b80836020870137939093016020019392505050565b8183526020808401935f91600585811b8301820185855b88811015612b6f57858303601f19018a52813536899003609e19018112612ad3575f80fd5b88018035845260a08682013560028110612aeb575f80fd5b85880152604082810135908601526060808301359086015260808083013536849003601e19018112612b1b575f80fd5b9092018781019290356001600160401b03811115612b37575f80fd5b80881b3603841315612b47575f80fd5b8282880152612b598388018286612a67565b9d89019d96505050928601925050600101612aae565b509098975050505050505050565b608081525f610120873561015e19893603018112612b99575f80fd5b60a060808501528801612bbe828501612bb18361207f565b6001600160a01b03169052565b612bca6020820161207f565b610140612be1818701836001600160a01b03169052565b612bee6040840184612869565b610160888101529250612c06610280880184836128ad565b925050612c16606084018461291f565b87840361011f1901610180890152612c2f848284612963565b93505050612c3f60808401612630565b612c4d6101a0880182612780565b5060a08301356101c087015260c08301356101e087015260e0830135610200870152610100808401356102208801528484013561024088015281840135610260880152612c9c60208d016129e8565b6001600160781b03811660a08901529450612cb960408d016129e8565b6001600160781b03811660c08901529450612cd760608d018d6129fe565b95509350607f199150818784030160e0880152612cf5838686612a3f565b9450612d0460808d018d6129fe565b945092508187860301818801525050612d1e838383612a3f565b925050508281036020840152612d35818789612a97565b9150508360408301526113ac60608301846001600160a01b03169052565b5f8251612486818460208701611ff5565b634e487b7160e01b5f52601160045260245ffd5b5f82612d9257634e487b7160e01b5f52601260045260245ffd5b500490565b634e487b7160e01b5f52600160045260245ffd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b8082018082111561069e5761069e612d64565b5f8451612e1a818460208901611ff5565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081525f8351612e7e816017850160208801611ff5565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612eaf816028840160208801611ff5565b01602801949350505050565b828152604060208201525f610b446040830184612017565b808202811582820484141761069e5761069e612d64565b5f81612ef857612ef8612d64565b505f19019056fe9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000818000a";
const isSuperArgs = (xs) => xs.length > 1;
class SeaportProxyBuyer__factory extends ethers_1.ContractFactory {
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
exports.SeaportProxyBuyer__factory = SeaportProxyBuyer__factory;
SeaportProxyBuyer__factory.bytecode = _bytecode;
SeaportProxyBuyer__factory.abi = _abi;
