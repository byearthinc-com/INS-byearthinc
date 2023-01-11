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
const _bytecode = "0x608060405234801561001057600080fd5b506139de806100206000396000f3fe60806040526004361061025c5760003560e01c8063906cecc111610144578063c3a3bc00116100b6578063d53913931161007a578063d53913931461074b578063d547741f1461076d578063d6ab22ed1461078d578063ec527389146107ad578063f2fde38b146107cd578063ffa1ad74146107ed57600080fd5b8063c3a3bc00146106ab578063cc2c3fc4146106cb578063ceeb4f50146106eb578063d1f5692c1461070b578063d4a32ad61461072b57600080fd5b8063a217fddf11610108578063a217fddf146105c9578063a3f4df7e146105de578063a849d65c1461062b578063aa271e1a1461064b578063b0aa98c71461066b578063b9998a241461068b57600080fd5b8063906cecc11461053457806391d1485414610554578063983b2d5614610574578063986502751461059457806399e0dd7c146105a957600080fd5b8063572b6c05116101dd578063634486da116101a1578063634486da146104a6578063715018a6146104b957806371e2a657146104ce57806381c81d35146104ee5780638456cb59146105015780638da5cb5b1461051657600080fd5b8063572b6c05146103e35780635b6fa8db146104315780635c975abb146104515780635cd7e3b3146104665780635fc1964f1461048657600080fd5b80633092afd5116102245780633092afd51461033657806336568abe146103565780633f41b614146103765780633f4ba83a146103ae578063463c4bcb146103c357600080fd5b806301ffc9a7146102615780631459457a14610296578063248a9ca3146102b8578063268b15ed146102f65780632f2ff15d14610316575b600080fd5b34801561026d57600080fd5b5061028161027c36600461316f565b61081e565b60405190151581526020015b60405180910390f35b3480156102a257600080fd5b506102b66102b1366004613197565b610855565b005b3480156102c457600080fd5b506102e86102d3366004613128565b60009081526097602052604090206001015490565b60405190815260200161028d565b34801561030257600080fd5b506102b661031136600461323a565b610bbc565b34801561032257600080fd5b506102b6610331366004613140565b610c4e565b34801561034257600080fd5b506102b6610351366004612d88565b610c78565b34801561036257600080fd5b506102b6610371366004613140565b610c8c565b34801561038257600080fd5b5060c954610396906001600160a01b031681565b6040516001600160a01b03909116815260200161028d565b3480156103ba57600080fd5b506102b6610d1a565b3480156103cf57600080fd5b506102b66103de366004613128565b610d2c565b3480156103ef57600080fd5b506102816103fe366004612d88565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b34801561043d57600080fd5b5060cc54610396906001600160a01b031681565b34801561045d57600080fd5b50610281610d5c565b34801561047257600080fd5b506102b6610481366004612e68565b610d72565b34801561049257600080fd5b506102b66104a136600461306c565b610f6c565b6102b66104b4366004612d88565b610fc2565b3480156104c557600080fd5b506102b6611085565b3480156104da57600080fd5b506102b66104e936600461306c565b611097565b6102b66104fc366004612d88565b6110ed565b34801561050d57600080fd5b506102b661116a565b34801561052257600080fd5b506033546001600160a01b0316610396565b34801561054057600080fd5b506102b661054f366004612f23565b61117a565b34801561056057600080fd5b5061028161056f366004613140565b611200565b34801561058057600080fd5b506102b661058f366004612d88565b61122b565b3480156105a057600080fd5b506102b661123c565b3480156105b557600080fd5b506102b66105c4366004613207565b611256565b3480156105d557600080fd5b506102e8600081565b3480156105ea57600080fd5b5061061e604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b60405161028d91906134ee565b34801561063757600080fd5b5060cb54610396906001600160a01b031681565b34801561065757600080fd5b50610281610666366004612d88565b611335565b34801561067757600080fd5b50610281610686366004613128565b61134f565b34801561069757600080fd5b506102b66106a6366004612d88565b6113ad565b3480156106b757600080fd5b506102b66106c6366004613207565b6113f2565b3480156106d757600080fd5b5060ca54610396906001600160a01b031681565b3480156106f757600080fd5b506102b6610706366004612f7c565b611439565b34801561071757600080fd5b506102b661072636600461302d565b6114cf565b34801561073757600080fd5b506102b6610746366004612dc0565b611594565b34801561075757600080fd5b506102e86000805160206139b283398151915281565b34801561077957600080fd5b506102b6610788366004613140565b61171a565b34801561079957600080fd5b506102b66107a836600461302d565b61173f565b3480156107b957600080fd5b506102b66107c8366004613128565b6119d0565b3480156107d957600080fd5b506102b66107e8366004612d88565b611a42565b3480156107f957600080fd5b5061061e60405180604001604052806005815260200164302e342e3760d81b81525081565b60006001600160e01b03198216637965db0b60e01b148061084f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600054610100900460ff16158080156108755750600054600160ff909116105b8061088f5750303b15801561088f575060005460ff166001145b6108f75760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff19166001179055801561091a576000805461ff0019166101001790555b60c980546001600160a01b038089166001600160a01b03199283161790925560ca805488841690831617905560cb805487841690831617905560cc80549286169290911691909117905561096c611a5e565b610974611a95565b61097d82611ace565b610985611af5565b604080516101e08101825260066101a082018181526563727970746f60d01b6101c0840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a815269313637b1b5b1b430b4b760b11b818401526080850152845180860186526007808252663134ba31b7b4b760c91b8285015260a0860191909152855180870187528281526207070760eb1b8185015260c0860152855180870187528281526264616f60e81b8185015260e086015285518087018752918252621e9a5b60ea1b8284015261010085019190915284518086018652908152663837b63cb3b7b760c91b8183015261012084015283518085018552600b81526a756e73746f707061626c6560a81b81830152610140840152835180850185529182526535b632bb32b960d11b8282015261016083019190915282518084019093526002835261686960f01b9083015261018081019190915260005b600d811015610b6c57610b5a8282600d8110610b5057634e487b7160e01b600052603260045260246000fd5b6020020151611b35565b80610b6481613927565b915050610b24565b50508015610bb4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050565b8282828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c009250849150839050611c51565b610c08610d5c565b15610c255760405162461bcd60e51b81526004016108ee9061357b565b6060610bb4610c32611da7565b610c4588610c408989611db6565b611de2565b83846001611f0f565b600082815260976020526040902060010154610c698161220b565b610c73838361221c565b505050565b610c806122a3565b610c898161231c565b50565b610c94611da7565b6001600160a01b0316816001600160a01b031614610d0c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016108ee565b610d168282612334565b5050565b610d226122a3565b610d2a6123b9565b565b610d37610666611da7565b610d535760405162461bcd60e51b81526004016108ee90613546565b610c8981612461565b6000805160206139928339815191525460ff1690565b610d7c86886137e0565b805160021415610db257610d91610666611da7565b610dad5760405162461bcd60e51b81526004016108ee906135a5565b610e77565b6000610dbd826124e5565b60c9549092506001600160a01b0316905063430c2081610ddb611da7565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b158015610e2157600080fd5b505afa158015610e35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e59919061310c565b610e755760405162461bcd60e51b81526004016108ee90613676565b505b610e8187896137e0565b600281511015610ea35760405162461bcd60e51b81526004016108ee90613501565b610f13610ee560008360018551610eba91906137c9565b81518110610ed857634e487b7160e01b600052603260045260246000fd5b6020026020010151612520565b82600081518110610f0657634e487b7160e01b600052603260045260246000fd5b6020026020010151611c51565b610f1b610d5c565b15610f385760405162461bcd60e51b81526004016108ee9061357b565b610f608a610f468a8c6137e0565b610f50898b6137e0565b610f5a888a6137e0565b87611f0f565b50505050505050505050565b610f746122a3565b60005b8151811015610d1657610fb0828281518110610fa357634e487b7160e01b600052603260045260246000fd5b602002602001015161231c565b80610fba81613927565b915050610f77565b610fcd610666611da7565b610fe95760405162461bcd60e51b81526004016108ee90613546565b6001600160a01b03811661103f5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016108ee565b611048816125d5565b61105061123c565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610d16573d6000803e3d6000fd5b61108d6122a3565b610d2a60006125ed565b61109f6122a3565b60005b8151811015610d16576110db8282815181106110ce57634e487b7160e01b600052603260045260246000fd5b60200260200101516125d5565b806110e581613927565b9150506110a2565b6110f8610666611da7565b6111145760405162461bcd60e51b81526004016108ee90613546565b6001600160a01b0381166110485760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016108ee565b6111726122a3565b610d2a61263f565b8282828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111be9250849150839050611c51565b6111c6610d5c565b156111e35760405162461bcd60e51b81526004016108ee9061357b565b60606111f787610c4588610c408989611db6565b50505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6112336122a3565b610c89816125d5565b610d2a6000805160206139b2833981519152610371611da7565b61125e6122a3565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c9061129090859085906004016134bf565b600060405180830381600087803b1580156112aa57600080fd5b505af11580156112be573d6000803e3d6000fd5b505060cb546001600160a01b0316159150610d1690505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c9061130790859085906004016134bf565b600060405180830381600087803b15801561132157600080fd5b505af1158015610bb4573d6000803e3d6000fd5b600061084f6000805160206139b283398151915283611200565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd6960208201529081018290526000906113a3906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b6113b56122a3565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b6113fa6122a3565b610d1682828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611b3592505050565b8686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061147d9250849150839050611c51565b611485610d5c565b156114a25760405162461bcd60e51b81526004016108ee9061357b565b610f608a6114b48b610c408c8c611db6565b6114be888a6137e0565b6114c887896137e0565b6001611f0f565b6114d76122a3565b60005b81811015610c735760c9546001600160a01b0316635096023984848481811061151357634e487b7160e01b600052603260045260246000fd5b90506020020160208101906115289190612d88565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801561156957600080fd5b505af115801561157d573d6000803e3d6000fd5b50505050808061158c90613927565b9150506114da565b61159e85876137e0565b8051600214156115d4576115b3610666611da7565b6115cf5760405162461bcd60e51b81526004016108ee906135a5565b611699565b60006115df826124e5565b60c9549092506001600160a01b0316905063430c20816115fd611da7565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b15801561164357600080fd5b505afa158015611657573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167b919061310c565b6116975760405162461bcd60e51b81526004016108ee90613676565b505b6116a386886137e0565b6002815110156116c55760405162461bcd60e51b81526004016108ee90613501565b6116dc610ee560008360018551610eba91906137c9565b6116e4610d5c565b156117015760405162461bcd60e51b81526004016108ee9061357b565b61170f896114b4898b6137e0565b505050505050505050565b6000828152609760205260409020600101546117358161220b565b610c738383612334565b61174a610666611da7565b6117665760405162461bcd60e51b81526004016108ee90613546565b60005b81811015610c735761182483838381811061179457634e487b7160e01b600052603260045260246000fd5b90506020028101906117a6919061372a565b604001358484848181106117ca57634e487b7160e01b600052603260045260246000fd5b90506020028101906117dc919061372a565b6117ea9060208101906136e6565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611c5192505050565b60006118d984848481811061184957634e487b7160e01b600052603260045260246000fd5b905060200281019061185b919061372a565b6040013585858581811061187f57634e487b7160e01b600052603260045260246000fd5b9050602002810190611891919061372a565b61189f9060208101906136e6565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611de292505050565b905060006118e6826124e5565b5060c954604051634f558e7960e01b8152600481018390529192506060916001600160a01b0390911690634f558e799060240160206040518083038186803b15801561193157600080fd5b505afa158015611945573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611969919061310c565b6119ba576119ba86868681811061199057634e487b7160e01b600052603260045260246000fd5b90506020028101906119a2919061372a565b6119b0906020810190612d88565b8483846000611f0f565b50505080806119c890613927565b915050611769565b6119d86122a3565b6119e1816126a7565b6119fd5760405162461bcd60e51b81526004016108ee906135e9565b600081815260cd60205260408120611a1491612c2d565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b611a4a6122a3565b611a53816126cd565b610c89600082612743565b600054610100900460ff16611a855760405162461bcd60e51b81526004016108ee9061362b565b610d2a611a90611da7565b6125ed565b600054610100900460ff16611abc5760405162461bcd60e51b81526004016108ee9061362b565b610d2a6000611ac9611da7565b612743565b600054610100900460ff166113b55760405162461bcd60e51b81526004016108ee9061362b565b600054610100900460ff16611b1c5760405162461bcd60e51b81526004016108ee9061362b565b600080516020613992833981519152805460ff19169055565b6000611b42600083612520565b600081815260cd602090815260409091208451929350611b66929091850190612c67565b50807f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf898083604051611b9791906134ee565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e799060240160206040518083038186803b158015611be357600080fd5b505afa158015611bf7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c1b919061310c565b610d165760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c609061130790849086906004016136c5565b611c5a826126a7565b611c765760405162461bcd60e51b81526004016108ee906135e9565b6000611ca98260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a81600001511115611d5257611cd4611cc8826000600a61274d565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b81415611d525760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b60648201526084016108ee565b611d5b8261278c565b610c735760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a204c4142454c5f494e56414c494400000060448201526064016108ee565b6000611db16128f1565b905090565b60608282604051602001611dcb92919061331f565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b6060815260200190600190039081611dfc5790505090508281600081518110611e3557634e487b7160e01b600052603260045260246000fd5b602002602001018190525060cd60008581526020019081526020016000208054611e5e906138ec565b80601f0160208091040260200160405190810160405280929190818152602001828054611e8a906138ec565b8015611ed75780601f10611eac57610100808354040283529160200191611ed7565b820191906000526020600020905b815481529060010190602001808311611eba57829003601f168201915b505050505081600181518110611efd57634e487b7160e01b600052603260045260246000fd5b60209081029190910101529392505050565b6000611f1a856124e5565b5060c954604051634f558e7960e01b8152600481018390529192506001600160a01b031690634f558e799060240160206040518083038186803b158015611f6057600080fd5b505afa158015611f74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f98919061310c565b8015612026575060c9546040516331a9108f60e11b81526004810183905230916001600160a01b031690636352211e9060240160206040518083038186803b158015611fe357600080fd5b505afa158015611ff7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061201b9190612da4565b6001600160a01b0316145b1561209a5760c95460405163d106353f60e01b81526001600160a01b039091169063d106353f906120639089908590899089908990600401613450565b600060405180830381600087803b15801561207d57600080fd5b505af1158015612091573d6000803e3d6000fd5b50505050610bb4565b6120a381612938565b6120ac8561298e565b80156120b9575084516002145b156121a55760ca5485516001600160a01b039091169063c36c212590889088906000906120f657634e487b7160e01b600052603260045260246000fd5b602090810291909101015160cc546040516001600160e01b031960e086901b1681526121309392916001600160a01b03169060040161341b565b600060405180830381600087803b15801561214a57600080fd5b505af115801561215e573d6000803e3d6000fd5b505050506000845111156121a05760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae749061206390879087908690600401613489565b610bb4565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b7906121dd90899089908990899089906004016133bc565b600060405180830381600087803b1580156121f757600080fd5b505af1158015610f60573d6000803e3d6000fd5b610c8981612217611da7565b6129e8565b6122268282611200565b610d165760008281526097602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561225f611da7565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6122ab611da7565b6001600160a01b03166122c66033546001600160a01b031690565b6001600160a01b031614610d2a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108ee565b610c896000805160206139b28339815191528261171a565b61233e8282611200565b15610d165760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19169055612375611da7565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6123c1610d5c565b6124045760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b60448201526064016108ee565b600080516020613992833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa612444611da7565b6040516001600160a01b03909116815260200160405180910390a1565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd6960208201529081018290526001906124a09060600161138a565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b805160009081905b801561251a578291506125068285610eba6001856137c9565b925080612512816138d5565b9150506124ed565b50915091565b60008151600014156125745760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d505459000000000060448201526064016108ee565b82826040516020016125869190613303565b604051602081830303815290604052805190602001206040516020016125b6929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b610c896000805160206139b283398151915282612743565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b612647610d5c565b156126645760405162461bcd60e51b81526004016108ee9061357b565b600080516020613992833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258612444611da7565b600081815260cd6020526040812080548291906126c3906138ec565b9050119050919050565b6126d56122a3565b6001600160a01b03811661273a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016108ee565b610c89816125ed565b610d16828261221c565b604080518082019091526000808252602082015260405180604001604052808381526020018486602001516127829190613792565b9052949350505050565b60008151600014156127a057506000919050565b60208201805160f81c603081108015906127be575060398160ff1611155b1580156127e0575060618160ff16101580156127de5750607a8160ff1611155b155b156127ef575060009392505050565b8351600181111561285d57612811836128096001846137c9565b015160f81c90565b915060308260ff161015801561282b575060398260ff1611155b15801561284d575060618260ff161015801561284b5750607a8260ff1611155b155b1561285d57506000949350505050565b60015b61286b6001836137c9565b8110156128e5578381015160f81c9250602d83148015906128a1575060308360ff161015801561289f575060398360ff1611155b155b80156128c2575060618360ff16101580156128c05750607a8360ff1611155b155b156128d35750600095945050505050565b806128dd81613927565b915050612860565b50600195945050505050565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b0316331415612933575060331936013560601c90565b503390565b6129418161134f565b15610d535760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b454400000060448201526064016108ee565b6000806129a560008460018651610eba91906137c9565b60ca549091506001600160a01b0316158015906129e15750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b6129f28282611200565b610d1657612a0a816001600160a01b03166014612a4c565b612a15836020612a4c565b604051602001612a26929190613347565b60408051601f198184030181529082905262461bcd60e51b82526108ee916004016134ee565b60606000612a5b8360026137aa565b612a66906002613792565b6001600160401b03811115612a8b57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015612ab5576020820181803683370190505b509050600360fc1b81600081518110612ade57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110612b1b57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000612b3f8460026137aa565b612b4a906001613792565b90505b6001811115612bde576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110612b8c57634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110612bb057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93612bd7816138d5565b9050612b4d565b5083156129e15760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016108ee565b508054612c39906138ec565b6000825580601f10612c49575050565b601f016020900490600052602060002090810190610c899190612ceb565b828054612c73906138ec565b90600052602060002090601f016020900481019282612c955760008555612cdb565b82601f10612cae57805160ff1916838001178555612cdb565b82800160010185558215612cdb579182015b82811115612cdb578251825591602001919060010190612cc0565b50612ce7929150612ceb565b5090565b5b80821115612ce75760008155600101612cec565b60008083601f840112612d11578182fd5b5081356001600160401b03811115612d27578182fd5b6020830191508360208260051b8501011115612d4257600080fd5b9250929050565b60008083601f840112612d5a578182fd5b5081356001600160401b03811115612d70578182fd5b602083019150836020828501011115612d4257600080fd5b600060208284031215612d99578081fd5b81356129e18161396e565b600060208284031215612db5578081fd5b81516129e18161396e565b60008060008060008060006080888a031215612dda578283fd5b8735612de58161396e565b965060208801356001600160401b0380821115612e00578485fd5b612e0c8b838c01612d00565b909850965060408a0135915080821115612e24578485fd5b612e308b838c01612d00565b909650945060608a0135915080821115612e48578384fd5b50612e558a828b01612d00565b989b979a50959850939692959293505050565b60008060008060008060008060a0898b031215612e83578081fd5b8835612e8e8161396e565b975060208901356001600160401b0380821115612ea9578283fd5b612eb58c838d01612d00565b909950975060408b0135915080821115612ecd578283fd5b612ed98c838d01612d00565b909750955060608b0135915080821115612ef1578283fd5b50612efe8b828c01612d00565b9094509250506080890135612f1281613983565b809150509295985092959890939650565b60008060008060608587031215612f38578182fd5b8435612f438161396e565b93506020850135925060408501356001600160401b03811115612f64578283fd5b612f7087828801612d49565b95989497509550505050565b60008060008060008060008060a0898b031215612f97578182fd5b8835612fa28161396e565b97506020890135965060408901356001600160401b0380821115612fc4578384fd5b612fd08c838d01612d49565b909850965060608b0135915080821115612fe8578384fd5b612ff48c838d01612d00565b909650945060808b013591508082111561300c578384fd5b506130198b828c01612d00565b999c989b5096995094979396929594505050565b6000806020838503121561303f578182fd5b82356001600160401b03811115613054578283fd5b61306085828601612d00565b90969095509350505050565b6000602080838503121561307e578182fd5b82356001600160401b03811115613093578283fd5b8301601f810185136130a3578283fd5b80356130b66130b18261376f565b61373f565b80828252848201915084840188868560051b87010111156130d5578687fd5b8694505b838510156131005780356130ec8161396e565b8352600194909401939185019185016130d9565b50979650505050505050565b60006020828403121561311d578081fd5b81516129e181613983565b600060208284031215613139578081fd5b5035919050565b60008060408385031215613152578182fd5b8235915060208301356131648161396e565b809150509250929050565b600060208284031215613180578081fd5b81356001600160e01b0319811681146129e1578182fd5b600080600080600060a086880312156131ae578283fd5b85356131b98161396e565b945060208601356131c98161396e565b935060408601356131d98161396e565b925060608601356131e98161396e565b915060808601356131f98161396e565b809150509295509295909350565b60008060208385031215613219578182fd5b82356001600160401b0381111561322e578283fd5b61306085828601612d49565b60008060006040848603121561324e578081fd5b8335925060208401356001600160401b0381111561326a578182fd5b61327686828701612d49565b9497909650939450505050565b600081518084526020808501808196508360051b81019150828601855b858110156132ca5782840389526132b88483516132d7565b988501989350908401906001016132a0565b5091979650505050505050565b600081518084526132ef8160208601602086016138a5565b601f01601f19169290920160200192915050565b600082516133158184602087016138a5565b9190910192915050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161337f8160178501602088016138a5565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516133b08160288401602088016138a5565b01602801949350505050565b6001600160a01b038616815260a0602082018190526000906133e090830187613283565b82810360408401526133f28187613283565b905082810360608401526134068186613283565b91505082151560808301529695505050505050565b600060018060a01b0380861683526060602084015261343d60608401866132d7565b9150808416604084015250949350505050565b60018060a01b038616815284602082015260a06040820152600061347760a0830186613283565b82810360608401526134068186613283565b60608152600061349c6060830186613283565b82810360208401526134ae8186613283565b915050826040830152949350505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b6020815260006129e160208301846132d7565b60208082526025908201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456040820152642627abaf9960d91b606082015260800190565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b60208082526024908201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604082015263272a22a960e11b606082015260800190565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6020808252602f908201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060408201526e282927ab22a22fa7a92fa7aba722a960891b606082015260800190565b8281526040602082015260006136de60408301846132d7565b949350505050565b6000808335601e198436030181126136fc578283fd5b8301803591506001600160401b03821115613715578283fd5b602001915036819003821315612d4257600080fd5b60008235605e19833603018112613315578182fd5b604051601f8201601f191681016001600160401b038111828210171561376757613767613958565b604052919050565b60006001600160401b0382111561378857613788613958565b5060051b60200190565b600082198211156137a5576137a5613942565b500190565b60008160001904831182151516156137c4576137c4613942565b500290565b6000828210156137db576137db613942565b500390565b60006137ee6130b18461376f565b808482526020808301925084368760051b8701111561380b578485fd5b845b878110156138995781356001600160401b038082111561382b578788fd5b90880190601f368184011261383e578889fd5b82358281111561385057613850613958565b613861818301601f1916880161373f565b9250808352368782860101111561387657898afd5b80878501888501378201860189905250865250938201939082019060010161380d565b50919695505050505050565b60005b838110156138c05781810151838201526020016138a8565b838111156138cf576000848401525b50505050565b6000816138e4576138e4613942565b506000190190565b600181811c9082168061390057607f821691505b6020821081141561392157634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561393b5761393b613942565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610c8957600080fd5b8015158114610c8957600080fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000804000a";
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
