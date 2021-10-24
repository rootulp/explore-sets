import React, { useEffect, useState } from "react"
import { SetDetails } from "set.js/dist/types/src/types"
import { SetCard } from "./SetCard"
import { getModuleAddresses, initializeSet } from "../lib/setJsApi"
import styles from "../styles/Home.module.css"
import { useWeb3React } from "@web3-react/core"
import { uniq } from "lodash-es";

interface SetInfo extends Pick<SetDetails, "name" | "symbol" | "positions"> {
    tokenAddress: string;
}

export const SetList = (): JSX.Element => {
    const { chainId, library } = useWeb3React()
    const [setDetails, setSetDetails] = useState<SetInfo[]>()
    const [isLoading, setIsLoading] = useState(false)

    const set = initializeSet(chainId, library)
    useEffect(() => {
        setIsLoading(true)
        async function fetchSetDetails() {
            if (!set || !chainId) {
                setIsLoading(false)
                return;
            }
            // Limit to the first 10 token addresses during development
            const tokenAddresses = uniq(await (await set.system.getSetsAsync()).slice(0, 10))
            const moduleAddresses =  getModuleAddresses(chainId)
            const setDetails = await set.setToken.batchFetchSetDetailsAsync(tokenAddresses, moduleAddresses)
            const result = setDetails.map((setDetail, i) => {
                return {
                    tokenAddress: tokenAddresses[i],
                    ...setDetail,
                }
            })
            setSetDetails(result)
            setIsLoading(false)
        }

        fetchSetDetails()
    }, [chainId, library])

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (!setDetails) {
        return <p>No set details</p>
    }

    return (
        <div>
            <h3>Set List</h3>
            <div className={styles.grid}>
                {setDetails.map(setDetail => <SetCard
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
