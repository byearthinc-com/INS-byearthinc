"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarCustody__factory = void 0;
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "DomainLocked",
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
                internalType: "address",
                name: "_unsRegistry",
                type: "address",
            },
            {
                internalType: "address",
                name: "_mintingManager",
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
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "mintingManager",
        outputs: [
            {
                internalType: "contract IMintingManager",
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
        inputs: [
            {
                internalType: "address",
                name: "virtualOwner",
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
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
        ],
        name: "registerDomain",
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
        name: "safeTransfer",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "virtualOwners",
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
];
const _bytecode = "0x608060405234801562000010575f80fd5b506200001b62000021565b620000e0565b5f54610100900460ff16156200008d5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b5f5460ff9081161015620000de575f805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b61266680620000ee5f395ff3fe6080604052600436106101e6575f3560e01c806371e2a65711610108578063a3f4df7e1161009d578063d53913931161006d578063d5391393146105c7578063d547741f146105e7578063f2fde38b14610606578063ffa1ad7414610625578063ffe2722914610655575f80fd5b8063a3f4df7e14610513578063a424740014610554578063aa271e1a14610573578063addc976b14610592575f80fd5b8063983b2d56116100d8578063983b2d56146104ae57806398650275146104cd578063a217fddf146104e1578063a22cb465146104f4575f80fd5b806371e2a6571461044057806381c81d351461045f5780638da5cb5b1461047257806391d148541461048f575f80fd5b8063423f6cef1161017e5780635fc1964f1161014e5780635fc1964f146103db578063634486da146103fa5780636ccbae5f1461040d578063715018a61461042c575f80fd5b8063423f6cef14610355578063485cc95514610374578063572b6c051461039357806358884432146103bb575f80fd5b80632f2ff15d116101b95780632f2ff15d146102be5780633092afd5146102df57806336568abe146102fe5780633f41b6141461031d575f80fd5b806301ffc9a7146101ea5780631626ba7e1461021e5780631bf7e13e14610256578063248a9ca314610282575b5f80fd5b3480156101f5575f80fd5b50610209610204366004611d59565b610674565b60405190151581526020015b60405180910390f35b348015610229575f80fd5b5061023d610238366004611e31565b6106aa565b6040516001600160e01b03199091168152602001610215565b348015610261575f80fd5b50610275610270366004611e75565b610700565b6040516102159190611f58565b34801561028d575f80fd5b506102b061029c366004611f6a565b5f90815260fb602052604090206001015490565b604051908152602001610215565b3480156102c9575f80fd5b506102dd6102d8366004611f95565b6107c9565b005b3480156102ea575f80fd5b506102dd6102f9366004611fc3565b6107f2565b348015610309575f80fd5b506102dd610318366004611f95565b610806565b348015610328575f80fd5b5061012d5461033d906001600160a01b031681565b6040516001600160a01b039091168152602001610215565b348015610360575f80fd5b506102dd61036f366004611fde565b610899565b34801561037f575f80fd5b506102dd61038e366004612008565b6109a8565b34801561039e575f80fd5b506102096103ad366004611fc3565b6001600160a01b0316301490565b3480156103c6575f80fd5b5061012e5461033d906001600160a01b031681565b3480156103e6575f80fd5b506102dd6103f5366004612034565b610b06565b6102dd610408366004611fc3565b610b43565b348015610418575f80fd5b506102b0610427366004611f6a565b610c03565b348015610437575f80fd5b506102dd610c5c565b34801561044b575f80fd5b506102dd61045a366004612034565b610c6f565b6102dd61046d366004611fc3565b610cac565b34801561047d575f80fd5b506097546001600160a01b031661033d565b34801561049a575f80fd5b506102096104a9366004611f95565b610d29565b3480156104b9575f80fd5b506102dd6104c8366004611fc3565b610d53565b3480156104d8575f80fd5b506102dd610d64565b3480156104ec575f80fd5b506102b05f81565b3480156104ff575f80fd5b506102dd61050e3660046120d5565b610d7d565b34801561051e575f80fd5b5061027560405180604001604052806016815260200175554e533a2052656769737472617220437573746f647960501b81525081565b34801561055f575f80fd5b5061020961056e366004611e75565b610dec565b34801561057e575f80fd5b5061020961058d366004611fc3565b610e3d565b34801561059d575f80fd5b5061033d6105ac366004611f6a565b61012f6020525f90815260409020546001600160a01b031681565b3480156105d2575f80fd5b506102b05f8051602061263a83398151915281565b3480156105f2575f80fd5b506102dd610601366004611f95565b610e55565b348015610611575f80fd5b506102dd610620366004611fc3565b610e79565b348015610630575f80fd5b50610275604051806040016040528060058152602001640302e312e360dc1b81525081565b348015610660575f80fd5b506102dd61066f366004612146565b610e94565b5f6001600160e01b03198216637965db0b60e01b14806106a457506301ffc9a760e01b6001600160e01b03198316145b92915050565b5f806106b68484611064565b90506106c181610e3d565b156106ef577f1626ba7e356f5979dd355a3d2bfb43e80420a480c3b854edce286a82d74968699150506106a4565b506001600160e01b03199392505050565b60605f5a9050610711858585610dec565b61072e57604051638baa579f60e01b815260040160405180910390fd5b6107be61073e6020870187611fc3565b3060408801358461075260608b018b612203565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b90819084018382808284375f9201919091525061108692505050565b9150505b9392505050565b5f82815260fb60205260409020600101546107e381611162565b6107ed8383611173565b505050565b6107fa6111f9565b61080381611272565b50565b61080e611289565b6001600160a01b0316816001600160a01b03161461088b5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6108958282611297565b5050565b6108a461058d611289565b6108c05760405162461bcd60e51b815260040161088290612246565b6002606554036109125760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610882565b60026065556109208161131b565b5f81815261012f60205260409081902080546001600160a01b031916905561012d54905163559dc3ff60e11b81526001600160a01b038481166004830152602482018490529091169063ab3b87fe906044015f604051808303815f87803b158015610989575f80fd5b505af115801561099b573d5f803e3d5ffd5b5050600160655550505050565b5f54610100900460ff16158080156109c657505f54600160ff909116105b806109df5750303b1580156109df57505f5460ff166001145b610a425760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610882565b5f805460ff191660011790558015610a63575f805461ff0019166101001790555b61012d80546001600160a01b038086166001600160a01b03199283161790925561012e805492851692909116919091179055610a9d611334565b610aa5611361565b610aad611361565b610ab5611387565b610abd6113bd565b80156107ed575f805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b610b0e6111f9565b5f5b815181101561089557610b3b828281518110610b2e57610b2e61227b565b6020026020010151611272565b600101610b10565b610b4e61058d611289565b610b6a5760405162461bcd60e51b815260040161088290612246565b6001600160a01b038116610bc05760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610882565b610bc9816113f4565b610bd1610d64565b6040516001600160a01b038216903480156108fc02915f818181858888f19350505050158015610895573d5f803e3d5ffd5b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a8381560208201529081018290525f90610c55906060016040516020818303038152906040528051906020012090565b5492915050565b610c646111f9565b610c6d5f61140b565b565b610c776111f9565b5f5b815181101561089557610ca4828281518110610c9757610c9761227b565b60200260200101516113f4565b600101610c79565b610cb761058d611289565b610cd35760405162461bcd60e51b815260040161088290612246565b6001600160a01b038116610bc95760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610882565b5f91825260fb602090815260408084206001600160a01b0393909316845291905290205460ff1690565b610d5b6111f9565b610803816113f4565b610c6d5f8051602061263a833981519152610318611289565b610d856111f9565b61012d5460405163a22cb46560e01b81526001600160a01b03848116600483015283151560248301529091169063a22cb465906044015f604051808303815f87803b158015610dd2575f80fd5b505af1158015610de4573d5f803e3d5ffd5b505050505050565b5f610e35610df98561228f565b3085858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061145c92505050565b949350505050565b5f6106a45f8051602061263a83398151915283610d29565b5f82815260fb6020526040902060010154610e6f81611162565b6107ed8383611297565b610e816111f9565b610e8a816115a1565b6108035f82611617565b610e9f61058d611289565b610ebb5760405162461bcd60e51b815260040161088290612246565b600260655403610f0d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610882565b600260655561012d5460405163276fabb160e01b81525f916001600160a01b03169063276fabb190610f45908b908b906004016123d1565b602060405180830381865afa158015610f60573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f8491906123e4565b9050610f8f8161131b565b5f81815261012f602052604080822080546001600160a01b0319166001600160a01b038d81169190911790915561012e549151632f1166c360e11b8152911691635e22cd8691610ff29130918d918d918d918d918d918d918d91906004016123fb565b5f604051808303815f87803b158015611009575f80fd5b505af115801561101b573d5f803e3d5ffd5b50506040516001600160a01b038c1692508391507f34a236306b3d8796f17c3b29af658bbc29b76f8b9c85ea86154638f2d769a1ea905f90a35050600160655550505050505050565b5f805f6110718585611621565b9150915061107e81611663565b509392505050565b606061109185611818565b5f80876001600160a01b0316866110aa8b8a898961187d565b6040516110b7919061246f565b5f604051808303815f8787f1925050503d805f81146110f1576040519150601f19603f3d011682016040523d82523d5f602084013e6110f6565b606091505b509092509050611107603f8761249e565b5a11611115576111156124bd565b61115582826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c45440000000000008152506118ad565b9998505050505050505050565b6108038161116e611289565b6118e6565b61117d8282610d29565b610895575f82815260fb602090815260408083206001600160a01b03851684529091529020805460ff191660011790556111b5611289565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b611201611289565b6001600160a01b031661121c6097546001600160a01b031690565b6001600160a01b031614610c6d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610882565b6108035f8051602061263a83398151915282610e55565b5f61129261194a565b905090565b6112a18282610d29565b15610895575f82815260fb602090815260408083206001600160a01b03851684529091529020805460ff191690556112d7611289565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b30330361132b5761080381611967565b61080381611818565b5f54610100900460ff1661135a5760405162461bcd60e51b8152600401610882906124d1565b6001606555565b5f54610100900460ff16610c6d5760405162461bcd60e51b8152600401610882906124d1565b5f54610100900460ff166113ad5760405162461bcd60e51b8152600401610882906124d1565b610c6d6113b8611289565b61140b565b5f54610100900460ff166113e35760405162461bcd60e51b8152600401610882906124d1565b610c6d5f6113ef611289565b611617565b6108035f8051602061263a83398151915282611617565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6040838101519051636ccbae5f60e01b815260048101919091525f9081903090636ccbae5f90602401602060405180830381865afa1580156114a0573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114c491906123e4565b90505f6115718660600151805190602001208688602001516040516020016115119392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b905081866020015114801561159757508551611597906001600160a01b03168286611991565b9695505050505050565b6115a96111f9565b6001600160a01b03811661160e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610882565b6108038161140b565b6108958282611173565b5f808251604103611655576020830151604084015160608501515f1a61164987828585611acc565b9450945050505061165c565b505f905060025b9250929050565b5f8160048111156116765761167661251c565b0361167e5750565b60018160048111156116925761169261251c565b036116df5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610882565b60028160048111156116f3576116f361251c565b036117405760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610882565b60038160048111156117545761175461251c565b036117ac5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610882565b60048160048111156117c0576117c061251c565b036108035760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610882565b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a8381560208201529081018290525f9060600160405160208183030381529060405280519060200120905061186c8190565b54611878906001612530565b905550565b606082858560405160200161189493929190612543565b6040516020818303038152906040529050949350505050565b606083156118bc5750816107c2565b8251156118cc5782518084602001fd5b8160405162461bcd60e51b81526004016108829190611f58565b6118f08282610d29565b61089557611908816001600160a01b03166014611bb1565b611913836020611bb1565b604051602001611924929190612581565b60408051601f198184030181529082905262461bcd60e51b825261088291600401611f58565b5f30330361195f575060331936013560601c90565b503390565b90565b61196f611d47565b811461080357604051635637b6af60e11b815260048101829052602401610882565b5f805f61199e8585611621565b90925090505f8160048111156119b6576119b661251c565b1480156119d45750856001600160a01b0316826001600160a01b0316145b156119e4576001925050506107c2565b5f80876001600160a01b0316631626ba7e60e01b8888604051602401611a0b9291906125f5565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611a49919061246f565b5f60405180830381855afa9150503d805f8114611a81576040519150601f19603f3d011682016040523d82523d5f602084013e611a86565b606091505b5091509150818015611a99575080516020145b8015611ac057508051630b135d3f60e11b90611abe90830160209081019084016123e4565b145b98975050505050505050565b5f807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611b0157505f90506003611ba8565b8460ff16601b14158015611b1957508460ff16601c14155b15611b2957505f90506004611ba8565b604080515f8082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611b7a573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b038116611ba2575f60019250925050611ba8565b91505f90505b94509492505050565b60605f611bbf83600261260d565b611bca906002612530565b67ffffffffffffffff811115611be257611be2611d80565b6040519080825280601f01601f191660200182016040528015611c0c576020820181803683370190505b509050600360fc1b815f81518110611c2657611c2661227b565b60200101906001600160f81b03191690815f1a905350600f60fb1b81600181518110611c5457611c5461227b565b60200101906001600160f81b03191690815f1a9053505f611c7684600261260d565b611c81906001612530565b90505b6001811115611cf8576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611cb557611cb561227b565b1a60f81b828281518110611ccb57611ccb61227b565b60200101906001600160f81b03191690815f1a90535060049490941c93611cf181612624565b9050611c84565b5083156107c25760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610882565b5f3033036119645750601f1936013590565b5f60208284031215611d69575f80fd5b81356001600160e01b0319811681146107c2575f80fd5b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611dbd57611dbd611d80565b604052919050565b5f82601f830112611dd4575f80fd5b813567ffffffffffffffff811115611dee57611dee611d80565b611e01601f8201601f1916602001611d94565b818152846020838601011115611e15575f80fd5b816020850160208301375f918101602001919091529392505050565b5f8060408385031215611e42575f80fd5b82359150602083013567ffffffffffffffff811115611e5f575f80fd5b611e6b85828601611dc5565b9150509250929050565b5f805f60408486031215611e87575f80fd5b833567ffffffffffffffff80821115611e9e575f80fd5b9085019060808288031215611eb1575f80fd5b90935060208501359080821115611ec6575f80fd5b818601915086601f830112611ed9575f80fd5b813581811115611ee7575f80fd5b876020828501011115611ef8575f80fd5b6020830194508093505050509250925092565b5f5b83811015611f25578181015183820152602001611f0d565b50505f910152565b5f8151808452611f44816020860160208601611f0b565b601f01601f19169290920160200192915050565b602081525f6107c26020830184611f2d565b5f60208284031215611f7a575f80fd5b5035919050565b6001600160a01b0381168114610803575f80fd5b5f8060408385031215611fa6575f80fd5b823591506020830135611fb881611f81565b809150509250929050565b5f60208284031215611fd3575f80fd5b81356107c281611f81565b5f8060408385031215611fef575f80fd5b8235611ffa81611f81565b946020939093013593505050565b5f8060408385031215612019575f80fd5b823561202481611f81565b91506020830135611fb881611f81565b5f6020808385031215612045575f80fd5b823567ffffffffffffffff8082111561205c575f80fd5b818501915085601f83011261206f575f80fd5b81358181111561208157612081611d80565b8060051b9150612092848301611d94565b81815291830184019184810190888411156120ab575f80fd5b938501935b83851015611ac057843592506120c583611f81565b82825293850193908501906120b0565b5f80604083850312156120e6575f80fd5b82356120f181611f81565b915060208301358015158114611fb8575f80fd5b5f8083601f840112612115575f80fd5b50813567ffffffffffffffff81111561212c575f80fd5b6020830191508360208260051b850101111561165c575f80fd5b5f805f805f805f8060a0898b03121561215d575f80fd5b883561216881611f81565b9750602089013567ffffffffffffffff80821115612184575f80fd5b6121908c838d01612105565b909950975060408b01359150808211156121a8575f80fd5b6121b48c838d01612105565b909750955060608b01359150808211156121cc575f80fd5b6121d88c838d01612105565b909550935060808b0135915080821682146121f1575f80fd5b50809150509295985092959890939650565b5f808335601e19843603018112612218575f80fd5b83018035915067ffffffffffffffff821115612232575f80fd5b60200191503681900382131561165c575f80fd5b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b634e487b7160e01b5f52603260045260245ffd5b5f6080823603121561229f575f80fd5b6040516080810167ffffffffffffffff82821081831117156122c3576122c3611d80565b81604052843591506122d482611f81565b818352602085013560208401526040850135604084015260608501359150808211156122fe575f80fd5b5061230b36828601611dc5565b60608301525092915050565b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b5f838385526020808601955060208560051b830101845f5b878110156123c457848303601f19018952813536889003601e1901811261237c575f80fd5b8701848101903567ffffffffffffffff811115612397575f80fd5b8036038213156123a5575f80fd5b6123b0858284612317565b9a86019a9450505090830190600101612357565b5090979650505050505050565b602081525f610e3560208301848661233f565b5f602082840312156123f4575f80fd5b5051919050565b6001600160a01b038a16815260c0602082018190525f9061241f9083018a8c61233f565b828103604084015261243281898b61233f565b9050828103606084015261244781878961233f565b67ffffffffffffffff959095166080840152505090151560a090910152979650505050505050565b5f8251612480818460208701611f0b565b9190910192915050565b634e487b7160e01b5f52601160045260245ffd5b5f826124b857634e487b7160e01b5f52601260045260245ffd5b500490565b634e487b7160e01b5f52600160045260245ffd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b5f52602160045260245ffd5b808201808211156106a4576106a461248a565b5f8451612554818460208901611f0b565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081525f83516125b8816017850160208801611f0b565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516125e9816028840160208801611f0b565b01602801949350505050565b828152604060208201525f610e356040830184611f2d565b80820281158282048414176106a4576106a461248a565b5f816126325761263261248a565b505f19019056fe9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000818000a";
const isSuperArgs = (xs) => xs.length > 1;
class RegistrarCustody__factory extends ethers_1.ContractFactory {
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
exports.RegistrarCustody__factory = RegistrarCustody__factory;
RegistrarCustody__factory.bytecode = _bytecode;
RegistrarCustody__factory.abi = _abi;
