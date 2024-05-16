"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNSRegistryMock__factory = void 0;
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
        ],
        name: "SetExpiry",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "expiryOf",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getTokenName",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "isExpired",
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
                name: "hash",
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
                name: "owner",
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
        name: "setExpiry",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "unlock",
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
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
            },
        ],
        name: "upgradeAll",
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
const _bytecode = "0x608060405234801561001057600080fd5b506153de806100206000396000f3fe608060405234801561001057600080fd5b50600436106103c55760003560e01c80637eee288d116101ff578063baef73e91161011a578063e985e9c5116100ad578063f5c1f76e1161007c578063f5c1f76e14610914578063f7df5c6014610927578063f8c8765e1461093a578063ffa1ad741461094d57600080fd5b8063e985e9c5146108b6578063ebf0c717146108f2578063ec129eea146108f9578063f25eb5c11461090c57600080fd5b8063ce92b33e116100e9578063ce92b33e1461086a578063cf2c52cb1461087d578063d9548e5314610890578063dbe16c07146108a357600080fd5b8063baef73e9146107ef578063bb5b27e114610831578063bebec6b414610844578063c87b56dd1461085757600080fd5b8063a424740011610192578063b3f9e4cb11610161578063b3f9e4cb14610795578063b85afd28146107a8578063b88d4fde146107c9578063ba5d40b7146107dc57600080fd5b8063a42474001461073c578063ab3b87fe1461074f578063ac9650d814610762578063ae31844a1461078257600080fd5b806395d89b41116101ce57806395d89b41146106e257806399e0dd7c146106ea578063a22cb465146106fd578063a3f4df7e1461071057600080fd5b80637eee288d146106a157806394d008ef146106b45780639508b1c4146106c75780639559c0bd146106da57600080fd5b806342842e0e116102ef578063572b6c0511610282578063672b9f8111610251578063672b9f81146106395780636ccbae5f1461065a57806370a082311461067b5780637e37479e1461068e57600080fd5b8063572b6c05146105e45780636352211e14610600578063638e5c7814610613578063663f7b2a1461062657600080fd5b80634a72584d116102be5780634a72584d146105985780634f558e79146105ab57806350382c1a146105be57806350960239146105d157600080fd5b806342842e0e1461054c57806342966c681461055f578063430c20811461057257806347c816991461058557600080fd5b80631bf7e13e1161036757806327f189751161033657806327f1897514610500578063310bd74b146105135780633f72ec6e1461052657806340c10f191461053957600080fd5b80631bf7e13e146104a65780631f71be06146104b957806323b872dd146104cc578063276fabb1146104df57600080fd5b8063095ea7b3116103a3578063095ea7b314610432578063150b7a02146104475780631bd8cc1a146104735780631be5e7ed1461049357600080fd5b806301ffc9a7146103ca57806306fdde03146103f2578063081812fc14610407575b600080fd5b6103dd6103d8366004614003565b610971565b60405190151581526020015b60405180910390f35b6103fa610982565b6040516103e99190614070565b61041a610415366004614083565b610a14565b6040516001600160a01b0390911681526020016103e9565b6104456104403660046140b1565b610a3b565b005b61045a61045536600461411e565b610a54565b6040516001600160e01b031990911681526020016103e9565b6104866104813660046141d4565b610bae565b6040516103e99190614277565b6103fa6104a136600461428a565b610ca4565b6103fa6104b43660046142c1565b610cef565b6104456104c7366004614341565b610dfa565b6104456104da3660046143fd565b610e90565b6104f26104ed36600461443e565b610ee3565b6040519081526020016103e9565b61044561050e36600461447f565b610ef2565b610445610521366004614083565b610f3a565b6104456105343660046144f2565b610f75565b6104456105473660046140b1565b611077565b61044561055a3660046143fd565b6110c4565b61044561056d366004614083565b6110df565b6103dd6105803660046140b1565b611123565b61044561059336600461451c565b61112f565b6104456105a636600461457d565b61116e565b6103dd6105b9366004614083565b6111b4565b6104456105cc366004614684565b6111d3565b6104456105df3660046146b8565b611209565b6103dd6105f23660046146b8565b6001600160a01b0316301490565b61041a61060e366004614083565b611269565b610445610621366004614083565b611286565b610445610634366004614770565b6112d1565b61064c6106473660046147b8565b611372565b6040516103e99291906147da565b6104f2610668366004614083565b6000908152610100602052604090205490565b6104f26106893660046146b8565b61138a565b6104f261069c3660046146b8565b611410565b6104456106af3660046140b1565b611441565b6104456106c23660046147ff565b611498565b6104456106d536600461485a565b6114e7565b6104f2601481565b6103fa61156e565b6104456106f83660046148fd565b61157d565b61044561070b366004614932565b611604565b6103fa6040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b6103dd61074a3660046142c1565b611616565b61044561075d3660046140b1565b611661565b61077561077036600461443e565b6116a6565b6040516103e9919061495e565b61044561079036600461443e565b611782565b61041a6107a3366004614083565b611820565b6107bb6107b63660046141d4565b61184a565b6040516103e99291906149c0565b6104456107d73660046149e5565b61196c565b6104456107ea366004614341565b6119b3565b6108196107fd366004614083565b600090815261013960205260409020546001600160401b031690565b6040516001600160401b0390911681526020016103e9565b6103fa61083f366004614083565b611a3c565b6103fa6108523660046146b8565b611ade565b6103fa610865366004614083565b611ba8565b61044561087836600461447f565b611c0e565b61044561088b366004614a50565b611c4d565b6103dd61089e366004614083565b611d1c565b6103fa6108b1366004614083565b611d5f565b6103dd6108c4366004614a97565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006104f2565b61044561090736600461447f565b611d7d565b610445611dbc565b61048661092236600461443e565b611e43565b610445610935366004614ad0565b611ef6565b610445610948366004614b02565b611f87565b6103fa60405180604001604052806005815260200164302e392e3160d81b81525081565b600061097c8261215d565b92915050565b60606065805461099190614b5e565b80601f01602080910402602001604051908101604052809291908181526020018280546109bd90614b5e565b8015610a0a5780601f106109df57610100808354040283529160200191610a0a565b820191906000526020600020905b8154815290600101906020018083116109ed57829003601f168201915b5050505050905090565b6000610a1f826121ad565b506000908152606960205260409020546001600160a01b031690565b80610a458161220c565b610a4f8383612272565b505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b0316610a89612394565b6001600160a01b031603610b4a57610a9f612394565b6001600160a01b03166342966c68856040518263ffffffff1660e01b8152600401610acc91815260200190565b600060405180830381600087803b158015610ae657600080fd5b505af1158015610afa573d6000803e3d6000fd5b505050821580159150610b145750610b1482840184614b92565b15610b3257610b2330856123a3565b610b2d85856124f1565b610b3c565b610b3c85856123a3565b50630a85bd0160e11b610ba5565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b60648201526084015b60405180910390fd5b95945050505050565b6060826001600160401b03811115610bc857610bc86145cf565b604051908082528060200260200182016040528015610bfb57816020015b6060815260200190600190039081610be65790505b50905060005b83811015610c9c57610c6c858583818110610c1e57610c1e614bad565b9050602002810190610c309190614bc3565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525087925061259c915050565b828281518110610c7e57610c7e614bad565b60200260200101819052508080610c9490614c1f565b915050610c01565b509392505050565b6060610ce784848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525086925061259c915050565b949350505050565b606060005a9050610d01858585611616565b610d5d5760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b6064820152608401610b9c565b610def610d6d60208701876146b8565b30604088013584610d8160608b018b614bc3565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b90819084018382808284376000920191909152506125d192505050565b9150505b9392505050565b610134546001600160a01b0316610e0f612394565b6001600160a01b031614610e355760405162461bcd60e51b8152600401610b9c90614c38565b6000610e49610e44888a614c7f565b6126b2565b509050610e568982611441565b610e63868686868561270a565b8115610e8557610e858982610e80610e7b8b8d614c7f565b612778565b6127f9565b505050505050505050565b80610ea2610e9c612394565b8261283b565b610ebe5760405162461bcd60e51b8152600401610b9c90614c8c565b81610ec88161220c565b610ed1836128cc565b610edc858585612939565b5050505050565b6000610c9c610e448385614c7f565b80610efe610e9c612394565b610f1a5760405162461bcd60e51b8152600401610b9c90614c8c565b81610f248161220c565b610f318787878787612ae0565b50505050505050565b80610f46610e9c612394565b610f625760405162461bcd60e51b8152600401610b9c90614c8c565b81610f6c8161220c565b610a4f836128cc565b610134546001600160a01b0316610f8a612394565b6001600160a01b031614610fb05760405162461bcd60e51b8152600401610b9c90614c38565b610fb9816121ad565b42826001600160401b0316116110115760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a204558504952595f494e5f5041535400000000000000006044820152606401610b9c565b60008181526101396020908152604091829020805467ffffffffffffffff19166001600160401b038616908117909155915191825282917f93feabb03ab84f47fc85bf0c298103fca21d8c8bc376eae0c1e1c56b9d4f7789910160405180910390a25050565b61107f612b43565b6001600160a01b0316611090612394565b6001600160a01b0316146110b65760405162461bcd60e51b8152600401610b9c90614cd5565b6110c082826123a3565b5050565b610a4f8383836040518060200160405280600081525061196c565b806110eb610e9c612394565b6111075760405162461bcd60e51b8152600401610b9c90614c8c565b816111118161220c565b61111a836128cc565b610a4f83612c44565b6000610df3838361283b565b8061113b610e9c612394565b6111575760405162461bcd60e51b8152600401610b9c90614c8c565b816111618161220c565b610f318787878787612ceb565b8061117a610e9c612394565b6111965760405162461bcd60e51b8152600401610b9c90614c8c565b816111a08161220c565b6111ac86868686612dca565b505050505050565b6000818152606760205260408120546001600160a01b0316151561097c565b611206816040516020016111e79190614d17565b6040516020818303038152906040528051906020012060001c82612e6a565b50565b610134546001600160a01b031661121e612394565b6001600160a01b0316146112445760405162461bcd60e51b8152600401610b9c90614c38565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b600061127482611d1c565b6112815761097c82612e8f565b919050565b80611292610e9c612394565b6112ae5760405162461bcd60e51b8152600401610b9c90614c8c565b6112c06112b9612394565b3084612939565b6110c06112cb612394565b836124f1565b60006112dc826126b2565b5090506112e7612394565b6001600160a01b03166112f982611269565b6001600160a01b03161461134f5760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610b9c565b6113588161220c565b6110c0611363612394565b8261136d85612778565b612eef565b60608061137f8484612f76565b909590945092505050565b60006001600160a01b0382166113f45760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610b9c565b506001600160a01b031660009081526068602052604090205490565b6001600160a01b0381166000908152610135602052604081205461143381612f97565b61143b578091505b50919050565b610134546001600160a01b0316611456612394565b6001600160a01b03161461147c5760405162461bcd60e51b8152600401610b9c90614c38565b611485816128cc565b6110c061149182612e8f565b8383612939565b6114a0612b43565b6001600160a01b03166114b1612394565b6001600160a01b0316146114d75760405162461bcd60e51b8152600401610b9c90614cd5565b6114e184846123a3565b50505050565b6114f18787612fe1565b6114f9612394565b6001600160a01b031661150b86611269565b6001600160a01b0316146115615760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610b9c565b610f31848484848961270a565b60606066805461099190614b5e565b610134546001600160a01b0316611592612394565b6001600160a01b0316146115b85760405162461bcd60e51b8152600401610b9c90614c38565b6101336115c6828483614d79565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b82826040516115f8929190614e61565b60405180910390a15050565b6110c061160f612394565b8383613050565b6000610ce761162485614e75565b3085858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061311e92505050565b8061166d610e9c612394565b6116895760405162461bcd60e51b8152600401610b9c90614c8c565b816116938161220c565b6114e161169f84612e8f565b8585612939565b606060006116b48385614eff565b90503033036117795760005b83811015611777576117476116d3612394565b6116db613267565b8787858181106116ed576116ed614bad565b90506020028101906116ff9190614bc3565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052506040805160208101909152908152925061327b915050565b82828151811061175957611759614bad565b6020026020010181905250808061176f90614c1f565b9150506116c0565b505b610ce7816132ab565b610134546001600160a01b0316611797612394565b6001600160a01b0316146117bd5760405162461bcd60e51b8152600401610b9c90614c38565b60005b81811015610a4f57600161013760008585858181106117e1576117e1614bad565b90506020020135815260200190815260200160002060006101000a81548160ff021916908315150217905550808061181890614c1f565b9150506117c0565b6000818152606760205260408120546001600160a01b031661184357600061097c565b3092915050565b606080836001600160401b03811115611865576118656145cf565b60405190808252806020026020018201604052801561189857816020015b60608152602001906001900390816118835790505b509150836001600160401b038111156118b3576118b36145cf565b6040519080825280602002602001820160405280156118e657816020015b60608152602001906001900390816118d15790505b50905060005b848110156119635761191686868381811061190957611909614bad565b9050602002013585612f76565b84838151811061192857611928614bad565b6020026020010184848151811061194157611941614bad565b602002602001018290528290525050808061195b90614c1f565b9150506118ec565b50935093915050565b81611978610e9c612394565b6119945760405162461bcd60e51b8152600401610b9c90614c8c565b8261199e8161220c565b6119a7846128cc565b6111ac868686866133d6565b610134546001600160a01b03166119c8612394565b6001600160a01b0316146119ee5760405162461bcd60e51b8152600401610b9c90614c38565b6000806119fe610e44898b614c7f565b91509150611a0b81613409565b611a238a83611a1d610e7b8c8e614c7f565b86613469565b611a30878787878661270a565b50505050505050505050565b600081815260c960205260409020805460609190611a5990614b5e565b80601f0160208091040260200160405190810160405280929190818152602001828054611a8590614b5e565b8015611ad25780601f10611aa757610100808354040283529160200191611ad2565b820191906000526020600020905b815481529060010190602001808311611ab557829003601f168201915b50505050509050919050565b6001600160a01b03811660009081526101356020526040902054606090611b0481612f97565b61143b576000818152610138602052604090208054611b2290614b5e565b80601f0160208091040260200160405190810160405280929190818152602001828054611b4e90614b5e565b8015611b9b5780601f10611b7057610100808354040283529160200191611b9b565b820191906000526020600020905b815481529060010190602001808311611b7e57829003601f168201915b5050505050915050919050565b6060611bb3826121ad565b6000611bbd6134bc565b90506000815111611bdd5760405180602001604052806000815250610df3565b80611be7846134cc565b604051602001611bf8929190614f72565b6040516020818303038152906040529392505050565b80611c1a610e9c612394565b611c365760405162461bcd60e51b8152600401610b9c90614c8c565b81611c408161220c565b610f31878787878761270a565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b0316611c80612394565b6001600160a01b031614611ca65760405162461bcd60e51b8152600401610b9c90614cd5565b6020819003611cc9576000611cbd82840184614083565b90506114e184826123a3565b6000611cd782840184614fa1565b805190915060005b818110156111ac57611d0a86848381518110611cfd57611cfd614bad565b60200260200101516123a3565b80611d1481614c1f565b915050611cdf565b600081815261013960205260408120546001600160401b03161580159061097c57505060009081526101396020526040902054426001600160401b039091161090565b600081815261013860205260409020805460609190611a5990614b5e565b80611d89610e9c612394565b611da55760405162461bcd60e51b8152600401610b9c90614c8c565b81611daf8161220c565b610f3187878787876135cc565b6000611dc6612394565b6001600160a01b0381166000908152610135602052604081205491925003611e3a5760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b6064820152608401610b9c565b611206816135e2565b6060816001600160401b03811115611e5d57611e5d6145cf565b604051908082528060200260200182016040528015611e9057816020015b6060815260200190600190039081611e7b5790505b50905060005b82811015611eef57611ebf848483818110611eb357611eb3614bad565b90506020020135611a3c565b828281518110611ed157611ed1614bad565b60200260200101819052508080611ee790614c1f565b915050611e96565b5092915050565b610134546001600160a01b0316611f0b612394565b6001600160a01b031614611f315760405162461bcd60e51b8152600401610b9c90614c38565b61013454611f48906001600160a01b0316846123a3565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611f7a929190614e61565b60405180910390a2505050565b600054610100900460ff1615808015611fa75750600054600160ff909116105b80611fc15750303b158015611fc1575060005460ff166001145b6120245760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610b9c565b6000805460ff191660011790558015612047576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b908301526120ef91613627565b6120f7613667565b6120ff613667565b61210883613690565b612111826136c0565b8015610edc576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b148061218e57506001600160e01b03198216635b5e139f60e01b145b8061097c57506301ffc9a760e01b6001600160e01b031983161461097c565b6000818152606760205260409020546001600160a01b03166112065760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610b9c565b3033036122695761221b613267565b81146112065760405162461bcd60e51b815260206004820152601760248201527f52656769737472793a20544f4b454e5f494e56414c49440000000000000000006044820152606401610b9c565b611206816136f0565b600061227d82612e8f565b9050806001600160a01b0316836001600160a01b0316036122ea5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610b9c565b806001600160a01b03166122fc612394565b6001600160a01b031614806123185750612318816108c4612394565b61238a5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610b9c565b610a4f838361371e565b600061239e61378c565b905090565b6001600160a01b0382166123f95760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610b9c565b6000818152606760205260409020546001600160a01b03161561245e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610b9c565b61246a600083836137a7565b6001600160a01b0382166000908152606860205260408120805460019290612493908490615031565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006124fb612b43565b9050612507818361371e565b60008051602061538b83398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb91612564918891309190604401615044565b600060405180830381600087803b15801561257e57600080fd5b505af1158015612592573d6000803e3d6000fd5b5050505050505050565b6060610df3836040516020016125b29190614d17565b6040516020818303038152906040528051906020012060001c83613883565b60606125dc856136f0565b600080876001600160a01b0316866125f68b8a898961327b565b6040516126039190614d17565b60006040518083038160008787f1925050503d8060008114612641576040519150601f19603f3d011682016040523d82523d6000602084013e612646565b606091505b509092509050612657603f87615086565b5a116126655761266561509a565b6126a582826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c4544000000000000815250613965565b9998505050505050505050565b805160009081905b8015612704578291506126f082856126d36001856150b0565b815181106126e3576126e3614bad565b602002602001015161399e565b9250806126fc816150c3565b9150506126ba565b50915091565b60005b848110156111ac5761276686868381811061272a5761272a614bad565b905060200281019061273c9190614bc3565b86868581811061274e5761274e614bad565b90506020028101906127609190614bc3565b86612ceb565b8061277081614c1f565b91505061270d565b606060008260008151811061278f5761278f614bad565b602002602001015190506000600190505b8351811015611eef57818482815181106127bc576127bc614bad565b60200260200101516040516020016127d59291906150da565b604051602081830303815290604052915080806127f190614c1f565b9150506127a0565b61dead6001600160a01b0384161480159061282b57506001600160a01b03831660009081526101356020526040902054155b15610a4f57610a4f838383612eef565b60008061284783611269565b90506001600160a01b03811615801590610ce75750806001600160a01b0316846001600160a01b031614806128a157506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610ce75750836001600160a01b03166128ba84610a14565b6001600160a01b031614949350505050565b6128d581613a4a565b6040516020016128e791815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b031661294c82612e8f565b6001600160a01b0316146129b05760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610b9c565b6001600160a01b038216612a125760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610b9c565b612a1d8383836137a7565b612a2860008261371e565b6001600160a01b0383166000908152606860205260408120805460019290612a519084906150b0565b90915550506001600160a01b0382166000908152606860205260408120805460019290612a7f908490615031565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60005b848110156111ac57612b31868683818110612b0057612b00614bad565b90506020020135858584818110612b1957612b19614bad565b9050602002810190612b2b9190614bc3565b85612dca565b80612b3b81614c1f565b915050612ae3565b60008051602061538b833981519152546000906001600160a01b03168015612c405760405163721804d360e11b81523060048201526000906001600160a01b0383169063e43009a690602401602060405180830381865afa158015612bac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612bd09190615116565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f960390602401602060405180830381865afa158015612c18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c3c919061512f565b9250505b5090565b6000612c4f82612e8f565b9050612c5d816000846137a7565b612c6860008361371e565b6001600160a01b0381166000908152606860205260408120805460019290612c919084906150b0565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008585604051602001612d0092919061514c565b60408051601f198184030181528282528051602091820120601f8901829004820284018201909252878352909250612d549183918990899081908401838280828437600092019190915250612e6a92505050565b6111ac8187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b018190048102820181019092528981529250899150889081908401838280828437600092019190915250889250613a72915050565b612dd384613ba7565b612e1f5760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e44000000006044820152606401610b9c565b6114e184612e2c86611a3c565b85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250613a72915050565b612e7382613ba7565b6110c057600082815260c960205260409020610a4f828261515c565b6000818152606760205260408120546001600160a01b03168061097c5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610b9c565b6000828152610138602052604090208054612f0990614b5e565b9050600003612f2d57600082815261013860205260409020612f2b828261515c565b505b6001600160a01b03831660008181526101356020526040808220859055518492917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a3505050565b606080612f8284611a3c565b9150612f8e8484613883565b90509250929050565b6000818152610137602052604081205460ff16801561097c57506101366000612fbe612394565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b60008051602061538b83398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f906130229086908690600401614e61565b600060405180830381600087803b15801561303c57600080fd5b505af1158015610f31573d6000803e3d6000fd5b816001600160a01b0316836001600160a01b0316036130b15760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610b9c565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f90602401602060405180830381865afa158015613165573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131899190615116565b905060006132378660600151805190602001208688602001516040516020016131d79392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b905081866020015114801561325d5750855161325d906001600160a01b03168286613bcd565b9695505050505050565b60003033036132785750601f193601355b90565b60608285856040516020016132929392919061521b565b6040516020818303038152906040529050949350505050565b606081516001600160401b038111156132c6576132c66145cf565b6040519080825280602002602001820160405280156132f957816020015b60608152602001906001900390816132e45790505b50905060005b825181101561143b57600080306001600160a01b031685848151811061332757613327614bad565b602002602001015160405161333c9190614d17565b600060405180830381855af49150503d8060008114613377576040519150601f19603f3d011682016040523d82523d6000602084013e61337c565b606091505b50915091506133a482826040518060600160405280602781526020016153ab60279139613965565b8484815181106133b6576133b6614bad565b6020026020010181905250505080806133ce90614c1f565b9150506132ff565b6133e1848484612939565b6133ed84848484613d0f565b6114e15760405162461bcd60e51b8152600401610b9c9061525a565b6000818152610137602052604090205460ff16156112065760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f555047524144454400000000000000006044820152606401610b9c565b61347384846123a3565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c3952836040516134a39190614070565b60405180910390a280156114e1576114e18484846127f9565b6060610133805461099190614b5e565b6060816000036134f35750506040805180820190915260018152600360fc1b602082015290565b8160005b811561351d578061350781614c1f565b91506135169050600a83615086565b91506134f7565b6000816001600160401b03811115613537576135376145cf565b6040519080825280601f01601f191660200182016040528015613561576020820181803683370190505b5090505b8415610ce7576135766001836150b0565b9150613583600a866152ac565b61358e906030615031565b60f81b8183815181106135a3576135a3614bad565b60200101906001600160f81b031916908160001a9053506135c5600a86615086565b9450613565565b6135d5816128cc565b610edc858585858561270a565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b600054610100900460ff1661364e5760405162461bcd60e51b8152600401610b9c906152c0565b606561365a838261515c565b506066610a4f828261515c565b600054610100900460ff1661368e5760405162461bcd60e51b8152600401610b9c906152c0565b565b600054610100900460ff166136b75760405162461bcd60e51b8152600401610b9c906152c0565b61120681613e14565b600054610100900460ff166136e75760405162461bcd60e51b8152600401610b9c906152c0565b61120681613e6d565b6000818152610100602052604090205461370b906001615031565b6000918252610100602052604090912055565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061375382612e8f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60003033036137a2575060331936013560601c90565b503390565b6001600160a01b0382166137be576137be81613409565b600081815261013960205260409020546001600160401b031615613859576001600160a01b0382161580159061380d57506137f7612b43565b6001600160a01b0316826001600160a01b031614155b6138595760405162461bcd60e51b815260206004820152601960248201527f52656769737472793a20544f4b454e5f455850495241424c45000000000000006044820152606401610b9c565b6001600160a01b03831660009081526101356020526040902054819003610a4f57610a4f836135e2565b606061388e82612f97565b156138a8575060408051602081019091526000815261097c565b60ca60006138b584613a4a565b8152602001908152602001600020600084815260200190815260200160002080546138df90614b5e565b80601f016020809104026020016040519081016040528092919081815260200182805461390b90614b5e565b80156139585780601f1061392d57610100808354040283529160200191613958565b820191906000526020600020905b81548152906001019060200180831161393b57829003601f168201915b5050505050905092915050565b60608315613974575081610df3565b8251156139845782518084602001fd5b8160405162461bcd60e51b8152600401610b9c9190614070565b600081516000036139e95760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b6044820152606401610b9c565b82826040516020016139fb9190614d17565b60405160208183030381529060405280519060200120604051602001613a2b929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b600081815260cb602052604081205415612c4057600082815260cb602052604090205461097c565b60ca6000613a7f83613a4a565b815260200190815260200160002060008581526020019081526020016000208054613aa990614b5e565b9050600003613b015782604051613ac09190614d17565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f8685604051613af89190614070565b60405180910390a35b8160ca6000613b0f84613a4a565b815260200190815260200160002060008681526020019081526020016000209081613b3a919061515c565b5081604051613b499190614d17565b604051809103902083604051613b5f9190614d17565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d928686604051613b999291906147da565b60405180910390a450505050565b600081815260c9602052604081208054829190613bc390614b5e565b9050119050919050565b6000806000613bdc8585613ebb565b90925090506000816004811115613bf557613bf561530b565b148015613c135750856001600160a01b0316826001600160a01b0316145b15613c2357600192505050610df3565b600080876001600160a01b0316631626ba7e60e01b8888604051602401613c4b929190615321565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051613c899190614d17565b600060405180830381855afa9150503d8060008114613cc4576040519150601f19603f3d011682016040523d82523d6000602084013e613cc9565b606091505b5091509150818015613cdc575080516020145b8015613d0357508051630b135d3f60e11b90613d019083016020908101908401615116565b145b98975050505050505050565b60006001600160a01b0384163b15613e0c57836001600160a01b031663150b7a02613d38612394565b8786866040518563ffffffff1660e01b8152600401613d5a949392919061533a565b6020604051808303816000875af1925050508015613d95575060408051601f3d908101601f19168201909252613d929181019061536d565b60015b613df2573d808015613dc3576040519150601f19603f3d011682016040523d82523d6000602084013e613dc8565b606091505b508051600003613dea5760405162461bcd60e51b8152600401610b9c9061525a565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610ce7565b506001610ce7565b600054610100900460ff16613e3b5760405162461bcd60e51b8152600401610b9c906152c0565b8060008051602061538b8339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff16613e945760405162461bcd60e51b8152600401610b9c906152c0565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613e4c565b6000808251604103613ef15760208301516040840151606085015160001a613ee587828585613f00565b94509450505050613ef9565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613f375750600090506003613fe4565b8460ff16601b14158015613f4f57508460ff16601c14155b15613f605750600090506004613fe4565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613fb4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613fdd57600060019250925050613fe4565b9150600090505b94509492505050565b6001600160e01b03198116811461120657600080fd5b60006020828403121561401557600080fd5b8135610df381613fed565b60005b8381101561403b578181015183820152602001614023565b50506000910152565b6000815180845261405c816020860160208601614020565b601f01601f19169290920160200192915050565b602081526000610df36020830184614044565b60006020828403121561409557600080fd5b5035919050565b6001600160a01b038116811461120657600080fd5b600080604083850312156140c457600080fd5b82356140cf8161409c565b946020939093013593505050565b60008083601f8401126140ef57600080fd5b5081356001600160401b0381111561410657600080fd5b602083019150836020828501011115613ef957600080fd5b60008060008060006080868803121561413657600080fd5b85356141418161409c565b945060208601356141518161409c565b93506040860135925060608601356001600160401b0381111561417357600080fd5b61417f888289016140dd565b969995985093965092949392505050565b60008083601f8401126141a257600080fd5b5081356001600160401b038111156141b957600080fd5b6020830191508360208260051b8501011115613ef957600080fd5b6000806000604084860312156141e957600080fd5b83356001600160401b038111156141ff57600080fd5b61420b86828701614190565b909790965060209590950135949350505050565b600082825180855260208086019550808260051b84010181860160005b8481101561426a57601f19868403018952614258838351614044565b9884019892509083019060010161423c565b5090979650505050505050565b602081526000610df3602083018461421f565b60008060006040848603121561429f57600080fd5b83356001600160401b038111156142b557600080fd5b61420b868287016140dd565b6000806000604084860312156142d657600080fd5b83356001600160401b03808211156142ed57600080fd5b908501906080828803121561430157600080fd5b9093506020850135908082111561431757600080fd5b50614324868287016140dd565b9497909650939450505050565b8035801515811461128157600080fd5b60008060008060008060008060a0898b03121561435d57600080fd5b88356143688161409c565b975060208901356001600160401b038082111561438457600080fd5b6143908c838d01614190565b909950975060408b01359150808211156143a957600080fd5b6143b58c838d01614190565b909750955060608b01359150808211156143ce57600080fd5b506143db8b828c01614190565b90945092506143ee905060808a01614331565b90509295985092959890939650565b60008060006060848603121561441257600080fd5b833561441d8161409c565b9250602084013561442d8161409c565b929592945050506040919091013590565b6000806020838503121561445157600080fd5b82356001600160401b0381111561446757600080fd5b61447385828601614190565b90969095509350505050565b60008060008060006060868803121561449757600080fd5b85356001600160401b03808211156144ae57600080fd5b6144ba89838a01614190565b909750955060208801359150808211156144d357600080fd5b506144e088828901614190565b96999598509660400135949350505050565b6000806040838503121561450557600080fd5b82356001600160401b03811681146140cf57600080fd5b60008060008060006060868803121561453457600080fd5b85356001600160401b038082111561454b57600080fd5b61455789838a016140dd565b9097509550602088013591508082111561457057600080fd5b506144e0888289016140dd565b6000806000806060858703121561459357600080fd5b8435935060208501356001600160401b038111156145b057600080fd5b6145bc878288016140dd565b9598909750949560400135949350505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561460d5761460d6145cf565b604052919050565b600082601f83011261462657600080fd5b81356001600160401b0381111561463f5761463f6145cf565b614652601f8201601f19166020016145e5565b81815284602083860101111561466757600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561469657600080fd5b81356001600160401b038111156146ac57600080fd5b610ce784828501614615565b6000602082840312156146ca57600080fd5b8135610df38161409c565b60006001600160401b038211156146ee576146ee6145cf565b5060051b60200190565b600061470b614706846146d5565b6145e5565b8381529050602080820190600585901b84018681111561472a57600080fd5b845b818110156147655780356001600160401b0381111561474b5760008081fd5b61475789828901614615565b85525092820192820161472c565b505050509392505050565b60006020828403121561478257600080fd5b81356001600160401b0381111561479857600080fd5b8201601f810184136147a957600080fd5b610ce7848235602084016146f8565b600080604083850312156147cb57600080fd5b50508035926020909101359150565b6040815260006147ed6040830185614044565b8281036020840152610def8185614044565b6000806000806060858703121561481557600080fd5b84356148208161409c565b93506020850135925060408501356001600160401b0381111561484257600080fd5b61484e878288016140dd565b95989497509550505050565b60008060008060008060006080888a03121561487557600080fd5b87356001600160401b038082111561488c57600080fd5b6148988b838c016140dd565b909950975060208a0135965060408a01359150808211156148b857600080fd5b6148c48b838c01614190565b909650945060608a01359150808211156148dd57600080fd5b506148ea8a828b01614190565b989b979a50959850939692959293505050565b6000806020838503121561491057600080fd5b82356001600160401b0381111561492657600080fd5b614473858286016140dd565b6000806040838503121561494557600080fd5b82356149508161409c565b9150612f8e60208401614331565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156149b357603f198886030184526149a1858351614044565b94509285019290850190600101614985565b5092979650505050505050565b6040815260006149d3604083018561421f565b8281036020840152610def818561421f565b600080600080608085870312156149fb57600080fd5b8435614a068161409c565b93506020850135614a168161409c565b92506040850135915060608501356001600160401b03811115614a3857600080fd5b614a4487828801614615565b91505092959194509250565b600080600060408486031215614a6557600080fd5b8335614a708161409c565b925060208401356001600160401b03811115614a8b57600080fd5b614324868287016140dd565b60008060408385031215614aaa57600080fd5b8235614ab58161409c565b91506020830135614ac58161409c565b809150509250929050565b600080600060408486031215614ae557600080fd5b8335925060208401356001600160401b03811115614a8b57600080fd5b60008060008060808587031215614b1857600080fd5b8435614b238161409c565b93506020850135614b338161409c565b92506040850135614b438161409c565b91506060850135614b538161409c565b939692955090935050565b600181811c90821680614b7257607f821691505b60208210810361143b57634e487b7160e01b600052602260045260246000fd5b600060208284031215614ba457600080fd5b610df382614331565b634e487b7160e01b600052603260045260246000fd5b6000808335601e19843603018112614bda57600080fd5b8301803591506001600160401b03821115614bf457600080fd5b602001915036819003821315613ef957600080fd5b634e487b7160e01b600052601160045260246000fd5b600060018201614c3157614c31614c09565b5060010190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b6000610df33684846146f8565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b60008251614d29818460208701614020565b9190910192915050565b601f821115610a4f57600081815260208120601f850160051c81016020861015614d5a5750805b601f850160051c820191505b818110156111ac57828155600101614d66565b6001600160401b03831115614d9057614d906145cf565b614da483614d9e8354614b5e565b83614d33565b6000601f841160018114614dd85760008515614dc05750838201355b600019600387901b1c1916600186901b178355610edc565b600083815260209020601f19861690835b82811015614e095786850135825560209485019460019092019101614de9565b5086821015614e265760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b602081526000610ce7602083018486614e38565b600060808236031215614e8757600080fd5b604051608081016001600160401b038282108183111715614eaa57614eaa6145cf565b8160405284359150614ebb8261409c565b81835260208501356020840152604085013560408401526060850135915080821115614ee657600080fd5b50614ef336828601614615565b60608301525092915050565b6000614f0d614706846146d5565b80848252602080830192508560051b850136811115614f2b57600080fd5b855b81811015614f665780356001600160401b03811115614f4c5760008081fd5b614f5836828a01614615565b865250938201938201614f2d565b50919695505050505050565b60008351614f84818460208801614020565b835190830190614f98818360208801614020565b01949350505050565b60006020808385031215614fb457600080fd5b82356001600160401b03811115614fca57600080fd5b8301601f81018513614fdb57600080fd5b8035614fe9614706826146d5565b81815260059190911b8201830190838101908783111561500857600080fd5b928401925b828410156150265783358252928401929084019061500d565b979650505050505050565b8082018082111561097c5761097c614c09565b6001600160a01b03848116825283166020820152606060408201819052600090610ba590830184614044565b634e487b7160e01b600052601260045260246000fd5b60008261509557615095615070565b500490565b634e487b7160e01b600052600160045260246000fd5b8181038181111561097c5761097c614c09565b6000816150d2576150d2614c09565b506000190190565b600083516150ec818460208801614020565b601760f91b908301908152835161510a816001840160208801614020565b01600101949350505050565b60006020828403121561512857600080fd5b5051919050565b60006020828403121561514157600080fd5b8151610df38161409c565b8183823760009101908152919050565b81516001600160401b03811115615175576151756145cf565b615189816151838454614b5e565b84614d33565b602080601f8311600181146151be57600084156151a65750858301515b600019600386901b1c1916600185901b1785556111ac565b600085815260208120601f198616915b828110156151ed578886015182559484019460019091019084016151ce565b508582101561520b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000845161522d818460208901614020565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6000826152bb576152bb615070565b500690565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052602160045260246000fd5b828152604060208201526000610ce76040830184614044565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061325d90830184614044565b60006020828403121561537f57600080fd5b8151610df381613fed56febe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class UNSRegistryMock__factory extends ethers_1.ContractFactory {
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
exports.UNSRegistryMock__factory = UNSRegistryMock__factory;
UNSRegistryMock__factory.bytecode = _bytecode;
UNSRegistryMock__factory.abi = _abi;
