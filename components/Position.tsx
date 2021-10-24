import { getExplorerAddressLink, ChainId } from "@usedapp/core";
import { BigNumber, ethers } from "ethers";
import { useCoingeckoToken } from "../lib/useCoingeckoToken";

interface PositionProps {
    address: string,
    quantity: BigNumber,
}

export const Position = (props: PositionProps): JSX.Element => {
    // TODO(@rootulp) stop hard-coding chainId
    const { token, isLoading, isError } = useCoingeckoToken(1, props.address);
    const link = getExplorerAddressLink(props.address, ChainId.Mainnet)

    if (isLoading){
        return (<div key={props.address}>Loading</div>)
    }
    if (isError){
        return (<div key={props.address}>Error</div>)
    }
    return (
        <div key={props.address}><a href={link}>{token.name}</a>: {ethers.utils.formatEther(props.quantity)}</div>
    )
}
