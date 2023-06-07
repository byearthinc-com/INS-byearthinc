"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNSRegistry__factory = void 0;
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
const _bytecode = "0x608060405234801561001057600080fd5b50614fc6806100206000396000f3fe608060405234801561001057600080fd5b50600436106103835760003560e01c806370a08231116101de578063b88d4fde1161010f578063e985e9c5116100ad578063f5c1f76e1161007c578063f5c1f76e14610831578063f7df5c6014610844578063f8c8765e14610857578063ffa1ad741461086a57600080fd5b8063e985e9c5146107d3578063ebf0c7171461080f578063ec129eea14610816578063f25eb5c11461082957600080fd5b8063bebec6b4116100e9578063bebec6b414610787578063c87b56dd1461079a578063ce92b33e146107ad578063cf2c52cb146107c057600080fd5b8063b88d4fde1461074e578063ba5d40b714610761578063bb5b27e11461077457600080fd5b8063a22cb4651161017c578063ab3b87fe11610156578063ab3b87fe146106e7578063ac9650d8146106fa578063b3f9e4cb1461071a578063b85afd281461072d57600080fd5b8063a22cb46514610695578063a3f4df7e146106a8578063a4247400146106d457600080fd5b80639508b1c4116101b85780639508b1c41461065f5780639559c0bd1461067257806395d89b411461067a57806399e0dd7c1461068257600080fd5b806370a08231146106265780637e37479e1461063957806394d008ef1461064c57600080fd5b806342842e0e116102b85780635096023911610256578063638e5c7811610230578063638e5c78146105be578063663f7b2a146105d1578063672b9f81146105e45780636ccbae5f1461060557600080fd5b8063509602391461057c578063572b6c051461058f5780636352211e146105ab57600080fd5b806347c816991161029257806347c81699146105305780634a72584d146105435780634f558e791461055657806350382c1a1461056957600080fd5b806342842e0e146104f757806342966c681461050a578063430c20811461051d57600080fd5b80631bf7e13e11610325578063276fabb1116102ff578063276fabb11461049d57806327f18975146104be578063310bd74b146104d157806340c10f19146104e457600080fd5b80631bf7e13e146104645780631f71be061461047757806323b872dd1461048a57600080fd5b8063095ea7b311610361578063095ea7b3146103f0578063150b7a02146104055780631bd8cc1a146104315780631be5e7ed1461045157600080fd5b806301ffc9a71461038857806306fdde03146103b0578063081812fc146103c5575b600080fd5b61039b610396366004613c10565b61088e565b60405190151581526020015b60405180910390f35b6103b861089f565b6040516103a79190613c7d565b6103d86103d3366004613c90565b610931565b6040516001600160a01b0390911681526020016103a7565b6104036103fe366004613cbe565b610958565b005b610418610413366004613d2b565b610971565b6040516001600160e01b031990911681526020016103a7565b61044461043f366004613de1565b610acb565b6040516103a79190613e84565b6103b861045f366004613e97565b610bc1565b6103b8610472366004613ece565b610c0c565b610403610485366004613f53565b610d17565b61040361049836600461400f565b610dbf565b6104b06104ab366004614050565b610e12565b6040519081526020016103a7565b6104036104cc366004614091565b610e21565b6104036104df366004613c90565b610e69565b6104036104f2366004613cbe565b610ea4565b61040361050536600461400f565b610ef1565b610403610518366004613c90565b610f0c565b61039b61052b366004613cbe565b610f50565b61040361053e366004614104565b610f5c565b610403610551366004614165565b610f9b565b61039b610564366004613c90565b610fe1565b61040361057736600461426c565b611000565b61040361058a3660046142a0565b611036565b61039b61059d3660046142a0565b6001600160a01b0316301490565b6103d86105b9366004613c90565b611096565b6104036105cc366004613c90565b6110f6565b6104036105df366004614358565b611141565b6105f76105f23660046143a0565b61117b565b6040516103a79291906143c2565b6104b0610613366004613c90565b6000908152610100602052604090205490565b6104b06106343660046142a0565b611193565b6104b06106473660046142a0565b611219565b61040361065a3660046143e7565b61124a565b61040361066d366004614442565b611299565b6104b0601481565b6103b8611320565b6104036106903660046144e5565b61132f565b6104036106a336600461451a565b6113b6565b6103b86040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b61039b6106e2366004613ece565b6113c8565b6104036106f5366004613cbe565b611413565b61070d610708366004614050565b611458565b6040516103a79190614546565b6103d8610728366004613c90565b611534565b61074061073b366004613de1565b61155e565b6040516103a79291906145a8565b61040361075c3660046145cd565b611680565b61040361076f366004613f53565b6116c7565b6103b8610782366004613c90565b611750565b6103b86107953660046142a0565b6117f2565b6103b86107a8366004613c90565b6118bc565b6104036107bb366004614091565b611922565b6104036107ce366004614638565b611961565b61039b6107e136600461467f565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006104b0565b610403610824366004614091565b611a30565b610403611a6f565b61044461083f366004614050565b611af6565b6104036108523660046146b8565b611ba9565b6104036108653660046146ea565b611c3a565b6103b86040518060400160405280600581526020016418171c171960d91b81525081565b600061089982611e10565b92915050565b6060606580546108ae90614746565b80601f01602080910402602001604051908101604052809291908181526020018280546108da90614746565b80156109275780601f106108fc57610100808354040283529160200191610927565b820191906000526020600020905b81548152906001019060200180831161090a57829003601f168201915b5050505050905090565b600061093c82611e60565b506000908152606960205260409020546001600160a01b031690565b8061096281611ebf565b61096c8383611f25565b505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b03166109a6612047565b6001600160a01b031603610a67576109bc612047565b6001600160a01b03166342966c68856040518263ffffffff1660e01b81526004016109e991815260200190565b600060405180830381600087803b158015610a0357600080fd5b505af1158015610a17573d6000803e3d6000fd5b505050821580159150610a315750610a318284018461477a565b15610a4f57610a403085612056565b610a4a85856121a4565b610a59565b610a598585612056565b50630a85bd0160e11b610ac2565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b60648201526084015b60405180910390fd5b95945050505050565b6060826001600160401b03811115610ae557610ae56141b7565b604051908082528060200260200182016040528015610b1857816020015b6060815260200190600190039081610b035790505b50905060005b83811015610bb957610b89858583818110610b3b57610b3b614795565b9050602002810190610b4d91906147ab565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525087925061224f915050565b828281518110610b9b57610b9b614795565b60200260200101819052508080610bb190614807565b915050610b1e565b509392505050565b6060610c0484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525086925061224f915050565b949350505050565b606060005a9050610c1e8585856113c8565b610c7a5760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b6064820152608401610ab9565b610d0c610c8a60208701876142a0565b30604088013584610c9e60608b018b6147ab565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525061228492505050565b9150505b9392505050565b610134546001600160a01b0316610d2c612047565b6001600160a01b031614610d525760405162461bcd60e51b8152600401610ab990614820565b6000610d66610d61888a614867565b612365565b509050610d72816123bd565b610d85610d7e82611096565b8a8361242a565b610d9286868686856125d1565b8115610db457610db48982610daf610daa8b8d614867565b61263f565b6126c0565b505050505050505050565b80610dd1610dcb612047565b82612702565b610ded5760405162461bcd60e51b8152600401610ab990614874565b81610df781611ebf565b610e00836123bd565b610e0b85858561242a565b5050505050565b6000610bb9610d618385614867565b80610e2d610dcb612047565b610e495760405162461bcd60e51b8152600401610ab990614874565b81610e5381611ebf565b610e608787878787612780565b50505050505050565b80610e75610dcb612047565b610e915760405162461bcd60e51b8152600401610ab990614874565b81610e9b81611ebf565b61096c836123bd565b610eac6127e3565b6001600160a01b0316610ebd612047565b6001600160a01b031614610ee35760405162461bcd60e51b8152600401610ab9906148bd565b610eed8282612056565b5050565b61096c83838360405180602001604052806000815250611680565b80610f18610dcb612047565b610f345760405162461bcd60e51b8152600401610ab990614874565b81610f3e81611ebf565b610f47836123bd565b61096c836128d8565b6000610d108383612702565b80610f68610dcb612047565b610f845760405162461bcd60e51b8152600401610ab990614874565b81610f8e81611ebf565b610e60878787878761297f565b80610fa7610dcb612047565b610fc35760405162461bcd60e51b8152600401610ab990614874565b81610fcd81611ebf565b610fd986868686612a5e565b505050505050565b6000818152606760205260408120546001600160a01b03161515610899565b6110338160405160200161101491906148ff565b6040516020818303038152906040528051906020012060001c82612afe565b50565b610134546001600160a01b031661104b612047565b6001600160a01b0316146110715760405162461bcd60e51b8152600401610ab990614820565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b6000818152606760205260408120546001600160a01b0316806108995760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610ab9565b80611102610dcb612047565b61111e5760405162461bcd60e51b8152600401610ab990614874565b611130611129612047565b308461242a565b610eed61113b612047565b836121a4565b600061114c82612365565b50905061115881612b23565b61116181611ebf565b610eed61116c612047565b826111768561263f565b612b93565b6060806111888484612c1a565b909590945092505050565b60006001600160a01b0382166111fd5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610ab9565b506001600160a01b031660009081526068602052604090205490565b6001600160a01b0381166000908152610135602052604081205461123c81612c3b565b611244578091505b50919050565b6112526127e3565b6001600160a01b0316611263612047565b6001600160a01b0316146112895760405162461bcd60e51b8152600401610ab9906148bd565b6112938484612056565b50505050565b6112a38787612c85565b6112ab612047565b6001600160a01b03166112bd86611096565b6001600160a01b0316146113135760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610ab9565b610e6084848484896125d1565b6060606680546108ae90614746565b610134546001600160a01b0316611344612047565b6001600160a01b03161461136a5760405162461bcd60e51b8152600401610ab990614820565b610133611378828483614961565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b82826040516113aa929190614a49565b60405180910390a15050565b610eed6113c1612047565b8383612cf4565b6000610c046113d685614a5d565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250612dc292505050565b8061141f610dcb612047565b61143b5760405162461bcd60e51b8152600401610ab990614874565b8161144581611ebf565b61129361145184611096565b858561242a565b606060006114668385614ae7565b905030330361152b5760005b83811015611529576114f9611485612047565b61148d612f0b565b87878581811061149f5761149f614795565b90506020028101906114b191906147ab565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525060408051602081019091529081529250612f1f915050565b82828151811061150b5761150b614795565b6020026020010181905250808061152190614807565b915050611472565b505b610c0481612f4f565b6000818152606760205260408120546001600160a01b0316611557576000610899565b3092915050565b606080836001600160401b03811115611579576115796141b7565b6040519080825280602002602001820160405280156115ac57816020015b60608152602001906001900390816115975790505b509150836001600160401b038111156115c7576115c76141b7565b6040519080825280602002602001820160405280156115fa57816020015b60608152602001906001900390816115e55790505b50905060005b848110156116775761162a86868381811061161d5761161d614795565b9050602002013585612c1a565b84838151811061163c5761163c614795565b6020026020010184848151811061165557611655614795565b602002602001018290528290525050808061166f90614807565b915050611600565b50935093915050565b8161168c610dcb612047565b6116a85760405162461bcd60e51b8152600401610ab990614874565b826116b281611ebf565b6116bb846123bd565b610fd98686868661307a565b610134546001600160a01b03166116dc612047565b6001600160a01b0316146117025760405162461bcd60e51b8152600401610ab990614820565b600080611712610d61898b614867565b9150915061171f816130ad565b6117378a83611731610daa8c8e614867565b8661310d565b61174487878787866125d1565b50505050505050505050565b600081815260c96020526040902080546060919061176d90614746565b80601f016020809104026020016040519081016040528092919081815260200182805461179990614746565b80156117e65780601f106117bb576101008083540402835291602001916117e6565b820191906000526020600020905b8154815290600101906020018083116117c957829003601f168201915b50505050509050919050565b6001600160a01b0381166000908152610135602052604090205460609061181881612c3b565b61124457600081815261013860205260409020805461183690614746565b80601f016020809104026020016040519081016040528092919081815260200182805461186290614746565b80156118af5780601f10611884576101008083540402835291602001916118af565b820191906000526020600020905b81548152906001019060200180831161189257829003601f168201915b5050505050915050919050565b60606118c782611e60565b60006118d1613160565b905060008151116118f15760405180602001604052806000815250610d10565b806118fb84613170565b60405160200161190c929190614b5a565b6040516020818303038152906040529392505050565b8061192e610dcb612047565b61194a5760405162461bcd60e51b8152600401610ab990614874565b8161195481611ebf565b610e6087878787876125d1565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b0316611994612047565b6001600160a01b0316146119ba5760405162461bcd60e51b8152600401610ab9906148bd565b60208190036119dd5760006119d182840184613c90565b90506112938482612056565b60006119eb82840184614b89565b805190915060005b81811015610fd957611a1e86848381518110611a1157611a11614795565b6020026020010151612056565b80611a2881614807565b9150506119f3565b80611a3c610dcb612047565b611a585760405162461bcd60e51b8152600401610ab990614874565b81611a6281611ebf565b610e608787878787613270565b6000611a79612047565b6001600160a01b0381166000908152610135602052604081205491925003611aed5760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b6064820152608401610ab9565b61103381613286565b6060816001600160401b03811115611b1057611b106141b7565b604051908082528060200260200182016040528015611b4357816020015b6060815260200190600190039081611b2e5790505b50905060005b82811015611ba257611b72848483818110611b6657611b66614795565b90506020020135611750565b828281518110611b8457611b84614795565b60200260200101819052508080611b9a90614807565b915050611b49565b5092915050565b610134546001600160a01b0316611bbe612047565b6001600160a01b031614611be45760405162461bcd60e51b8152600401610ab990614820565b61013454611bfb906001600160a01b031684612056565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611c2d929190614a49565b60405180910390a2505050565b600054610100900460ff1615808015611c5a5750600054600160ff909116105b80611c745750303b158015611c74575060005460ff166001145b611cd75760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610ab9565b6000805460ff191660011790558015611cfa576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b90830152611da2916132cb565b611daa61330b565b611db261330b565b611dbb83613334565b611dc482613364565b8015610e0b576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b1480611e4157506001600160e01b03198216635b5e139f60e01b145b8061089957506301ffc9a760e01b6001600160e01b0319831614610899565b6000818152606760205260409020546001600160a01b03166110335760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610ab9565b303303611f1c57611ece612f0b565b81146110335760405162461bcd60e51b815260206004820152601760248201527f52656769737472793a20544f4b454e5f494e56414c49440000000000000000006044820152606401610ab9565b61103381613394565b6000611f3082611096565b9050806001600160a01b0316836001600160a01b031603611f9d5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610ab9565b806001600160a01b0316611faf612047565b6001600160a01b03161480611fcb5750611fcb816107e1612047565b61203d5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610ab9565b61096c83836133c2565b6000612051613430565b905090565b6001600160a01b0382166120ac5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610ab9565b6000818152606760205260409020546001600160a01b0316156121115760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610ab9565b61211d6000838361344b565b6001600160a01b0382166000908152606860205260408120805460019290612146908490614c19565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006121ae6127e3565b90506121ba81836133c2565b600080516020614f7383398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb91612217918891309190604401614c2c565b600060405180830381600087803b15801561223157600080fd5b505af1158015612245573d6000803e3d6000fd5b5050505050505050565b6060610d108360405160200161226591906148ff565b6040516020818303038152906040528051906020012060001c8361348c565b606061228f85613394565b600080876001600160a01b0316866122a98b8a8989612f1f565b6040516122b691906148ff565b60006040518083038160008787f1925050503d80600081146122f4576040519150601f19603f3d011682016040523d82523d6000602084013e6122f9565b606091505b50909250905061230a603f87614c6e565b5a1161231857612318614c82565b61235882826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c454400000000000081525061356e565b9998505050505050505050565b805160009081905b80156123b7578291506123a38285612386600185614c98565b8151811061239657612396614795565b60200260200101516135a7565b9250806123af81614cab565b91505061236d565b50915091565b6123c681613653565b6040516020016123d891815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b031661243d82611096565b6001600160a01b0316146124a15760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610ab9565b6001600160a01b0382166125035760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610ab9565b61250e83838361344b565b6125196000826133c2565b6001600160a01b0383166000908152606860205260408120805460019290612542908490614c98565b90915550506001600160a01b0382166000908152606860205260408120805460019290612570908490614c19565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60005b84811015610fd95761262d8686838181106125f1576125f1614795565b905060200281019061260391906147ab565b86868581811061261557612615614795565b905060200281019061262791906147ab565b8661297f565b8061263781614807565b9150506125d4565b606060008260008151811061265657612656614795565b602002602001015190506000600190505b8351811015611ba2578184828151811061268357612683614795565b602002602001015160405160200161269c929190614cc2565b604051602081830303815290604052915080806126b890614807565b915050612667565b61dead6001600160a01b038416148015906126f257506001600160a01b03831660009081526101356020526040902054155b1561096c5761096c838383612b93565b60008061270e83611096565b9050806001600160a01b0316846001600160a01b0316148061275557506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610c045750836001600160a01b031661276e84610931565b6001600160a01b031614949350505050565b60005b84811015610fd9576127d18686838181106127a0576127a0614795565b905060200201358585848181106127b9576127b9614795565b90506020028101906127cb91906147ab565b85612a5e565b806127db81614807565b915050612783565b600080600080516020614f738339815191525460405163721804d360e11b81523060048201526001600160a01b039091169150600090829063e43009a690602401602060405180830381865afa158015612841573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128659190614cfe565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f960390602401602060405180830381865afa1580156128ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128d19190614d17565b9250505090565b60006128e382611096565b90506128f18160008461344b565b6128fc6000836133c2565b6001600160a01b0381166000908152606860205260408120805460019290612925908490614c98565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008585604051602001612994929190614d34565b60408051601f198184030181528282528051602091820120601f89018290048202840182019092528783529092506129e89183918990899081908401838280828437600092019190915250612afe92505050565b610fd98187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b01819004810282018101909252898152925089915088908190840183828082843760009201919091525088925061367f915050565b612a67846137b4565b612ab35760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e44000000006044820152606401610ab9565b61129384612ac086611750565b85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525087925061367f915050565b612b07826137b4565b610eed57600082815260c96020526040902061096c8282614d44565b612b2b612047565b6001600160a01b0316612b3d82611096565b6001600160a01b0316146110335760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610ab9565b6000828152610138602052604090208054612bad90614746565b9050600003612bd157600082815261013860205260409020612bcf8282614d44565b505b6001600160a01b03831660008181526101356020526040808220859055518492917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a3505050565b606080612c2684611750565b9150612c32848461348c565b90509250929050565b6000818152610137602052604081205460ff16801561089957506101366000612c62612047565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b600080516020614f7383398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f90612cc69086908690600401614a49565b600060405180830381600087803b158015612ce057600080fd5b505af1158015610e60573d6000803e3d6000fd5b816001600160a01b0316836001600160a01b031603612d555760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610ab9565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f90602401602060405180830381865afa158015612e09573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e2d9190614cfe565b90506000612edb866060015180519060200120868860200151604051602001612e7b9392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b9050818660200151148015612f0157508551612f01906001600160a01b031682866137da565b9695505050505050565b6000303303612f1c5750601f193601355b90565b6060828585604051602001612f3693929190614e03565b6040516020818303038152906040529050949350505050565b606081516001600160401b03811115612f6a57612f6a6141b7565b604051908082528060200260200182016040528015612f9d57816020015b6060815260200190600190039081612f885790505b50905060005b825181101561124457600080306001600160a01b0316858481518110612fcb57612fcb614795565b6020026020010151604051612fe091906148ff565b600060405180830381855af49150503d806000811461301b576040519150601f19603f3d011682016040523d82523d6000602084013e613020565b606091505b50915091506130488282604051806060016040528060278152602001614f936027913961356e565b84848151811061305a5761305a614795565b60200260200101819052505050808061307290614807565b915050612fa3565b61308584848461242a565b6130918484848461391c565b6112935760405162461bcd60e51b8152600401610ab990614e42565b6000818152610137602052604090205460ff16156110335760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f555047524144454400000000000000006044820152606401610ab9565b6131178484612056565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c3952836040516131479190613c7d565b60405180910390a28015611293576112938484846126c0565b606061013380546108ae90614746565b6060816000036131975750506040805180820190915260018152600360fc1b602082015290565b8160005b81156131c157806131ab81614807565b91506131ba9050600a83614c6e565b915061319b565b6000816001600160401b038111156131db576131db6141b7565b6040519080825280601f01601f191660200182016040528015613205576020820181803683370190505b5090505b8415610c045761321a600183614c98565b9150613227600a86614e94565b613232906030614c19565b60f81b81838151811061324757613247614795565b60200101906001600160f81b031916908160001a905350613269600a86614c6e565b9450613209565b613279816123bd565b610e0b85858585856125d1565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b600054610100900460ff166132f25760405162461bcd60e51b8152600401610ab990614ea8565b60656132fe8382614d44565b50606661096c8282614d44565b600054610100900460ff166133325760405162461bcd60e51b8152600401610ab990614ea8565b565b600054610100900460ff1661335b5760405162461bcd60e51b8152600401610ab990614ea8565b61103381613a21565b600054610100900460ff1661338b5760405162461bcd60e51b8152600401610ab990614ea8565b61103381613a7a565b600081815261010060205260409020546133af906001614c19565b6000918252610100602052604090912055565b600081815260696020526040902080546001600160a01b0319166001600160a01b03841690811790915581906133f782611096565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000303303613446575060331936013560601c90565b503390565b6001600160a01b03821661346257613462816130ad565b6001600160a01b0383166000908152610135602052604090205481900361096c5761096c83613286565b606061349782612c3b565b156134b15750604080516020810190915260008152610899565b60ca60006134be84613653565b8152602001908152602001600020600084815260200190815260200160002080546134e890614746565b80601f016020809104026020016040519081016040528092919081815260200182805461351490614746565b80156135615780601f1061353657610100808354040283529160200191613561565b820191906000526020600020905b81548152906001019060200180831161354457829003601f168201915b5050505050905092915050565b6060831561357d575081610d10565b82511561358d5782518084602001fd5b8160405162461bcd60e51b8152600401610ab99190613c7d565b600081516000036135f25760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b6044820152606401610ab9565b828260405160200161360491906148ff565b60405160208183030381529060405280519060200120604051602001613634929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b600081815260cb60205260408120541561367b57600082815260cb6020526040902054610899565b5090565b60ca600061368c83613653565b8152602001908152602001600020600085815260200190815260200160002080546136b690614746565b905060000361370e57826040516136cd91906148ff565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f86856040516137059190613c7d565b60405180910390a35b8160ca600061371c84613653565b8152602001908152602001600020600086815260200190815260200160002090816137479190614d44565b508160405161375691906148ff565b60405180910390208360405161376c91906148ff565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d9286866040516137a69291906143c2565b60405180910390a450505050565b600081815260c96020526040812080548291906137d090614746565b9050119050919050565b60008060006137e98585613ac8565b9092509050600081600481111561380257613802614ef3565b1480156138205750856001600160a01b0316826001600160a01b0316145b1561383057600192505050610d10565b600080876001600160a01b0316631626ba7e60e01b8888604051602401613858929190614f09565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161389691906148ff565b600060405180830381855afa9150503d80600081146138d1576040519150601f19603f3d011682016040523d82523d6000602084013e6138d6565b606091505b50915091508180156138e9575080516020145b801561391057508051630b135d3f60e11b9061390e9083016020908101908401614cfe565b145b98975050505050505050565b60006001600160a01b0384163b15613a1957836001600160a01b031663150b7a02613945612047565b8786866040518563ffffffff1660e01b81526004016139679493929190614f22565b6020604051808303816000875af19250505080156139a2575060408051601f3d908101601f1916820190925261399f91810190614f55565b60015b6139ff573d8080156139d0576040519150601f19603f3d011682016040523d82523d6000602084013e6139d5565b606091505b5080516000036139f75760405162461bcd60e51b8152600401610ab990614e42565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c04565b506001610c04565b600054610100900460ff16613a485760405162461bcd60e51b8152600401610ab990614ea8565b80600080516020614f738339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff16613aa15760405162461bcd60e51b8152600401610ab990614ea8565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613a59565b6000808251604103613afe5760208301516040840151606085015160001a613af287828585613b0d565b94509450505050613b06565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613b445750600090506003613bf1565b8460ff16601b14158015613b5c57508460ff16601c14155b15613b6d5750600090506004613bf1565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613bc1573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613bea57600060019250925050613bf1565b9150600090505b94509492505050565b6001600160e01b03198116811461103357600080fd5b600060208284031215613c2257600080fd5b8135610d1081613bfa565b60005b83811015613c48578181015183820152602001613c30565b50506000910152565b60008151808452613c69816020860160208601613c2d565b601f01601f19169290920160200192915050565b602081526000610d106020830184613c51565b600060208284031215613ca257600080fd5b5035919050565b6001600160a01b038116811461103357600080fd5b60008060408385031215613cd157600080fd5b8235613cdc81613ca9565b946020939093013593505050565b60008083601f840112613cfc57600080fd5b5081356001600160401b03811115613d1357600080fd5b602083019150836020828501011115613b0657600080fd5b600080600080600060808688031215613d4357600080fd5b8535613d4e81613ca9565b94506020860135613d5e81613ca9565b93506040860135925060608601356001600160401b03811115613d8057600080fd5b613d8c88828901613cea565b969995985093965092949392505050565b60008083601f840112613daf57600080fd5b5081356001600160401b03811115613dc657600080fd5b6020830191508360208260051b8501011115613b0657600080fd5b600080600060408486031215613df657600080fd5b83356001600160401b03811115613e0c57600080fd5b613e1886828701613d9d565b909790965060209590950135949350505050565b600082825180855260208086019550808260051b84010181860160005b84811015613e7757601f19868403018952613e65838351613c51565b98840198925090830190600101613e49565b5090979650505050505050565b602081526000610d106020830184613e2c565b600080600060408486031215613eac57600080fd5b83356001600160401b03811115613ec257600080fd5b613e1886828701613cea565b600080600060408486031215613ee357600080fd5b83356001600160401b0380821115613efa57600080fd5b9085019060808288031215613f0e57600080fd5b90935060208501359080821115613f2457600080fd5b50613f3186828701613cea565b9497909650939450505050565b80358015158114613f4e57600080fd5b919050565b60008060008060008060008060a0898b031215613f6f57600080fd5b8835613f7a81613ca9565b975060208901356001600160401b0380821115613f9657600080fd5b613fa28c838d01613d9d565b909950975060408b0135915080821115613fbb57600080fd5b613fc78c838d01613d9d565b909750955060608b0135915080821115613fe057600080fd5b50613fed8b828c01613d9d565b9094509250614000905060808a01613f3e565b90509295985092959890939650565b60008060006060848603121561402457600080fd5b833561402f81613ca9565b9250602084013561403f81613ca9565b929592945050506040919091013590565b6000806020838503121561406357600080fd5b82356001600160401b0381111561407957600080fd5b61408585828601613d9d565b90969095509350505050565b6000806000806000606086880312156140a957600080fd5b85356001600160401b03808211156140c057600080fd5b6140cc89838a01613d9d565b909750955060208801359150808211156140e557600080fd5b506140f288828901613d9d565b96999598509660400135949350505050565b60008060008060006060868803121561411c57600080fd5b85356001600160401b038082111561413357600080fd5b61413f89838a01613cea565b9097509550602088013591508082111561415857600080fd5b506140f288828901613cea565b6000806000806060858703121561417b57600080fd5b8435935060208501356001600160401b0381111561419857600080fd5b6141a487828801613cea565b9598909750949560400135949350505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156141f5576141f56141b7565b604052919050565b600082601f83011261420e57600080fd5b81356001600160401b03811115614227576142276141b7565b61423a601f8201601f19166020016141cd565b81815284602083860101111561424f57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561427e57600080fd5b81356001600160401b0381111561429457600080fd5b610c04848285016141fd565b6000602082840312156142b257600080fd5b8135610d1081613ca9565b60006001600160401b038211156142d6576142d66141b7565b5060051b60200190565b60006142f36142ee846142bd565b6141cd565b8381529050602080820190600585901b84018681111561431257600080fd5b845b8181101561434d5780356001600160401b038111156143335760008081fd5b61433f898289016141fd565b855250928201928201614314565b505050509392505050565b60006020828403121561436a57600080fd5b81356001600160401b0381111561438057600080fd5b8201601f8101841361439157600080fd5b610c04848235602084016142e0565b600080604083850312156143b357600080fd5b50508035926020909101359150565b6040815260006143d56040830185613c51565b8281036020840152610d0c8185613c51565b600080600080606085870312156143fd57600080fd5b843561440881613ca9565b93506020850135925060408501356001600160401b0381111561442a57600080fd5b61443687828801613cea565b95989497509550505050565b60008060008060008060006080888a03121561445d57600080fd5b87356001600160401b038082111561447457600080fd5b6144808b838c01613cea565b909950975060208a0135965060408a01359150808211156144a057600080fd5b6144ac8b838c01613d9d565b909650945060608a01359150808211156144c557600080fd5b506144d28a828b01613d9d565b989b979a50959850939692959293505050565b600080602083850312156144f857600080fd5b82356001600160401b0381111561450e57600080fd5b61408585828601613cea565b6000806040838503121561452d57600080fd5b823561453881613ca9565b9150612c3260208401613f3e565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561459b57603f19888603018452614589858351613c51565b9450928501929085019060010161456d565b5092979650505050505050565b6040815260006145bb6040830185613e2c565b8281036020840152610d0c8185613e2c565b600080600080608085870312156145e357600080fd5b84356145ee81613ca9565b935060208501356145fe81613ca9565b92506040850135915060608501356001600160401b0381111561462057600080fd5b61462c878288016141fd565b91505092959194509250565b60008060006040848603121561464d57600080fd5b833561465881613ca9565b925060208401356001600160401b0381111561467357600080fd5b613f3186828701613cea565b6000806040838503121561469257600080fd5b823561469d81613ca9565b915060208301356146ad81613ca9565b809150509250929050565b6000806000604084860312156146cd57600080fd5b8335925060208401356001600160401b0381111561467357600080fd5b6000806000806080858703121561470057600080fd5b843561470b81613ca9565b9350602085013561471b81613ca9565b9250604085013561472b81613ca9565b9150606085013561473b81613ca9565b939692955090935050565b600181811c9082168061475a57607f821691505b60208210810361124457634e487b7160e01b600052602260045260246000fd5b60006020828403121561478c57600080fd5b610d1082613f3e565b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126147c257600080fd5b8301803591506001600160401b038211156147dc57600080fd5b602001915036819003821315613b0657600080fd5b634e487b7160e01b600052601160045260246000fd5b600060018201614819576148196147f1565b5060010190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b6000610d103684846142e0565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b60008251614911818460208701613c2d565b9190910192915050565b601f82111561096c57600081815260208120601f850160051c810160208610156149425750805b601f850160051c820191505b81811015610fd95782815560010161494e565b6001600160401b03831115614978576149786141b7565b61498c836149868354614746565b8361491b565b6000601f8411600181146149c057600085156149a85750838201355b600019600387901b1c1916600186901b178355610e0b565b600083815260209020601f19861690835b828110156149f157868501358255602094850194600190920191016149d1565b5086821015614a0e5760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b602081526000610c04602083018486614a20565b600060808236031215614a6f57600080fd5b604051608081016001600160401b038282108183111715614a9257614a926141b7565b8160405284359150614aa382613ca9565b81835260208501356020840152604085013560408401526060850135915080821115614ace57600080fd5b50614adb368286016141fd565b60608301525092915050565b6000614af56142ee846142bd565b80848252602080830192508560051b850136811115614b1357600080fd5b855b81811015614b4e5780356001600160401b03811115614b345760008081fd5b614b4036828a016141fd565b865250938201938201614b15565b50919695505050505050565b60008351614b6c818460208801613c2d565b835190830190614b80818360208801613c2d565b01949350505050565b60006020808385031215614b9c57600080fd5b82356001600160401b03811115614bb257600080fd5b8301601f81018513614bc357600080fd5b8035614bd16142ee826142bd565b81815260059190911b82018301908381019087831115614bf057600080fd5b928401925b82841015614c0e57833582529284019290840190614bf5565b979650505050505050565b80820180821115610899576108996147f1565b6001600160a01b03848116825283166020820152606060408201819052600090610ac290830184613c51565b634e487b7160e01b600052601260045260246000fd5b600082614c7d57614c7d614c58565b500490565b634e487b7160e01b600052600160045260246000fd5b81810381811115610899576108996147f1565b600081614cba57614cba6147f1565b506000190190565b60008351614cd4818460208801613c2d565b601760f91b9083019081528351614cf2816001840160208801613c2d565b01600101949350505050565b600060208284031215614d1057600080fd5b5051919050565b600060208284031215614d2957600080fd5b8151610d1081613ca9565b8183823760009101908152919050565b81516001600160401b03811115614d5d57614d5d6141b7565b614d7181614d6b8454614746565b8461491b565b602080601f831160018114614da65760008415614d8e5750858301515b600019600386901b1c1916600185901b178555610fd9565b600085815260208120601f198616915b82811015614dd557888601518255948401946001909101908401614db6565b5085821015614df35787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008451614e15818460208901613c2d565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600082614ea357614ea3614c58565b500690565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052602160045260246000fd5b828152604060208201526000610c046040830184613c51565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612f0190830184613c51565b600060208284031215614f6757600080fd5b8151610d1081613bfa56febe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class UNSRegistry__factory extends ethers_1.ContractFactory {
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
exports.UNSRegistry__factory = UNSRegistry__factory;
UNSRegistry__factory.bytecode = _bytecode;
UNSRegistry__factory.abi = _abi;
