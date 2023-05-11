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
];
const _bytecode = "0x608060405234801561001057600080fd5b506136d0806100206000396000f3fe6080604052600436106102515760003560e01c806391d1485411610139578063b9998a24116100b6578063d1f5692c1161007a578063d1f5692c14610720578063d539139314610740578063d547741f14610762578063ec52738914610782578063f2fde38b146107a2578063ffa1ad74146107c257600080fd5b8063b9998a2414610680578063c3a3bc00146106a0578063cc2a9a5b146106c0578063cc2c3fc4146106e0578063ceeb4f501461070057600080fd5b8063a3f4df7e116100fd578063a3f4df7e146105b3578063a849d65c14610600578063aa271e1a14610620578063b0aa98c714610640578063b3ab15fb1461066057600080fd5b806391d1485414610529578063983b2d5614610549578063986502751461056957806399e0dd7c1461057e578063a217fddf1461059e57600080fd5b80635c975abb116101d257806371e2a6571161019657806371e2a6571461048357806377a2a589146104a357806381c81d35146104c35780638456cb59146104d65780638da5cb5b146104eb578063906cecc11461050957600080fd5b80635c975abb146104065780635cd7e3b31461041b5780635fc1964f1461043b578063634486da1461045b578063715018a61461046e57600080fd5b806336568abe1161021957806336568abe1461032b5780633f41b6141461034b5780633f4ba83a14610383578063572b6c05146103985780635b6fa8db146103e657600080fd5b806301ffc9a714610256578063248a9ca31461028b578063268b15ed146102c95780632f2ff15d146102eb5780633092afd51461030b575b600080fd5b34801561026257600080fd5b50610276610271366004612fef565b6107f4565b60405190151581526020015b60405180910390f35b34801561029757600080fd5b506102bb6102a6366004612fa8565b60009081526097602052604090206001015490565b604051908152602001610282565b3480156102d557600080fd5b506102e96102e43660046130cb565b61082b565b005b3480156102f757600080fd5b506102e9610306366004612fc0565b6108ce565b34801561031757600080fd5b506102e9610326366004612cb0565b6108f8565b34801561033757600080fd5b506102e9610346366004612fc0565b61090c565b34801561035757600080fd5b5060c95461036b906001600160a01b031681565b6040516001600160a01b039091168152602001610282565b34801561038f57600080fd5b506102e961099a565b3480156103a457600080fd5b506102766103b3366004612cb0565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b3480156103f257600080fd5b5060cc5461036b906001600160a01b031681565b34801561041257600080fd5b506102766109ac565b34801561042757600080fd5b506102e9610436366004612ce8565b6109c2565b34801561044757600080fd5b506102e9610456366004612eec565b610d1c565b6102e9610469366004612cb0565b610d72565b34801561047a57600080fd5b506102e9610e65565b34801561048f57600080fd5b506102e961049e366004612eec565b610e77565b3480156104af57600080fd5b5060ce5461036b906001600160a01b031681565b6102e96104d1366004612cb0565b610ecd565b3480156104e257600080fd5b506102e9610f7a565b3480156104f757600080fd5b506033546001600160a01b031661036b565b34801561051557600080fd5b506102e9610524366004612da3565b610f8a565b34801561053557600080fd5b50610276610544366004612fc0565b611010565b34801561055557600080fd5b506102e9610564366004612cb0565b61103b565b34801561057557600080fd5b506102e961104c565b34801561058a57600080fd5b506102e9610599366004613098565b611066565b3480156105aa57600080fd5b506102bb600081565b3480156105bf57600080fd5b506105f3604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b6040516102829190613346565b34801561060c57600080fd5b5060cb5461036b906001600160a01b031681565b34801561062c57600080fd5b5061027661063b366004612cb0565b611145565b34801561064c57600080fd5b5061027661065b366004612fa8565b61115f565b34801561066c57600080fd5b506102e961067b366004612cb0565b6111bd565b34801561068c57600080fd5b506102e961069b366004612cb0565b6111e7565b3480156106ac57600080fd5b506102e96106bb366004613098565b61122c565b3480156106cc57600080fd5b506102e96106db366004613017565b611273565b3480156106ec57600080fd5b5060ca5461036b906001600160a01b031681565b34801561070c57600080fd5b506102e961071b366004612dfc565b611660565b34801561072c57600080fd5b506102e961073b366004612ead565b6116f6565b34801561074c57600080fd5b506102bb6000805160206136a483398151915281565b34801561076e57600080fd5b506102e961077d366004612fc0565b6117bb565b34801561078e57600080fd5b506102e961079d366004612fa8565b6117e0565b3480156107ae57600080fd5b506102e96107bd366004612cb0565b611852565b3480156107ce57600080fd5b506105f360405180604001604052806006815260200165302e342e313560d01b81525081565b60006001600160e01b03198216637965db0b60e01b148061082557506301ffc9a760e01b6001600160e01b03198316145b92915050565b8282828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061086f925084915083905061186e565b6108776109ac565b1561089d5760405162461bcd60e51b815260040161089490613359565b60405180910390fd5b60606108c66108aa6119c4565b6108bd886108b889896119d3565b6119ff565b83846001611b2c565b505050505050565b6000828152609760205260409020600101546108e981611f37565b6108f38383611f48565b505050565b610900611fcf565b61090981612048565b50565b6109146119c4565b6001600160a01b0316816001600160a01b03161461098c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610894565b6109968282612060565b5050565b6109a2611fcf565b6109aa6120e5565b565b6000805160206136848339815191525460ff1690565b6109cc86886134d2565b805160021415610a3e576109e161063b6119c4565b610a395760405162461bcd60e51b8152602060048201526024808201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604482015263272a22a960e11b6064820152608401610894565b610be9565b6000610a498261218d565b60c9549092506001600160a01b0316905063430c2081610a676119c4565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b158015610aad57600080fd5b505afa158015610ac1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae59190612f8c565b80610b83575060c95460ce5460405163430c208160e01b81526001600160a01b0391821660048201526024810184905291169063430c20819060440160206040518083038186803b158015610b3957600080fd5b505afa158015610b4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b719190612f8c565b8015610b835750610b8361063b6119c4565b610be75760405162461bcd60e51b815260206004820152602f60248201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060448201526e282927ab22a22fa7a92fa7aba722a960891b6064820152608401610894565b505b610bf387896134d2565b600281511015610c535760405162461bcd60e51b815260206004820152602560248201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456044820152642627abaf9960d91b6064820152608401610894565b610cc3610c9560008360018551610c6a91906134bb565b81518110610c8857634e487b7160e01b600052603260045260246000fd5b60200260200101516121c8565b82600081518110610cb657634e487b7160e01b600052603260045260246000fd5b602002602001015161186e565b610ccb6109ac565b15610ce85760405162461bcd60e51b815260040161089490613359565b610d108a610cf68a8c6134d2565b610d00898b6134d2565b610d0a888a6134d2565b87611b2c565b50505050505050505050565b610d24611fcf565b60005b815181101561099657610d60828281518110610d5357634e487b7160e01b600052603260045260246000fd5b6020026020010151612048565b80610d6a81613619565b915050610d27565b610d7d61063b6119c4565b610dc95760405162461bcd60e51b815260206004820181905260248201527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e5445526044820152606401610894565b6001600160a01b038116610e1f5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610894565b610e288161227d565b610e3061104c565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610996573d6000803e3d6000fd5b610e6d611fcf565b6109aa6000612295565b610e7f611fcf565b60005b815181101561099657610ebb828281518110610eae57634e487b7160e01b600052603260045260246000fd5b602002602001015161227d565b80610ec581613619565b915050610e82565b610ed861063b6119c4565b610f245760405162461bcd60e51b815260206004820181905260248201527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e5445526044820152606401610894565b6001600160a01b038116610e285760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610894565b610f82611fcf565b6109aa6122e7565b8282828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610fce925084915083905061186e565b610fd66109ac565b15610ff35760405162461bcd60e51b815260040161089490613359565b6060611007876108bd886108b889896119d3565b50505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b611043611fcf565b6109098161227d565b6109aa6000805160206136a48339815191526103466119c4565b61106e611fcf565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906110a09085908590600401613317565b600060405180830381600087803b1580156110ba57600080fd5b505af11580156110ce573d6000803e3d6000fd5b505060cb546001600160a01b031615915061099690505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906111179085908590600401613317565b600060405180830381600087803b15801561113157600080fd5b505af11580156108c6573d6000803e3d6000fd5b60006108256000805160206136a483398151915283611010565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd6960208201529081018290526000906111b3906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b6111c5611fcf565b60ce80546001600160a01b0319166001600160a01b0392909216919091179055565b6111ef611fcf565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b611234611fcf565b61099682828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061234f92505050565b600054610100900460ff16158080156112935750600054600160ff909116105b806112ad5750303b1580156112ad575060005460ff166001145b6113105760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610894565b6000805460ff191660011790558015611333576000805461ff0019166101001790555b60c980546001600160a01b03199081166001600160a01b038a81169190911790925560ca8054821689841617905560cb8054821688841617905560cc8054821687841617905560ce805490911691851691909117905561139161246b565b6113996124a2565b6113a2826124db565b6113aa612502565b6040805161026081018252600661022082018181526563727970746f60d01b610240840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a815269313637b1b5b1b430b4b760b11b818401526080850152845180860186526007808252663134ba31b7b4b760c91b8285015260a0860191909152855180870187528281526207070760eb1b8185015260c0860152855180870187528281526264616f60e81b8185015260e086015285518087018752918252621e9a5b60ea1b8284015261010085019190915284518086018652908152663837b63cb3b7b760c91b8183015261012084015283518085018552600b81526a756e73746f707061626c6560a81b81830152610140840152835180850185528281526535b632bb32b960d11b81830152610160840152835180850185526002815261686960f01b8183015261018084015283518085018552918252656b726573757360d01b828201526101a083019190915282518084018452600580825264616e696d6560d81b828401526101c084019190915283518085018552908152646d616e676160d81b818301526101e08301528251808401909352600983526862696e616e6365757360b81b9083015261020081019190915260005b6011811015611610576115fe8282601181106115f457634e487b7160e01b600052603260045260246000fd5b602002015161234f565b8061160881613619565b9150506115c8565b50508015611007576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150505050505050565b8686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506116a4925084915083905061186e565b6116ac6109ac565b156116c95760405162461bcd60e51b815260040161089490613359565b610d108a6116db8b6108b88c8c6119d3565b6116e5888a6134d2565b6116ef87896134d2565b6001611b2c565b6116fe611fcf565b60005b818110156108f35760c9546001600160a01b0316635096023984848481811061173a57634e487b7160e01b600052603260045260246000fd5b905060200201602081019061174f9190612cb0565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801561179057600080fd5b505af11580156117a4573d6000803e3d6000fd5b5050505080806117b390613619565b915050611701565b6000828152609760205260409020600101546117d681611f37565b6108f38383612060565b6117e8611fcf565b6117f181612542565b61180d5760405162461bcd60e51b815260040161089490613383565b600081815260cd6020526040812061182491612b55565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b61185a611fcf565b61186381612568565b6109096000826125de565b61187782612542565b6118935760405162461bcd60e51b815260040161089490613383565b60006118c68260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a8160000151111561196f576118f16118e5826000600a6125e8565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b8141561196f5760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b6064820152608401610894565b61197882612627565b6108f35760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a204c4142454c5f494e56414c49440000006044820152606401610894565b60006119ce61278c565b905090565b606082826040516020016119e89291906131b0565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b6060815260200190600190039081611a195790505090508281600081518110611a5257634e487b7160e01b600052603260045260246000fd5b602002602001018190525060cd60008581526020019081526020016000208054611a7b906135de565b80601f0160208091040260200160405190810160405280929190818152602001828054611aa7906135de565b8015611af45780601f10611ac957610100808354040283529160200191611af4565b820191906000526020600020905b815481529060010190602001808311611ad757829003601f168201915b505050505081600181518110611b1a57634e487b7160e01b600052603260045260246000fd5b60209081029190910101529392505050565b600080611b388661218d565b91509150828015611b4a575060028651115b8015611bdb575060c9546040516331a9108f60e11b8152600481018390526001600160a01b03898116921690636352211e9060240160206040518083038186803b158015611b9757600080fd5b505afa158015611bab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bcf9190612ccc565b6001600160a01b031614155b15611c3b5760405162461bcd60e51b815260206004820152602a60248201527f4d696e74696e674d616e616765723a20524556455253455f5245434f52445f4e60448201526913d517d0531313d5d15160b21b6064820152608401610894565b60c954604051634f558e7960e01b8152600481018490526001600160a01b0390911690634f558e799060240160206040518083038186803b158015611c7f57600080fd5b505afa158015611c93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cb79190612f8c565b8015611d45575060c9546040516331a9108f60e11b81526004810184905230916001600160a01b031690636352211e9060240160206040518083038186803b158015611d0257600080fd5b505afa158015611d16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d3a9190612ccc565b6001600160a01b0316145b15611db95760c954604051630fb8df0360e11b81526001600160a01b0390911690631f71be0690611d82908a908a908a908a908a9060040161324d565b600060405180830381600087803b158015611d9c57600080fd5b505af1158015611db0573d6000803e3d6000fd5b50505050611007565b611dc2826127d3565b611dcb86612832565b8015611dd8575085516002145b15611ec45760ca5486516001600160a01b039091169063c36c21259089908990600090611e1557634e487b7160e01b600052603260045260246000fd5b602090810291909101015160cc546040516001600160e01b031960e086901b168152611e4f9392916001600160a01b0316906004016132ac565b600060405180830381600087803b158015611e6957600080fd5b505af1158015611e7d573d6000803e3d6000fd5b50505050600085511115611ebf5760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae7490611d82908890889087906004016132e1565b611007565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b790611efc908a908a908a908a908a9060040161324d565b600060405180830381600087803b158015611f1657600080fd5b505af1158015611f2a573d6000803e3d6000fd5b5050505050505050505050565b61090981611f436119c4565b61288c565b611f528282611010565b6109965760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055611f8b6119c4565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b611fd76119c4565b6001600160a01b0316611ff26033546001600160a01b031690565b6001600160a01b0316146109aa5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610894565b6109096000805160206136a4833981519152826117bb565b61206a8282611010565b156109965760008281526097602090815260408083206001600160a01b03851684529091529020805460ff191690556120a16119c4565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6120ed6109ac565b6121305760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b6044820152606401610894565b600080516020613684833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6121706119c4565b6040516001600160a01b03909116815260200160405180910390a1565b805160009081905b80156121c2578291506121ae8285610c6a6001856134bb565b9250806121ba816135c7565b915050612195565b50915091565b600081516000141561221c5760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d50545900000000006044820152606401610894565b828260405160200161222e9190613194565b6040516020818303038152906040528051906020012060405160200161225e929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b6109096000805160206136a4833981519152826125de565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6122ef6109ac565b1561230c5760405162461bcd60e51b815260040161089490613359565b600080516020613684833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586121706119c4565b600061235c6000836121c8565b600081815260cd602090815260409091208451929350612380929091850190612b8f565b50807f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf8980836040516123b19190613346565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e799060240160206040518083038186803b1580156123fd57600080fd5b505afa158015612411573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124359190612f8c565b6109965760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c60906111179084908690600401613410565b600054610100900460ff166124925760405162461bcd60e51b8152600401610894906133c5565b6109aa61249d6119c4565b612295565b600054610100900460ff166124c95760405162461bcd60e51b8152600401610894906133c5565b6109aa60006124d66119c4565b6125de565b600054610100900460ff166111ef5760405162461bcd60e51b8152600401610894906133c5565b600054610100900460ff166125295760405162461bcd60e51b8152600401610894906133c5565b600080516020613684833981519152805460ff19169055565b600081815260cd60205260408120805482919061255e906135de565b9050119050919050565b612570611fcf565b6001600160a01b0381166125d55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610894565b61090981612295565b6109968282611f48565b6040805180820190915260008082526020820152604051806040016040528083815260200184866020015161261d9190613484565b9052949350505050565b600081516000141561263b57506000919050565b60208201805160f81c60308110801590612659575060398160ff1611155b15801561267b575060618160ff16101580156126795750607a8160ff1611155b155b1561268a575060009392505050565b835160018111156126f8576126ac836126a46001846134bb565b015160f81c90565b915060308260ff16101580156126c6575060398260ff1611155b1580156126e8575060618260ff16101580156126e65750607a8260ff1611155b155b156126f857506000949350505050565b60015b6127066001836134bb565b811015612780578381015160f81c9250602d831480159061273c575060308360ff161015801561273a575060398360ff1611155b155b801561275d575060618360ff161015801561275b5750607a8360ff1611155b155b1561276e5750600095945050505050565b8061277881613619565b9150506126fb565b50600195945050505050565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b03163314156127ce575060331936013560601c90565b503390565b6127dc8161115f565b156128295760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b45440000006044820152606401610894565b610909816128f0565b60008061284960008460018651610c6a91906134bb565b60ca549091506001600160a01b0316158015906128855750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b6128968282611010565b610996576128ae816001600160a01b03166014612974565b6128b9836020612974565b6040516020016128ca9291906131d8565b60408051601f198184030181529082905262461bcd60e51b825261089491600401613346565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd69602082015290810182905260019061292f9060600161119a565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b6060600061298383600261349c565b61298e906002613484565b6001600160401b038111156129b357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156129dd576020820181803683370190505b509050600360fc1b81600081518110612a0657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110612a4357634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000612a6784600261349c565b612a72906001613484565b90505b6001811115612b06576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110612ab457634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110612ad857634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93612aff816135c7565b9050612a75565b5083156128855760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610894565b508054612b61906135de565b6000825580601f10612b71575050565b601f0160209004906000526020600020908101906109099190612c13565b828054612b9b906135de565b90600052602060002090601f016020900481019282612bbd5760008555612c03565b82601f10612bd657805160ff1916838001178555612c03565b82800160010185558215612c03579182015b82811115612c03578251825591602001919060010190612be8565b50612c0f929150612c13565b5090565b5b80821115612c0f5760008155600101612c14565b60008083601f840112612c39578182fd5b5081356001600160401b03811115612c4f578182fd5b6020830191508360208260051b8501011115612c6a57600080fd5b9250929050565b60008083601f840112612c82578182fd5b5081356001600160401b03811115612c98578182fd5b602083019150836020828501011115612c6a57600080fd5b600060208284031215612cc1578081fd5b813561288581613660565b600060208284031215612cdd578081fd5b815161288581613660565b60008060008060008060008060a0898b031215612d03578384fd5b8835612d0e81613660565b975060208901356001600160401b0380821115612d29578586fd5b612d358c838d01612c28565b909950975060408b0135915080821115612d4d578586fd5b612d598c838d01612c28565b909750955060608b0135915080821115612d71578485fd5b50612d7e8b828c01612c28565b9094509250506080890135612d9281613675565b809150509295985092959890939650565b60008060008060608587031215612db8578384fd5b8435612dc381613660565b93506020850135925060408501356001600160401b03811115612de4578283fd5b612df087828801612c71565b95989497509550505050565b60008060008060008060008060a0898b031215612e17578182fd5b8835612e2281613660565b97506020890135965060408901356001600160401b0380821115612e44578384fd5b612e508c838d01612c71565b909850965060608b0135915080821115612e68578384fd5b612e748c838d01612c28565b909650945060808b0135915080821115612e8c578384fd5b50612e998b828c01612c28565b999c989b5096995094979396929594505050565b60008060208385031215612ebf578182fd5b82356001600160401b03811115612ed4578283fd5b612ee085828601612c28565b90969095509350505050565b60006020808385031215612efe578182fd5b82356001600160401b03811115612f13578283fd5b8301601f81018513612f23578283fd5b8035612f36612f3182613461565b613431565b80828252848201915084840188868560051b8701011115612f55578687fd5b8694505b83851015612f80578035612f6c81613660565b835260019490940193918501918501612f59565b50979650505050505050565b600060208284031215612f9d578081fd5b815161288581613675565b600060208284031215612fb9578081fd5b5035919050565b60008060408385031215612fd2578182fd5b823591506020830135612fe481613660565b809150509250929050565b600060208284031215613000578081fd5b81356001600160e01b031981168114612885578182fd5b60008060008060008060c0878903121561302f578384fd5b863561303a81613660565b9550602087013561304a81613660565b9450604087013561305a81613660565b9350606087013561306a81613660565b9250608087013561307a81613660565b915060a087013561308a81613660565b809150509295509295509295565b600080602083850312156130aa578182fd5b82356001600160401b038111156130bf578283fd5b612ee085828601612c71565b6000806000604084860312156130df578081fd5b8335925060208401356001600160401b038111156130fb578182fd5b61310786828701612c71565b9497909650939450505050565b600081518084526020808501808196508360051b81019150828601855b8581101561315b578284038952613149848351613168565b98850198935090840190600101613131565b5091979650505050505050565b60008151808452613180816020860160208601613597565b601f01601f19169290920160200192915050565b600082516131a6818460208701613597565b9190910192915050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351613210816017850160208801613597565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351613241816028840160208801613597565b01602801949350505050565b6001600160a01b038616815260a06020820181905260009061327190830187613114565b82810360408401526132838187613114565b905082810360608401526132978186613114565b91505082151560808301529695505050505050565b600060018060a01b038086168352606060208401526132ce6060840186613168565b9150808416604084015250949350505050565b6060815260006132f46060830186613114565b82810360208401526133068186613114565b915050826040830152949350505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b6020815260006128856020830184613168565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b8281526040602082015260006134296040830184613168565b949350505050565b604051601f8201601f191681016001600160401b03811182821017156134595761345961364a565b604052919050565b60006001600160401b0382111561347a5761347a61364a565b5060051b60200190565b6000821982111561349757613497613634565b500190565b60008160001904831182151516156134b6576134b6613634565b500290565b6000828210156134cd576134cd613634565b500390565b60006134e0612f3184613461565b808482526020808301925084368760051b870111156134fd578485fd5b845b8781101561358b5781356001600160401b038082111561351d578788fd5b90880190601f3681840112613530578889fd5b8235828111156135425761354261364a565b613553818301601f19168801613431565b9250808352368782860101111561356857898afd5b8087850188850137820186018990525086525093820193908201906001016134ff565b50919695505050505050565b60005b838110156135b257818101518382015260200161359a565b838111156135c1576000848401525b50505050565b6000816135d6576135d6613634565b506000190190565b600181811c908216806135f257607f821691505b6020821081141561361357634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561362d5761362d613634565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461090957600080fd5b801515811461090957600080fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000804000a";
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
