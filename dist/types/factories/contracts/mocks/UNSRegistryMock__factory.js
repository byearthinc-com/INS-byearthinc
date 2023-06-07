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
const _bytecode = "0x608060405234801561001057600080fd5b506150be806100206000396000f3fe608060405234801561001057600080fd5b50600436106103995760003560e01c80637e37479e116101e9578063ba5d40b71161010f578063e985e9c5116100ad578063f5c1f76e1161007c578063f5c1f76e1461086d578063f7df5c6014610880578063f8c8765e14610893578063ffa1ad74146108a657600080fd5b8063e985e9c51461080f578063ebf0c7171461084b578063ec129eea14610852578063f25eb5c11461086557600080fd5b8063c87b56dd116100e9578063c87b56dd146107c3578063ce92b33e146107d6578063cf2c52cb146107e9578063dbe16c07146107fc57600080fd5b8063ba5d40b71461078a578063bb5b27e11461079d578063bebec6b4146107b057600080fd5b8063a3f4df7e11610187578063ae31844a11610156578063ae31844a14610730578063b3f9e4cb14610743578063b85afd2814610756578063b88d4fde1461077757600080fd5b8063a3f4df7e146106be578063a4247400146106ea578063ab3b87fe146106fd578063ac9650d81461071057600080fd5b80639559c0bd116101c35780639559c0bd1461068857806395d89b411461069057806399e0dd7c14610698578063a22cb465146106ab57600080fd5b80637e37479e1461064f57806394d008ef146106625780639508b1c41461067557600080fd5b806342842e0e116102ce578063509602391161026c578063663f7b2a1161023b578063663f7b2a146105e7578063672b9f81146105fa5780636ccbae5f1461061b57806370a082311461063c57600080fd5b80635096023914610592578063572b6c05146105a55780636352211e146105c1578063638e5c78146105d457600080fd5b806347c81699116102a857806347c81699146105465780634a72584d146105595780634f558e791461056c57806350382c1a1461057f57600080fd5b806342842e0e1461050d57806342966c6814610520578063430c20811461053357600080fd5b80631bf7e13e1161033b578063276fabb111610315578063276fabb1146104b357806327f18975146104d4578063310bd74b146104e757806340c10f19146104fa57600080fd5b80631bf7e13e1461047a5780631f71be061461048d57806323b872dd146104a057600080fd5b8063095ea7b311610377578063095ea7b314610406578063150b7a021461041b5780631bd8cc1a146104475780631be5e7ed1461046757600080fd5b806301ffc9a71461039e57806306fdde03146103c6578063081812fc146103db575b600080fd5b6103b16103ac366004613d08565b6108ca565b60405190151581526020015b60405180910390f35b6103ce6108db565b6040516103bd9190613d75565b6103ee6103e9366004613d88565b61096d565b6040516001600160a01b0390911681526020016103bd565b610419610414366004613db6565b610994565b005b61042e610429366004613e23565b6109ad565b6040516001600160e01b031990911681526020016103bd565b61045a610455366004613ed9565b610b07565b6040516103bd9190613f7c565b6103ce610475366004613f8f565b610bfd565b6103ce610488366004613fc6565b610c48565b61041961049b36600461404b565b610d53565b6104196104ae366004614107565b610dfb565b6104c66104c1366004614148565b610e4e565b6040519081526020016103bd565b6104196104e2366004614189565b610e5d565b6104196104f5366004613d88565b610ea5565b610419610508366004613db6565b610ee0565b61041961051b366004614107565b610f2d565b61041961052e366004613d88565b610f48565b6103b1610541366004613db6565b610f8c565b6104196105543660046141fc565b610f98565b61041961056736600461425d565b610fd7565b6103b161057a366004613d88565b61101d565b61041961058d366004614364565b61103c565b6104196105a0366004614398565b611072565b6103b16105b3366004614398565b6001600160a01b0316301490565b6103ee6105cf366004613d88565b6110d2565b6104196105e2366004613d88565b611132565b6104196105f5366004614450565b61117d565b61060d610608366004614498565b6111b7565b6040516103bd9291906144ba565b6104c6610629366004613d88565b6000908152610100602052604090205490565b6104c661064a366004614398565b6111cf565b6104c661065d366004614398565b611255565b6104196106703660046144df565b611286565b61041961068336600461453a565b6112d5565b6104c6601481565b6103ce61135c565b6104196106a63660046145dd565b61136b565b6104196106b9366004614612565b6113f2565b6103ce6040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b6103b16106f8366004613fc6565b611404565b61041961070b366004613db6565b61144f565b61072361071e366004614148565b611494565b6040516103bd919061463e565b61041961073e366004614148565b611570565b6103ee610751366004613d88565b61160e565b610769610764366004613ed9565b611638565b6040516103bd9291906146a0565b6104196107853660046146c5565b61175a565b61041961079836600461404b565b6117a1565b6103ce6107ab366004613d88565b61182a565b6103ce6107be366004614398565b6118cc565b6103ce6107d1366004613d88565b611996565b6104196107e4366004614189565b6119fc565b6104196107f7366004614730565b611a3b565b6103ce61080a366004613d88565b611b0a565b6103b161081d366004614777565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006104c6565b610419610860366004614189565b611b28565b610419611b67565b61045a61087b366004614148565b611bee565b61041961088e3660046147b0565b611ca1565b6104196108a13660046147e2565b611d32565b6103ce6040518060400160405280600581526020016418171c171960d91b81525081565b60006108d582611f08565b92915050565b6060606580546108ea9061483e565b80601f01602080910402602001604051908101604052809291908181526020018280546109169061483e565b80156109635780601f1061093857610100808354040283529160200191610963565b820191906000526020600020905b81548152906001019060200180831161094657829003601f168201915b5050505050905090565b600061097882611f58565b506000908152606960205260409020546001600160a01b031690565b8061099e81611fb7565b6109a8838361201d565b505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b03166109e261213f565b6001600160a01b031603610aa3576109f861213f565b6001600160a01b03166342966c68856040518263ffffffff1660e01b8152600401610a2591815260200190565b600060405180830381600087803b158015610a3f57600080fd5b505af1158015610a53573d6000803e3d6000fd5b505050821580159150610a6d5750610a6d82840184614872565b15610a8b57610a7c308561214e565b610a86858561229c565b610a95565b610a95858561214e565b50630a85bd0160e11b610afe565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b60648201526084015b60405180910390fd5b95945050505050565b6060826001600160401b03811115610b2157610b216142af565b604051908082528060200260200182016040528015610b5457816020015b6060815260200190600190039081610b3f5790505b50905060005b83811015610bf557610bc5858583818110610b7757610b7761488d565b9050602002810190610b8991906148a3565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250612347915050565b828281518110610bd757610bd761488d565b60200260200101819052508080610bed906148ff565b915050610b5a565b509392505050565b6060610c4084848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250869250612347915050565b949350505050565b606060005a9050610c5a858585611404565b610cb65760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b6064820152608401610af5565b610d48610cc66020870187614398565b30604088013584610cda60608b018b6148a3565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525061237c92505050565b9150505b9392505050565b610134546001600160a01b0316610d6861213f565b6001600160a01b031614610d8e5760405162461bcd60e51b8152600401610af590614918565b6000610da2610d9d888a61495f565b61245d565b509050610dae816124b5565b610dc1610dba826110d2565b8a83612522565b610dce86868686856126c9565b8115610df057610df08982610deb610de68b8d61495f565b612737565b6127b8565b505050505050505050565b80610e0d610e0761213f565b826127fa565b610e295760405162461bcd60e51b8152600401610af59061496c565b81610e3381611fb7565b610e3c836124b5565b610e47858585612522565b5050505050565b6000610bf5610d9d838561495f565b80610e69610e0761213f565b610e855760405162461bcd60e51b8152600401610af59061496c565b81610e8f81611fb7565b610e9c8787878787612878565b50505050505050565b80610eb1610e0761213f565b610ecd5760405162461bcd60e51b8152600401610af59061496c565b81610ed781611fb7565b6109a8836124b5565b610ee86128db565b6001600160a01b0316610ef961213f565b6001600160a01b031614610f1f5760405162461bcd60e51b8152600401610af5906149b5565b610f29828261214e565b5050565b6109a88383836040518060200160405280600081525061175a565b80610f54610e0761213f565b610f705760405162461bcd60e51b8152600401610af59061496c565b81610f7a81611fb7565b610f83836124b5565b6109a8836129d0565b6000610d4c83836127fa565b80610fa4610e0761213f565b610fc05760405162461bcd60e51b8152600401610af59061496c565b81610fca81611fb7565b610e9c8787878787612a77565b80610fe3610e0761213f565b610fff5760405162461bcd60e51b8152600401610af59061496c565b8161100981611fb7565b61101586868686612b56565b505050505050565b6000818152606760205260408120546001600160a01b031615156108d5565b61106f8160405160200161105091906149f7565b6040516020818303038152906040528051906020012060001c82612bf6565b50565b610134546001600160a01b031661108761213f565b6001600160a01b0316146110ad5760405162461bcd60e51b8152600401610af590614918565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b6000818152606760205260408120546001600160a01b0316806108d55760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610af5565b8061113e610e0761213f565b61115a5760405162461bcd60e51b8152600401610af59061496c565b61116c61116561213f565b3084612522565b610f2961117761213f565b8361229c565b60006111888261245d565b50905061119481612c1b565b61119d81611fb7565b610f296111a861213f565b826111b285612737565b612c8b565b6060806111c48484612d12565b909590945092505050565b60006001600160a01b0382166112395760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610af5565b506001600160a01b031660009081526068602052604090205490565b6001600160a01b0381166000908152610135602052604081205461127881612d33565b611280578091505b50919050565b61128e6128db565b6001600160a01b031661129f61213f565b6001600160a01b0316146112c55760405162461bcd60e51b8152600401610af5906149b5565b6112cf848461214e565b50505050565b6112df8787612d7d565b6112e761213f565b6001600160a01b03166112f9866110d2565b6001600160a01b03161461134f5760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610af5565b610e9c84848484896126c9565b6060606680546108ea9061483e565b610134546001600160a01b031661138061213f565b6001600160a01b0316146113a65760405162461bcd60e51b8152600401610af590614918565b6101336113b4828483614a59565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b82826040516113e6929190614b41565b60405180910390a15050565b610f296113fd61213f565b8383612dec565b6000610c4061141285614b55565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612eba92505050565b8061145b610e0761213f565b6114775760405162461bcd60e51b8152600401610af59061496c565b8161148181611fb7565b6112cf61148d846110d2565b8585612522565b606060006114a28385614bdf565b90503033036115675760005b83811015611565576115356114c161213f565b6114c9613003565b8787858181106114db576114db61488d565b90506020028101906114ed91906148a3565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525060408051602081019091529081529250613017915050565b8282815181106115475761154761488d565b6020026020010181905250808061155d906148ff565b9150506114ae565b505b610c4081613047565b610134546001600160a01b031661158561213f565b6001600160a01b0316146115ab5760405162461bcd60e51b8152600401610af590614918565b60005b818110156109a857600161013760008585858181106115cf576115cf61488d565b90506020020135815260200190815260200160002060006101000a81548160ff0219169083151502179055508080611606906148ff565b9150506115ae565b6000818152606760205260408120546001600160a01b03166116315760006108d5565b3092915050565b606080836001600160401b03811115611653576116536142af565b60405190808252806020026020018201604052801561168657816020015b60608152602001906001900390816116715790505b509150836001600160401b038111156116a1576116a16142af565b6040519080825280602002602001820160405280156116d457816020015b60608152602001906001900390816116bf5790505b50905060005b84811015611751576117048686838181106116f7576116f761488d565b9050602002013585612d12565b8483815181106117165761171661488d565b6020026020010184848151811061172f5761172f61488d565b6020026020010182905282905250508080611749906148ff565b9150506116da565b50935093915050565b81611766610e0761213f565b6117825760405162461bcd60e51b8152600401610af59061496c565b8261178c81611fb7565b611795846124b5565b61101586868686613172565b610134546001600160a01b03166117b661213f565b6001600160a01b0316146117dc5760405162461bcd60e51b8152600401610af590614918565b6000806117ec610d9d898b61495f565b915091506117f9816131a5565b6118118a8361180b610de68c8e61495f565b86613205565b61181e87878787866126c9565b50505050505050505050565b600081815260c9602052604090208054606091906118479061483e565b80601f01602080910402602001604051908101604052809291908181526020018280546118739061483e565b80156118c05780601f10611895576101008083540402835291602001916118c0565b820191906000526020600020905b8154815290600101906020018083116118a357829003601f168201915b50505050509050919050565b6001600160a01b038116600090815261013560205260409020546060906118f281612d33565b6112805760008181526101386020526040902080546119109061483e565b80601f016020809104026020016040519081016040528092919081815260200182805461193c9061483e565b80156119895780601f1061195e57610100808354040283529160200191611989565b820191906000526020600020905b81548152906001019060200180831161196c57829003601f168201915b5050505050915050919050565b60606119a182611f58565b60006119ab613258565b905060008151116119cb5760405180602001604052806000815250610d4c565b806119d584613268565b6040516020016119e6929190614c52565b6040516020818303038152906040529392505050565b80611a08610e0761213f565b611a245760405162461bcd60e51b8152600401610af59061496c565b81611a2e81611fb7565b610e9c87878787876126c9565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b0316611a6e61213f565b6001600160a01b031614611a945760405162461bcd60e51b8152600401610af5906149b5565b6020819003611ab7576000611aab82840184613d88565b90506112cf848261214e565b6000611ac582840184614c81565b805190915060005b8181101561101557611af886848381518110611aeb57611aeb61488d565b602002602001015161214e565b80611b02816148ff565b915050611acd565b6000818152610138602052604090208054606091906118479061483e565b80611b34610e0761213f565b611b505760405162461bcd60e51b8152600401610af59061496c565b81611b5a81611fb7565b610e9c8787878787613368565b6000611b7161213f565b6001600160a01b0381166000908152610135602052604081205491925003611be55760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b6064820152608401610af5565b61106f8161337e565b6060816001600160401b03811115611c0857611c086142af565b604051908082528060200260200182016040528015611c3b57816020015b6060815260200190600190039081611c265790505b50905060005b82811015611c9a57611c6a848483818110611c5e57611c5e61488d565b9050602002013561182a565b828281518110611c7c57611c7c61488d565b60200260200101819052508080611c92906148ff565b915050611c41565b5092915050565b610134546001600160a01b0316611cb661213f565b6001600160a01b031614611cdc5760405162461bcd60e51b8152600401610af590614918565b61013454611cf3906001600160a01b03168461214e565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611d25929190614b41565b60405180910390a2505050565b600054610100900460ff1615808015611d525750600054600160ff909116105b80611d6c5750303b158015611d6c575060005460ff166001145b611dcf5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610af5565b6000805460ff191660011790558015611df2576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b90830152611e9a916133c3565b611ea2613403565b611eaa613403565b611eb38361342c565b611ebc8261345c565b8015610e47576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b1480611f3957506001600160e01b03198216635b5e139f60e01b145b806108d557506301ffc9a760e01b6001600160e01b03198316146108d5565b6000818152606760205260409020546001600160a01b031661106f5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610af5565b30330361201457611fc6613003565b811461106f5760405162461bcd60e51b815260206004820152601760248201527f52656769737472793a20544f4b454e5f494e56414c49440000000000000000006044820152606401610af5565b61106f8161348c565b6000612028826110d2565b9050806001600160a01b0316836001600160a01b0316036120955760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610af5565b806001600160a01b03166120a761213f565b6001600160a01b031614806120c357506120c38161081d61213f565b6121355760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610af5565b6109a883836134ba565b6000612149613528565b905090565b6001600160a01b0382166121a45760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610af5565b6000818152606760205260409020546001600160a01b0316156122095760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610af5565b61221560008383613543565b6001600160a01b038216600090815260686020526040812080546001929061223e908490614d11565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006122a66128db565b90506122b281836134ba565b60008051602061506b83398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb9161230f918891309190604401614d24565b600060405180830381600087803b15801561232957600080fd5b505af115801561233d573d6000803e3d6000fd5b5050505050505050565b6060610d4c8360405160200161235d91906149f7565b6040516020818303038152906040528051906020012060001c83613584565b60606123878561348c565b600080876001600160a01b0316866123a18b8a8989613017565b6040516123ae91906149f7565b60006040518083038160008787f1925050503d80600081146123ec576040519150601f19603f3d011682016040523d82523d6000602084013e6123f1565b606091505b509092509050612402603f87614d66565b5a1161241057612410614d7a565b61245082826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c4544000000000000815250613666565b9998505050505050505050565b805160009081905b80156124af5782915061249b828561247e600185614d90565b8151811061248e5761248e61488d565b602002602001015161369f565b9250806124a781614da3565b915050612465565b50915091565b6124be8161374b565b6040516020016124d091815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b0316612535826110d2565b6001600160a01b0316146125995760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610af5565b6001600160a01b0382166125fb5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610af5565b612606838383613543565b6126116000826134ba565b6001600160a01b038316600090815260686020526040812080546001929061263a908490614d90565b90915550506001600160a01b0382166000908152606860205260408120805460019290612668908490614d11565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60005b84811015611015576127258686838181106126e9576126e961488d565b90506020028101906126fb91906148a3565b86868581811061270d5761270d61488d565b905060200281019061271f91906148a3565b86612a77565b8061272f816148ff565b9150506126cc565b606060008260008151811061274e5761274e61488d565b602002602001015190506000600190505b8351811015611c9a578184828151811061277b5761277b61488d565b6020026020010151604051602001612794929190614dba565b604051602081830303815290604052915080806127b0906148ff565b91505061275f565b61dead6001600160a01b038416148015906127ea57506001600160a01b03831660009081526101356020526040902054155b156109a8576109a8838383612c8b565b600080612806836110d2565b9050806001600160a01b0316846001600160a01b0316148061284d57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610c405750836001600160a01b03166128668461096d565b6001600160a01b031614949350505050565b60005b84811015611015576128c98686838181106128985761289861488d565b905060200201358585848181106128b1576128b161488d565b90506020028101906128c391906148a3565b85612b56565b806128d3816148ff565b91505061287b565b60008060008051602061506b8339815191525460405163721804d360e11b81523060048201526001600160a01b039091169150600090829063e43009a690602401602060405180830381865afa158015612939573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061295d9190614df6565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f960390602401602060405180830381865afa1580156129a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129c99190614e0f565b9250505090565b60006129db826110d2565b90506129e981600084613543565b6129f46000836134ba565b6001600160a01b0381166000908152606860205260408120805460019290612a1d908490614d90565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008585604051602001612a8c929190614e2c565b60408051601f198184030181528282528051602091820120601f8901829004820284018201909252878352909250612ae09183918990899081908401838280828437600092019190915250612bf692505050565b6110158187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b018190048102820181019092528981529250899150889081908401838280828437600092019190915250889250613777915050565b612b5f846138ac565b612bab5760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e44000000006044820152606401610af5565b6112cf84612bb88661182a565b85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250613777915050565b612bff826138ac565b610f2957600082815260c9602052604090206109a88282614e3c565b612c2361213f565b6001600160a01b0316612c35826110d2565b6001600160a01b03161461106f5760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610af5565b6000828152610138602052604090208054612ca59061483e565b9050600003612cc957600082815261013860205260409020612cc78282614e3c565b505b6001600160a01b03831660008181526101356020526040808220859055518492917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a3505050565b606080612d1e8461182a565b9150612d2a8484613584565b90509250929050565b6000818152610137602052604081205460ff1680156108d557506101366000612d5a61213f565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b60008051602061506b83398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f90612dbe9086908690600401614b41565b600060405180830381600087803b158015612dd857600080fd5b505af1158015610e9c573d6000803e3d6000fd5b816001600160a01b0316836001600160a01b031603612e4d5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610af5565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f90602401602060405180830381865afa158015612f01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f259190614df6565b90506000612fd3866060015180519060200120868860200151604051602001612f739392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b9050818660200151148015612ff957508551612ff9906001600160a01b031682866138d2565b9695505050505050565b60003033036130145750601f193601355b90565b606082858560405160200161302e93929190614efb565b6040516020818303038152906040529050949350505050565b606081516001600160401b03811115613062576130626142af565b60405190808252806020026020018201604052801561309557816020015b60608152602001906001900390816130805790505b50905060005b825181101561128057600080306001600160a01b03168584815181106130c3576130c361488d565b60200260200101516040516130d891906149f7565b600060405180830381855af49150503d8060008114613113576040519150601f19603f3d011682016040523d82523d6000602084013e613118565b606091505b5091509150613140828260405180606001604052806027815260200161508b60279139613666565b8484815181106131525761315261488d565b60200260200101819052505050808061316a906148ff565b91505061309b565b61317d848484612522565b61318984848484613a14565b6112cf5760405162461bcd60e51b8152600401610af590614f3a565b6000818152610137602052604090205460ff161561106f5760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f555047524144454400000000000000006044820152606401610af5565b61320f848461214e565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528360405161323f9190613d75565b60405180910390a280156112cf576112cf8484846127b8565b606061013380546108ea9061483e565b60608160000361328f5750506040805180820190915260018152600360fc1b602082015290565b8160005b81156132b957806132a3816148ff565b91506132b29050600a83614d66565b9150613293565b6000816001600160401b038111156132d3576132d36142af565b6040519080825280601f01601f1916602001820160405280156132fd576020820181803683370190505b5090505b8415610c4057613312600183614d90565b915061331f600a86614f8c565b61332a906030614d11565b60f81b81838151811061333f5761333f61488d565b60200101906001600160f81b031916908160001a905350613361600a86614d66565b9450613301565b613371816124b5565b610e4785858585856126c9565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b600054610100900460ff166133ea5760405162461bcd60e51b8152600401610af590614fa0565b60656133f68382614e3c565b5060666109a88282614e3c565b600054610100900460ff1661342a5760405162461bcd60e51b8152600401610af590614fa0565b565b600054610100900460ff166134535760405162461bcd60e51b8152600401610af590614fa0565b61106f81613b19565b600054610100900460ff166134835760405162461bcd60e51b8152600401610af590614fa0565b61106f81613b72565b600081815261010060205260409020546134a7906001614d11565b6000918252610100602052604090912055565b600081815260696020526040902080546001600160a01b0319166001600160a01b03841690811790915581906134ef826110d2565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600030330361353e575060331936013560601c90565b503390565b6001600160a01b03821661355a5761355a816131a5565b6001600160a01b038316600090815261013560205260409020548190036109a8576109a88361337e565b606061358f82612d33565b156135a957506040805160208101909152600081526108d5565b60ca60006135b68461374b565b8152602001908152602001600020600084815260200190815260200160002080546135e09061483e565b80601f016020809104026020016040519081016040528092919081815260200182805461360c9061483e565b80156136595780601f1061362e57610100808354040283529160200191613659565b820191906000526020600020905b81548152906001019060200180831161363c57829003601f168201915b5050505050905092915050565b60608315613675575081610d4c565b8251156136855782518084602001fd5b8160405162461bcd60e51b8152600401610af59190613d75565b600081516000036136ea5760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b6044820152606401610af5565b82826040516020016136fc91906149f7565b6040516020818303038152906040528051906020012060405160200161372c929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b600081815260cb60205260408120541561377357600082815260cb60205260409020546108d5565b5090565b60ca60006137848361374b565b8152602001908152602001600020600085815260200190815260200160002080546137ae9061483e565b905060000361380657826040516137c591906149f7565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f86856040516137fd9190613d75565b60405180910390a35b8160ca60006138148461374b565b81526020019081526020016000206000868152602001908152602001600020908161383f9190614e3c565b508160405161384e91906149f7565b60405180910390208360405161386491906149f7565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d92868660405161389e9291906144ba565b60405180910390a450505050565b600081815260c96020526040812080548291906138c89061483e565b9050119050919050565b60008060006138e18585613bc0565b909250905060008160048111156138fa576138fa614feb565b1480156139185750856001600160a01b0316826001600160a01b0316145b1561392857600192505050610d4c565b600080876001600160a01b0316631626ba7e60e01b8888604051602401613950929190615001565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161398e91906149f7565b600060405180830381855afa9150503d80600081146139c9576040519150601f19603f3d011682016040523d82523d6000602084013e6139ce565b606091505b50915091508180156139e1575080516020145b8015613a0857508051630b135d3f60e11b90613a069083016020908101908401614df6565b145b98975050505050505050565b60006001600160a01b0384163b15613b1157836001600160a01b031663150b7a02613a3d61213f565b8786866040518563ffffffff1660e01b8152600401613a5f949392919061501a565b6020604051808303816000875af1925050508015613a9a575060408051601f3d908101601f19168201909252613a979181019061504d565b60015b613af7573d808015613ac8576040519150601f19603f3d011682016040523d82523d6000602084013e613acd565b606091505b508051600003613aef5760405162461bcd60e51b8152600401610af590614f3a565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c40565b506001610c40565b600054610100900460ff16613b405760405162461bcd60e51b8152600401610af590614fa0565b8060008051602061506b8339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff16613b995760405162461bcd60e51b8152600401610af590614fa0565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613b51565b6000808251604103613bf65760208301516040840151606085015160001a613bea87828585613c05565b94509450505050613bfe565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613c3c5750600090506003613ce9565b8460ff16601b14158015613c5457508460ff16601c14155b15613c655750600090506004613ce9565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613cb9573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613ce257600060019250925050613ce9565b9150600090505b94509492505050565b6001600160e01b03198116811461106f57600080fd5b600060208284031215613d1a57600080fd5b8135610d4c81613cf2565b60005b83811015613d40578181015183820152602001613d28565b50506000910152565b60008151808452613d61816020860160208601613d25565b601f01601f19169290920160200192915050565b602081526000610d4c6020830184613d49565b600060208284031215613d9a57600080fd5b5035919050565b6001600160a01b038116811461106f57600080fd5b60008060408385031215613dc957600080fd5b8235613dd481613da1565b946020939093013593505050565b60008083601f840112613df457600080fd5b5081356001600160401b03811115613e0b57600080fd5b602083019150836020828501011115613bfe57600080fd5b600080600080600060808688031215613e3b57600080fd5b8535613e4681613da1565b94506020860135613e5681613da1565b93506040860135925060608601356001600160401b03811115613e7857600080fd5b613e8488828901613de2565b969995985093965092949392505050565b60008083601f840112613ea757600080fd5b5081356001600160401b03811115613ebe57600080fd5b6020830191508360208260051b8501011115613bfe57600080fd5b600080600060408486031215613eee57600080fd5b83356001600160401b03811115613f0457600080fd5b613f1086828701613e95565b909790965060209590950135949350505050565b600082825180855260208086019550808260051b84010181860160005b84811015613f6f57601f19868403018952613f5d838351613d49565b98840198925090830190600101613f41565b5090979650505050505050565b602081526000610d4c6020830184613f24565b600080600060408486031215613fa457600080fd5b83356001600160401b03811115613fba57600080fd5b613f1086828701613de2565b600080600060408486031215613fdb57600080fd5b83356001600160401b0380821115613ff257600080fd5b908501906080828803121561400657600080fd5b9093506020850135908082111561401c57600080fd5b5061402986828701613de2565b9497909650939450505050565b8035801515811461404657600080fd5b919050565b60008060008060008060008060a0898b03121561406757600080fd5b883561407281613da1565b975060208901356001600160401b038082111561408e57600080fd5b61409a8c838d01613e95565b909950975060408b01359150808211156140b357600080fd5b6140bf8c838d01613e95565b909750955060608b01359150808211156140d857600080fd5b506140e58b828c01613e95565b90945092506140f8905060808a01614036565b90509295985092959890939650565b60008060006060848603121561411c57600080fd5b833561412781613da1565b9250602084013561413781613da1565b929592945050506040919091013590565b6000806020838503121561415b57600080fd5b82356001600160401b0381111561417157600080fd5b61417d85828601613e95565b90969095509350505050565b6000806000806000606086880312156141a157600080fd5b85356001600160401b03808211156141b857600080fd5b6141c489838a01613e95565b909750955060208801359150808211156141dd57600080fd5b506141ea88828901613e95565b96999598509660400135949350505050565b60008060008060006060868803121561421457600080fd5b85356001600160401b038082111561422b57600080fd5b61423789838a01613de2565b9097509550602088013591508082111561425057600080fd5b506141ea88828901613de2565b6000806000806060858703121561427357600080fd5b8435935060208501356001600160401b0381111561429057600080fd5b61429c87828801613de2565b9598909750949560400135949350505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156142ed576142ed6142af565b604052919050565b600082601f83011261430657600080fd5b81356001600160401b0381111561431f5761431f6142af565b614332601f8201601f19166020016142c5565b81815284602083860101111561434757600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561437657600080fd5b81356001600160401b0381111561438c57600080fd5b610c40848285016142f5565b6000602082840312156143aa57600080fd5b8135610d4c81613da1565b60006001600160401b038211156143ce576143ce6142af565b5060051b60200190565b60006143eb6143e6846143b5565b6142c5565b8381529050602080820190600585901b84018681111561440a57600080fd5b845b818110156144455780356001600160401b0381111561442b5760008081fd5b614437898289016142f5565b85525092820192820161440c565b505050509392505050565b60006020828403121561446257600080fd5b81356001600160401b0381111561447857600080fd5b8201601f8101841361448957600080fd5b610c40848235602084016143d8565b600080604083850312156144ab57600080fd5b50508035926020909101359150565b6040815260006144cd6040830185613d49565b8281036020840152610d488185613d49565b600080600080606085870312156144f557600080fd5b843561450081613da1565b93506020850135925060408501356001600160401b0381111561452257600080fd5b61452e87828801613de2565b95989497509550505050565b60008060008060008060006080888a03121561455557600080fd5b87356001600160401b038082111561456c57600080fd5b6145788b838c01613de2565b909950975060208a0135965060408a013591508082111561459857600080fd5b6145a48b838c01613e95565b909650945060608a01359150808211156145bd57600080fd5b506145ca8a828b01613e95565b989b979a50959850939692959293505050565b600080602083850312156145f057600080fd5b82356001600160401b0381111561460657600080fd5b61417d85828601613de2565b6000806040838503121561462557600080fd5b823561463081613da1565b9150612d2a60208401614036565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561469357603f19888603018452614681858351613d49565b94509285019290850190600101614665565b5092979650505050505050565b6040815260006146b36040830185613f24565b8281036020840152610d488185613f24565b600080600080608085870312156146db57600080fd5b84356146e681613da1565b935060208501356146f681613da1565b92506040850135915060608501356001600160401b0381111561471857600080fd5b614724878288016142f5565b91505092959194509250565b60008060006040848603121561474557600080fd5b833561475081613da1565b925060208401356001600160401b0381111561476b57600080fd5b61402986828701613de2565b6000806040838503121561478a57600080fd5b823561479581613da1565b915060208301356147a581613da1565b809150509250929050565b6000806000604084860312156147c557600080fd5b8335925060208401356001600160401b0381111561476b57600080fd5b600080600080608085870312156147f857600080fd5b843561480381613da1565b9350602085013561481381613da1565b9250604085013561482381613da1565b9150606085013561483381613da1565b939692955090935050565b600181811c9082168061485257607f821691505b60208210810361128057634e487b7160e01b600052602260045260246000fd5b60006020828403121561488457600080fd5b610d4c82614036565b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126148ba57600080fd5b8301803591506001600160401b038211156148d457600080fd5b602001915036819003821315613bfe57600080fd5b634e487b7160e01b600052601160045260246000fd5b600060018201614911576149116148e9565b5060010190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b6000610d4c3684846143d8565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b60008251614a09818460208701613d25565b9190910192915050565b601f8211156109a857600081815260208120601f850160051c81016020861015614a3a5750805b601f850160051c820191505b8181101561101557828155600101614a46565b6001600160401b03831115614a7057614a706142af565b614a8483614a7e835461483e565b83614a13565b6000601f841160018114614ab85760008515614aa05750838201355b600019600387901b1c1916600186901b178355610e47565b600083815260209020601f19861690835b82811015614ae95786850135825560209485019460019092019101614ac9565b5086821015614b065760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b602081526000610c40602083018486614b18565b600060808236031215614b6757600080fd5b604051608081016001600160401b038282108183111715614b8a57614b8a6142af565b8160405284359150614b9b82613da1565b81835260208501356020840152604085013560408401526060850135915080821115614bc657600080fd5b50614bd3368286016142f5565b60608301525092915050565b6000614bed6143e6846143b5565b80848252602080830192508560051b850136811115614c0b57600080fd5b855b81811015614c465780356001600160401b03811115614c2c5760008081fd5b614c3836828a016142f5565b865250938201938201614c0d565b50919695505050505050565b60008351614c64818460208801613d25565b835190830190614c78818360208801613d25565b01949350505050565b60006020808385031215614c9457600080fd5b82356001600160401b03811115614caa57600080fd5b8301601f81018513614cbb57600080fd5b8035614cc96143e6826143b5565b81815260059190911b82018301908381019087831115614ce857600080fd5b928401925b82841015614d0657833582529284019290840190614ced565b979650505050505050565b808201808211156108d5576108d56148e9565b6001600160a01b03848116825283166020820152606060408201819052600090610afe90830184613d49565b634e487b7160e01b600052601260045260246000fd5b600082614d7557614d75614d50565b500490565b634e487b7160e01b600052600160045260246000fd5b818103818111156108d5576108d56148e9565b600081614db257614db26148e9565b506000190190565b60008351614dcc818460208801613d25565b601760f91b9083019081528351614dea816001840160208801613d25565b01600101949350505050565b600060208284031215614e0857600080fd5b5051919050565b600060208284031215614e2157600080fd5b8151610d4c81613da1565b8183823760009101908152919050565b81516001600160401b03811115614e5557614e556142af565b614e6981614e63845461483e565b84614a13565b602080601f831160018114614e9e5760008415614e865750858301515b600019600386901b1c1916600185901b178555611015565b600085815260208120601f198616915b82811015614ecd57888601518255948401946001909101908401614eae565b5085821015614eeb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008451614f0d818460208901613d25565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600082614f9b57614f9b614d50565b500690565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052602160045260246000fd5b828152604060208201526000610c406040830184613d49565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612ff990830184613d49565b60006020828403121561505f57600080fd5b8151610d4c81613cf256febe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000811000a";
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
exports.UNSRegistryMock__factory = UNSRegistryMock__factory;
UNSRegistryMock__factory.bytecode = _bytecode;
UNSRegistryMock__factory.abi = _abi;
