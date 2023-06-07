"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNSRegistryV07__factory = void 0;
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
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
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
                indexed: true,
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "NewKey",
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
                name: "uri",
                type: "string",
            },
        ],
        name: "NewURI",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "NewURIPrefix",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "RemoveReverse",
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
        name: "ResetRecords",
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
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: true,
                internalType: "string",
                name: "valueIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        name: "Set",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "SetReverse",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
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
        inputs: [],
        name: "BATCH_LIMIT",
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
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "addKey",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "addProxyReader",
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
        name: "approve",
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
        ],
        name: "balanceOf",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "depositData",
                type: "bytes",
            },
        ],
        name: "deposit",
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
        name: "depositToPolygon",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "exists",
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
                name: "key",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "get",
        outputs: [
            {
                internalType: "string",
                name: "value",
                type: "string",
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
        name: "getApproved",
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
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getByHash",
        outputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
        ],
        name: "getKey",
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
                internalType: "uint256[]",
                name: "hashes",
                type: "uint256[]",
            },
        ],
        name: "getKeys",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getMany",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getManyByHash",
        outputs: [
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
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "mintingManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "cnsRegistry",
                type: "address",
            },
            {
                internalType: "address",
                name: "rootChainManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "childChainManager",
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
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "isApprovedOrOwner",
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
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "mint",
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
            {
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "mintTLD",
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
        name: "mintWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
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
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
        ],
        name: "namehash",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
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
                name: "from",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "reconfigure",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "removeReverse",
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
        name: "reset",
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
        name: "resolverOf",
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
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "reverseNameOf",
        outputs: [
            {
                internalType: "string",
                name: "reverseUri",
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
                name: "addr",
                type: "address",
            },
        ],
        name: "reverseOf",
        outputs: [
            {
                internalType: "uint256",
                name: "reverse",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "root",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
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
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
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
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "set",
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
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setByHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setMany",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setManyByHash",
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
        name: "setOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
        ],
        name: "setReverse",
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
        inputs: [],
        name: "symbol",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
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
                name: "from",
                type: "address",
            },
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
        name: "transferFrom",
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
        name: "unlockWithRecords",
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
        inputs: [
            {
                internalType: "bytes",
                name: "inputData",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
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
        name: "withdrawFromPolygon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50614c6e806100206000396000f3fe608060405234801561001057600080fd5b50600436106103785760003560e01c806370a08231116101d3578063ba5d40b711610104578063ebf0c717116100a2578063f5c1f76e1161007c578063f5c1f76e14610806578063f7df5c6014610819578063f8c8765e1461082c578063ffa1ad741461083f57600080fd5b8063ebf0c717146107e4578063ec129eea146107eb578063f25eb5c1146107fe57600080fd5b8063c87b56dd116100de578063c87b56dd1461076f578063ce92b33e14610782578063cf2c52cb14610795578063e985e9c5146107a857600080fd5b8063ba5d40b714610736578063bb5b27e114610749578063bebec6b41461075c57600080fd5b8063a22cb46511610171578063ab3b87fe1161014b578063ab3b87fe146106dc578063b3f9e4cb146106ef578063b85afd2814610702578063b88d4fde1461072357600080fd5b8063a22cb4651461068a578063a3f4df7e1461069d578063a4247400146106c957600080fd5b80639508b1c4116101ad5780639508b1c4146106545780639559c0bd1461066757806395d89b411461066f57806399e0dd7c1461067757600080fd5b806370a082311461061b5780637e37479e1461062e57806394d008ef1461064157600080fd5b806342842e0e116102ad578063509602391161024b578063638e5c7811610225578063638e5c78146105b3578063663f7b2a146105c6578063672b9f81146105d95780636ccbae5f146105fa57600080fd5b80635096023914610571578063572b6c05146105845780636352211e146105a057600080fd5b806347c816991161028757806347c81699146105255780634a72584d146105385780634f558e791461054b57806350382c1a1461055e57600080fd5b806342842e0e146104ec57806342966c68146104ff578063430c20811461051257600080fd5b80631bf7e13e1161031a578063276fabb1116102f4578063276fabb11461049257806327f18975146104b3578063310bd74b146104c657806340c10f19146104d957600080fd5b80631bf7e13e146104595780631f71be061461046c57806323b872dd1461047f57600080fd5b8063095ea7b311610356578063095ea7b3146103e5578063150b7a02146103fa5780631bd8cc1a146104265780631be5e7ed1461044657600080fd5b806301ffc9a71461037d57806306fdde03146103a5578063081812fc146103ba575b600080fd5b61039061038b3660046139b7565b610863565b60405190151581526020015b60405180910390f35b6103ad610874565b60405161039c9190613a24565b6103cd6103c8366004613a37565b610906565b6040516001600160a01b03909116815260200161039c565b6103f86103f3366004613a65565b61092d565b005b61040d610408366004613ad2565b610946565b6040516001600160e01b0319909116815260200161039c565b610439610434366004613b88565b610aa0565b60405161039c9190613c28565b6103ad610454366004613c3b565b610b96565b6103ad610467366004613c72565b610be1565b6103f861047a366004613cf7565b610cec565b6103f861048d366004613db3565b610d93565b6104a56104a0366004613df4565b610de6565b60405190815260200161039c565b6103f86104c1366004613e35565b610df5565b6103f86104d4366004613a37565b610e3d565b6103f86104e7366004613a65565b610e78565b6103f86104fa366004613db3565b610ec5565b6103f861050d366004613a37565b610ee0565b610390610520366004613a65565b610f24565b6103f8610533366004613ea8565b610f30565b6103f8610546366004613f09565b610f6f565b610390610559366004613a37565b610fb5565b6103f861056c366004614010565b610fd4565b6103f861057f366004614044565b61100a565b610390610592366004614044565b6001600160a01b0316301490565b6103cd6105ae366004613a37565b61106a565b6103f86105c1366004613a37565b6110ca565b6103f86105d43660046140fc565b611115565b6105ec6105e7366004614144565b61114e565b60405161039c929190614166565b6104a5610608366004613a37565b6000908152610100602052604090205490565b6104a5610629366004614044565b611166565b6104a561063c366004614044565b6111ec565b6103f861064f36600461418b565b61121d565b6103f86106623660046141e6565b61126c565b6104a5601481565b6103ad6112f3565b6103f8610685366004614289565b611302565b6103f86106983660046142be565b611389565b6103ad6040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b6103906106d7366004613c72565b61139b565b6103f86106ea366004613a65565b6113e6565b6103cd6106fd366004613a37565b61142b565b610715610710366004613b88565b611455565b60405161039c9291906142ea565b6103f861073136600461430f565b611577565b6103f8610744366004613cf7565b6115be565b6103ad610757366004613a37565b61162f565b6103ad61076a366004614044565b6116d1565b6103ad61077d366004613a37565b61179b565b6103f8610790366004613e35565b611801565b6103f86107a336600461437a565b611840565b6103906107b63660046143c1565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006104a5565b6103f86107f9366004613e35565b61190f565b6103f861194e565b610439610814366004613df4565b6119d5565b6103f86108273660046143fa565b611a88565b6103f861083a36600461442c565b611b19565b6103ad60405180604001604052806005815260200164302e372e3360d81b81525081565b600061086e82611cef565b92915050565b60606065805461088390614488565b80601f01602080910402602001604051908101604052809291908181526020018280546108af90614488565b80156108fc5780601f106108d1576101008083540402835291602001916108fc565b820191906000526020600020905b8154815290600101906020018083116108df57829003601f168201915b5050505050905090565b600061091182611d3f565b506000908152606960205260409020546001600160a01b031690565b8061093781611d9e565b6109418383611e04565b505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b031661097b611f26565b6001600160a01b031603610a3c57610991611f26565b6001600160a01b03166342966c68856040518263ffffffff1660e01b81526004016109be91815260200190565b600060405180830381600087803b1580156109d857600080fd5b505af11580156109ec573d6000803e3d6000fd5b505050821580159150610a065750610a06828401846144bc565b15610a2457610a153085611f35565b610a1f8585612083565b610a2e565b610a2e8585611f35565b50630a85bd0160e11b610a97565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b60648201526084015b60405180910390fd5b95945050505050565b6060826001600160401b03811115610aba57610aba613f5b565b604051908082528060200260200182016040528015610aed57816020015b6060815260200190600190039081610ad85790505b50905060005b83811015610b8e57610b5e858583818110610b1057610b106144d7565b9050602002810190610b2291906144ed565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525087925061212e915050565b828281518110610b7057610b706144d7565b60200260200101819052508080610b8690614549565b915050610af3565b509392505050565b6060610bd984848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525086925061212e915050565b949350505050565b606060005a9050610bf385858561139b565b610c4f5760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b6064820152608401610a8e565b610ce1610c5f6020870187614044565b30604088013584610c7360608b018b6144ed565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525061216392505050565b9150505b9392505050565b610134546001600160a01b0316610d01611f26565b6001600160a01b031614610d275760405162461bcd60e51b8152600401610a8e90614562565b6000610d3b610d36888a6145a9565b612244565b9050610d4681612293565b610d59610d528261106a565b8a83612300565b610d6686868686856124a7565b8115610d8857610d888982610d83610d7e8b8d6145a9565b612515565b612596565b505050505050505050565b80610da5610d9f611f26565b826125d8565b610dc15760405162461bcd60e51b8152600401610a8e906145b6565b81610dcb81611d9e565b610dd483612293565b610ddf858585612300565b5050505050565b6000610ce5610d3683856145a9565b80610e01610d9f611f26565b610e1d5760405162461bcd60e51b8152600401610a8e906145b6565b81610e2781611d9e565b610e348787878787612656565b50505050505050565b80610e49610d9f611f26565b610e655760405162461bcd60e51b8152600401610a8e906145b6565b81610e6f81611d9e565b61094183612293565b610e806126b9565b6001600160a01b0316610e91611f26565b6001600160a01b031614610eb75760405162461bcd60e51b8152600401610a8e906145ff565b610ec18282611f35565b5050565b61094183838360405180602001604052806000815250611577565b80610eec610d9f611f26565b610f085760405162461bcd60e51b8152600401610a8e906145b6565b81610f1281611d9e565b610f1b83612293565b610941836127ae565b6000610ce583836125d8565b80610f3c610d9f611f26565b610f585760405162461bcd60e51b8152600401610a8e906145b6565b81610f6281611d9e565b610e348787878787612855565b80610f7b610d9f611f26565b610f975760405162461bcd60e51b8152600401610a8e906145b6565b81610fa181611d9e565b610fad86868686612934565b505050505050565b6000818152606760205260408120546001600160a01b0316151561086e565b61100781604051602001610fe89190614641565b6040516020818303038152906040528051906020012060001c826129d4565b50565b610134546001600160a01b031661101f611f26565b6001600160a01b0316146110455760405162461bcd60e51b8152600401610a8e90614562565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b6000818152606760205260408120546001600160a01b03168061086e5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610a8e565b806110d6610d9f611f26565b6110f25760405162461bcd60e51b8152600401610a8e906145b6565b6111046110fd611f26565b3084612300565b610ec161110f611f26565b83612083565b600061112082612244565b905061112b816129f9565b61113481611d9e565b610ec161113f611f26565b8261114985612515565b612a69565b60608061115b8484612af0565b909590945092505050565b60006001600160a01b0382166111d05760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610a8e565b506001600160a01b031660009081526068602052604090205490565b6001600160a01b0381166000908152610135602052604081205461120f81612b11565b611217578091505b50919050565b6112256126b9565b6001600160a01b0316611236611f26565b6001600160a01b03161461125c5760405162461bcd60e51b8152600401610a8e906145ff565b6112668484611f35565b50505050565b6112768787612b5b565b61127e611f26565b6001600160a01b03166112908661106a565b6001600160a01b0316146112e65760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610a8e565b610e3484848484896124a7565b60606066805461088390614488565b610134546001600160a01b0316611317611f26565b6001600160a01b03161461133d5760405162461bcd60e51b8152600401610a8e90614562565b61013361134b8284836146a3565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b828260405161137d92919061478b565b60405180910390a15050565b610ec1611394611f26565b8383612bca565b6000610bd96113a98561479f565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612c9892505050565b806113f2610d9f611f26565b61140e5760405162461bcd60e51b8152600401610a8e906145b6565b8161141881611d9e565b6112666114248461106a565b8585612300565b6000818152606760205260408120546001600160a01b031661144e57600061086e565b3092915050565b606080836001600160401b0381111561147057611470613f5b565b6040519080825280602002602001820160405280156114a357816020015b606081526020019060019003908161148e5790505b509150836001600160401b038111156114be576114be613f5b565b6040519080825280602002602001820160405280156114f157816020015b60608152602001906001900390816114dc5790505b50905060005b8481101561156e57611521868683818110611514576115146144d7565b9050602002013585612af0565b848381518110611533576115336144d7565b6020026020010184848151811061154c5761154c6144d7565b602002602001018290528290525050808061156690614549565b9150506114f7565b50935093915050565b81611583610d9f611f26565b61159f5760405162461bcd60e51b8152600401610a8e906145b6565b826115a981611d9e565b6115b284612293565b610fad86868686612de1565b610134546001600160a01b03166115d3611f26565b6001600160a01b0316146115f95760405162461bcd60e51b8152600401610a8e90614562565b6000611608610d36888a6145a9565b9050611622898261161c610d7e8b8d6145a9565b85612e14565b610d8886868686856124a7565b600081815260c96020526040902080546060919061164c90614488565b80601f016020809104026020016040519081016040528092919081815260200182805461167890614488565b80156116c55780601f1061169a576101008083540402835291602001916116c5565b820191906000526020600020905b8154815290600101906020018083116116a857829003601f168201915b50505050509050919050565b6001600160a01b038116600090815261013560205260409020546060906116f781612b11565b61121757600081815261013860205260409020805461171590614488565b80601f016020809104026020016040519081016040528092919081815260200182805461174190614488565b801561178e5780601f106117635761010080835404028352916020019161178e565b820191906000526020600020905b81548152906001019060200180831161177157829003601f168201915b5050505050915050919050565b60606117a682611d3f565b60006117b0612e67565b905060008151116117d05760405180602001604052806000815250610ce5565b806117da84612e77565b6040516020016117eb929190614829565b6040516020818303038152906040529392505050565b8061180d610d9f611f26565b6118295760405162461bcd60e51b8152600401610a8e906145b6565b8161183381611d9e565b610e3487878787876124a7565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b0316611873611f26565b6001600160a01b0316146118995760405162461bcd60e51b8152600401610a8e906145ff565b60208190036118bc5760006118b082840184613a37565b90506112668482611f35565b60006118ca82840184614858565b805190915060005b81811015610fad576118fd868483815181106118f0576118f06144d7565b6020026020010151611f35565b8061190781614549565b9150506118d2565b8061191b610d9f611f26565b6119375760405162461bcd60e51b8152600401610a8e906145b6565b8161194181611d9e565b610e348787878787612f77565b6000611958611f26565b6001600160a01b03811660009081526101356020526040812054919250036119cc5760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b6064820152608401610a8e565b61100781612f8d565b6060816001600160401b038111156119ef576119ef613f5b565b604051908082528060200260200182016040528015611a2257816020015b6060815260200190600190039081611a0d5790505b50905060005b82811015611a8157611a51848483818110611a4557611a456144d7565b9050602002013561162f565b828281518110611a6357611a636144d7565b60200260200101819052508080611a7990614549565b915050611a28565b5092915050565b610134546001600160a01b0316611a9d611f26565b6001600160a01b031614611ac35760405162461bcd60e51b8152600401610a8e90614562565b61013454611ada906001600160a01b031684611f35565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611b0c92919061478b565b60405180910390a2505050565b600054610100900460ff1615808015611b395750600054600160ff909116105b80611b535750303b158015611b53575060005460ff166001145b611bb65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610a8e565b6000805460ff191660011790558015611bd9576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b90830152611c8191612fd2565b611c89613012565b611c91613012565b611c9a8361303b565b611ca38261306b565b8015610ddf576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b1480611d2057506001600160e01b03198216635b5e139f60e01b145b8061086e57506301ffc9a760e01b6001600160e01b031983161461086e565b6000818152606760205260409020546001600160a01b03166110075760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610a8e565b303303611dfb57611dad61309b565b81146110075760405162461bcd60e51b815260206004820152601760248201527f52656769737472793a20544f4b454e5f494e56414c49440000000000000000006044820152606401610a8e565b611007816130af565b6000611e0f8261106a565b9050806001600160a01b0316836001600160a01b031603611e7c5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610a8e565b806001600160a01b0316611e8e611f26565b6001600160a01b03161480611eaa5750611eaa816107b6611f26565b611f1c5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610a8e565b61094183836130dd565b6000611f3061314b565b905090565b6001600160a01b038216611f8b5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610a8e565b6000818152606760205260409020546001600160a01b031615611ff05760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610a8e565b611ffc60008383613166565b6001600160a01b03821660009081526068602052604081208054600192906120259084906148e8565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600061208d6126b9565b905061209981836130dd565b600080516020614c4283398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb916120f69188913091906044016148fb565b600060405180830381600087803b15801561211057600080fd5b505af1158015612124573d6000803e3d6000fd5b5050505050505050565b6060610ce5836040516020016121449190614641565b6040516020818303038152906040528051906020012060001c83613203565b606061216e856130af565b600080876001600160a01b0316866121888b8a89896132e5565b6040516121959190614641565b60006040518083038160008787f1925050503d80600081146121d3576040519150601f19603f3d011682016040523d82523d6000602084013e6121d8565b606091505b5090925090506121e9603f8761493d565b5a116121f7576121f7614951565b61223782826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c4544000000000000815250613315565b9998505050505050505050565b805160009081905b8015611a815761227f8285612262600185614967565b81518110612272576122726144d7565b602002602001015161334e565b91508061228b8161497a565b91505061224c565b61229c816133fa565b6040516020016122ae91815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b03166123138261106a565b6001600160a01b0316146123775760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610a8e565b6001600160a01b0382166123d95760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610a8e565b6123e4838383613166565b6123ef6000826130dd565b6001600160a01b0383166000908152606860205260408120805460019290612418908490614967565b90915550506001600160a01b03821660009081526068602052604081208054600192906124469084906148e8565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60005b84811015610fad576125038686838181106124c7576124c76144d7565b90506020028101906124d991906144ed565b8686858181106124eb576124eb6144d7565b90506020028101906124fd91906144ed565b86612855565b8061250d81614549565b9150506124aa565b606060008260008151811061252c5761252c6144d7565b602002602001015190506000600190505b8351811015611a815781848281518110612559576125596144d7565b6020026020010151604051602001612572929190614991565b6040516020818303038152906040529150808061258e90614549565b91505061253d565b61dead6001600160a01b038416148015906125c857506001600160a01b03831660009081526101356020526040902054155b1561094157610941838383612a69565b6000806125e48361106a565b9050806001600160a01b0316846001600160a01b0316148061262b57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610bd95750836001600160a01b031661264484610906565b6001600160a01b031614949350505050565b60005b84811015610fad576126a7868683818110612676576126766144d7565b9050602002013585858481811061268f5761268f6144d7565b90506020028101906126a191906144ed565b85612934565b806126b181614549565b915050612659565b600080600080516020614c428339815191525460405163721804d360e11b81523060048201526001600160a01b039091169150600090829063e43009a690602401602060405180830381865afa158015612717573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061273b91906149cd565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f960390602401602060405180830381865afa158015612783573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127a791906149e6565b9250505090565b60006127b98261106a565b90506127c781600084613166565b6127d26000836130dd565b6001600160a01b03811660009081526068602052604081208054600192906127fb908490614967565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6000858560405160200161286a929190614a03565b60408051601f198184030181528282528051602091820120601f89018290048202840182019092528783529092506128be91839189908990819084018382808284376000920191909152506129d492505050565b610fad8187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b018190048102820181019092528981529250899150889081908401838280828437600092019190915250889250613426915050565b61293d8461355b565b6129895760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e44000000006044820152606401610a8e565b611266846129968661162f565b85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250613426915050565b6129dd8261355b565b610ec157600082815260c9602052604090206109418282614a13565b612a01611f26565b6001600160a01b0316612a138261106a565b6001600160a01b0316146110075760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610a8e565b6000828152610138602052604090208054612a8390614488565b9050600003612aa757600082815261013860205260409020612aa58282614a13565b505b6001600160a01b03831660008181526101356020526040808220859055518492917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a3505050565b606080612afc8461162f565b9150612b088484613203565b90509250929050565b6000818152610137602052604081205460ff16801561086e57506101366000612b38611f26565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b600080516020614c4283398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f90612b9c908690869060040161478b565b600060405180830381600087803b158015612bb657600080fd5b505af1158015610e34573d6000803e3d6000fd5b816001600160a01b0316836001600160a01b031603612c2b5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610a8e565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f90602401602060405180830381865afa158015612cdf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d0391906149cd565b90506000612db1866060015180519060200120868860200151604051602001612d519392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b9050818660200151148015612dd757508551612dd7906001600160a01b03168286613581565b9695505050505050565b612dec848484612300565b612df8848484846136c3565b6112665760405162461bcd60e51b8152600401610a8e90614ad2565b612e1e8484611f35565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c395283604051612e4e9190613a24565b60405180910390a2801561126657611266848484612596565b6060610133805461088390614488565b606081600003612e9e5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115612ec85780612eb281614549565b9150612ec19050600a8361493d565b9150612ea2565b6000816001600160401b03811115612ee257612ee2613f5b565b6040519080825280601f01601f191660200182016040528015612f0c576020820181803683370190505b5090505b8415610bd957612f21600183614967565b9150612f2e600a86614b24565b612f399060306148e8565b60f81b818381518110612f4e57612f4e6144d7565b60200101906001600160f81b031916908160001a905350612f70600a8661493d565b9450612f10565b612f8081612293565b610ddf85858585856124a7565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b600054610100900460ff16612ff95760405162461bcd60e51b8152600401610a8e90614b38565b60656130058382614a13565b5060666109418282614a13565b600054610100900460ff166130395760405162461bcd60e51b8152600401610a8e90614b38565b565b600054610100900460ff166130625760405162461bcd60e51b8152600401610a8e90614b38565b611007816137c8565b600054610100900460ff166130925760405162461bcd60e51b8152600401610a8e90614b38565b61100781613821565b60003033036130ac5750601f193601355b90565b600081815261010060205260409020546130ca9060016148e8565b6000918252610100602052604090912055565b600081815260696020526040902080546001600160a01b0319166001600160a01b03841690811790915581906131128261106a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000303303613161575060331936013560601c90565b503390565b6000818152610137602052604090205460ff16158061318d57506001600160a01b03821615155b6131d95760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f555047524144454400000000000000006044820152606401610a8e565b6001600160a01b038316600090815261013560205260409020548190036109415761094183612f8d565b606061320e82612b11565b15613228575060408051602081019091526000815261086e565b60ca6000613235846133fa565b81526020019081526020016000206000848152602001908152602001600020805461325f90614488565b80601f016020809104026020016040519081016040528092919081815260200182805461328b90614488565b80156132d85780601f106132ad576101008083540402835291602001916132d8565b820191906000526020600020905b8154815290600101906020018083116132bb57829003601f168201915b5050505050905092915050565b60608285856040516020016132fc93929190614b83565b6040516020818303038152906040529050949350505050565b60608315613324575081610ce5565b8251156133345782518084602001fd5b8160405162461bcd60e51b8152600401610a8e9190613a24565b600081516000036133995760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b6044820152606401610a8e565b82826040516020016133ab9190614641565b604051602081830303815290604052805190602001206040516020016133db929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b600081815260cb60205260408120541561342257600082815260cb602052604090205461086e565b5090565b60ca6000613433836133fa565b81526020019081526020016000206000858152602001908152602001600020805461345d90614488565b90506000036134b557826040516134749190614641565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f86856040516134ac9190613a24565b60405180910390a35b8160ca60006134c3846133fa565b8152602001908152602001600020600086815260200190815260200160002090816134ee9190614a13565b50816040516134fd9190614641565b6040518091039020836040516135139190614641565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d92868660405161354d929190614166565b60405180910390a450505050565b600081815260c960205260408120805482919061357790614488565b9050119050919050565b6000806000613590858561386f565b909250905060008160048111156135a9576135a9614bc2565b1480156135c75750856001600160a01b0316826001600160a01b0316145b156135d757600192505050610ce5565b600080876001600160a01b0316631626ba7e60e01b88886040516024016135ff929190614bd8565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161363d9190614641565b600060405180830381855afa9150503d8060008114613678576040519150601f19603f3d011682016040523d82523d6000602084013e61367d565b606091505b5091509150818015613690575080516020145b80156136b757508051630b135d3f60e11b906136b590830160209081019084016149cd565b145b98975050505050505050565b60006001600160a01b0384163b156137c057836001600160a01b031663150b7a026136ec611f26565b8786866040518563ffffffff1660e01b815260040161370e9493929190614bf1565b6020604051808303816000875af1925050508015613749575060408051601f3d908101601f1916820190925261374691810190614c24565b60015b6137a6573d808015613777576040519150601f19603f3d011682016040523d82523d6000602084013e61377c565b606091505b50805160000361379e5760405162461bcd60e51b8152600401610a8e90614ad2565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610bd9565b506001610bd9565b600054610100900460ff166137ef5760405162461bcd60e51b8152600401610a8e90614b38565b80600080516020614c428339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff166138485760405162461bcd60e51b8152600401610a8e90614b38565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613800565b60008082516041036138a55760208301516040840151606085015160001a613899878285856138b4565b945094505050506138ad565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156138eb5750600090506003613998565b8460ff16601b1415801561390357508460ff16601c14155b156139145750600090506004613998565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613968573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661399157600060019250925050613998565b9150600090505b94509492505050565b6001600160e01b03198116811461100757600080fd5b6000602082840312156139c957600080fd5b8135610ce5816139a1565b60005b838110156139ef5781810151838201526020016139d7565b50506000910152565b60008151808452613a108160208601602086016139d4565b601f01601f19169290920160200192915050565b602081526000610ce560208301846139f8565b600060208284031215613a4957600080fd5b5035919050565b6001600160a01b038116811461100757600080fd5b60008060408385031215613a7857600080fd5b8235613a8381613a50565b946020939093013593505050565b60008083601f840112613aa357600080fd5b5081356001600160401b03811115613aba57600080fd5b6020830191508360208285010111156138ad57600080fd5b600080600080600060808688031215613aea57600080fd5b8535613af581613a50565b94506020860135613b0581613a50565b93506040860135925060608601356001600160401b03811115613b2757600080fd5b613b3388828901613a91565b969995985093965092949392505050565b60008083601f840112613b5657600080fd5b5081356001600160401b03811115613b6d57600080fd5b6020830191508360208260051b85010111156138ad57600080fd5b600080600060408486031215613b9d57600080fd5b83356001600160401b03811115613bb357600080fd5b613bbf86828701613b44565b909790965060209590950135949350505050565b600081518084526020808501808196508360051b8101915082860160005b85811015613c1b578284038952613c098483516139f8565b98850198935090840190600101613bf1565b5091979650505050505050565b602081526000610ce56020830184613bd3565b600080600060408486031215613c5057600080fd5b83356001600160401b03811115613c6657600080fd5b613bbf86828701613a91565b600080600060408486031215613c8757600080fd5b83356001600160401b0380821115613c9e57600080fd5b9085019060808288031215613cb257600080fd5b90935060208501359080821115613cc857600080fd5b50613cd586828701613a91565b9497909650939450505050565b80358015158114613cf257600080fd5b919050565b60008060008060008060008060a0898b031215613d1357600080fd5b8835613d1e81613a50565b975060208901356001600160401b0380821115613d3a57600080fd5b613d468c838d01613b44565b909950975060408b0135915080821115613d5f57600080fd5b613d6b8c838d01613b44565b909750955060608b0135915080821115613d8457600080fd5b50613d918b828c01613b44565b9094509250613da4905060808a01613ce2565b90509295985092959890939650565b600080600060608486031215613dc857600080fd5b8335613dd381613a50565b92506020840135613de381613a50565b929592945050506040919091013590565b60008060208385031215613e0757600080fd5b82356001600160401b03811115613e1d57600080fd5b613e2985828601613b44565b90969095509350505050565b600080600080600060608688031215613e4d57600080fd5b85356001600160401b0380821115613e6457600080fd5b613e7089838a01613b44565b90975095506020880135915080821115613e8957600080fd5b50613e9688828901613b44565b96999598509660400135949350505050565b600080600080600060608688031215613ec057600080fd5b85356001600160401b0380821115613ed757600080fd5b613ee389838a01613a91565b90975095506020880135915080821115613efc57600080fd5b50613e9688828901613a91565b60008060008060608587031215613f1f57600080fd5b8435935060208501356001600160401b03811115613f3c57600080fd5b613f4887828801613a91565b9598909750949560400135949350505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715613f9957613f99613f5b565b604052919050565b600082601f830112613fb257600080fd5b81356001600160401b03811115613fcb57613fcb613f5b565b613fde601f8201601f1916602001613f71565b818152846020838601011115613ff357600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561402257600080fd5b81356001600160401b0381111561403857600080fd5b610bd984828501613fa1565b60006020828403121561405657600080fd5b8135610ce581613a50565b60006001600160401b0382111561407a5761407a613f5b565b5060051b60200190565b600061409761409284614061565b613f71565b8381529050602080820190600585901b8401868111156140b657600080fd5b845b818110156140f15780356001600160401b038111156140d75760008081fd5b6140e389828901613fa1565b8552509282019282016140b8565b505050509392505050565b60006020828403121561410e57600080fd5b81356001600160401b0381111561412457600080fd5b8201601f8101841361413557600080fd5b610bd984823560208401614084565b6000806040838503121561415757600080fd5b50508035926020909101359150565b60408152600061417960408301856139f8565b8281036020840152610ce181856139f8565b600080600080606085870312156141a157600080fd5b84356141ac81613a50565b93506020850135925060408501356001600160401b038111156141ce57600080fd5b6141da87828801613a91565b95989497509550505050565b60008060008060008060006080888a03121561420157600080fd5b87356001600160401b038082111561421857600080fd5b6142248b838c01613a91565b909950975060208a0135965060408a013591508082111561424457600080fd5b6142508b838c01613b44565b909650945060608a013591508082111561426957600080fd5b506142768a828b01613b44565b989b979a50959850939692959293505050565b6000806020838503121561429c57600080fd5b82356001600160401b038111156142b257600080fd5b613e2985828601613a91565b600080604083850312156142d157600080fd5b82356142dc81613a50565b9150612b0860208401613ce2565b6040815260006142fd6040830185613bd3565b8281036020840152610ce18185613bd3565b6000806000806080858703121561432557600080fd5b843561433081613a50565b9350602085013561434081613a50565b92506040850135915060608501356001600160401b0381111561436257600080fd5b61436e87828801613fa1565b91505092959194509250565b60008060006040848603121561438f57600080fd5b833561439a81613a50565b925060208401356001600160401b038111156143b557600080fd5b613cd586828701613a91565b600080604083850312156143d457600080fd5b82356143df81613a50565b915060208301356143ef81613a50565b809150509250929050565b60008060006040848603121561440f57600080fd5b8335925060208401356001600160401b038111156143b557600080fd5b6000806000806080858703121561444257600080fd5b843561444d81613a50565b9350602085013561445d81613a50565b9250604085013561446d81613a50565b9150606085013561447d81613a50565b939692955090935050565b600181811c9082168061449c57607f821691505b60208210810361121757634e487b7160e01b600052602260045260246000fd5b6000602082840312156144ce57600080fd5b610ce582613ce2565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261450457600080fd5b8301803591506001600160401b0382111561451e57600080fd5b6020019150368190038213156138ad57600080fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161455b5761455b614533565b5060010190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b6000610ce5368484614084565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b600082516146538184602087016139d4565b9190910192915050565b601f82111561094157600081815260208120601f850160051c810160208610156146845750805b601f850160051c820191505b81811015610fad57828155600101614690565b6001600160401b038311156146ba576146ba613f5b565b6146ce836146c88354614488565b8361465d565b6000601f84116001811461470257600085156146ea5750838201355b600019600387901b1c1916600186901b178355610ddf565b600083815260209020601f19861690835b828110156147335786850135825560209485019460019092019101614713565b50868210156147505760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b602081526000610bd9602083018486614762565b6000608082360312156147b157600080fd5b604051608081016001600160401b0382821081831117156147d4576147d4613f5b565b81604052843591506147e582613a50565b8183526020850135602084015260408501356040840152606085013591508082111561481057600080fd5b5061481d36828601613fa1565b60608301525092915050565b6000835161483b8184602088016139d4565b83519083019061484f8183602088016139d4565b01949350505050565b6000602080838503121561486b57600080fd5b82356001600160401b0381111561488157600080fd5b8301601f8101851361489257600080fd5b80356148a061409282614061565b81815260059190911b820183019083810190878311156148bf57600080fd5b928401925b828410156148dd578335825292840192908401906148c4565b979650505050505050565b8082018082111561086e5761086e614533565b6001600160a01b03848116825283166020820152606060408201819052600090610a97908301846139f8565b634e487b7160e01b600052601260045260246000fd5b60008261494c5761494c614927565b500490565b634e487b7160e01b600052600160045260246000fd5b8181038181111561086e5761086e614533565b60008161498957614989614533565b506000190190565b600083516149a38184602088016139d4565b601760f91b90830190815283516149c18160018401602088016139d4565b01600101949350505050565b6000602082840312156149df57600080fd5b5051919050565b6000602082840312156149f857600080fd5b8151610ce581613a50565b8183823760009101908152919050565b81516001600160401b03811115614a2c57614a2c613f5b565b614a4081614a3a8454614488565b8461465d565b602080601f831160018114614a755760008415614a5d5750858301515b600019600386901b1c1916600185901b178555610fad565b600085815260208120601f198616915b82811015614aa457888601518255948401946001909101908401614a85565b5085821015614ac25787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600082614b3357614b33614927565b500690565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008451614b958184602089016139d4565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b634e487b7160e01b600052602160045260246000fd5b828152604060208201526000610bd960408301846139f8565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612dd7908301846139f8565b600060208284031215614c3657600080fd5b8151610ce5816139a156febe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafea164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class UNSRegistryV07__factory extends ethers_1.ContractFactory {
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
exports.UNSRegistryV07__factory = UNSRegistryV07__factory;
UNSRegistryV07__factory.bytecode = _bytecode;
UNSRegistryV07__factory.abi = _abi;
