import { providers } from "ethers"
import React, { useEffect, useState } from "react"
import { SetDetails } from "set.js/dist/types/src/types"
import { SetCard } from "./setCard"
import { getModuleAddresses, initializeSet, MAINNET_SET_ADDRESSES } from "./setJsApi"

interface SetListProps {
    chainId: number
    provider: providers.Web3Provider
}

export const SetList = (props: SetListProps): JSX.Element => {
    const [setDetails, setSetDetails] = useState<SetDetails[]>()
    const [isLoading, setIsLoading] = useState(false)

    const set = initializeSet(props.chainId, props.provider)
    useEffect(() => {
        setIsLoading(true)
        async function fetchSetDetails() {
            // Limit to the first 10 token addresses during development
            const tokenAddresses = (await set.system.getSetsAsync()).slice(0, 10)
            const moduleAddresses =  getModuleAddresses(props.chainId)
            const result = await set.setToken.batchFetchSetDetailsAsync(tokenAddresses, moduleAddresses)
            setSetDetails(result)
            setIsLoading(false)
        }

        fetchSetDetails()
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (!setDetails) {
        return <p>No set details</p>
    }

    return (
        <div>
            <h3>Set List</h3>
            {setDetails.map(setDetail => <SetCard name={setDetail.name} symbol={setDetail.symbol} positions={setDetail.positions} />) }
        </div>
    )
}
