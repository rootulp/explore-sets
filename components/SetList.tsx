import React, { useEffect, useState } from "react"
import { SetDetails } from "set.js/dist/types/src/types"
import { LoadingSetCard, SetCard } from "./SetCard"
import { getModuleAddresses } from "../lib/setJsApi"
import styles from "../styles/SetList.module.css"
import { useWeb3React } from "@web3-react/core"
import { range, uniq } from "lodash-es";
import { UnsupportedChainIdError } from '@web3-react/core'
import { getChainName } from "@usedapp/core"
import { supportedChainIds } from "../lib/connector"
import { useSet } from "../lib/useSet"

const NUMBER_OF_SETS_TO_FETCH = 10;

interface SetAttribute extends Pick<SetDetails, "name" | "symbol" | "positions"> {
    tokenAddress: string;
}

export const SetList = (): JSX.Element => {
    const { chainId, library, error } = useWeb3React()
    const [setAttributes, setSetAttributes] = useState<SetAttribute[]>()
    const [isLoading, setIsLoading] = useState(false)
    const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError
    const set = useSet()

    useEffect(() => {
        setIsLoading(true)
        async function fetchSetDetails() {
            if (!set || !chainId) {
                setIsLoading(false)
                return;
            }
            // Limit to the first 10 token addresses during development
            const tokenAddresses = uniq(await (await set.system.getSetsAsync()).slice(0, NUMBER_OF_SETS_TO_FETCH))
            const moduleAddresses =  getModuleAddresses(chainId)
            const setDetails = await set.setToken.batchFetchSetDetailsAsync(tokenAddresses, moduleAddresses)
            const result = setDetails.map((setDetail, i) => {
                return {
                    tokenAddress: tokenAddresses[i],
                    ...setDetail,
                }
            })
            setSetAttributes(result)
            setIsLoading(false)
        }

        fetchSetDetails()
    }, [chainId, library])

    if (isUnsupportedChainIdError) {
        return (
        <div className={styles.setList}>
            <h3>Set List</h3>
            Please connect to a supported chain.
            Supported chains: {supportedChainIds.map(getChainName).join(", ")}
        </div>
        )
    }
    if (isLoading) {
        return (
        <div className={styles.setList}>
            <h3>Set List</h3>
            <div className={styles.grid}>
                {range(NUMBER_OF_SETS_TO_FETCH).map(i => <LoadingSetCard key={i} index={i} />)}
            </div>
        </div>
        )
    }

    return (
        <div className={styles.setList}>
            <h3>Set List</h3>
            <div className={styles.grid}>
                {setAttributes && setAttributes.map(setDetail => <SetCard
                    address={setDetail.tokenAddress}
                    name={setDetail.name}
                    symbol={setDetail.symbol}
                    positions={setDetail.positions}
                    // Use the tokenAddress as the key because ppl have created multiple sets with the same symbol and name
                    key={setDetail.tokenAddress}
                />)}
            </div>
        </div>
    )
}
