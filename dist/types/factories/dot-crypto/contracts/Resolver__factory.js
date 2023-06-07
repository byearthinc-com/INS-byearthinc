"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resolver__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract CNSRegistry",
                name: "registry",
                type: "address",
            },
            {
                internalType: "contract MintingController",
                name: "mintingController",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
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
        constant: true,
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
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
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
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
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
                name: "",
                type: "string[]",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
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
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
        ],
        name: "hashToKey",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "uint256[]",
                name: "hashes",
                type: "uint256[]",
            },
        ],
        name: "hashesToKeys",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
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
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
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
        name: "preconfigure",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
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
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
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
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "reconfigureFor",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "registry",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "reset",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "resetFor",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
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
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
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
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "setFor",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
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
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
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
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "setManyFor",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b506040516200240a3803806200240a833981016040819052620000349162000160565b8180600160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555050806001600160a01b0316637b1039996040518163ffffffff1660e01b815260040160206040518083038186803b1580156200009757600080fd5b505afa158015620000ac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250620000d2919081019062000137565b6001600160a01b0316826001600160a01b031614620000f057600080fd5b600580546001600160a01b0319166001600160a01b039290921691909117905550620001ea565b80516200012481620001c5565b92915050565b80516200012481620001df565b6000602082840312156200014a57600080fd5b600062000158848462000117565b949350505050565b600080604083850312156200017457600080fd5b60006200018285856200012a565b925050602062000195858286016200012a565b9150509250929050565b60006200012482620001b9565b600062000124826200019f565b6001600160a01b031690565b620001d0816200019f565b8114620001dc57600080fd5b50565b620001d081620001ac565b61221080620001fa6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638c87a4ea116100a2578063b87abc1111610071578063b87abc1114610244578063c597407314610257578063ce92b33e1461026a578063e837ae741461027d578063ec129eea146102905761010b565b80638c87a4ea146101ea5780638f69c188146101fd578063a3557e6c14610210578063b85afd28146102235761010b565b806347c81699116100de57806347c8169914610181578063672b9f81146101945780636ccbae5f146101b55780637b103999146101d55761010b565b80631bd8cc1a146101105780631be5e7ed146101395780632c3d376d14610159578063310bd74b1461016c575b600080fd5b61012361011e3660046117b4565b6102a3565b6040516101309190611eee565b60405180910390f35b61014c610147366004611aec565b6104f2565b6040516101309190611fd6565b61014c610167366004611b21565b610673565b61017f61017a366004611b21565b610714565b005b61017f61018f3660046119b5565b6107c0565b6101a76101a2366004611b94565b6108ef565b604051610130929190611fe7565b6101c86101c3366004611b21565b6109c3565b604051610130919061204c565b6101dd6109d5565b6040516101309190611ea9565b6101236101f836600461191d565b6109e5565b61017f61020b366004611878565b610a74565b61017f61021e366004611878565b610af0565b610236610231366004611951565b610b1b565b604051610130929190611eff565b61017f610252366004611b3f565b610ca9565b61017f610265366004611a39565b610d43565b61017f610278366004611808565b610df9565b61017f61028b366004611808565b610e97565b61017f61029e366004611808565b610f4e565b60015460405163b3f9e4cb60e01b815260609183916001600160a01b039091169063b3f9e4cb906102d890849060040161204c565b60206040518083038186803b1580156102f057600080fd5b505afa158015610304573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610328919081019061178e565b6001600160a01b0316306001600160a01b0316146103615760405162461bcd60e51b81526004016103589061201c565b60405180910390fd5b604080518581526020808702820101909152849060609082801561039957816020015b60608152602001906001900390816103845790505b506000868152600360205260408120549192505b838110156104e557600087815260026020908152604080832085845290915290208989838181106103da57fe5b602002820190508035601e19368490030181126103f657600080fd5b909101602081019150356001600160401b0381111561041457600080fd5b3681900382131561042457600080fd5b604051610432929190611e70565b9081526040805160209281900383018120805460026001821615610100026000190190911604601f810185900485028301850190935282825290929091908301828280156104c15780601f10610496576101008083540402835291602001916104c1565b820191906000526020600020905b8154815290600101906020018083116104a457829003601f168201915b50505050508382815181106104d257fe5b60209081029190910101526001016103ad565b5090979650505050505050565b60015460405163b3f9e4cb60e01b815260609183916001600160a01b039091169063b3f9e4cb9061052790849060040161204c565b60206040518083038186803b15801561053f57600080fd5b505afa158015610553573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610577919081019061178e565b6001600160a01b0316306001600160a01b0316146105a75760405162461bcd60e51b81526004016103589061201c565b6000838152600260209081526040808320600383528184205484529091529081902090516105d6908690611e7d565b9081526040805160209281900383018120805460026001821615610100026000190190911604601f810185900485028301850190935282825290929091908301828280156106655780601f1061063a57610100808354040283529160200191610665565b820191906000526020600020905b81548152906001019060200180831161064857829003601f168201915b505050505091505092915050565b60008181526004602090815260409182902080548351601f60026000196101006001861615020190931692909204918201849004840281018401909452808452606093928301828280156107085780601f106106dd57610100808354040283529160200191610708565b820191906000526020600020905b8154815290600101906020018083116106eb57829003601f168201915b50505050509050919050565b60015460405163430c208160e01b815282916001600160a01b03169063430c2081906107469033908590600401611ec5565b60206040518083038186803b15801561075e57600080fd5b505afa158015610772573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506107969190810190611997565b6107b25760405162461bcd60e51b81526004016103589061202c565b6107bc4283610fec565b5050565b60015460405163430c208160e01b815282916001600160a01b03169063430c2081906107f29033908590600401611ec5565b60206040518083038186803b15801561080a57600080fd5b505afa15801561081e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506108429190810190611997565b61085e5760405162461bcd60e51b81526004016103589061202c565b6108e7600360008481526020019081526020016000205487878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b01819004810282018101909252898152925089915088908190840183828082843760009201919091525088925061108e915050565b505050505050565b60015460405163b3f9e4cb60e01b8152606091829184916001600160a01b03169063b3f9e4cb9061092490849060040161204c565b60206040518083038186803b15801561093c57600080fd5b505afa158015610950573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610974919081019061178e565b6001600160a01b0316306001600160a01b0316146109a45760405162461bcd60e51b81526004016103589061201c565b6109ad85610673565b92506109b983856104f2565b9150509250929050565b60009081526020819052604090205490565b6001546001600160a01b03165b90565b6060600082519050606081604051908082528060200260200182016040528015610a2357816020015b6060815260200190600190039081610a0e5790505b50905060005b82811015610a6c57610a4d858281518110610a4057fe5b6020026020010151610673565b828281518110610a5957fe5b6020908102919091010152600101610a29565b509392505050565b610acf63ce92b33e60e01b858585604051602401610a9493929190611f24565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092178252519020838361129f565b600082815260036020526040902054610aea908585856113c3565b50505050565b610b1063ec129eea60e01b858585604051602401610a9493929190611f24565b610aea84848461140a565b60015460405163b3f9e4cb60e01b8152606091829184916001600160a01b03169063b3f9e4cb90610b5090849060040161204c565b60206040518083038186803b158015610b6857600080fd5b505afa158015610b7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610ba0919081019061178e565b6001600160a01b0316306001600160a01b031614610bd05760405162461bcd60e51b81526004016103589061201c565b8451604080518281526020808402820101909152818015610c0557816020015b6060815260200190600190039081610bf05790505b50935080604051908082528060200260200182016040528015610c3c57816020015b6060815260200190600190039081610c275790505b50925060005b81811015610c9f57610c67878281518110610c5957fe5b6020026020010151876108ef565b8651879084908110610c7557fe5b60200260200101868481518110610c8857fe5b602090810291909101019190915252600101610c42565b5050509250929050565b610d3463310bd74b60e01b84604051602401610cc5919061204c565b60408051601f19818403018152918152602080830180516001600160e01b03166001600160e01b031990951694909417845291519092208251601f8601839004830281018301909352848352918691869086908190840183828082843760009201919091525061129f92505050565b610d3e4284610fec565b505050565b610d676347c8169960e01b8888888888604051602401610cc5959493929190611f96565b610df0600360008581526020019081526020016000205488888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8c018190048102820181019092528a815292508a915089908190840183828082843760009201919091525089925061108e915050565b50505050505050565b60015460405163430c208160e01b815282916001600160a01b03169063430c208190610e2b9033908590600401611ec5565b60206040518083038186803b158015610e4357600080fd5b505afa158015610e57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610e7b9190810190611997565b610acf5760405162461bcd60e51b81526004016103589061202c565b6005546040516355138f0d60e11b81526001600160a01b039091169063aa271e1a90610ec7903390600401611eb7565b60206040518083038186803b158015610edf57600080fd5b505afa158015610ef3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610f179190810190611997565b610f335760405162461bcd60e51b81526004016103589061203c565b600081815260036020526040902054610d3e908484846113c3565b60015460405163430c208160e01b815282916001600160a01b03169063430c208190610f809033908590600401611ec5565b60206040518083038186803b158015610f9857600080fd5b505afa158015610fac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610fd09190810190611997565b610b105760405162461bcd60e51b81526004016103589061202c565b600081815260036020526040808220849055600154905163538361a760e01b81526001600160a01b039091169163538361a79161102d91859160040161205a565b600060405180830381600087803b15801561104757600080fd5b505af115801561105b573d6000803e3d6000fd5b50506040518392507f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9150600090a25050565b825160208085019190912060008381526002835260408082208883529093528281209251919290916110c1908790611e7d565b908152604051602091819003919091018120546001805463538361a760e01b84526002918316156101000260001901909216041592506001600160a01b03169063538361a7906111179086908690600401612075565b600060405180830381600087803b15801561113157600080fd5b505af1158015611145573d6000803e3d6000fd5b50505060008481526002602090815260408083208a8452909152908190209051869250611173908890611e7d565b90815260200160405180910390209080519060200190611194929190611521565b50600082815260046020526040902054600260001961010060018416150201909116046111dc57600082815260046020908152604090912086516111da92880190611521565b505b801561123157846040516111f09190611e7d565b6040518091039020837f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f86876040516112289190611fd6565b60405180910390a35b8360405161123f9190611e7d565b6040518091039020856040516112559190611e7d565b6040518091039020847f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d92888860405161128f929190611fe7565b60405180910390a4505050505050565b6000828152602081815260408083205490519092916112f59185916112e9916112ce918a913091899101611e39565b60405160208183030381529060405280519060200120611414565b9063ffffffff61144416565b90506001600160a01b0381161580159061138c575060015460405163430c208160e01b81526001600160a01b039091169063430c20819061133c9084908890600401611ee0565b60206040518083038186803b15801561135457600080fd5b505afa158015611368573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061138c9190810190611997565b6113a85760405162461bcd60e51b81526004016103589061200c565b50505060009081526020819052604090208054600101905550565b825160005b818110156108e757611402868683815181106113e057fe5b60200260200101518684815181106113f457fe5b60200260200101518661108e565b6001016113c8565b610f334282610fec565b6000816040516020016114279190611e89565b604051602081830303815290604052805190602001209050919050565b600081516041146114575750600061151b565b60208201516040830151606084015160001a7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a082111561149d576000935050505061151b565b8060ff16601b141580156114b557508060ff16601c14155b156114c6576000935050505061151b565b600186828585604051600081526020016040526040516114e99493929190611f58565b6020604051602081039080840390855afa15801561150b573d6000803e3d6000fd5b5050506020604051035193505050505b92915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061156257805160ff191683800117855561158f565b8280016001018555821561158f579182015b8281111561158f578251825591602001919060010190611574565b5061159b92915061159f565b5090565b6109e291905b8082111561159b57600081556001016115a5565b805161151b816121a4565b60008083601f8401126115d657600080fd5b5081356001600160401b038111156115ed57600080fd5b60208301915083602082028301111561160557600080fd5b9250929050565b600082601f83011261161d57600080fd5b813561163061162b826120a9565b612083565b81815260209384019390925082018360005b8381101561166e57813586016116588882611734565b8452506020928301929190910190600101611642565b5050505092915050565b600082601f83011261168957600080fd5b813561169761162b826120a9565b915081818352602084019350602081019050838560208402820111156116bc57600080fd5b60005b8381101561166e57816116d28882611783565b84525060209283019291909101906001016116bf565b805161151b816121bb565b60008083601f84011261170557600080fd5b5081356001600160401b0381111561171c57600080fd5b60208301915083600182028301111561160557600080fd5b600082601f83011261174557600080fd5b813561175361162b826120c9565b9150808252602083016020830185838301111561176f57600080fd5b61177a83828461214b565b50505092915050565b803561151b816121c4565b6000602082840312156117a057600080fd5b60006117ac84846115b9565b949350505050565b6000806000604084860312156117c957600080fd5b83356001600160401b038111156117df57600080fd5b6117eb868287016115c4565b935093505060206117fe86828701611783565b9150509250925092565b60008060006060848603121561181d57600080fd5b83356001600160401b0381111561183357600080fd5b61183f8682870161160c565b93505060208401356001600160401b0381111561185b57600080fd5b6118678682870161160c565b92505060406117fe86828701611783565b6000806000806080858703121561188e57600080fd5b84356001600160401b038111156118a457600080fd5b6118b08782880161160c565b94505060208501356001600160401b038111156118cc57600080fd5b6118d88782880161160c565b93505060406118e987828801611783565b92505060608501356001600160401b0381111561190557600080fd5b61191187828801611734565b91505092959194509250565b60006020828403121561192f57600080fd5b81356001600160401b0381111561194557600080fd5b6117ac84828501611678565b6000806040838503121561196457600080fd5b82356001600160401b0381111561197a57600080fd5b61198685828601611678565b92505060206109b985828601611783565b6000602082840312156119a957600080fd5b60006117ac84846116e8565b6000806000806000606086880312156119cd57600080fd5b85356001600160401b038111156119e357600080fd5b6119ef888289016116f3565b955095505060208601356001600160401b03811115611a0d57600080fd5b611a19888289016116f3565b93509350506040611a2c88828901611783565b9150509295509295909350565b60008060008060008060006080888a031215611a5457600080fd5b87356001600160401b03811115611a6a57600080fd5b611a768a828b016116f3565b975097505060208801356001600160401b03811115611a9457600080fd5b611aa08a828b016116f3565b95509550506040611ab38a828b01611783565b93505060608801356001600160401b03811115611acf57600080fd5b611adb8a828b016116f3565b925092505092959891949750929550565b60008060408385031215611aff57600080fd5b82356001600160401b03811115611b1557600080fd5b61198685828601611734565b600060208284031215611b3357600080fd5b60006117ac8484611783565b600080600060408486031215611b5457600080fd5b6000611b608686611783565b93505060208401356001600160401b03811115611b7c57600080fd5b611b88868287016116f3565b92509250509250925092565b60008060408385031215611ba757600080fd5b60006119868585611783565b6000611bbf8383611ccb565b9392505050565b611bcf8161212a565b82525050565b611bcf81612108565b611bcf611bea82612108565b612183565b6000611bfa826120f6565b611c0481856120fa565b935083602082028501611c16856120f0565b8060005b85811015611c505784840389528151611c338582611bb3565b9450611c3e836120f0565b60209a909a0199925050600101611c1a565b5091979650505050505050565b611bcf816109e2565b611bcf611c72826109e2565b6109e2565b611bcf81612135565b6000611c8c83856120fa565b9350611c9983858461214b565b611ca283612194565b9093019392505050565b6000611cb88385612103565b9350611cc583858461214b565b50500190565b6000611cd6826120f6565b611ce081856120fa565b9350611cf0818560208601612157565b611ca281612194565b6000611d04826120f6565b611d0e8185612103565b9350611d1e818560208601612157565b9290920192915050565b6000611d35601c83612103565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c0192915050565b6000611d6e6011836120fa565b70494e56414c49445f5349474e415455524560781b815260200192915050565b6000611d9b601d836120fa565b7f5245534f4c5645525f44455441434845445f46524f4d5f444f4d41494e000000815260200192915050565b6000611dd4601f836120fa565b7f53454e4445525f49535f4e4f545f415050524f5645445f4f525f4f574e455200815260200192915050565b6000611e0d6014836120fa565b7329a2a72222a92fa4a9afa727aa2fa6a4a72a22a960611b815260200192915050565b611bcf81612124565b6000611e458286611c66565b602082019150611e558285611bde565b601482019150611e658284611c66565b506020019392505050565b60006117ac828486611cac565b6000611bbf8284611cf9565b6000611e9482611d28565b9150611ea08284611c66565b50602001919050565b6020810161151b8284611bd5565b6020810161151b8284611bc6565b60408101611ed38285611bc6565b611bbf6020830184611c5d565b60408101611ed38285611bd5565b60208082528101611bbf8184611bef565b60408082528101611f108185611bef565b905081810360208301526117ac8184611bef565b60608082528101611f358186611bef565b90508181036020830152611f498185611bef565b90506117ac6040830184611c5d565b60808101611f668287611c5d565b611f736020830186611e30565b611f806040830185611c5d565b611f8d6060830184611c5d565b95945050505050565b60608082528101611fa8818789611c80565b90508181036020830152611fbd818587611c80565b9050611fcc6040830184611c5d565b9695505050505050565b60208082528101611bbf8184611ccb565b60408082528101611ff88185611ccb565b905081810360208301526117ac8184611ccb565b6020808252810161151b81611d61565b6020808252810161151b81611d8e565b6020808252810161151b81611dc7565b6020808252810161151b81611e00565b6020810161151b8284611c5d565b604081016120688285611c5d565b611bbf6020830184611c77565b60408101611ed38285611c5d565b6040518181016001600160401b03811182821017156120a157600080fd5b604052919050565b60006001600160401b038211156120bf57600080fd5b5060209081020190565b60006001600160401b038211156120df57600080fd5b506020601f91909101601f19160190565b60200190565b5190565b90815260200190565b919050565b600061151b82612118565b151590565b6001600160a01b031690565b60ff1690565b600061151b82612140565b600061151b826109e2565b600061151b82612108565b82818337506000910152565b60005b8381101561217257818101518382015260200161215a565b83811115610aea5750506000910152565b600061151b82600061151b8261219e565b601f01601f191690565b60601b90565b6121ad81612108565b81146121b857600080fd5b50565b6121ad81612113565b6121ad816109e256fea365627a7a723158207a1d8dfd286d14fcafd1812a4c44813691ac746a5a23fa711ac5551c9509654d6c6578706572696d656e74616cf564736f6c634300050c0040";
const isSuperArgs = (xs) => xs.length > 1;
class Resolver__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(registry, mintingController, overrides) {
        return super.deploy(registry, mintingController, overrides || {});
    }
    getDeployTransaction(registry, mintingController, overrides) {
        return super.getDeployTransaction(registry, mintingController, overrides || {});
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
exports.Resolver__factory = Resolver__factory;
Resolver__factory.bytecode = _bytecode;
Resolver__factory.abi = _abi;
