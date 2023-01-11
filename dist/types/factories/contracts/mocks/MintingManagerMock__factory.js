"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintingManagerMock__factory = void 0;
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
        ],
        name: "addTld",
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
        name: "blocklist",
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
                        name: "to",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "label",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "tld",
                        type: "uint256",
                    },
                ],
                internalType: "struct IMintingManager.BulkSLDIssueRequest[]",
                name: "requests",
                type: "tuple[]",
            },
        ],
        name: "bulkIssue",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50613b4e806100206000396000f3fe6080604052600436106102675760003560e01c806391d1485411610144578063c3a3bc00116100b6578063d53913931161007a578063d539139314610776578063d547741f14610798578063d6ab22ed146107b8578063ec527389146107d8578063f2fde38b146107f8578063ffa1ad741461081857600080fd5b8063c3a3bc00146106d6578063cc2c3fc4146106f6578063ceeb4f5014610716578063d1f5692c14610736578063d4a32ad61461075657600080fd5b8063a3f4df7e11610108578063a3f4df7e146105e9578063a849d65c14610636578063aa271e1a14610656578063ae31844a14610676578063b0aa98c714610696578063b9998a24146106b657600080fd5b806391d148541461055f578063983b2d561461057f578063986502751461059f57806399e0dd7c146105b4578063a217fddf146105d457600080fd5b80635b6fa8db116101dd578063715018a6116101a1578063715018a6146104c457806371e2a657146104d957806381c81d35146104f95780638456cb591461050c5780638da5cb5b14610521578063906cecc11461053f57600080fd5b80635b6fa8db1461043c5780635c975abb1461045c5780635cd7e3b3146104715780635fc1964f14610491578063634486da146104b157600080fd5b80633092afd51161022f5780633092afd51461034157806336568abe146103615780633f41b614146103815780633f4ba83a146103b9578063463c4bcb146103ce578063572b6c05146103ee57600080fd5b806301ffc9a71461026c5780631459457a146102a1578063248a9ca3146102c3578063268b15ed146103015780632f2ff15d14610321575b600080fd5b34801561027857600080fd5b5061028c6102873660046132a5565b610849565b60405190151581526020015b60405180910390f35b3480156102ad57600080fd5b506102c16102bc3660046132cd565b610880565b005b3480156102cf57600080fd5b506102f36102de36600461325e565b60009081526097602052604090206001015490565b604051908152602001610298565b34801561030d57600080fd5b506102c161031c366004613370565b610be7565b34801561032d57600080fd5b506102c161033c366004613276565b610c79565b34801561034d57600080fd5b506102c161035c366004612ebe565b610ca3565b34801561036d57600080fd5b506102c161037c366004613276565b610cb7565b34801561038d57600080fd5b5060c9546103a1906001600160a01b031681565b6040516001600160a01b039091168152602001610298565b3480156103c557600080fd5b506102c1610d45565b3480156103da57600080fd5b506102c16103e936600461325e565b610d57565b3480156103fa57600080fd5b5061028c610409366004612ebe565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b34801561044857600080fd5b5060cc546103a1906001600160a01b031681565b34801561046857600080fd5b5061028c610d87565b34801561047d57600080fd5b506102c161048c366004612f9e565b610d9d565b34801561049d57600080fd5b506102c16104ac3660046131a2565b610f97565b6102c16104bf366004612ebe565b610fed565b3480156104d057600080fd5b506102c16110b0565b3480156104e557600080fd5b506102c16104f43660046131a2565b6110c2565b6102c1610507366004612ebe565b611118565b34801561051857600080fd5b506102c1611195565b34801561052d57600080fd5b506033546001600160a01b03166103a1565b34801561054b57600080fd5b506102c161055a366004613059565b6111a5565b34801561056b57600080fd5b5061028c61057a366004613276565b61122b565b34801561058b57600080fd5b506102c161059a366004612ebe565b611256565b3480156105ab57600080fd5b506102c1611267565b3480156105c057600080fd5b506102c16105cf36600461333d565b611281565b3480156105e057600080fd5b506102f3600081565b3480156105f557600080fd5b50610629604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b604051610298919061365e565b34801561064257600080fd5b5060cb546103a1906001600160a01b031681565b34801561066257600080fd5b5061028c610671366004612ebe565b611360565b34801561068257600080fd5b506102c1610691366004613163565b61137a565b3480156106a257600080fd5b5061028c6106b136600461325e565b611485565b3480156106c257600080fd5b506102c16106d1366004612ebe565b6114e3565b3480156106e257600080fd5b506102c16106f136600461333d565b611528565b34801561070257600080fd5b5060ca546103a1906001600160a01b031681565b34801561072257600080fd5b506102c16107313660046130b2565b61156f565b34801561074257600080fd5b506102c1610751366004613163565b611605565b34801561076257600080fd5b506102c1610771366004612ef6565b6116ca565b34801561078257600080fd5b506102f3600080516020613b2283398151915281565b3480156107a457600080fd5b506102c16107b3366004613276565b611850565b3480156107c457600080fd5b506102c16107d3366004613163565b611875565b3480156107e457600080fd5b506102c16107f336600461325e565b611b06565b34801561080457600080fd5b506102c1610813366004612ebe565b611b78565b34801561082457600080fd5b5061062960405180604001604052806005815260200164302e342e3760d81b81525081565b60006001600160e01b03198216637965db0b60e01b148061087a57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600054610100900460ff16158080156108a05750600054600160ff909116105b806108ba5750303b1580156108ba575060005460ff166001145b6109225760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610945576000805461ff0019166101001790555b60c980546001600160a01b038089166001600160a01b03199283161790925560ca805488841690831617905560cb805487841690831617905560cc805492861692909116919091179055610997611b94565b61099f611bcb565b6109a882611c04565b6109b0611c2b565b604080516101e08101825260066101a082018181526563727970746f60d01b6101c0840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a815269313637b1b5b1b430b4b760b11b818401526080850152845180860186526007808252663134ba31b7b4b760c91b8285015260a0860191909152855180870187528281526207070760eb1b8185015260c0860152855180870187528281526264616f60e81b8185015260e086015285518087018752918252621e9a5b60ea1b8284015261010085019190915284518086018652908152663837b63cb3b7b760c91b8183015261012084015283518085018552600b81526a756e73746f707061626c6560a81b81830152610140840152835180850185529182526535b632bb32b960d11b8282015261016083019190915282518084019093526002835261686960f01b9083015261018081019190915260005b600d811015610b9757610b858282600d8110610b7b57634e487b7160e01b600052603260045260246000fd5b6020020151611c6b565b80610b8f81613a97565b915050610b4f565b50508015610bdf576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b8282828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c2b9250849150839050611d87565b610c33610d87565b15610c505760405162461bcd60e51b8152600401610919906136eb565b6060610bdf610c5d611edd565b610c7088610c6b8989611eec565b611f18565b83846001612045565b600082815260976020526040902060010154610c9481612341565b610c9e8383612352565b505050565b610cab6123d9565b610cb481612452565b50565b610cbf611edd565b6001600160a01b0316816001600160a01b031614610d375760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610919565b610d41828261246a565b5050565b610d4d6123d9565b610d556124ef565b565b610d62610671611edd565b610d7e5760405162461bcd60e51b8152600401610919906136b6565b610cb481612597565b600080516020613b028339815191525460ff1690565b610da78688613950565b805160021415610ddd57610dbc610671611edd565b610dd85760405162461bcd60e51b815260040161091990613715565b610ea2565b6000610de88261261b565b60c9549092506001600160a01b0316905063430c2081610e06611edd565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b158015610e4c57600080fd5b505afa158015610e60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e849190613242565b610ea05760405162461bcd60e51b8152600401610919906137e6565b505b610eac8789613950565b600281511015610ece5760405162461bcd60e51b815260040161091990613671565b610f3e610f1060008360018551610ee59190613939565b81518110610f0357634e487b7160e01b600052603260045260246000fd5b6020026020010151612656565b82600081518110610f3157634e487b7160e01b600052603260045260246000fd5b6020026020010151611d87565b610f46610d87565b15610f635760405162461bcd60e51b8152600401610919906136eb565b610f8b8a610f718a8c613950565b610f7b898b613950565b610f85888a613950565b87612045565b50505050505050505050565b610f9f6123d9565b60005b8151811015610d4157610fdb828281518110610fce57634e487b7160e01b600052603260045260246000fd5b6020026020010151612452565b80610fe581613a97565b915050610fa2565b610ff8610671611edd565b6110145760405162461bcd60e51b8152600401610919906136b6565b6001600160a01b03811661106a5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610919565b6110738161270b565b61107b611267565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610d41573d6000803e3d6000fd5b6110b86123d9565b610d556000612723565b6110ca6123d9565b60005b8151811015610d41576111068282815181106110f957634e487b7160e01b600052603260045260246000fd5b602002602001015161270b565b8061111081613a97565b9150506110cd565b611123610671611edd565b61113f5760405162461bcd60e51b8152600401610919906136b6565b6001600160a01b0381166110735760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610919565b61119d6123d9565b610d55612775565b8282828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111e99250849150839050611d87565b6111f1610d87565b1561120e5760405162461bcd60e51b8152600401610919906136eb565b606061122287610c7088610c6b8989611eec565b50505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b61125e6123d9565b610cb48161270b565b610d55600080516020613b2283398151915261037c611edd565b6112896123d9565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906112bb908590859060040161362f565b600060405180830381600087803b1580156112d557600080fd5b505af11580156112e9573d6000803e3d6000fd5b505060cb546001600160a01b0316159150610d4190505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c90611332908590859060040161362f565b600060405180830381600087803b15801561134c57600080fd5b505af1158015610bdf573d6000803e3d6000fd5b600061087a600080516020613b228339815191528361122b565b611385610671611edd565b6113a15760405162461bcd60e51b8152600401610919906136b6565b60c9546040516000916001600160a01b0316906113c490859085906024016135f5565b60408051601f198184030181529181526020820180516001600160e01b0316635718c22560e11b179052516113f99190613439565b6000604051808303816000865af19150503d8060008114611436576040519150601f19603f3d011682016040523d82523d6000602084013e61143b565b606091505b5050905080610c9e5760405162461bcd60e51b81526020600482015260166024820152751d5c19dc985919505b1b081b5bd8dac819985a5b195960521b6044820152606401610919565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd6960208201529081018290526000906114d9906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b6114eb6123d9565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b6115306123d9565b610d4182828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611c6b92505050565b8686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506115b39250849150839050611d87565b6115bb610d87565b156115d85760405162461bcd60e51b8152600401610919906136eb565b610f8b8a6115ea8b610c6b8c8c611eec565b6115f4888a613950565b6115fe8789613950565b6001612045565b61160d6123d9565b60005b81811015610c9e5760c9546001600160a01b0316635096023984848481811061164957634e487b7160e01b600052603260045260246000fd5b905060200201602081019061165e9190612ebe565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801561169f57600080fd5b505af11580156116b3573d6000803e3d6000fd5b5050505080806116c290613a97565b915050611610565b6116d48587613950565b80516002141561170a576116e9610671611edd565b6117055760405162461bcd60e51b815260040161091990613715565b6117cf565b60006117158261261b565b60c9549092506001600160a01b0316905063430c2081611733611edd565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b15801561177957600080fd5b505afa15801561178d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117b19190613242565b6117cd5760405162461bcd60e51b8152600401610919906137e6565b505b6117d98688613950565b6002815110156117fb5760405162461bcd60e51b815260040161091990613671565b611812610f1060008360018551610ee59190613939565b61181a610d87565b156118375760405162461bcd60e51b8152600401610919906136eb565b611845896115ea898b613950565b505050505050505050565b60008281526097602052604090206001015461186b81612341565b610c9e838361246a565b611880610671611edd565b61189c5760405162461bcd60e51b8152600401610919906136b6565b60005b81811015610c9e5761195a8383838181106118ca57634e487b7160e01b600052603260045260246000fd5b90506020028101906118dc919061389a565b6040013584848481811061190057634e487b7160e01b600052603260045260246000fd5b9050602002810190611912919061389a565b611920906020810190613856565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611d8792505050565b6000611a0f84848481811061197f57634e487b7160e01b600052603260045260246000fd5b9050602002810190611991919061389a565b604001358585858181106119b557634e487b7160e01b600052603260045260246000fd5b90506020028101906119c7919061389a565b6119d5906020810190613856565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611f1892505050565b90506000611a1c8261261b565b5060c954604051634f558e7960e01b8152600481018390529192506060916001600160a01b0390911690634f558e799060240160206040518083038186803b158015611a6757600080fd5b505afa158015611a7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a9f9190613242565b611af057611af0868686818110611ac657634e487b7160e01b600052603260045260246000fd5b9050602002810190611ad8919061389a565b611ae6906020810190612ebe565b8483846000612045565b5050508080611afe90613a97565b91505061189f565b611b0e6123d9565b611b17816127dd565b611b335760405162461bcd60e51b815260040161091990613759565b600081815260cd60205260408120611b4a91612d63565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b611b806123d9565b611b8981612803565b610cb4600082612879565b600054610100900460ff16611bbb5760405162461bcd60e51b81526004016109199061379b565b610d55611bc6611edd565b612723565b600054610100900460ff16611bf25760405162461bcd60e51b81526004016109199061379b565b610d556000611bff611edd565b612879565b600054610100900460ff166114eb5760405162461bcd60e51b81526004016109199061379b565b600054610100900460ff16611c525760405162461bcd60e51b81526004016109199061379b565b600080516020613b02833981519152805460ff19169055565b6000611c78600083612656565b600081815260cd602090815260409091208451929350611c9c929091850190612d9d565b50807f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf898083604051611ccd919061365e565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e799060240160206040518083038186803b158015611d1957600080fd5b505afa158015611d2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d519190613242565b610d415760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c60906113329084908690600401613835565b611d90826127dd565b611dac5760405162461bcd60e51b815260040161091990613759565b6000611ddf8260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a81600001511115611e8857611e0a611dfe826000600a612883565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b81415611e885760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b6064820152608401610919565b611e91826128c2565b610c9e5760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a204c4142454c5f494e56414c49440000006044820152606401610919565b6000611ee7612a27565b905090565b60608282604051602001611f01929190613455565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b6060815260200190600190039081611f325790505090508281600081518110611f6b57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060cd60008581526020019081526020016000208054611f9490613a5c565b80601f0160208091040260200160405190810160405280929190818152602001828054611fc090613a5c565b801561200d5780601f10611fe25761010080835404028352916020019161200d565b820191906000526020600020905b815481529060010190602001808311611ff057829003601f168201915b50505050508160018151811061203357634e487b7160e01b600052603260045260246000fd5b60209081029190910101529392505050565b60006120508561261b565b5060c954604051634f558e7960e01b8152600481018390529192506001600160a01b031690634f558e799060240160206040518083038186803b15801561209657600080fd5b505afa1580156120aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120ce9190613242565b801561215c575060c9546040516331a9108f60e11b81526004810183905230916001600160a01b031690636352211e9060240160206040518083038186803b15801561211957600080fd5b505afa15801561212d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121519190612eda565b6001600160a01b0316145b156121d05760c95460405163d106353f60e01b81526001600160a01b039091169063d106353f906121999089908590899089908990600401613586565b600060405180830381600087803b1580156121b357600080fd5b505af11580156121c7573d6000803e3d6000fd5b50505050610bdf565b6121d981612a6e565b6121e285612ac4565b80156121ef575084516002145b156122db5760ca5485516001600160a01b039091169063c36c2125908890889060009061222c57634e487b7160e01b600052603260045260246000fd5b602090810291909101015160cc546040516001600160e01b031960e086901b1681526122669392916001600160a01b031690600401613551565b600060405180830381600087803b15801561228057600080fd5b505af1158015612294573d6000803e3d6000fd5b505050506000845111156122d65760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae7490612199908790879086906004016135bf565b610bdf565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b79061231390899089908990899089906004016134f2565b600060405180830381600087803b15801561232d57600080fd5b505af1158015610f8b573d6000803e3d6000fd5b610cb48161234d611edd565b612b1e565b61235c828261122b565b610d415760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055612395611edd565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6123e1611edd565b6001600160a01b03166123fc6033546001600160a01b031690565b6001600160a01b031614610d555760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610919565b610cb4600080516020613b2283398151915282611850565b612474828261122b565b15610d415760008281526097602090815260408083206001600160a01b03851684529091529020805460ff191690556124ab611edd565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6124f7610d87565b61253a5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b6044820152606401610919565b600080516020613b02833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61257a611edd565b6040516001600160a01b03909116815260200160405180910390a1565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd6960208201529081018290526001906125d6906060016114c0565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b805160009081905b80156126505782915061263c8285610ee5600185613939565b92508061264881613a45565b915050612623565b50915091565b60008151600014156126aa5760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d50545900000000006044820152606401610919565b82826040516020016126bc9190613439565b604051602081830303815290604052805190602001206040516020016126ec929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b610cb4600080516020613b2283398151915282612879565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61277d610d87565b1561279a5760405162461bcd60e51b8152600401610919906136eb565b600080516020613b02833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861257a611edd565b600081815260cd6020526040812080548291906127f990613a5c565b9050119050919050565b61280b6123d9565b6001600160a01b0381166128705760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610919565b610cb481612723565b610d418282612352565b604080518082019091526000808252602082015260405180604001604052808381526020018486602001516128b89190613902565b9052949350505050565b60008151600014156128d657506000919050565b60208201805160f81c603081108015906128f4575060398160ff1611155b158015612916575060618160ff16101580156129145750607a8160ff1611155b155b15612925575060009392505050565b83516001811115612993576129478361293f600184613939565b015160f81c90565b915060308260ff1610158015612961575060398260ff1611155b158015612983575060618260ff16101580156129815750607a8260ff1611155b155b1561299357506000949350505050565b60015b6129a1600183613939565b811015612a1b578381015160f81c9250602d83148015906129d7575060308360ff16101580156129d5575060398360ff1611155b155b80156129f8575060618360ff16101580156129f65750607a8360ff1611155b155b15612a095750600095945050505050565b80612a1381613a97565b915050612996565b50600195945050505050565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b0316331415612a69575060331936013560601c90565b503390565b612a7781611485565b15610d7e5760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b45440000006044820152606401610919565b600080612adb60008460018651610ee59190613939565b60ca549091506001600160a01b031615801590612b175750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b612b28828261122b565b610d4157612b40816001600160a01b03166014612b82565b612b4b836020612b82565b604051602001612b5c92919061347d565b60408051601f198184030181529082905262461bcd60e51b82526109199160040161365e565b60606000612b9183600261391a565b612b9c906002613902565b6001600160401b03811115612bc157634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612beb576020820181803683370190505b509050600360fc1b81600081518110612c1457634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110612c5157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000612c7584600261391a565b612c80906001613902565b90505b6001811115612d14576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110612cc257634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110612ce657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93612d0d81613a45565b9050612c83565b508315612b175760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610919565b508054612d6f90613a5c565b6000825580601f10612d7f575050565b601f016020900490600052602060002090810190610cb49190612e21565b828054612da990613a5c565b90600052602060002090601f016020900481019282612dcb5760008555612e11565b82601f10612de457805160ff1916838001178555612e11565b82800160010185558215612e11579182015b82811115612e11578251825591602001919060010190612df6565b50612e1d929150612e21565b5090565b5b80821115612e1d5760008155600101612e22565b60008083601f840112612e47578182fd5b5081356001600160401b03811115612e5d578182fd5b6020830191508360208260051b8501011115612e7857600080fd5b9250929050565b60008083601f840112612e90578182fd5b5081356001600160401b03811115612ea6578182fd5b602083019150836020828501011115612e7857600080fd5b600060208284031215612ecf578081fd5b8135612b1781613ade565b600060208284031215612eeb578081fd5b8151612b1781613ade565b60008060008060008060006080888a031215612f10578283fd5b8735612f1b81613ade565b965060208801356001600160401b0380821115612f36578485fd5b612f428b838c01612e36565b909850965060408a0135915080821115612f5a578485fd5b612f668b838c01612e36565b909650945060608a0135915080821115612f7e578384fd5b50612f8b8a828b01612e36565b989b979a50959850939692959293505050565b60008060008060008060008060a0898b031215612fb9578182fd5b8835612fc481613ade565b975060208901356001600160401b0380821115612fdf578384fd5b612feb8c838d01612e36565b909950975060408b0135915080821115613003578384fd5b61300f8c838d01612e36565b909750955060608b0135915080821115613027578384fd5b506130348b828c01612e36565b909450925050608089013561304881613af3565b809150509295985092959890939650565b6000806000806060858703121561306e578182fd5b843561307981613ade565b93506020850135925060408501356001600160401b0381111561309a578283fd5b6130a687828801612e7f565b95989497509550505050565b60008060008060008060008060a0898b0312156130cd578182fd5b88356130d881613ade565b97506020890135965060408901356001600160401b03808211156130fa578384fd5b6131068c838d01612e7f565b909850965060608b013591508082111561311e578384fd5b61312a8c838d01612e36565b909650945060808b0135915080821115613142578384fd5b5061314f8b828c01612e36565b999c989b5096995094979396929594505050565b60008060208385031215613175578182fd5b82356001600160401b0381111561318a578283fd5b61319685828601612e36565b90969095509350505050565b600060208083850312156131b4578182fd5b82356001600160401b038111156131c9578283fd5b8301601f810185136131d9578283fd5b80356131ec6131e7826138df565b6138af565b80828252848201915084840188868560051b870101111561320b578687fd5b8694505b8385101561323657803561322281613ade565b83526001949094019391850191850161320f565b50979650505050505050565b600060208284031215613253578081fd5b8151612b1781613af3565b60006020828403121561326f578081fd5b5035919050565b60008060408385031215613288578182fd5b82359150602083013561329a81613ade565b809150509250929050565b6000602082840312156132b6578081fd5b81356001600160e01b031981168114612b17578182fd5b600080600080600060a086880312156132e4578283fd5b85356132ef81613ade565b945060208601356132ff81613ade565b9350604086013561330f81613ade565b9250606086013561331f81613ade565b9150608086013561332f81613ade565b809150509295509295909350565b6000806020838503121561334f578182fd5b82356001600160401b03811115613364578283fd5b61319685828601612e7f565b600080600060408486031215613384578081fd5b8335925060208401356001600160401b038111156133a0578182fd5b6133ac86828701612e7f565b9497909650939450505050565b600081518084526020808501808196508360051b81019150828601855b858110156134005782840389526133ee84835161340d565b988501989350908401906001016133d6565b5091979650505050505050565b60008151808452613425816020860160208601613a15565b601f01601f19169290920160200192915050565b6000825161344b818460208701613a15565b9190910192915050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516134b5816017850160208801613a15565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516134e6816028840160208801613a15565b01602801949350505050565b6001600160a01b038616815260a060208201819052600090613516908301876133b9565b828103604084015261352881876133b9565b9050828103606084015261353c81866133b9565b91505082151560808301529695505050505050565b600060018060a01b03808616835260606020840152613573606084018661340d565b9150808416604084015250949350505050565b60018060a01b038616815284602082015260a0604082015260006135ad60a08301866133b9565b828103606084015261353c81866133b9565b6060815260006135d260608301866133b9565b82810360208401526135e481866133b9565b915050826040830152949350505050565b6020808252810182905260006001600160fb1b03831115613614578081fd5b8260051b808560408501379190910160400190815292915050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b602081526000612b17602083018461340d565b60208082526025908201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456040820152642627abaf9960d91b606082015260800190565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b60208082526024908201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604082015263272a22a960e11b606082015260800190565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6020808252602f908201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060408201526e282927ab22a22fa7a92fa7aba722a960891b606082015260800190565b82815260406020820152600061384e604083018461340d565b949350505050565b6000808335601e1984360301811261386c578283fd5b8301803591506001600160401b03821115613885578283fd5b602001915036819003821315612e7857600080fd5b60008235605e1983360301811261344b578182fd5b604051601f8201601f191681016001600160401b03811182821017156138d7576138d7613ac8565b604052919050565b60006001600160401b038211156138f8576138f8613ac8565b5060051b60200190565b6000821982111561391557613915613ab2565b500190565b600081600019048311821515161561393457613934613ab2565b500290565b60008282101561394b5761394b613ab2565b500390565b600061395e6131e7846138df565b808482526020808301925084368760051b8701111561397b578485fd5b845b87811015613a095781356001600160401b038082111561399b578788fd5b90880190601f36818401126139ae578889fd5b8235828111156139c0576139c0613ac8565b6139d1818301601f191688016138af565b925080835236878286010111156139e657898afd5b80878501888501378201860189905250865250938201939082019060010161397d565b50919695505050505050565b60005b83811015613a30578181015183820152602001613a18565b83811115613a3f576000848401525b50505050565b600081613a5457613a54613ab2565b506000190190565b600181811c90821680613a7057607f821691505b60208210811415613a9157634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415613aab57613aab613ab2565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610cb457600080fd5b8015158114610cb457600080fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class MintingManagerMock__factory extends ethers_1.ContractFactory {
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
exports.MintingManagerMock__factory = MintingManagerMock__factory;
MintingManagerMock__factory.bytecode = _bytecode;
MintingManagerMock__factory.abi = _abi;
