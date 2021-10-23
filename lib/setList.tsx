import { providers } from "ethers"
import React, { useEffect, useState } from "react"
import { SetCard } from "./setCard"
import { getModuleAddresses, initializeSet } from "./setJsApi"

interface SetListProps {
    chainId: number
    provider: providers.Web3Provider
}

export const SetList = (props: SetListProps): JSX.Element => {
    const [sets, setSets] = useState<string[]>()
    const [isLoading, setIsLoading] = useState(false)

    const set = initializeSet(props.chainId, props.provider)
    useEffect(() => {
        setIsLoading(true)
        async function fetchSets() {
            set.system.getSetsAsync().then(data => {
                setSets(data.slice(0, 9)) // cap this to the first 10 entries during development
                setIsLoading(false)
            })
        }
        fetchSets()
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (!sets) {
        return <p>No sets to display</p>
    }

    return (
        <div>
            <h3>Set List</h3>
            {sets.map(tokenAddress => <SetCard chainId={props.chainId} provider={props.provider} tokenAddress={tokenAddress} />) }
        </div>
    )
}
