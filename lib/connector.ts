import { InjectedConnector } from "@web3-react/injected-connector";

export const supportedChainIds = [
    1, // Mainnet
    42 // Kovan
]

export const injectedConnector = new InjectedConnector({
    supportedChainIds: supportedChainIds
})
