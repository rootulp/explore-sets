export const SET_TOKEN_LIST = "https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json"
export const ONE_INCH_TOKEN_LIST = "https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link"

export interface TokenListsResponse {
    keywords: string[]
    logoURI: string
    name: string
    timestamp: string
    tokens: Token[]
    version: {
        major: number
        minor: number
        patch:number
    }
}

export interface Token {
    address: string
    chainId: number
    decimals: number
    logoURI: string
    name: string
    symbol: string
}

export function getToken(tokens: Token[], address: string): Token | undefined {
    return tokens.filter(t => t.address === address)[0]
}
