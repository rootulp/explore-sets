import { InjectedConnector } from "@web3-react/injected-connector";

// We currently support Mainnet and Kovan
export const supportedChainIds = [1, 42]
export const injected = new InjectedConnector({
    supportedChainIds: supportedChainIds
})
