export const TOKEN_LISTS_API = "https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link"

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
