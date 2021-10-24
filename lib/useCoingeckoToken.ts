import { CoinGeckoTokenData } from "set.js/dist/types/src/types";
import useSWR from "swr"

interface CoingeckoToken {
    token: CoinGeckoTokenData
    isLoading: boolean
    isError: boolean
}

export function useCoingeckoToken(chainId: number, address: string): CoingeckoToken {
    const assetPlatform = getAssetPlatform(chainId);
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const {data, error} = useSWR(`https://api.coingecko.com/api/v3/coins/${assetPlatform}/contract/${address}`, fetcher)

    return {
        token: data as CoinGeckoTokenData,
        isLoading: !error && !data,
        isError: error
    }

}

function getAssetPlatform(chainId: number): string {
    if (chainId === 1) {
        return "ethereum"
    }
    if (chainId === 42) {
        return "kovan"
    }
    throw new Error(`Unsupported chainId ${chainId}`)
}
