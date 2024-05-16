"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextUpgradeable__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
];
class ContextUpgradeable__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.ContextUpgradeable__factory = ContextUpgradeable__factory;
ContextUpgradeable__factory.abi = _abi;
