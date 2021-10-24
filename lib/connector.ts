

import { InjectedConnector } from "@web3-react/injected-connector";
export const injected = new InjectedConnector({
    // We currently support Mainnet and Kovan
    supportedChainIds: [1, 42]
})
