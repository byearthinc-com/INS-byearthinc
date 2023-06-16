"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENSCustody__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "CustodyNotEnoughBalance",
        type: "error",
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
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "InvalidToken",
        type: "error",
    },
    {
        inputs: [],
        name: "OperationProhibited",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "Unauthorised",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "UnknownToken",
        type: "error",
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
        name: "Parked",
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
                internalType: "bytes32",
                name: "commitment",
                type: "bytes32",
            },
        ],
        name: "commit",
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
                name: "controller",
                type: "address",
            },
            {
                internalType: "address",
                name: "wrapper",
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
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "secret",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
            {
                internalType: "bool",
                name: "reverseRecord",
                type: "bool",
            },
            {
                internalType: "uint16",
                name: "ownerControlledFuses",
                type: "uint16",
            },
            {
                internalType: "bool",
                name: "selfCustody",
                type: "bool",
            },
        ],
        name: "makeCommitment",
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
                name: "",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155BatchReceived",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
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
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "secret",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
            {
                internalType: "bool",
                name: "reverseRecord",
                type: "bool",
            },
            {
                internalType: "uint16",
                name: "ownerControlledFuses",
                type: "uint16",
            },
            {
                internalType: "bool",
                name: "selfCustody",
                type: "bool",
            },
        ],
        name: "register",
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
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "renew",
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
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "rentPrice",
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
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b506200001c62000022565b620000e4565b600054610100900460ff16156200008f5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161015620000e2576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b61308180620000f46000396000f3fe6080604052600436106102085760003560e01c80638da5cb5b11610118578063acf1a841116100a0578063d547741f1161006f578063d547741f1461062c578063f14fcbc81461064c578063f23a6e611461066c578063f2fde38b1461068c578063ffa1ad74146106ac57600080fd5b8063acf1a84114610591578063bc197c81146105b1578063cf015853146105ea578063d53913931461060a57600080fd5b8063a0e3aef1116100e7578063a0e3aef1146104e5578063a217fddf14610505578063a3f4df7e1461051a578063a424740014610551578063aa271e1a1461057157600080fd5b80638da5cb5b1461047257806391d1485414610490578063983b2d56146104b057806398650275146104d057600080fd5b8063572b6c051161019b5780636ccbae5f1161016a5780636ccbae5f146103ea578063715018a61461040a57806371e2a6571461041f57806381c81d351461043f57806383e7f6ff1461045257600080fd5b8063572b6c05146103565780635fc1964f1461037f578063634486da1461039f5780636352211e146103b257600080fd5b80633092afd5116101d75780633092afd5146102d657806336568abe146102f6578063423f6cef14610316578063485cc9551461033657600080fd5b806301ffc9a7146102145780631bf7e13e14610249578063248a9ca3146102765780632f2ff15d146102b457600080fd5b3661020f57005b600080fd5b34801561022057600080fd5b5061023461022f366004612319565b6106dd565b60405190151581526020015b60405180910390f35b34801561025557600080fd5b50610269610264366004612384565b610708565b6040516102409190612444565b34801561028257600080fd5b506102a6610291366004612457565b600090815260fb602052604090206001015490565b604051908152602001610240565b3480156102c057600080fd5b506102d46102cf366004612495565b6107d4565b005b3480156102e257600080fd5b506102d46102f13660046124c5565b6107fe565b34801561030257600080fd5b506102d4610311366004612495565b610812565b34801561032257600080fd5b506102d46103313660046124e2565b6108a5565b34801561034257600080fd5b506102d461035136600461250e565b610a16565b34801561036257600080fd5b506102346103713660046124c5565b6001600160a01b0316301490565b34801561038b57600080fd5b506102d461039a3660046125a5565b610b92565b6102d46103ad3660046124c5565b610bda565b3480156103be57600080fd5b506103d26103cd366004612457565b610c9d565b6040516001600160a01b039091168152602001610240565b3480156103f657600080fd5b506102a6610405366004612457565b610ca8565b34801561041657600080fd5b506102d4610cee565b34801561042b57600080fd5b506102d461043a3660046125a5565b610d02565b6102d461044d3660046124c5565b610d4a565b34801561045e57600080fd5b506102a661046d366004612643565b610dc7565b34801561047e57600080fd5b506097546001600160a01b03166103d2565b34801561049c57600080fd5b506102346104ab366004612495565b610e6a565b3480156104bc57600080fd5b506102d46104cb3660046124c5565b610e95565b3480156104dc57600080fd5b506102d4610ea6565b3480156104f157600080fd5b506102a661050036600461274b565b610ec0565b34801561051157600080fd5b506102a6600081565b34801561052657600080fd5b506102696040518060400160405280600b81526020016a454e5320437573746f647960a81b81525081565b34801561055d57600080fd5b5061023461056c366004612384565b610f6c565b34801561057d57600080fd5b5061023461058c3660046124c5565b610fbf565b34801561059d57600080fd5b506102d46105ac366004612643565b610fd9565b3480156105bd57600080fd5b506105d16105cc3660046128b9565b611289565b6040516001600160e01b03199091168152602001610240565b3480156105f657600080fd5b506102d4610605366004612966565b6112ea565b34801561061657600080fd5b506102a660008051602061303583398151915281565b34801561063857600080fd5b506102d4610647366004612495565b611474565b34801561065857600080fd5b506102d4610667366004612457565b611499565b34801561067857600080fd5b506105d1610687366004612a48565b61150d565b34801561069857600080fd5b506102d46106a73660046124c5565b611551565b3480156106b857600080fd5b50610269604051806040016040528060058152602001640302e312e360dc1b81525081565b60006001600160e01b03198216630271189760e51b148061070257506107028261156d565b92915050565b606060005a905061071a858585610f6c565b61073757604051638baa579f60e01b815260040160405180910390fd5b6107c961074760208701876124c5565b3060408801358461075b60608b018b612ac3565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b90819084018382808284376000920191909152506115a292505050565b9150505b9392505050565b600082815260fb60205260409020600101546107ef81611683565b6107f98383611694565b505050565b61080661171b565b61080f81611794565b50565b61081a6117ac565b6001600160a01b0316816001600160a01b0316146108975760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6108a182826117bb565b5050565b806108ae6117ac565b6001600160a01b03166108c082611840565b6001600160a01b03161461090257806108d76117ac565b604051637ea58b1160e01b815260048101929092526001600160a01b0316602482015260440161088e565b61090b826118ae565b604080517f0a8885dd093a12d378a27df09bde33e3caca641a3d6970e06805fde8e847cb46602082015290810183905260009061095f906060015b6040516020818303038152906040528051906020012090565b80546001600160a01b0319166001600160a01b0392909216919091179055600060008051602061305583398151915254604051637921219560e11b81523060048201526001600160a01b038681166024830152604482018690526001606483015260a06084830152600060a48301529091169150819063f242432a9060c401600060405180830381600087803b1580156109f857600080fd5b505af1158015610a0c573d6000803e3d6000fd5b5050505050505050565b600054610100900460ff1615808015610a365750600054600160ff909116105b80610a505750303b158015610a50575060005460ff166001145b610ab35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161088e565b6000805460ff191660011790558015610ad6576000805461ff0019166101001790555b60008051602061301583398151915280546001600160a01b038086166001600160a01b031992831617909255600080516020613055833981519152805492851692909116919091179055610b286118e8565b610b30611916565b610b38611916565b610b4061193d565b610b48611974565b80156107f9576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b610b9a61171b565b60005b81518110156108a157610bc8828281518110610bbb57610bbb612b09565b6020026020010151611794565b80610bd281612b35565b915050610b9d565b610be561058c6117ac565b610c015760405162461bcd60e51b815260040161088e90612b4e565b6001600160a01b038116610c575760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d505459000000604482015260640161088e565b610c60816119ad565b610c68610ea6565b6040516001600160a01b038216903480156108fc02916000818181858888f193505050501580156108a1573d6000803e3d6000fd5b600061070282611840565b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a838156020820152908101829052600090610ce790606001610946565b5492915050565b610cf661171b565b610d0060006119c5565b565b610d0a61171b565b60005b81518110156108a157610d38828281518110610d2b57610d2b612b09565b60200260200101516119ad565b80610d4281612b35565b915050610d0d565b610d5561058c6117ac565b610d715760405162461bcd60e51b815260040161088e90612b4e565b6001600160a01b038116610c605760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d505459000000604482015260640161088e565b600080516020613015833981519152546040516383e7f6ff60e01b81526000916001600160a01b031690829082906383e7f6ff90610e0d90899089908990600401612bac565b6040805180830381865afa158015610e29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4d9190612bd0565b60208101518151919250610e6091612c1e565b9695505050505050565b600091825260fb602090815260408084206001600160a01b0393909316845291905290205460ff1690565b610e9d61171b565b61080f816119ad565b610d006000805160206130358339815191526103116117ac565b600080516020613015833981519152546000906001600160a01b0316806365a69dcf8d85610eee5730610ef0565b8d5b8d8d8d8d8d8d8d6040518a63ffffffff1660e01b8152600401610f1b99989796959493929190612cc2565b602060405180830381865afa158015610f38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5c9190612d32565b9c9b505050505050505050505050565b6000610fb7610f7a85612d4b565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611a1792505050565b949350505050565b600061070260008051602061303583398151915283610e6a565b610fe461058c6117ac565b6110005760405162461bcd60e51b815260040161088e90612b4e565b6002603354036110525760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161088e565b600260335560008051602061305583398151915254604080516020601f86018190048102820181019092528481526001600160a01b03909216916000916110b491908790879081908401838280828437600092019190915250611b5692505050565b6040516331a9108f60e11b81526004810182905290915030906001600160a01b03841690636352211e90602401602060405180830381865afa1580156110fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111229190612dd5565b6001600160a01b03161461114c576040516303b673fd60e21b81526004810182905260240161088e565b600080516020613015833981519152546040516383e7f6ff60e01b81526001600160a01b039091169060009082906383e7f6ff90611192908a908a908a90600401612bac565b6040805180830381865afa1580156111ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d29190612bd0565b602081015181519192506111e591612c1e565b4710156112055760405163050205f960e01b815260040160405180910390fd5b816001600160a01b031663acf1a841826020015183600001516112289190612c1e565b8989896040518563ffffffff1660e01b815260040161124993929190612bac565b6000604051808303818588803b15801561126257600080fd5b505af1158015611276573d6000803e3d6000fd5b5050600160335550505050505050505050565b6000600080516020613055833981519152546001600160a01b03166112ac6117ac565b6001600160a01b0316036112c8575063bc197c8160e01b6112e1565b6040516344e7d94960e01b815260040160405180910390fd5b95945050505050565b6112f561058c6117ac565b6113115760405162461bcd60e51b815260040161088e90612b4e565b6002603354036113635760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161088e565b600260338190555060006113ac8c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611b5692505050565b90506113b7816118ae565b6113d58c8c846113c757306113c9565b8c5b8c8c8c8c8c8c8c611bdb565b8161127657604080517f0a8885dd093a12d378a27df09bde33e3caca641a3d6970e06805fde8e847cb4660208201529081018290528a9061141890606001610946565b80546001600160a01b0319166001600160a01b03928316179055604051908b169082907f45aa97e368889fb3527c1db60c59c2ae91e82f21778613449e46d4208c1c4b1290600090a35050600160335550505050505050505050565b600082815260fb602052604090206001015461148f81611683565b6107f983836117bb565b600060008051602061301583398151915254604051631e29f97960e31b8152600481018490526001600160a01b039091169150819063f14fcbc890602401600060405180830381600087803b1580156114f157600080fd5b505af1158015611505573d6000803e3d6000fd5b505050505050565b6000600080516020613055833981519152546001600160a01b03166115306117ac565b6001600160a01b0316036112c8575063f23a6e6160e01b9695505050505050565b61155961171b565b61156281611d26565b61080f600082611d9c565b60006001600160e01b03198216637965db0b60e01b148061070257506301ffc9a760e01b6001600160e01b0319831614610702565b60606115ad85611da6565b600080876001600160a01b0316866115c78b8a8989611e0c565b6040516115d49190612df2565b60006040518083038160008787f1925050503d8060008114611612576040519150601f19603f3d011682016040523d82523d6000602084013e611617565b606091505b509092509050611628603f87612e0e565b5a1161163657611636612e30565b61167682826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c4544000000000000815250611e3c565b9998505050505050505050565b61080f8161168f6117ac565b611e75565b61169e8282610e6a565b6108a157600082815260fb602090815260408083206001600160a01b03851684529091529020805460ff191660011790556116d76117ac565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6117236117ac565b6001600160a01b031661173e6097546001600160a01b031690565b6001600160a01b031614610d005760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161088e565b61080f60008051602061303583398151915282611474565b60006117b6611ed9565b905090565b6117c58282610e6a565b156108a157600082815260fb602090815260408083206001600160a01b03851684529091529020805460ff191690556117fc6117ac565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b604080517f0a8885dd093a12d378a27df09bde33e3caca641a3d6970e06805fde8e847cb466020820152908101829052600090819061188190606001610946565b546001600160a01b03169050806107025760405163124bad6360e31b81526004810184905260240161088e565b3033036118df576118bd611ef7565b811461080f57604051635637b6af60e11b81526004810182905260240161088e565b61080f81611da6565b600054610100900460ff1661190f5760405162461bcd60e51b815260040161088e90612e46565b6001603355565b600054610100900460ff16610d005760405162461bcd60e51b815260040161088e90612e46565b600054610100900460ff166119645760405162461bcd60e51b815260040161088e90612e46565b610d0061196f6117ac565b6119c5565b600054610100900460ff1661199b5760405162461bcd60e51b815260040161088e90612e46565b610d0060006119a86117ac565b611d9c565b61080f60008051602061303583398151915282611d9c565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f90602401602060405180830381865afa158015611a5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a829190612d32565b90506000611b30866060015180519060200120868860200151604051602001611ad09392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b9050818660200151148015610e6057508551610e60906001600160a01b03168286611f0a565b60007f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae60001b82604051602001611b8d9190612df2565b60405160208183030381529060405280519060200120604051602001611bbd929190918252602082015260400190565b60408051601f19818403018152919052805160209091012092915050565b600080516020613015833981519152546040516383e7f6ff60e01b81526001600160a01b039091169060009082906383e7f6ff90611c21908f908f908e90600401612bac565b6040805180830381865afa158015611c3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c619190612bd0565b60208101518151919250611c7491612c1e565b471015611c945760405163050205f960e01b815260040160405180910390fd5b816001600160a01b03166374694a2b82602001518360000151611cb79190612c1e565b8e8e8e8e8e8e8e8e8e8e6040518c63ffffffff1660e01b8152600401611ce69a99989796959493929190612e91565b6000604051808303818588803b158015611cff57600080fd5b505af1158015611d13573d6000803e3d6000fd5b5050505050505050505050505050505050565b611d2e61171b565b6001600160a01b038116611d935760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161088e565b61080f816119c5565b6108a18282611694565b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a838156020820152908101829052600090606001604051602081830303815290604052805190602001209050611dfb8190565b54611e07906001612c1e565b905550565b6060828585604051602001611e2393929190612f03565b6040516020818303038152906040529050949350505050565b60608315611e4b5750816107cd565b825115611e5b5782518084602001fd5b8160405162461bcd60e51b815260040161088e9190612444565b611e7f8282610e6a565b6108a157611e97816001600160a01b0316601461204c565b611ea283602061204c565b604051602001611eb3929190612f42565b60408051601f198184030181529082905262461bcd60e51b825261088e91600401612444565b6000303303611eef575060331936013560601c90565b503390565b90565b6000303303611ef45750601f1936013590565b6000806000611f1985856121e7565b90925090506000816004811115611f3257611f32612fb7565b148015611f505750856001600160a01b0316826001600160a01b0316145b15611f60576001925050506107cd565b600080876001600160a01b0316631626ba7e60e01b8888604051602401611f88929190612fcd565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611fc69190612df2565b600060405180830381855afa9150503d8060008114612001576040519150601f19603f3d011682016040523d82523d6000602084013e612006565b606091505b5091509150818015612019575080516020145b801561204057508051630b135d3f60e11b9061203e9083016020908101908401612d32565b145b98975050505050505050565b6060600061205b836002612fe6565b612066906002612c1e565b6001600160401b0381111561207d5761207d61253c565b6040519080825280601f01601f1916602001820160405280156120a7576020820181803683370190505b509050600360fc1b816000815181106120c2576120c2612b09565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106120f1576120f1612b09565b60200101906001600160f81b031916908160001a9053506000612115846002612fe6565b612120906001612c1e565b90505b6001811115612198576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061215457612154612b09565b1a60f81b82828151811061216a5761216a612b09565b60200101906001600160f81b031916908160001a90535060049490941c9361219181612ffd565b9050612123565b5083156107cd5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161088e565b600080825160410361221d5760208301516040840151606085015160001a6122118782858561222c565b94509450505050612225565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156122635750600090506003612310565b8460ff16601b1415801561227b57508460ff16601c14155b1561228c5750600090506004612310565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156122e0573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661230957600060019250925050612310565b9150600090505b94509492505050565b60006020828403121561232b57600080fd5b81356001600160e01b0319811681146107cd57600080fd5b60008083601f84011261235557600080fd5b5081356001600160401b0381111561236c57600080fd5b60208301915083602082850101111561222557600080fd5b60008060006040848603121561239957600080fd5b83356001600160401b03808211156123b057600080fd5b90850190608082880312156123c457600080fd5b909350602085013590808211156123da57600080fd5b506123e786828701612343565b9497909650939450505050565b60005b8381101561240f5781810151838201526020016123f7565b50506000910152565b600081518084526124308160208601602086016123f4565b601f01601f19169290920160200192915050565b6020815260006107cd6020830184612418565b60006020828403121561246957600080fd5b5035919050565b6001600160a01b038116811461080f57600080fd5b803561249081612470565b919050565b600080604083850312156124a857600080fd5b8235915060208301356124ba81612470565b809150509250929050565b6000602082840312156124d757600080fd5b81356107cd81612470565b600080604083850312156124f557600080fd5b823561250081612470565b946020939093013593505050565b6000806040838503121561252157600080fd5b823561252c81612470565b915060208301356124ba81612470565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561257a5761257a61253c565b604052919050565b60006001600160401b0382111561259b5761259b61253c565b5060051b60200190565b600060208083850312156125b857600080fd5b82356001600160401b038111156125ce57600080fd5b8301601f810185136125df57600080fd5b80356125f26125ed82612582565b612552565b81815260059190911b8201830190838101908783111561261157600080fd5b928401925b8284101561263857833561262981612470565b82529284019290840190612616565b979650505050505050565b60008060006040848603121561265857600080fd5b83356001600160401b0381111561266e57600080fd5b61267a86828701612343565b909790965060209590950135949350505050565b60006001600160401b038311156126a7576126a761253c565b6126ba601f8401601f1916602001612552565b90508281528383830111156126ce57600080fd5b828260208301376000602084830101529392505050565b60008083601f8401126126f757600080fd5b5081356001600160401b0381111561270e57600080fd5b6020830191508360208260051b850101111561222557600080fd5b8035801515811461249057600080fd5b803561ffff8116811461249057600080fd5b6000806000806000806000806000806101208b8d03121561276b57600080fd5b8a356001600160401b038082111561278257600080fd5b818d0191508d601f83011261279657600080fd5b6127a58e83356020850161268e565b9b506127b360208e01612485565b9a5060408d0135995060608d013598506127cf60808e01612485565b975060a08d01359150808211156127e557600080fd5b506127f28d828e016126e5565b9096509450612805905060c08c01612729565b925061281360e08c01612739565b91506128226101008c01612729565b90509295989b9194979a5092959850565b600082601f83011261284457600080fd5b813560206128546125ed83612582565b82815260059290921b8401810191818101908684111561287357600080fd5b8286015b8481101561288e5780358352918301918301612877565b509695505050505050565b600082601f8301126128aa57600080fd5b6107cd8383356020850161268e565b600080600080600060a086880312156128d157600080fd5b85356128dc81612470565b945060208601356128ec81612470565b935060408601356001600160401b038082111561290857600080fd5b61291489838a01612833565b9450606088013591508082111561292a57600080fd5b61293689838a01612833565b9350608088013591508082111561294c57600080fd5b5061295988828901612899565b9150509295509295909350565b60008060008060008060008060008060006101208c8e03121561298857600080fd5b6001600160401b03808d35111561299e57600080fd5b6129ab8e8e358f01612343565b909c509a506129bd60208e0135612470565b60208d0135995060408d0135985060608d013597506129df60808e0135612470565b60808d013596508060a08e013511156129f757600080fd5b50612a088d60a08e01358e016126e5565b9095509350612a1960c08d01612729565b9250612a2760e08d01612739565b9150612a366101008d01612729565b90509295989b509295989b9093969950565b60008060008060008060a08789031215612a6157600080fd5b8635612a6c81612470565b95506020870135612a7c81612470565b9450604087013593506060870135925060808701356001600160401b03811115612aa557600080fd5b612ab189828a01612343565b979a9699509497509295939492505050565b6000808335601e19843603018112612ada57600080fd5b8301803591506001600160401b03821115612af457600080fd5b60200191503681900382131561222557600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201612b4757612b47612b1f565b5060010190565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b604081526000612bc0604083018587612b83565b9050826020830152949350505050565b600060408284031215612be257600080fd5b604051604081018181106001600160401b0382111715612c0457612c0461253c565b604052825181526020928301519281019290925250919050565b8082018082111561070257610702612b1f565b81835260006020808501808196508560051b810191508460005b87811015612cb55782840389528135601e19883603018112612c6c57600080fd5b870185810190356001600160401b03811115612c8757600080fd5b803603821315612c9657600080fd5b612ca1868284612b83565b9a87019a9550505090840190600101612c4b565b5091979650505050505050565b6000610100808352612cd68184018d612418565b6001600160a01b038c81166020860152604085018c9052606085018b90528916608085015283810360a08501529050612d10818789612c31565b94151560c0840152505061ffff9190911660e090910152979650505050505050565b600060208284031215612d4457600080fd5b5051919050565b600060808236031215612d5d57600080fd5b604051608081016001600160401b038282108183111715612d8057612d8061253c565b8160405284359150612d9182612470565b81835260208501356020840152604085013560408401526060850135915080821115612dbc57600080fd5b50612dc936828601612899565b60608301525092915050565b600060208284031215612de757600080fd5b81516107cd81612470565b60008251612e048184602087016123f4565b9190910192915050565b600082612e2b57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052600160045260246000fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000610100808352612ea68184018d8f612b83565b6001600160a01b038c81166020860152604085018c9052606085018b90528916608085015283810360a08501529050612ee0818789612c31565b94151560c0840152505061ffff9190911660e09091015298975050505050505050565b60008451612f158184602089016123f4565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612f7a8160178501602088016123f4565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612fab8160288401602088016123f4565b01602801949350505050565b634e487b7160e01b600052602160045260246000fd5b828152604060208201526000610fb76040830184612418565b808202811582820484141761070257610702612b1f565b60008161300c5761300c612b1f565b50600019019056fe412386de53449251cbf7ce1f4c6a038bf9c0746e62d331b08ef0c3fa7d0ab6729f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a660793a5062d506d35cc8f1beda67ee5028c16bfcd9c923d5bfc439c04bd929b1a164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class ENSCustody__factory extends ethers_1.ContractFactory {
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
exports.ENSCustody__factory = ENSCustody__factory;
ENSCustody__factory.bytecode = _bytecode;
ENSCustody__factory.abi = _abi;