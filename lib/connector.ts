import { InjectedConnector } from "@web3-react/injected-connector";

export const supportedChainIds = [
    1, // Mainnet
]

export const injectedConnector = new InjectedConnector({
    supportedChainIds: supportedChainIds
})
