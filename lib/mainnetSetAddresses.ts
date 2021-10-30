import { supportedChainIds } from "./connector";

interface SetAddresses {
    basicIssuance: string
    controller: string
    debtIssuance: string
    governance: string
    masterOracle: string
    navIssuance: string
    protocolViewer: string
    setTokenCreator: string
    streamingFee: string
    tradeModule: string
}

export const MAINNET_SET_ADDRESSES: SetAddresses = {
    basicIssuance: "0xd8EF3cACe8b4907117a45B0b125c68560532F94D",
    controller: "0xa4c8d221d8BB851f83aadd0223a8900A6921A349",
    debtIssuance: "0x39F024d621367C044BacE2bf0Fb15Fb3612eCB92",
    governance: "0x5C87b042494cDcebA44C541fbB3BC8bFF179d500",
    masterOracle: "0xA60f9e1641747762aDE7FD5F881b90B691E92B0a",
    navIssuance: "0xaB9a964c6b95fA529CA7F27DAc1E7175821f2334",
    // Copied this value from https://github.com/SetProtocol/index-ui/blob/ac30a9c1448db239f8bc0a74224a443a9aa997e7/.env.prod
    // https://github.com/cgewecke/0x-multichain-quote-sketch/blob/b77696bff05b878376d3133ec5afc925ed1c9f1c/tradequote.ts
    protocolViewer: "0x74391125304f1e4ce11bDb8aaAAABcF3A3Ae2f41",
    setTokenCreator: "0xeF72D3278dC3Eba6Dc2614965308d1435FFd748a",
    streamingFee: "0x08f866c74205617B6F3903EF481798EcED10cDEC",
    tradeModule: "0x90F765F63E7DC5aE97d6c576BF693FB6AF41C129"
}

export function getModuleAddresses(chainId: number): string[] {
    if (!supportedChainIds.includes(chainId)) {
        throw new Error(`Unsupported chainId ${chainId}`)
    }
    return [
        MAINNET_SET_ADDRESSES.basicIssuance,
        MAINNET_SET_ADDRESSES.streamingFee,
        MAINNET_SET_ADDRESSES.tradeModule,
        MAINNET_SET_ADDRESSES.debtIssuance,
    ];
}
