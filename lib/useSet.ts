import { useWeb3React } from "@web3-react/core";
import { MAINNET_SET_ADDRESSES } from "./mainnetSetAddresses";
import  Set from "set.js"
import { useMemo } from "react";
import { supportedChainIds } from "./connector";

export function useSet(): Set | undefined {
    const { chainId, library } = useWeb3React()

    const set = useMemo(() => {
        if ( chainId === undefined || library === undefined) {
            return undefined;
        }
        if (!supportedChainIds.includes(chainId)) {
            throw new Error(`Unsupported chainId ${chainId}`)
        }
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
    }, [chainId, library])

    return set
}
