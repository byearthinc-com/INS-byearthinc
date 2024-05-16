import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface ERC1155MockInterface extends Interface {
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE" | "MINTER_ROLE" | "PAUSER_ROLE" | "balanceOf" | "balanceOfBatch" | "burn" | "burnBatch" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "initialize" | "isApprovedForAll" | "mint" | "mintBatch" | "pause" | "paused" | "renounceRole" | "revokeRole" | "safeBatchTransferFrom" | "safeTransferFrom" | "setApprovalForAll" | "supportsInterface" | "unpause" | "uri"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll" | "Initialized" | "Paused" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "TransferBatch" | "TransferSingle" | "URI" | "Unpaused"): EventFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINTER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "PAUSER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOfBatch", values: [AddressLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "burn", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "burnBatch", values: [AddressLike, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "mint", values: [AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "mintBatch", values: [AddressLike, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "safeBatchTransferFrom", values: [
        AddressLike,
        AddressLike,
        BigNumberish[],
        BigNumberish[],
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINTER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PAUSER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeBatchTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
}
export declare namespace ApprovalForAllEvent {
    type InputTuple = [
        account: AddressLike,
        operator: AddressLike,
        approved: boolean
    ];
    type OutputTuple = [
        account: string,
        operator: string,
        approved: boolean
    ];
    interface OutputObject {
        account: string;
        operator: string;
        approved: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace InitializedEvent {
    type InputTuple = [version: BigNumberish];
    type OutputTuple = [version: bigint];
    interface OutputObject {
        version: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleAdminChangedEvent {
    type InputTuple = [
        role: BytesLike,
        previousAdminRole: BytesLike,
        newAdminRole: BytesLike
    ];
    type OutputTuple = [
        role: string,
        previousAdminRole: string,
        newAdminRole: string
    ];
    interface OutputObject {
        role: string;
        previousAdminRole: string;
        newAdminRole: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleGrantedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleRevokedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TransferBatchEvent {
    type InputTuple = [
        operator: AddressLike,
        from: AddressLike,
        to: AddressLike,
        ids: BigNumberish[],
        values: BigNumberish[]
    ];
    type OutputTuple = [
        operator: string,
        from: string,
        to: string,
        ids: bigint[],
        values: bigint[]
    ];
    interface OutputObject {
        operator: string;
        from: string;
        to: string;
        ids: bigint[];
        values: bigint[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TransferSingleEvent {
    type InputTuple = [
        operator: AddressLike,
        from: AddressLike,
        to: AddressLike,
        id: BigNumberish,
        value: BigNumberish
    ];
    type OutputTuple = [
        operator: string,
        from: string,
        to: string,
        id: bigint,
        value: bigint
    ];
    interface OutputObject {
        operator: string;
        from: string;
        to: string;
        id: bigint;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace URIEvent {
    type InputTuple = [value: string, id: BigNumberish];
    type OutputTuple = [value: string, id: bigint];
    interface OutputObject {
        value: string;
        id: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnpausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface ERC1155Mock extends BaseContract {
    connect(runner?: ContractRunner | null): ERC1155Mock;
    waitForDeployment(): Promise<this>;
    interface: ERC1155MockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    MINTER_ROLE: TypedContractMethod<[], [string], "view">;
    PAUSER_ROLE: TypedContractMethod<[], [string], "view">;
    balanceOf: TypedContractMethod<[
        account: AddressLike,
        id: BigNumberish
    ], [
        bigint
    ], "view">;
    balanceOfBatch: TypedContractMethod<[
        accounts: AddressLike[],
        ids: BigNumberish[]
    ], [
        bigint[]
    ], "view">;
    burn: TypedContractMethod<[
        account: AddressLike,
        id: BigNumberish,
        value: BigNumberish
    ], [
        void
    ], "nonpayable">;
    burnBatch: TypedContractMethod<[
        account: AddressLike,
        ids: BigNumberish[],
        values: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;
    getRoleMember: TypedContractMethod<[
        role: BytesLike,
        index: BigNumberish
    ], [
        string
    ], "view">;
    getRoleMemberCount: TypedContractMethod<[role: BytesLike], [bigint], "view">;
    grantRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    hasRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    initialize: TypedContractMethod<[uri: string], [void], "nonpayable">;
    isApprovedForAll: TypedContractMethod<[
        account: AddressLike,
        operator: AddressLike
    ], [
        boolean
    ], "view">;
    mint: TypedContractMethod<[
        to: AddressLike,
        id: BigNumberish,
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    mintBatch: TypedContractMethod<[
        to: AddressLike,
        ids: BigNumberish[],
        amounts: BigNumberish[],
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    pause: TypedContractMethod<[], [void], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
    renounceRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    revokeRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    safeBatchTransferFrom: TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        ids: BigNumberish[],
        amounts: BigNumberish[],
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    safeTransferFrom: TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        id: BigNumberish,
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    setApprovalForAll: TypedContractMethod<[
        operator: AddressLike,
        approved: boolean
    ], [
        void
    ], "nonpayable">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    uri: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "MINTER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "PAUSER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
        account: AddressLike,
        id: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "balanceOfBatch"): TypedContractMethod<[
        accounts: AddressLike[],
        ids: BigNumberish[]
    ], [
        bigint[]
    ], "view">;
    getFunction(nameOrSignature: "burn"): TypedContractMethod<[
        account: AddressLike,
        id: BigNumberish,
        value: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "burnBatch"): TypedContractMethod<[
        account: AddressLike,
        ids: BigNumberish[],
        values: BigNumberish[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getRoleMember"): TypedContractMethod<[
        role: BytesLike,
        index: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getRoleMemberCount"): TypedContractMethod<[role: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "grantRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "hasRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[uri: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "isApprovedForAll"): TypedContractMethod<[
        account: AddressLike,
        operator: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[
        to: AddressLike,
        id: BigNumberish,
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "mintBatch"): TypedContractMethod<[
        to: AddressLike,
        ids: BigNumberish[],
        amounts: BigNumberish[],
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "renounceRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "revokeRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "safeBatchTransferFrom"): TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        ids: BigNumberish[],
        amounts: BigNumberish[],
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "safeTransferFrom"): TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        id: BigNumberish,
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setApprovalForAll"): TypedContractMethod<[
        operator: AddressLike,
        approved: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "uri"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getEvent(key: "ApprovalForAll"): TypedContractEvent<ApprovalForAllEvent.InputTuple, ApprovalForAllEvent.OutputTuple, ApprovalForAllEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "TransferBatch"): TypedContractEvent<TransferBatchEvent.InputTuple, TransferBatchEvent.OutputTuple, TransferBatchEvent.OutputObject>;
    getEvent(key: "TransferSingle"): TypedContractEvent<TransferSingleEvent.InputTuple, TransferSingleEvent.OutputTuple, TransferSingleEvent.OutputObject>;
    getEvent(key: "URI"): TypedContractEvent<URIEvent.InputTuple, URIEvent.OutputTuple, URIEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    filters: {
        "ApprovalForAll(address,address,bool)": TypedContractEvent<ApprovalForAllEvent.InputTuple, ApprovalForAllEvent.OutputTuple, ApprovalForAllEvent.OutputObject>;
        ApprovalForAll: TypedContractEvent<ApprovalForAllEvent.InputTuple, ApprovalForAllEvent.OutputTuple, ApprovalForAllEvent.OutputObject>;
        "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        "TransferBatch(address,address,address,uint256[],uint256[])": TypedContractEvent<TransferBatchEvent.InputTuple, TransferBatchEvent.OutputTuple, TransferBatchEvent.OutputObject>;
        TransferBatch: TypedContractEvent<TransferBatchEvent.InputTuple, TransferBatchEvent.OutputTuple, TransferBatchEvent.OutputObject>;
        "TransferSingle(address,address,address,uint256,uint256)": TypedContractEvent<TransferSingleEvent.InputTuple, TransferSingleEvent.OutputTuple, TransferSingleEvent.OutputObject>;
        TransferSingle: TypedContractEvent<TransferSingleEvent.InputTuple, TransferSingleEvent.OutputTuple, TransferSingleEvent.OutputObject>;
        "URI(string,uint256)": TypedContractEvent<URIEvent.InputTuple, URIEvent.OutputTuple, URIEvent.OutputObject>;
        URI: TypedContractEvent<URIEvent.InputTuple, URIEvent.OutputTuple, URIEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    };
}
//# sourceMappingURL=ERC1155Mock.d.ts.map