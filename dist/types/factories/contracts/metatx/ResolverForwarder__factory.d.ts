import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ResolverForwarder, ResolverForwarderInterface } from "../../../contracts/metatx/ResolverForwarder";
declare type ResolverForwarderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ResolverForwarder__factory extends ContractFactory {
    constructor(...args: ResolverForwarderConstructorParams);
    deploy(cnsRegistry: PromiseOrValue<string>, defaultCnsResolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ResolverForwarder>;
    getDeployTransaction(cnsRegistry: PromiseOrValue<string>, defaultCnsResolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ResolverForwarder;
    connect(signer: Signer): ResolverForwarder__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200153938038062001539833981016040819052620000349162000286565b600180546001600160a01b038481166001600160a01b0319928316179092556002805492841692909116919091179055604080518082018252600e81526d72657365742875696e743235362960901b602080830191825283518085018552601781527f7265736574466f722875696e743235362c62797465732900000000000000000090820152915190206001600160e01b03191660009081529081905220805463ffffffff191663b87abc11179055620001776040518060400160405280601a81526020017f73657428737472696e672c737472696e672c75696e7432353629000000000000815250604051806060016040528060238152602001620014ce6023913980516020918201208251928201929092206001600160e01b03191660009081529081905260409020805463ffffffff191660e09290921c919091179055565b620001ee604051806060016040528060228152602001620014f1602291396040518060600160405280602b815260200162001474602b913980516020918201208251928201929092206001600160e01b03191660009081529081905260409020805463ffffffff191660e09290921c919091179055565b6200026560405180606001604052806026815260200162001513602691396040518060600160405280602f81526020016200149f602f913980516020918201208251928201929092206001600160e01b03191660009081529081905260409020805463ffffffff191660e09290921c919091179055565b5050620002c5565b6001600160a01b03811681146200028357600080fd5b50565b600080604083850312156200029a57600080fd5b8251620002a7816200026d565b6020840151909250620002ba816200026d565b809150509250929050565b61119f80620002d56000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631bf7e13e146100465780636ccbae5f1461006f578063a424740014610090575b600080fd5b610059610054366004610ba9565b6100b3565b6040516100669190610c98565b60405180910390f35b61008261007d366004610cab565b6101ce565b604051908152602001610066565b6100a361009e366004610ba9565b610332565b6040519015158152602001610066565b606060005a6001546040805163b3f9e4cb60e01b81529088013560048201529192506000916001600160a01b039091169063b3f9e4cb90602401602060405180830381865afa15801561010a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061012e9190610cd9565b90506101c26101406020880188610cf6565b8260408901358561015460608c018c610d13565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8f018190048102820181019092528d815292508d91508c90819084018382808284376000920191909152506103fb92505050565b925050505b9392505050565b60025460015460405163b3f9e4cb60e01b8152600481018490526000926001600160a01b0390811692169063b3f9e4cb90602401602060405180830381865afa92505050801561023b575060408051601f3d908101601f1916820190925261023891810190610cd9565b60015b156102435790505b6001600160a01b0381163b156102c557604051636ccbae5f60e01b81526004810184905281906001600160a01b03821690636ccbae5f90602401602060405180830381865afa9250505080156102b6575060408051601f3d908101601f191682019092526102b391810190610d5a565b60015b156102c357949350505050565b505b600254604051636ccbae5f60e01b8152600481018590526001600160a01b0390911690636ccbae5f90602401602060405180830381865afa15801561030e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c79190610d5a565b6001546040805163b3f9e4cb60e01b815290850135600482015260009182916001600160a01b039091169063b3f9e4cb90602401602060405180830381865afa158015610383573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a79190610cd9565b90506103f26103b586610e0b565b8286868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506104d392505050565b95945050505050565b6060600080876001600160a01b0316866104178b8a898961051f565b6040516104249190610eb5565b60006040518083038160008787f1925050503d8060008114610462576040519150601f19603f3d011682016040523d82523d6000602084013e610467565b606091505b509092509050610478603f87610ed1565b5a1161048657610486610ef3565b6104c682826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c45440000000000008152506105d4565b9998505050505050505050565b60006104e084848461060d565b8015610514575060608401516020908101516001600160e01b031990811660009081529182905260409091205460e01b1615155b949350505050565b50565b6020808301516001600160e01b03191660009081529081905260408120546060919060e01b90506001600160e01b031981166000036105b15760405162461bcd60e51b815260206004820152602360248201527f42617365526f7574696e67466f727761726465723a20524f5554455f554e4b4e60448201526227aba760e91b60648201526084015b60405180910390fd5b835160031901600485019081526105c982828661074c565b979650505050505050565b606083156105e35750816101c7565b8251156105f35782518084602001fd5b8160405162461bcd60e51b81526004016105a89190610c98565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f90602401602060405180830381865afa158015610654573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106789190610d5a565b905060006107268660600151805190602001208688602001516040516020016106c69392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b90508186602001511480156101c2575085516101c2906001600160a01b03168286610935565b60606001600160e01b0319841663b87abc1160e01b036107cd5760008380602001905181019061077c9190610d5a565b9050848184604051602401610792929190610f09565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915291506101c79050565b6001600160e01b0319841663c597407360e01b03610859576000806000858060200190518101906107fe9190610f67565b925092509250868383838860405160240161081c9493929190610fd4565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915293506101c792505050565b6001600160e01b031984166311ed383160e31b036108a85760008060008580602001905181019061088a91906110a6565b925092509250868383838860405160240161081c9493929190611157565b6001600160e01b031984166328d55f9b60e21b036101c7576000806000858060200190518101906108d991906110a6565b92509250925086838383886040516024016108f79493929190611157565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915293505050509392505050565b60008060006109448585610a77565b9092509050600081600481111561095d5761095d61117c565b14801561097b5750856001600160a01b0316826001600160a01b0316145b1561098b576001925050506101c7565b600080876001600160a01b0316631626ba7e60e01b88886040516024016109b3929190610f09565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516109f19190610eb5565b600060405180830381855afa9150503d8060008114610a2c576040519150601f19603f3d011682016040523d82523d6000602084013e610a31565b606091505b5091509150818015610a44575080516020145b8015610a6b57508051630b135d3f60e11b90610a699083016020908101908401610d5a565b145b98975050505050505050565b6000808251604103610aad5760208301516040840151606085015160001a610aa187828585610abc565b94509450505050610ab5565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610af35750600090506003610ba0565b8460ff16601b14158015610b0b57508460ff16601c14155b15610b1c5750600090506004610ba0565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610b70573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610b9957600060019250925050610ba0565b9150600090505b94509492505050565b600080600060408486031215610bbe57600080fd5b833567ffffffffffffffff80821115610bd657600080fd5b9085019060808288031215610bea57600080fd5b90935060208501359080821115610c0057600080fd5b818601915086601f830112610c1457600080fd5b813581811115610c2357600080fd5b876020828501011115610c3557600080fd5b6020830194508093505050509250925092565b60005b83811015610c63578181015183820152602001610c4b565b50506000910152565b60008151808452610c84816020860160208601610c48565b601f01601f19169290920160200192915050565b6020815260006101c76020830184610c6c565b600060208284031215610cbd57600080fd5b5035919050565b6001600160a01b038116811461051c57600080fd5b600060208284031215610ceb57600080fd5b81516101c781610cc4565b600060208284031215610d0857600080fd5b81356101c781610cc4565b6000808335601e19843603018112610d2a57600080fd5b83018035915067ffffffffffffffff821115610d4557600080fd5b602001915036819003821315610ab557600080fd5b600060208284031215610d6c57600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715610dac57610dac610d73565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610ddb57610ddb610d73565b604052919050565b600067ffffffffffffffff821115610dfd57610dfd610d73565b50601f01601f191660200190565b600060808236031215610e1d57600080fd5b610e25610d89565b8235610e3081610cc4565b81526020838101358183015260408085013590830152606084013567ffffffffffffffff811115610e6057600080fd5b840136601f820112610e7157600080fd5b8035610e84610e7f82610de3565b610db2565b8181523684838501011115610e9857600080fd5b818484018583013760009181019093015250606082015292915050565b60008251610ec7818460208701610c48565b9190910192915050565b600082610eee57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052600160045260246000fd5b8281526040602082015260006105146040830184610c6c565b600082601f830112610f3357600080fd5b8151610f41610e7f82610de3565b818152846020838601011115610f5657600080fd5b610514826020830160208701610c48565b600080600060608486031215610f7c57600080fd5b835167ffffffffffffffff80821115610f9457600080fd5b610fa087838801610f22565b94506020860151915080821115610fb657600080fd5b50610fc386828701610f22565b925050604084015190509250925092565b608081526000610fe76080830187610c6c565b8281036020840152610ff98187610c6c565b905084604084015282810360608401526105c98185610c6c565b600082601f83011261102457600080fd5b8151602067ffffffffffffffff8083111561104157611041610d73565b8260051b611050838201610db2565b938452858101830193838101908886111561106a57600080fd5b84880192505b85831015610a6b578251848111156110885760008081fd5b6110968a87838c0101610f22565b8352509184019190840190611070565b6000806000606084860312156110bb57600080fd5b835167ffffffffffffffff808211156110d357600080fd5b6110df87838801611013565b945060208601519150808211156110f557600080fd5b50610fc386828701611013565b600081518084526020808501808196508360051b8101915082860160005b8581101561114a578284038952611138848351610c6c565b98850198935090840190600101611120565b5091979650505050505050565b60808152600061116a6080830187611102565b8281036020840152610ff98187611102565b634e487b7160e01b600052602160045260246000fdfea164736f6c6343000811000a7365744d616e79466f7228737472696e675b5d2c737472696e675b5d2c75696e743235362c6279746573297265636f6e666967757265466f7228737472696e675b5d2c737472696e675b5d2c75696e743235362c627974657329736574466f7228737472696e672c737472696e672c75696e743235362c6279746573297365744d616e7928737472696e675b5d2c737472696e675b5d2c75696e74323536297265636f6e66696775726528737472696e675b5d2c737472696e675b5d2c75696e7432353629";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): ResolverForwarderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ResolverForwarder;
}
export {};
//# sourceMappingURL=ResolverForwarder__factory.d.ts.map