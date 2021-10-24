import { getExplorerAddressLink } from "@usedapp/core";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import { useCoingeckoToken } from "../lib/useCoingeckoToken";

interface PositionProps {
    address: string
    quantity: BigNumber,
}

export const Position = (props: PositionProps): JSX.Element => {
    const {chainId} = useWeb3React();
    const { token, isLoading, isError } = useCoingeckoToken(props.address, chainId);

    if (isLoading){
        return (<div key={props.address}>Loading</div>)
    }
    if (isError){
        return (<div key={props.address}>Error</div>)
    }
    return (
        <div key={props.address}>
            {chainId && <a href={getExplorerAddressLink(props.address, chainId)}>{token.name}</a>}: {ethers.utils.commify(ethers.utils.formatEther(props.quantity))}
        </div>
    )
}
