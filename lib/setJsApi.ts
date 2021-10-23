import Set from "set.js"
import { Provider } from "set.js/node_modules/@ethersproject/providers";

interface SetAddresses {
    basicIssuance: string
    controller: string
    debtIssuance: string
    governance: string
    masterOracle: string
    navIssuance: string
    protocolViewer: string
    setTokenCreator: string
    streamingFee: string
    tradeModule: string
}

const KOVAN_SET_ADDRESSES: SetAddresses = {
    basicIssuance: "0x8a070235a4B9b477655Bf4Eb65a1dB81051B3cC1",
    controller: "0x9048278cA7e874F9338e4898C436Ab07AA454701",
    debtIssuance: "0xe34031E7F4D8Ba4eFab190ce5f4D8451eD1B6A82",
    governance: "0x936Ffda1C892a7c65777b14C1D71fD2C79222099",
    // TODO(@rootulp): I think masterOracle has been renamed to priceOracle. On
    // https://docs.tokensets.com/contracts/deployed/protocol it is listed as
    // PriceOracle. Resolve the discrepancy so future devs aren't confused.
    masterOracle: "0xDFEA02F2824Ee177733d6f108005E95C85D1D4bE",
    navIssuance: "https://kovan.etherscan.io/address/0x5dB52450a8C0eb5e0B777D4e08d7A93dA5a9c848",
    // protocolViewer doesn't exist on https://docs.tokensets.com/contracts/deployed/protocol
    protocolViewer: "",
    setTokenCreator: "0xB24F7367ee8efcB5EAbe4491B42fA222EC68d411",
    streamingFee: "0xE038E59DEEC8657d105B6a3Fb5040b3a6189Dd51",
    tradeModule: "0xC93c8CDE0eDf4963ea1eea156099B285A945210a"
}

const MAINNET_SET_ADDRESSES: SetAddresses = {
    basicIssuance: "0xd8EF3cACe8b4907117a45B0b125c68560532F94D",
    controller: "0xa4c8d221d8BB851f83aadd0223a8900A6921A349",
    debtIssuance: "0x39F024d621367C044BacE2bf0Fb15Fb3612eCB92",
    governance: "0x5C87b042494cDcebA44C541fbB3BC8bFF179d500",
    masterOracle: "0xA60f9e1641747762aDE7FD5F881b90B691E92B0a",
    navIssuance: "0xaB9a964c6b95fA529CA7F27DAc1E7175821f2334",
    protocolViewer: "",
    setTokenCreator: "0xeF72D3278dC3Eba6Dc2614965308d1435FFd748a",
    streamingFee: "0x08f866c74205617B6F3903EF481798EcED10cDEC",
    tradeModule: "0x90F765F63E7DC5aE97d6c576BF693FB6AF41C129"
}
export function initializeSet(chainId: number, ethersProvider: Provider): Set {
    if (chainId === 1) {
        return new Set({
            ethersProvider,
            basicIssuanceModuleAddress: MAINNET_SET_ADDRESSES.basicIssuance,
            controllerAddress: MAINNET_SET_ADDRESSES.controller,
            masterOracleAddress: MAINNET_SET_ADDRESSES.masterOracle,
            navIssuanceModuleAddress: MAINNET_SET_ADDRESSES.navIssuance,
            protocolViewerAddress: MAINNET_SET_ADDRESSES.protocolViewer,
            setTokenCreatorAddress: MAINNET_SET_ADDRESSES.setTokenCreator,
            streamingFeeModuleAddress: MAINNET_SET_ADDRESSES.streamingFee,
            tradeModuleAddress: MAINNET_SET_ADDRESSES.tradeModule,
            governanceModuleAddress: MAINNET_SET_ADDRESSES.governance,
            debtIssuanceModuleAddress: MAINNET_SET_ADDRESSES.debtIssuance,
        });
    }
    if (chainId === 42) {
        return new Set({
            ethersProvider,
            basicIssuanceModuleAddress: KOVAN_SET_ADDRESSES.basicIssuance,
            controllerAddress: KOVAN_SET_ADDRESSES.controller,
            masterOracleAddress: KOVAN_SET_ADDRESSES.masterOracle,
            navIssuanceModuleAddress: KOVAN_SET_ADDRESSES.navIssuance,
            protocolViewerAddress: KOVAN_SET_ADDRESSES.protocolViewer,
            setTokenCreatorAddress: KOVAN_SET_ADDRESSES.setTokenCreator,
            streamingFeeModuleAddress: KOVAN_SET_ADDRESSES.streamingFee,
            tradeModuleAddress: KOVAN_SET_ADDRESSES.tradeModule,
            governanceModuleAddress: KOVAN_SET_ADDRESSES.governance,
            debtIssuanceModuleAddress: KOVAN_SET_ADDRESSES.debtIssuance,
        });
    }
    throw new Error(`Unsupported chainId ${chainId}`)
}
