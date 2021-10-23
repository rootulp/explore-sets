import { Provider } from "@ethersproject/abstract-provider"
import { providers } from "ethers"
import { useEffect, useState } from "react"
import useSWR from "swr"
import { initializeSet } from "./setJsApi"

interface SetListProps {
    chainId: number
    provider: providers.Web3Provider
}

export const SetList = (props: SetListProps): JSX.Element => {
    const [ sets, setSets ] = useState<string[]>()
    const [isLoading, setIsLoading] = useState(false)

    const set = initializeSet(props.chainId, props.provider)
    useEffect(() => {
        setIsLoading(true)
        async function fetchSets() {
            set.system.getSetsAsync().then(data => {
                setSets(data)
                setIsLoading(false)
            })
        }
        fetchSets()
    }, [])

    if (isLoading) {
        return <p>Loading....</p>
    }
    if (!sets) {
        return <p>No List to show</p>
    }

    return (
        <div>
            <h3>Set List</h3>
            {sets.map(set => {
                return (
                    <div>
                        {set}
                    </div>
                )
            })}
        </div>
    )
}
