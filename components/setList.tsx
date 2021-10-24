import { providers } from "ethers"
import React, { useEffect, useState } from "react"
import { SetDetails } from "set.js/dist/types/src/types"
import { SetCard } from "./setCard"
import { getModuleAddresses, initializeSet } from "../lib/setJsApi"
import styles from "../styles/Home.module.css"
import { useWeb3React } from "@web3-react/core"

export const SetList = (): JSX.Element => {
    const { chainId, library } = useWeb3React()
    const [setDetails, setSetDetails] = useState<SetDetails[]>()
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
            const tokenAddresses = (await set.system.getSetsAsync()).slice(0, 10)
            const moduleAddresses =  getModuleAddresses(chainId)
            const result = await set.setToken.batchFetchSetDetailsAsync(tokenAddresses, moduleAddresses)
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
                {setDetails.map(setDetail => <SetCard name={setDetail.name} symbol={setDetail.symbol} positions={setDetail.positions} />) }
            </div>
        </div>
    )
}
