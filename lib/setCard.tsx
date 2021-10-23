import { providers } from "ethers"
import { useEffect, useState } from "react"
import { Position, SetDetails } from "set.js/dist/types/src/types"
import { getModuleAddresses, initializeSet } from "./setJsApi"

interface SetCardProps {
    // tokenAddress: string;
    // chainId: number // TODO(@rootulp) put this in context
    // provider: providers.Web3Provider // TODO(@rootulp) put this in context

    setDetail: SetDetails
}

export const SetCard = (props: SetCardProps): JSX.Element => {
    // const [isLoading, setIsLoading] = useState(false)
    // const [name, setName] = useState<string>()
    // const [symbol, setSymbol] = useState<string>()
    // const [positions, setPositions] = useState<Position[]>()

    // const set = initializeSet(props.chainId, props.provider)

    // useEffect(() => {
    //     setIsLoading(true)
    //     async function fetchSetDetails() {
    //         // This can be optimized by calling batchFetchSetDetailsAsync
    //         set.setToken.fetchSetDetailsAsync(props.tokenAddress, getModuleAddresses(props.chainId)).then(data => {
    //             setName(data.name)
    //             setSymbol(data.symbol)
    //             setPositions(data.positions)
    //             setIsLoading(false)
    //         })
    //     }
    //     fetchSetDetails()
    // }, [props.tokenAddress])

    // if (isLoading) {
    //     return <p key={props.tokenAddress}>Loading Set details</p>
    // }

    return (
        <div key={props.setDetail.symbol}>
            Name: {props.setDetail.name}
            Symbol: {props.setDetail.symbol}
            Positions length: {props.setDetail.positions?.length}
        </div>
    )
}
