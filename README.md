# Explore Sets

[![License](https://img.shields.io/:license-mit-blue.svg)](https://rootulp.mit-license.org)

A small app to explore sets. Inspired by [tokensets.com/explore](https://www.tokensets.com/explore), [web3modal-example](https://github.com/ChangoMan/web3modal-example).

Built with [Next.js](https://nextjs.org/), [set.js](https://github.com/SetProtocol/set.js), [ethers](https://docs.ethers.io/v5/), [web3modal](https://github.com/Web3Modal/web3modal).

## Local Development
1. Clone this repo
1. Create an Alchemy token
    1. Navigate to [Alchemy](https://www.alchemy.com/) and create an account
    1. Click **Create app** and provide a name (e.g. **explore-sets**)
    1. Navigate to your new app and click **View key** then copy the token (the part after `https://eth-mainnet.alchemyapi.io/v2/`)
    1. Repeat these steps to generate a Kovan token
1. Create an Infura token
    1. Navigate to [Infura](https://infura.io) and create an account
    1. Click **Create new project** and provide a name (e.g. **explore-sets**)
    1. Navigate to your new project and copy the project id (the part after `https://mainnet.infura.io/v3/`)
1. `cp .env.default .env.local`
1. Populate tokens in `.env` with the tokens you generated in step 2
1. Start the app in dev mode with `yarn dev`
1. Open [http://localhost:3000](http://localhost:3000)

## To-do

- [X] Create Next.js app
- [X] Convert it to TypeScript
- [X] Set up an Alchemy project
- [X] Configure an Ethers provider
- [X] Create a page for all Set cards. Possible URL path `/sets`
- [X] Read basic Set info from Set.js
- [X] Populate cards
- [X] Style cards in a 3 x 1 grid
- [ ] Add a network selector to switch between mainnet and Kovan
- [X] Add back other chains to chains.ts
- [ ] Display an error if on an unsupported chain

## Extra credit
- [ ] Set detail page. Possible URL path `/set/[:symbol]`
- [ ] List streaming fee on Set detail page
- [ ] Surface price of Set token using CoinGecko API. Consider using [useDapp.useCoingeckoPrice](https://usedapp.readthedocs.io/en/latest/coingecko.html#hooks)

## Contribute

This project is under active development. I'd appreciate any feedback via [issues](https://github.com/rootulp/explore-sets/issues/new).

## License

[MIT](https://rootulp.mit-license.org/) © [Rootul Patel](https://rootulp.com)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## References

- [Next.js docs](https://nextjs.org/docs)
- [Next.js deployment docs](https://nextjs.org/docs/deployment)
