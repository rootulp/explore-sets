import useSWR from "swr"

interface CoingeckoToken {
    token: any // I couldn't find CoinGecko types for this
    isLoading: boolean
    isError: boolean
}

export function useCoingeckoToken(address: string, chainId?: number): CoingeckoToken {
    const assetPlatform = getAssetPlatform(chainId ?? 1);
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const {data, error} = useSWR(`https://api.coingecko.com/api/v3/coins/${assetPlatform}/contract/${address}`, fetcher)

    return {
        token: data,
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
