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
const _bytecode = "0x608060405234801561001057600080fd5b50613656806100206000396000f3fe6080604052600436106102515760003560e01c806391d1485411610139578063b9998a24116100b6578063d1f5692c1161007a578063d1f5692c14610720578063d539139314610740578063d547741f14610762578063ec52738914610782578063f2fde38b146107a2578063ffa1ad74146107c257600080fd5b8063b9998a2414610680578063c3a3bc00146106a0578063cc2a9a5b146106c0578063cc2c3fc4146106e0578063ceeb4f501461070057600080fd5b8063a3f4df7e116100fd578063a3f4df7e146105b3578063a849d65c14610600578063aa271e1a14610620578063b0aa98c714610640578063b3ab15fb1461066057600080fd5b806391d1485414610529578063983b2d5614610549578063986502751461056957806399e0dd7c1461057e578063a217fddf1461059e57600080fd5b80635c975abb116101d257806371e2a6571161019657806371e2a6571461048357806377a2a589146104a357806381c81d35146104c35780638456cb59146104d65780638da5cb5b146104eb578063906cecc11461050957600080fd5b80635c975abb146104065780635cd7e3b31461041b5780635fc1964f1461043b578063634486da1461045b578063715018a61461046e57600080fd5b806336568abe1161021957806336568abe1461032b5780633f41b6141461034b5780633f4ba83a14610383578063572b6c05146103985780635b6fa8db146103e657600080fd5b806301ffc9a714610256578063248a9ca31461028b578063268b15ed146102c95780632f2ff15d146102eb5780633092afd51461030b575b600080fd5b34801561026257600080fd5b50610276610271366004612a93565b6107f4565b60405190151581526020015b60405180910390f35b34801561029757600080fd5b506102bb6102a6366004612abd565b60009081526097602052604090206001015490565b604051908152602001610282565b3480156102d557600080fd5b506102e96102e4366004612b1e565b61082b565b005b3480156102f757600080fd5b506102e9610306366004612b7e565b6108ce565b34801561031757600080fd5b506102e9610326366004612bae565b6108f8565b34801561033757600080fd5b506102e9610346366004612b7e565b61090c565b34801561035757600080fd5b5060c95461036b906001600160a01b031681565b6040516001600160a01b039091168152602001610282565b34801561038f57600080fd5b506102e961099a565b3480156103a457600080fd5b506102766103b3366004612bae565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b3480156103f257600080fd5b5060cc5461036b906001600160a01b031681565b34801561041257600080fd5b506102766109ac565b34801561042757600080fd5b506102e9610436366004612c1d565b6109c2565b34801561044757600080fd5b506102e9610456366004612d45565b610ce1565b6102e9610469366004612bae565b610d29565b34801561047a57600080fd5b506102e9610e1c565b34801561048f57600080fd5b506102e961049e366004612d45565b610e2e565b3480156104af57600080fd5b5060ce5461036b906001600160a01b031681565b6102e96104d1366004612bae565b610e76565b3480156104e257600080fd5b506102e9610f23565b3480156104f757600080fd5b506033546001600160a01b031661036b565b34801561051557600080fd5b506102e9610524366004612de3565b610f33565b34801561053557600080fd5b50610276610544366004612b7e565b610fb9565b34801561055557600080fd5b506102e9610564366004612bae565b610fe4565b34801561057557600080fd5b506102e9610ff5565b34801561058a57600080fd5b506102e9610599366004612e3e565b61100f565b3480156105aa57600080fd5b506102bb600081565b3480156105bf57600080fd5b506105f3604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b6040516102829190612ecf565b34801561060c57600080fd5b5060cb5461036b906001600160a01b031681565b34801561062c57600080fd5b5061027661063b366004612bae565b6110ee565b34801561064c57600080fd5b5061027661065b366004612abd565b611108565b34801561066c57600080fd5b506102e961067b366004612bae565b611166565b34801561068c57600080fd5b506102e961069b366004612bae565b611190565b3480156106ac57600080fd5b506102e96106bb366004612e3e565b6111d5565b3480156106cc57600080fd5b506102e96106db366004612ee2565b61121c565b3480156106ec57600080fd5b5060ca5461036b906001600160a01b031681565b34801561070c57600080fd5b506102e961071b366004612f64565b611617565b34801561072c57600080fd5b506102e961073b366004613019565b6116ad565b34801561074c57600080fd5b506102bb60008051602061362a83398151915281565b34801561076e57600080fd5b506102e961077d366004612b7e565b611764565b34801561078e57600080fd5b506102e961079d366004612abd565b611789565b3480156107ae57600080fd5b506102e96107bd366004612bae565b6117fb565b3480156107ce57600080fd5b506105f36040518060400160405280600681526020016518171a17189b60d11b81525081565b60006001600160e01b03198216637965db0b60e01b148061082557506301ffc9a760e01b6001600160e01b03198316145b92915050565b8282828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061086f9250849150839050611817565b6108776109ac565b1561089d5760405162461bcd60e51b81526004016108949061304e565b60405180910390fd5b60606108c66108aa61196c565b6108bd886108b8898961197b565b6119a7565b83846001611ab8565b505050505050565b6000828152609760205260409020600101546108e981611e88565b6108f38383611e99565b505050565b610900611f20565b61090981611f99565b50565b61091461196c565b6001600160a01b0316816001600160a01b03161461098c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610894565b6109968282611fb1565b5050565b6109a2611f20565b6109aa612036565b565b60008051602061360a8339815191525460ff1690565b6109cc8688613078565b8051600203610a3d576109e061063b61196c565b610a385760405162461bcd60e51b8152602060048201526024808201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604482015263272a22a960e11b6064820152608401610894565b610bca565b6000610a48826120de565b60c9549092506001600160a01b0316905063430c2081610a6661196c565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101849052604401602060405180830381865afa158015610ab1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad59190613142565b80610b64575060c95460ce5460405163430c208160e01b81526001600160a01b0391821660048201526024810184905291169063430c208190604401602060405180830381865afa158015610b2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b529190613142565b8015610b645750610b6461063b61196c565b610bc85760405162461bcd60e51b815260206004820152602f60248201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060448201526e282927ab22a22fa7a92fa7aba722a960891b6064820152608401610894565b505b610bd48789613078565b600281511015610c345760405162461bcd60e51b815260206004820152602560248201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456044820152642627abaf9960d91b6064820152608401610894565b610c88610c6860008360018551610c4b9190613175565b81518110610c5b57610c5b613188565b6020026020010151612119565b82600081518110610c7b57610c7b613188565b6020026020010151611817565b610c906109ac565b15610cad5760405162461bcd60e51b81526004016108949061304e565b610cd58a610cbb8a8c613078565b610cc5898b613078565b610ccf888a613078565b87611ab8565b50505050505050505050565b610ce9611f20565b60005b815181101561099657610d17828281518110610d0a57610d0a613188565b6020026020010151611f99565b80610d218161319e565b915050610cec565b610d3461063b61196c565b610d805760405162461bcd60e51b815260206004820181905260248201527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e5445526044820152606401610894565b6001600160a01b038116610dd65760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610894565b610ddf816121cd565b610de7610ff5565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610996573d6000803e3d6000fd5b610e24611f20565b6109aa60006121e5565b610e36611f20565b60005b815181101561099657610e64828281518110610e5757610e57613188565b60200260200101516121cd565b80610e6e8161319e565b915050610e39565b610e8161063b61196c565b610ecd5760405162461bcd60e51b815260206004820181905260248201527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e5445526044820152606401610894565b6001600160a01b038116610ddf5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610894565b610f2b611f20565b6109aa612237565b8282828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610f779250849150839050611817565b610f7f6109ac565b15610f9c5760405162461bcd60e51b81526004016108949061304e565b6060610fb0876108bd886108b8898961197b565b50505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b610fec611f20565b610909816121cd565b6109aa60008051602061362a83398151915261034661196c565b611017611f20565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c9061104990859085906004016131b7565b600060405180830381600087803b15801561106357600080fd5b505af1158015611077573d6000803e3d6000fd5b505060cb546001600160a01b031615915061099690505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906110c090859085906004016131b7565b600060405180830381600087803b1580156110da57600080fd5b505af11580156108c6573d6000803e3d6000fd5b600061082560008051602061362a83398151915283610fb9565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd69602082015290810182905260009061115c906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b61116e611f20565b60ce80546001600160a01b0319166001600160a01b0392909216919091179055565b611198611f20565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b6111dd611f20565b61099682828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061229f92505050565b600054610100900460ff161580801561123c5750600054600160ff909116105b806112565750303b158015611256575060005460ff166001145b6112b95760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610894565b6000805460ff1916600117905580156112dc576000805461ff0019166101001790555b60c980546001600160a01b03199081166001600160a01b038a81169190911790925560ca8054821689841617905560cb8054821688841617905560cc8054821687841617905560ce805490911691851691909117905561133a6123a3565b6113426123da565b61134b82612413565b61135361243a565b6040805161028081018252600661024082018181526563727970746f60d01b610260840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a815269313637b1b5b1b430b4b760b11b818401526080850152845180860186526007808252663134ba31b7b4b760c91b8285015260a0860191909152855180870187528281526207070760eb1b8185015260c0860152855180870187528281526264616f60e81b8185015260e086015285518087018752918252621e9a5b60ea1b8284015261010085019190915284518086018652908152663837b63cb3b7b760c91b8183015261012084015283518085018552600b81526a756e73746f707061626c6560a81b81830152610140840152835180850185528281526535b632bb32b960d11b81830152610160840152835180850185526002815261686960f01b8183015261018084015283518085018552918252656b726573757360d01b828201526101a083019190915282518084018452600580825264616e696d6560d81b828401526101c084019190915283518085018552818152646d616e676160d81b818401526101e084015283518085018552600981526862696e616e6365757360b81b8184015261020084015283518085019094528352647265616c6d60d81b9083015261022081019190915260005b60128110156115c7576115b58282601281106115ab576115ab613188565b602002015161229f565b806115bf8161319e565b91505061158d565b50508015610fb0576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150505050505050565b8686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061165b9250849150839050611817565b6116636109ac565b156116805760405162461bcd60e51b81526004016108949061304e565b610cd58a6116928b6108b88c8c61197b565b61169c888a613078565b6116a68789613078565b6001611ab8565b6116b5611f20565b60005b818110156108f35760c9546001600160a01b031663509602398484848181106116e3576116e3613188565b90506020020160208101906116f89190612bae565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801561173957600080fd5b505af115801561174d573d6000803e3d6000fd5b50505050808061175c9061319e565b9150506116b8565b60008281526097602052604090206001015461177f81611e88565b6108f38383611fb1565b611791611f20565b61179a8161247a565b6117b65760405162461bcd60e51b8152600401610894906131e6565b600081815260cd602052604081206117cd91612a45565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b611803611f20565b61180c816124a0565b610909600082612516565b6118208261247a565b61183c5760405162461bcd60e51b8152600401610894906131e6565b600061186f8260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a816000015111156119175761189a61188e826000600a612520565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b8036119175760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b6064820152608401610894565b6119208261255f565b6108f35760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a204c4142454c5f494e56414c49440000006044820152606401610894565b60006119766126c3565b905090565b60608282604051602001611990929190613228565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b60608152602001906001900390816119c157905050905082816000815181106119ec576119ec613188565b602002602001018190525060cd60008581526020019081526020016000208054611a1590613250565b80601f0160208091040260200160405190810160405280929190818152602001828054611a4190613250565b8015611a8e5780601f10611a6357610100808354040283529160200191611a8e565b820191906000526020600020905b815481529060010190602001808311611a7157829003601f168201915b505050505081600181518110611aa657611aa6613188565b60209081029190910101529392505050565b600080611ac4866120de565b91509150828015611ad6575060028651115b8015611b58575060c9546040516331a9108f60e11b8152600481018390526001600160a01b03898116921690636352211e90602401602060405180830381865afa158015611b28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b4c919061328a565b6001600160a01b031614155b15611bb85760405162461bcd60e51b815260206004820152602a60248201527f4d696e74696e674d616e616765723a20524556455253455f5245434f52445f4e60448201526913d517d0531313d5d15160b21b6064820152608401610894565b60c954604051634f558e7960e01b8152600481018490526001600160a01b0390911690634f558e7990602401602060405180830381865afa158015611c01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c259190613142565b8015611ca4575060c9546040516331a9108f60e11b81526004810184905230916001600160a01b031690636352211e90602401602060405180830381865afa158015611c75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c99919061328a565b6001600160a01b0316145b15611d185760c954604051630fb8df0360e11b81526001600160a01b0390911690631f71be0690611ce1908a908a908a908a908a906004016132fc565b600060405180830381600087803b158015611cfb57600080fd5b505af1158015611d0f573d6000803e3d6000fd5b50505050610fb0565b611d2182612709565b611d2a86612768565b8015611d37575085516002145b15611e155760ca5486516001600160a01b039091169063c36c21259089908990600090611d6657611d66613188565b602090810291909101015160cc546040516001600160e01b031960e086901b168152611da09392916001600160a01b03169060040161335b565b600060405180830381600087803b158015611dba57600080fd5b505af1158015611dce573d6000803e3d6000fd5b50505050600085511115611e105760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae7490611ce190889088908790600401613390565b610fb0565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b790611e4d908a908a908a908a908a906004016132fc565b600060405180830381600087803b158015611e6757600080fd5b505af1158015611e7b573d6000803e3d6000fd5b5050505050505050505050565b61090981611e9461196c565b6127c2565b611ea38282610fb9565b6109965760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055611edc61196c565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b611f2861196c565b6001600160a01b0316611f436033546001600160a01b031690565b6001600160a01b0316146109aa5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610894565b61090960008051602061362a83398151915282611764565b611fbb8282610fb9565b156109965760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19169055611ff261196c565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b61203e6109ac565b6120815760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b6044820152606401610894565b60008051602061360a833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6120c161196c565b6040516001600160a01b03909116815260200160405180910390a1565b805160009081905b8015612113578291506120ff8285610c4b600185613175565b92508061210b816133c6565b9150506120e6565b50915091565b6000815160000361216c5760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d50545900000000006044820152606401610894565b828260405160200161217e91906133dd565b604051602081830303815290604052805190602001206040516020016121ae929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b61090960008051602061362a83398151915282612516565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61223f6109ac565b1561225c5760405162461bcd60e51b81526004016108949061304e565b60008051602061360a833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586120c161196c565b60006122ac600083612119565b600081815260cd602052604090209091506122c7838261343f565b50807f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf8980836040516122f89190612ecf565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e7990602401602060405180830381865afa158015612349573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061236d9190613142565b6109965760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c60906110c090849086906004016134fe565b600054610100900460ff166123ca5760405162461bcd60e51b81526004016108949061351f565b6109aa6123d561196c565b6121e5565b600054610100900460ff166124015760405162461bcd60e51b81526004016108949061351f565b6109aa600061240e61196c565b612516565b600054610100900460ff166111985760405162461bcd60e51b81526004016108949061351f565b600054610100900460ff166124615760405162461bcd60e51b81526004016108949061351f565b60008051602061360a833981519152805460ff19169055565b600081815260cd60205260408120805482919061249690613250565b9050119050919050565b6124a8611f20565b6001600160a01b03811661250d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610894565b610909816121e5565b6109968282611e99565b60408051808201909152600080825260208201526040518060400160405280838152602001848660200151612555919061356a565b9052949350505050565b6000815160000361257257506000919050565b60208201805160f81c60308110801590612590575060398160ff1611155b1580156125b2575060618160ff16101580156125b05750607a8160ff1611155b155b156125c1575060009392505050565b8351600181111561262f576125e3836125db600184613175565b015160f81c90565b915060308260ff16101580156125fd575060398260ff1611155b15801561261f575060618260ff161015801561261d5750607a8260ff1611155b155b1561262f57506000949350505050565b60015b61263d600183613175565b8110156126b7578381015160f81c9250602d8314801590612673575060308360ff1610158015612671575060398360ff1611155b155b8015612694575060618360ff16101580156126925750607a8360ff1611155b155b156126a55750600095945050505050565b806126af8161319e565b915050612632565b50600195945050505050565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b03163303612704575060331936013560601c90565b503390565b61271281611108565b1561275f5760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b45440000006044820152606401610894565b61090981612826565b60008061277f60008460018651610c4b9190613175565b60ca549091506001600160a01b0316158015906127bb5750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b6127cc8282610fb9565b610996576127e4816001600160a01b031660146128aa565b6127ef8360206128aa565b60405160200161280092919061357d565b60408051601f198184030181529082905262461bcd60e51b825261089491600401612ecf565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd69602082015290810182905260019061286590606001611143565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b606060006128b98360026135f2565b6128c490600261356a565b6001600160401b038111156128db576128db612cdc565b6040519080825280601f01601f191660200182016040528015612905576020820181803683370190505b509050600360fc1b8160008151811061292057612920613188565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061294f5761294f613188565b60200101906001600160f81b031916908160001a90535060006129738460026135f2565b61297e90600161356a565b90505b60018111156129f6576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106129b2576129b2613188565b1a60f81b8282815181106129c8576129c8613188565b60200101906001600160f81b031916908160001a90535060049490941c936129ef816133c6565b9050612981565b5083156127bb5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610894565b508054612a5190613250565b6000825580601f10612a61575050565b601f01602090049060005260206000209081019061090991905b80821115612a8f5760008155600101612a7b565b5090565b600060208284031215612aa557600080fd5b81356001600160e01b0319811681146127bb57600080fd5b600060208284031215612acf57600080fd5b5035919050565b60008083601f840112612ae857600080fd5b5081356001600160401b03811115612aff57600080fd5b602083019150836020828501011115612b1757600080fd5b9250929050565b600080600060408486031215612b3357600080fd5b8335925060208401356001600160401b03811115612b5057600080fd5b612b5c86828701612ad6565b9497909650939450505050565b6001600160a01b038116811461090957600080fd5b60008060408385031215612b9157600080fd5b823591506020830135612ba381612b69565b809150509250929050565b600060208284031215612bc057600080fd5b81356127bb81612b69565b60008083601f840112612bdd57600080fd5b5081356001600160401b03811115612bf457600080fd5b6020830191508360208260051b8501011115612b1757600080fd5b801515811461090957600080fd5b60008060008060008060008060a0898b031215612c3957600080fd5b8835612c4481612b69565b975060208901356001600160401b0380821115612c6057600080fd5b612c6c8c838d01612bcb565b909950975060408b0135915080821115612c8557600080fd5b612c918c838d01612bcb565b909750955060608b0135915080821115612caa57600080fd5b50612cb78b828c01612bcb565b9094509250506080890135612ccb81612c0f565b809150509295985092959890939650565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715612d1a57612d1a612cdc565b604052919050565b60006001600160401b03821115612d3b57612d3b612cdc565b5060051b60200190565b60006020808385031215612d5857600080fd5b82356001600160401b03811115612d6e57600080fd5b8301601f81018513612d7f57600080fd5b8035612d92612d8d82612d22565b612cf2565b81815260059190911b82018301908381019087831115612db157600080fd5b928401925b82841015612dd8578335612dc981612b69565b82529284019290840190612db6565b979650505050505050565b60008060008060608587031215612df957600080fd5b8435612e0481612b69565b93506020850135925060408501356001600160401b03811115612e2657600080fd5b612e3287828801612ad6565b95989497509550505050565b60008060208385031215612e5157600080fd5b82356001600160401b03811115612e6757600080fd5b612e7385828601612ad6565b90969095509350505050565b60005b83811015612e9a578181015183820152602001612e82565b50506000910152565b60008151808452612ebb816020860160208601612e7f565b601f01601f19169290920160200192915050565b6020815260006127bb6020830184612ea3565b60008060008060008060c08789031215612efb57600080fd5b8635612f0681612b69565b95506020870135612f1681612b69565b94506040870135612f2681612b69565b93506060870135612f3681612b69565b92506080870135612f4681612b69565b915060a0870135612f5681612b69565b809150509295509295509295565b60008060008060008060008060a0898b031215612f8057600080fd5b8835612f8b81612b69565b97506020890135965060408901356001600160401b0380821115612fae57600080fd5b612fba8c838d01612ad6565b909850965060608b0135915080821115612fd357600080fd5b612fdf8c838d01612bcb565b909650945060808b0135915080821115612ff857600080fd5b506130058b828c01612bcb565b999c989b5096995094979396929594505050565b6000806020838503121561302c57600080fd5b82356001600160401b0381111561304257600080fd5b612e7385828601612bcb565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b6000613086612d8d84612d22565b80848252602080830192508560051b8501368111156130a457600080fd5b855b818110156131365780356001600160401b03808211156130c65760008081fd5b90880190601f36818401126130db5760008081fd5b8235828111156130ed576130ed612cdc565b6130fe818301601f19168801612cf2565b9250808352368782860101111561311757600091508182fd5b80878501888501376000908301870152508652509382019382016130a6565b50919695505050505050565b60006020828403121561315457600080fd5b81516127bb81612c0f565b634e487b7160e01b600052601160045260246000fd5b818103818111156108255761082561315f565b634e487b7160e01b600052603260045260246000fd5b6000600182016131b0576131b061315f565b5060010190565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b600181811c9082168061326457607f821691505b60208210810361328457634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561329c57600080fd5b81516127bb81612b69565b600081518084526020808501808196508360051b8101915082860160005b858110156132ef5782840389526132dd848351612ea3565b988501989350908401906001016132c5565b5091979650505050505050565b6001600160a01b038616815260a060208201819052600090613320908301876132a7565b828103604084015261333281876132a7565b9050828103606084015261334681866132a7565b91505082151560808301529695505050505050565b600060018060a01b0380861683526060602084015261337d6060840186612ea3565b9150808416604084015250949350505050565b6060815260006133a360608301866132a7565b82810360208401526133b581866132a7565b915050826040830152949350505050565b6000816133d5576133d561315f565b506000190190565b600082516133ef818460208701612e7f565b9190910192915050565b601f8211156108f357600081815260208120601f850160051c810160208610156134205750805b601f850160051c820191505b818110156108c65782815560010161342c565b81516001600160401b0381111561345857613458612cdc565b61346c816134668454613250565b846133f9565b602080601f8311600181146134a157600084156134895750858301515b600019600386901b1c1916600185901b1785556108c6565b600085815260208120601f198616915b828110156134d0578886015182559484019460019091019084016134b1565b50858210156134ee5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8281526040602082015260006135176040830184612ea3565b949350505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b808201808211156108255761082561315f565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516135b5816017850160208801612e7f565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516135e6816028840160208801612e7f565b01602801949350505050565b80820281158282048414176108255761082561315f56fe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000811000a";
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
