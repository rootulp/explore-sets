# FAQ

> How do you handle web3 provider API failures?

It depends on what kind of failure.
1. We surface unsupported chain id errors per [these docs](https://github.com/NoahZinsmeister/web3-react/tree/v6/docs#unsupportedchainiderror)
1. We display other Web3 provider errors in the middle of the Navbar

> If you were to handle writes, how would you handle transaction failures?

I'd probably leverage an existing hook for this. [useSendTransaction](https://usedapp.readthedocs.io/en/latest/core.html#usesendtransaction) looks like a good candiate. Then we can display a component that tracks the status of `state` and displays an alert dialog if `state=FAIL` or `state=Exception`.

> What tests seem appropriate in this context?

Testing the data fetching logic in `<SetList>` seems like a good candiate because we're chaining together a few requests. Also testing the web3 connect / disconnect workflow.

> What's critical functionality?

Displaying accurate Set details.

> Can other networks be added easily?

Sort-of. Still a little manual. We can improve this process by getting a list of asset platforms from CoinGecko and storing that (eliminating step 3).

1. Add chainId to `supportedChainIds`
1. Add deployed contract addresses to **setjsApi.ts**
1. Add CoinGecko asset platform to `getAssetPlatform()`

> Under what conditions does your solution break?

- Kovan until I find the `ProtocolViewer` contract address deployed to Kovan
- Unsupported chains
- For Sets that contain a position where the position address isn't on CoinGecko

> Will the UI remain responsive, as the number of Sets increases?

I capped the number of Sets to the first 10 in order to avoid making tons of CoinGecko requests for positions that aren't on the page. In order to make the UI more responsive, we could consider server side requesting. This is blocked on https://github.com/rootulp/explore-sets/issues/1

> How do you handle the eventually consistent nature of web3 calls?

Since the Web3 calls we're making are read-only, we show loading cards while these requests are in-flight. This could get trickier to reasaon about if we were also performing write operations.

> If we were to include significantly more data, what performance issues do you anticipate, and what solutions would you employ?

1. Server side
1. Batch requests to CoinGecko
1. If we were to remove the cap on number of Sets displayed, I'd like to implement some pagination so that the request to TokenSets to get the list of available sets only needs to return what would be visible on the page. Additionally constrain the number of Sets provided to the batchFetchSetDetailsAsync request to only load Set details for Sets that we would display.

> What general UX/UI challenges do you foresee?

- I showed this page to my Mom who thinks it's difficult to differentiate between Set cards. Color and images could help to visually differentiate Sets.
- We can reduce the precision on the number of decimal places to show for Position quantities
- New users may find Ethereum addresses difficult to view. We should integrate with ENS ASAP.
- I'd like to show a network logo next to Mainnet in the header (similar to Uniswap)
