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
];
const _bytecode = "0x608060405234801561001057600080fd5b50613925806100206000396000f3fe60806040526004361061025c5760003560e01c8063906cecc111610144578063c3a3bc00116100b6578063d53913931161007a578063d53913931461074b578063d547741f1461076d578063d6ab22ed1461078d578063ec527389146107ad578063f2fde38b146107cd578063ffa1ad74146107ed57600080fd5b8063c3a3bc00146106ab578063cc2c3fc4146106cb578063ceeb4f50146106eb578063d1f5692c1461070b578063d4a32ad61461072b57600080fd5b8063a217fddf11610108578063a217fddf146105c9578063a3f4df7e146105de578063a849d65c1461062b578063aa271e1a1461064b578063b0aa98c71461066b578063b9998a241461068b57600080fd5b8063906cecc11461053457806391d1485414610554578063983b2d5614610574578063986502751461059457806399e0dd7c146105a957600080fd5b8063572b6c05116101dd578063634486da116101a1578063634486da146104a6578063715018a6146104b957806371e2a657146104ce57806381c81d35146104ee5780638456cb59146105015780638da5cb5b1461051657600080fd5b8063572b6c05146103e35780635b6fa8db146104315780635c975abb146104515780635cd7e3b3146104665780635fc1964f1461048657600080fd5b80633092afd5116102245780633092afd51461033657806336568abe146103565780633f41b614146103765780633f4ba83a146103ae578063463c4bcb146103c357600080fd5b806301ffc9a7146102615780631459457a14610296578063248a9ca3146102b8578063268b15ed146102f65780632f2ff15d14610316575b600080fd5b34801561026d57600080fd5b5061028161027c3660046130b6565b61081e565b60405190151581526020015b60405180910390f35b3480156102a257600080fd5b506102b66102b13660046130de565b610855565b005b3480156102c457600080fd5b506102e86102d336600461306f565b60009081526097602052604090206001015490565b60405190815260200161028d565b34801561030257600080fd5b506102b6610311366004613181565b610bbc565b34801561032257600080fd5b506102b6610331366004613087565b610c4e565b34801561034257600080fd5b506102b6610351366004612ccf565b610c78565b34801561036257600080fd5b506102b6610371366004613087565b610c8c565b34801561038257600080fd5b5060c954610396906001600160a01b031681565b6040516001600160a01b03909116815260200161028d565b3480156103ba57600080fd5b506102b6610d1a565b3480156103cf57600080fd5b506102b66103de36600461306f565b610d2c565b3480156103ef57600080fd5b506102816103fe366004612ccf565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b34801561043d57600080fd5b5060cc54610396906001600160a01b031681565b34801561045d57600080fd5b50610281610d5c565b34801561047257600080fd5b506102b6610481366004612daf565b610d72565b34801561049257600080fd5b506102b66104a1366004612fb3565b610f6c565b6102b66104b4366004612ccf565b610fc2565b3480156104c557600080fd5b506102b6611085565b3480156104da57600080fd5b506102b66104e9366004612fb3565b611097565b6102b66104fc366004612ccf565b6110ed565b34801561050d57600080fd5b506102b661116a565b34801561052257600080fd5b506033546001600160a01b0316610396565b34801561054057600080fd5b506102b661054f366004612e6a565b61117a565b34801561056057600080fd5b5061028161056f366004613087565b611200565b34801561058057600080fd5b506102b661058f366004612ccf565b61122b565b3480156105a057600080fd5b506102b661123c565b3480156105b557600080fd5b506102b66105c436600461314e565b611256565b3480156105d557600080fd5b506102e8600081565b3480156105ea57600080fd5b5061061e604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b60405161028d9190613435565b34801561063757600080fd5b5060cb54610396906001600160a01b031681565b34801561065757600080fd5b50610281610666366004612ccf565b611335565b34801561067757600080fd5b5061028161068636600461306f565b61134f565b34801561069757600080fd5b506102b66106a6366004612ccf565b6113ad565b3480156106b757600080fd5b506102b66106c636600461314e565b6113f2565b3480156106d757600080fd5b5060ca54610396906001600160a01b031681565b3480156106f757600080fd5b506102b6610706366004612ec3565b611439565b34801561071757600080fd5b506102b6610726366004612f74565b6114cf565b34801561073757600080fd5b506102b6610746366004612d07565b611594565b34801561075757600080fd5b506102e86000805160206138f983398151915281565b34801561077957600080fd5b506102b6610788366004613087565b61171a565b34801561079957600080fd5b506102b66107a8366004612f74565b61173f565b3480156107b957600080fd5b506102b66107c836600461306f565b6119d0565b3480156107d957600080fd5b506102b66107e8366004612ccf565b611a42565b3480156107f957600080fd5b5061061e6040518060400160405280600581526020016418171a171b60d91b81525081565b60006001600160e01b03198216637965db0b60e01b148061084f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600054610100900460ff16158080156108755750600054600160ff909116105b8061088f5750303b15801561088f575060005460ff166001145b6108f75760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff19166001179055801561091a576000805461ff0019166101001790555b60c980546001600160a01b038089166001600160a01b03199283161790925560ca805488841690831617905560cb805487841690831617905560cc80549286169290911691909117905561096c611a5e565b610974611a95565b61097d82611ace565b610985611af5565b604080516101e08101825260066101a082018181526563727970746f60d01b6101c0840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a815269313637b1b5b1b430b4b760b11b818401526080850152845180860186526007808252663134ba31b7b4b760c91b8285015260a0860191909152855180870187528281526207070760eb1b8185015260c0860152855180870187528281526264616f60e81b8185015260e086015285518087018752918252621e9a5b60ea1b8284015261010085019190915284518086018652908152663837b63cb3b7b760c91b8183015261012084015283518085018552600b81526a756e73746f707061626c6560a81b81830152610140840152835180850185529182526535b632bb32b960d11b8282015261016083019190915282518084019093526002835261686960f01b9083015261018081019190915260005b600d811015610b6c57610b5a8282600d8110610b5057634e487b7160e01b600052603260045260246000fd5b6020020151611b35565b80610b648161386e565b915050610b24565b50508015610bb4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b8282828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c009250849150839050611c51565b610c08610d5c565b15610c255760405162461bcd60e51b81526004016108ee906134c2565b6060610bb4610c32611da7565b610c4588610c408989611db6565b611de2565b83846001611f0f565b600082815260976020526040902060010154610c698161220b565b610c73838361221c565b505050565b610c806122a3565b610c898161231c565b50565b610c94611da7565b6001600160a01b0316816001600160a01b031614610d0c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016108ee565b610d168282612334565b5050565b610d226122a3565b610d2a6123b9565b565b610d37610666611da7565b610d535760405162461bcd60e51b81526004016108ee9061348d565b610c8981612461565b6000805160206138d98339815191525460ff1690565b610d7c8688613727565b805160021415610db257610d91610666611da7565b610dad5760405162461bcd60e51b81526004016108ee906134ec565b610e77565b6000610dbd826124e5565b60c9549092506001600160a01b0316905063430c2081610ddb611da7565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b158015610e2157600080fd5b505afa158015610e35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e599190613053565b610e755760405162461bcd60e51b81526004016108ee906135bd565b505b610e818789613727565b600281511015610ea35760405162461bcd60e51b81526004016108ee90613448565b610f13610ee560008360018551610eba9190613710565b81518110610ed857634e487b7160e01b600052603260045260246000fd5b6020026020010151612520565b82600081518110610f0657634e487b7160e01b600052603260045260246000fd5b6020026020010151611c51565b610f1b610d5c565b15610f385760405162461bcd60e51b81526004016108ee906134c2565b610f608a610f468a8c613727565b610f50898b613727565b610f5a888a613727565b87611f0f565b50505050505050505050565b610f746122a3565b60005b8151811015610d1657610fb0828281518110610fa357634e487b7160e01b600052603260045260246000fd5b602002602001015161231c565b80610fba8161386e565b915050610f77565b610fcd610666611da7565b610fe95760405162461bcd60e51b81526004016108ee9061348d565b6001600160a01b03811661103f5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016108ee565b611048816125d5565b61105061123c565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610d16573d6000803e3d6000fd5b61108d6122a3565b610d2a60006125ed565b61109f6122a3565b60005b8151811015610d16576110db8282815181106110ce57634e487b7160e01b600052603260045260246000fd5b60200260200101516125d5565b806110e58161386e565b9150506110a2565b6110f8610666611da7565b6111145760405162461bcd60e51b81526004016108ee9061348d565b6001600160a01b0381166110485760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016108ee565b6111726122a3565b610d2a61263f565b8282828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111be9250849150839050611c51565b6111c6610d5c565b156111e35760405162461bcd60e51b81526004016108ee906134c2565b60606111f787610c4588610c408989611db6565b50505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6112336122a3565b610c89816125d5565b610d2a6000805160206138f9833981519152610371611da7565b61125e6122a3565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906112909085908590600401613406565b600060405180830381600087803b1580156112aa57600080fd5b505af11580156112be573d6000803e3d6000fd5b505060cb546001600160a01b0316159150610d1690505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906113079085908590600401613406565b600060405180830381600087803b15801561132157600080fd5b505af1158015610bb4573d6000803e3d6000fd5b600061084f6000805160206138f983398151915283611200565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd6960208201529081018290526000906113a3906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b6113b56122a3565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b6113fa6122a3565b610d1682828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611b3592505050565b8686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061147d9250849150839050611c51565b611485610d5c565b156114a25760405162461bcd60e51b81526004016108ee906134c2565b610f608a6114b48b610c408c8c611db6565b6114be888a613727565b6114c88789613727565b6001611f0f565b6114d76122a3565b60005b81811015610c735760c9546001600160a01b0316635096023984848481811061151357634e487b7160e01b600052603260045260246000fd5b90506020020160208101906115289190612ccf565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801561156957600080fd5b505af115801561157d573d6000803e3d6000fd5b50505050808061158c9061386e565b9150506114da565b61159e8587613727565b8051600214156115d4576115b3610666611da7565b6115cf5760405162461bcd60e51b81526004016108ee906134ec565b611699565b60006115df826124e5565b60c9549092506001600160a01b0316905063430c20816115fd611da7565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b15801561164357600080fd5b505afa158015611657573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167b9190613053565b6116975760405162461bcd60e51b81526004016108ee906135bd565b505b6116a38688613727565b6002815110156116c55760405162461bcd60e51b81526004016108ee90613448565b6116dc610ee560008360018551610eba9190613710565b6116e4610d5c565b156117015760405162461bcd60e51b81526004016108ee906134c2565b61170f896114b4898b613727565b505050505050505050565b6000828152609760205260409020600101546117358161220b565b610c738383612334565b61174a610666611da7565b6117665760405162461bcd60e51b81526004016108ee9061348d565b60005b81811015610c735761182483838381811061179457634e487b7160e01b600052603260045260246000fd5b90506020028101906117a69190613671565b604001358484848181106117ca57634e487b7160e01b600052603260045260246000fd5b90506020028101906117dc9190613671565b6117ea90602081019061362d565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611c5192505050565b60006118d984848481811061184957634e487b7160e01b600052603260045260246000fd5b905060200281019061185b9190613671565b6040013585858581811061187f57634e487b7160e01b600052603260045260246000fd5b90506020028101906118919190613671565b61189f90602081019061362d565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611de292505050565b905060006118e6826124e5565b5060c954604051634f558e7960e01b8152600481018390529192506060916001600160a01b0390911690634f558e799060240160206040518083038186803b15801561193157600080fd5b505afa158015611945573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119699190613053565b6119ba576119ba86868681811061199057634e487b7160e01b600052603260045260246000fd5b90506020028101906119a29190613671565b6119b0906020810190612ccf565b8483846000611f0f565b50505080806119c89061386e565b915050611769565b6119d86122a3565b6119e1816126a7565b6119fd5760405162461bcd60e51b81526004016108ee90613530565b600081815260cd60205260408120611a1491612b74565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b611a4a6122a3565b611a53816126cd565b610c89600082612743565b600054610100900460ff16611a855760405162461bcd60e51b81526004016108ee90613572565b610d2a611a90611da7565b6125ed565b600054610100900460ff16611abc5760405162461bcd60e51b81526004016108ee90613572565b610d2a6000611ac9611da7565b612743565b600054610100900460ff166113b55760405162461bcd60e51b81526004016108ee90613572565b600054610100900460ff16611b1c5760405162461bcd60e51b81526004016108ee90613572565b6000805160206138d9833981519152805460ff19169055565b6000611b42600083612520565b600081815260cd602090815260409091208451929350611b66929091850190612bae565b50807f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf898083604051611b979190613435565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e799060240160206040518083038186803b158015611be357600080fd5b505afa158015611bf7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c1b9190613053565b610d165760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c6090611307908490869060040161360c565b611c5a826126a7565b611c765760405162461bcd60e51b81526004016108ee90613530565b6000611ca98260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a81600001511115611d5257611cd4611cc8826000600a61274d565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b81415611d525760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b60648201526084016108ee565b611d5b8261278c565b610c735760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a204c4142454c5f494e56414c494400000060448201526064016108ee565b6000611db1612838565b905090565b60608282604051602001611dcb929190613266565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b6060815260200190600190039081611dfc5790505090508281600081518110611e3557634e487b7160e01b600052603260045260246000fd5b602002602001018190525060cd60008581526020019081526020016000208054611e5e90613833565b80601f0160208091040260200160405190810160405280929190818152602001828054611e8a90613833565b8015611ed75780601f10611eac57610100808354040283529160200191611ed7565b820191906000526020600020905b815481529060010190602001808311611eba57829003601f168201915b505050505081600181518110611efd57634e487b7160e01b600052603260045260246000fd5b60209081029190910101529392505050565b6000611f1a856124e5565b5060c954604051634f558e7960e01b8152600481018390529192506001600160a01b031690634f558e799060240160206040518083038186803b158015611f6057600080fd5b505afa158015611f74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f989190613053565b8015612026575060c9546040516331a9108f60e11b81526004810183905230916001600160a01b031690636352211e9060240160206040518083038186803b158015611fe357600080fd5b505afa158015611ff7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061201b9190612ceb565b6001600160a01b0316145b1561209a5760c95460405163d106353f60e01b81526001600160a01b039091169063d106353f906120639089908590899089908990600401613397565b600060405180830381600087803b15801561207d57600080fd5b505af1158015612091573d6000803e3d6000fd5b50505050610bb4565b6120a38161287f565b6120ac856128d5565b80156120b9575084516002145b156121a55760ca5485516001600160a01b039091169063c36c212590889088906000906120f657634e487b7160e01b600052603260045260246000fd5b602090810291909101015160cc546040516001600160e01b031960e086901b1681526121309392916001600160a01b031690600401613362565b600060405180830381600087803b15801561214a57600080fd5b505af115801561215e573d6000803e3d6000fd5b505050506000845111156121a05760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae7490612063908790879086906004016133d0565b610bb4565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b7906121dd9089908990899089908990600401613303565b600060405180830381600087803b1580156121f757600080fd5b505af1158015610f60573d6000803e3d6000fd5b610c8981612217611da7565b61292f565b6122268282611200565b610d165760008281526097602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561225f611da7565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6122ab611da7565b6001600160a01b03166122c66033546001600160a01b031690565b6001600160a01b031614610d2a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108ee565b610c896000805160206138f98339815191528261171a565b61233e8282611200565b15610d165760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19169055612375611da7565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6123c1610d5c565b6124045760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b60448201526064016108ee565b6000805160206138d9833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa612444611da7565b6040516001600160a01b03909116815260200160405180910390a1565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd6960208201529081018290526001906124a09060600161138a565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b805160009081905b801561251a578291506125068285610eba600185613710565b9250806125128161381c565b9150506124ed565b50915091565b60008151600014156125745760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d505459000000000060448201526064016108ee565b8282604051602001612586919061324a565b604051602081830303815290604052805190602001206040516020016125b6929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b610c896000805160206138f983398151915282612743565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b612647610d5c565b156126645760405162461bcd60e51b81526004016108ee906134c2565b6000805160206138d9833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258612444611da7565b600081815260cd6020526040812080548291906126c390613833565b9050119050919050565b6126d56122a3565b6001600160a01b03811661273a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016108ee565b610c89816125ed565b610d16828261221c565b6040805180820190915260008082526020820152604051806040016040528083815260200184866020015161278291906136d9565b9052949350505050565b60008151600014156127a057506000919050565b6020820160005b835181101561282e5760006127bf8383015160f81c90565b90508060ff16602d141580156127ea575060308160ff16101580156127e8575060398160ff1611155b155b801561280b575060618160ff16101580156128095750607a8160ff1611155b155b1561281b57506000949350505050565b50806128268161386e565b9150506127a7565b5060019392505050565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b031633141561287a575060331936013560601c90565b503390565b6128888161134f565b15610d535760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b454400000060448201526064016108ee565b6000806128ec60008460018651610eba9190613710565b60ca549091506001600160a01b0316158015906129285750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b6129398282611200565b610d1657612951816001600160a01b03166014612993565b61295c836020612993565b60405160200161296d92919061328e565b60408051601f198184030181529082905262461bcd60e51b82526108ee91600401613435565b606060006129a28360026136f1565b6129ad9060026136d9565b6001600160401b038111156129d257634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156129fc576020820181803683370190505b509050600360fc1b81600081518110612a2557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110612a6257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000612a868460026136f1565b612a919060016136d9565b90505b6001811115612b25576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110612ad357634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110612af757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93612b1e8161381c565b9050612a94565b5083156129285760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016108ee565b508054612b8090613833565b6000825580601f10612b90575050565b601f016020900490600052602060002090810190610c899190612c32565b828054612bba90613833565b90600052602060002090601f016020900481019282612bdc5760008555612c22565b82601f10612bf557805160ff1916838001178555612c22565b82800160010185558215612c22579182015b82811115612c22578251825591602001919060010190612c07565b50612c2e929150612c32565b5090565b5b80821115612c2e5760008155600101612c33565b60008083601f840112612c58578182fd5b5081356001600160401b03811115612c6e578182fd5b6020830191508360208260051b8501011115612c8957600080fd5b9250929050565b60008083601f840112612ca1578182fd5b5081356001600160401b03811115612cb7578182fd5b602083019150836020828501011115612c8957600080fd5b600060208284031215612ce0578081fd5b8135612928816138b5565b600060208284031215612cfc578081fd5b8151612928816138b5565b60008060008060008060006080888a031215612d21578283fd5b8735612d2c816138b5565b965060208801356001600160401b0380821115612d47578485fd5b612d538b838c01612c47565b909850965060408a0135915080821115612d6b578485fd5b612d778b838c01612c47565b909650945060608a0135915080821115612d8f578384fd5b50612d9c8a828b01612c47565b989b979a50959850939692959293505050565b60008060008060008060008060a0898b031215612dca578081fd5b8835612dd5816138b5565b975060208901356001600160401b0380821115612df0578283fd5b612dfc8c838d01612c47565b909950975060408b0135915080821115612e14578283fd5b612e208c838d01612c47565b909750955060608b0135915080821115612e38578283fd5b50612e458b828c01612c47565b9094509250506080890135612e59816138ca565b809150509295985092959890939650565b60008060008060608587031215612e7f578182fd5b8435612e8a816138b5565b93506020850135925060408501356001600160401b03811115612eab578283fd5b612eb787828801612c90565b95989497509550505050565b60008060008060008060008060a0898b031215612ede578182fd5b8835612ee9816138b5565b97506020890135965060408901356001600160401b0380821115612f0b578384fd5b612f178c838d01612c90565b909850965060608b0135915080821115612f2f578384fd5b612f3b8c838d01612c47565b909650945060808b0135915080821115612f53578384fd5b50612f608b828c01612c47565b999c989b5096995094979396929594505050565b60008060208385031215612f86578182fd5b82356001600160401b03811115612f9b578283fd5b612fa785828601612c47565b90969095509350505050565b60006020808385031215612fc5578182fd5b82356001600160401b03811115612fda578283fd5b8301601f81018513612fea578283fd5b8035612ffd612ff8826136b6565b613686565b80828252848201915084840188868560051b870101111561301c578687fd5b8694505b83851015613047578035613033816138b5565b835260019490940193918501918501613020565b50979650505050505050565b600060208284031215613064578081fd5b8151612928816138ca565b600060208284031215613080578081fd5b5035919050565b60008060408385031215613099578182fd5b8235915060208301356130ab816138b5565b809150509250929050565b6000602082840312156130c7578081fd5b81356001600160e01b031981168114612928578182fd5b600080600080600060a086880312156130f5578283fd5b8535613100816138b5565b94506020860135613110816138b5565b93506040860135613120816138b5565b92506060860135613130816138b5565b91506080860135613140816138b5565b809150509295509295909350565b60008060208385031215613160578182fd5b82356001600160401b03811115613175578283fd5b612fa785828601612c90565b600080600060408486031215613195578081fd5b8335925060208401356001600160401b038111156131b1578182fd5b6131bd86828701612c90565b9497909650939450505050565b600081518084526020808501808196508360051b81019150828601855b858110156132115782840389526131ff84835161321e565b988501989350908401906001016131e7565b5091979650505050505050565b600081518084526132368160208601602086016137ec565b601f01601f19169290920160200192915050565b6000825161325c8184602087016137ec565b9190910192915050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516132c68160178501602088016137ec565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516132f78160288401602088016137ec565b01602801949350505050565b6001600160a01b038616815260a060208201819052600090613327908301876131ca565b828103604084015261333981876131ca565b9050828103606084015261334d81866131ca565b91505082151560808301529695505050505050565b600060018060a01b03808616835260606020840152613384606084018661321e565b9150808416604084015250949350505050565b60018060a01b038616815284602082015260a0604082015260006133be60a08301866131ca565b828103606084015261334d81866131ca565b6060815260006133e360608301866131ca565b82810360208401526133f581866131ca565b915050826040830152949350505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b602081526000612928602083018461321e565b60208082526025908201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456040820152642627abaf9960d91b606082015260800190565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b60208082526024908201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604082015263272a22a960e11b606082015260800190565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6020808252602f908201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060408201526e282927ab22a22fa7a92fa7aba722a960891b606082015260800190565b828152604060208201526000613625604083018461321e565b949350505050565b6000808335601e19843603018112613643578283fd5b8301803591506001600160401b0382111561365c578283fd5b602001915036819003821315612c8957600080fd5b60008235605e1983360301811261325c578182fd5b604051601f8201601f191681016001600160401b03811182821017156136ae576136ae61389f565b604052919050565b60006001600160401b038211156136cf576136cf61389f565b5060051b60200190565b600082198211156136ec576136ec613889565b500190565b600081600019048311821515161561370b5761370b613889565b500290565b60008282101561372257613722613889565b500390565b6000613735612ff8846136b6565b808482526020808301925084368760051b87011115613752578485fd5b845b878110156137e05781356001600160401b0380821115613772578788fd5b90880190601f3681840112613785578889fd5b8235828111156137975761379761389f565b6137a8818301601f19168801613686565b925080835236878286010111156137bd57898afd5b808785018885013782018601899052508652509382019390820190600101613754565b50919695505050505050565b60005b838110156138075781810151838201526020016137ef565b83811115613816576000848401525b50505050565b60008161382b5761382b613889565b506000190190565b600181811c9082168061384757607f821691505b6020821081141561386857634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561388257613882613889565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610c8957600080fd5b8015158114610c8957600080fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000804000a";
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
