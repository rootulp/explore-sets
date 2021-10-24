import { useWeb3React } from "@web3-react/core";
import { KOVAN_SET_ADDRESSES, MAINNET_SET_ADDRESSES } from "./setJsApi";
import  Set from "set.js"
import { useMemo } from "react";

export function useSet(): Set | undefined {
    const { chainId, library } = useWeb3React()

    const set = useMemo(() => {
        if ( chainId === undefined || library === undefined) {
            return undefined;
        }
        if (chainId === 1) {
            return new Set({
                ethersProvider: library,
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
            ethersProvider: library,
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
    }, [chainId, library])

    return set
}
