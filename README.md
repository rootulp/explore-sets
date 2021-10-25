# Explore Sets

[![License](https://img.shields.io/:license-mit-blue.svg)](https://rootulp.mit-license.org)

A small app to explore sets. Inspired by [tokensets.com/explore](https://www.tokensets.com/explore).

Built with [Next.js](https://nextjs.org/), [set.js](https://github.com/SetProtocol/set.js), [ethers](https://docs.ethers.io/v5/), [web3-react](https://github.com/NoahZinsmeister/web3-react), [useDapp](https://usedapp.readthedocs.io/en/latest/), and [coingecko API](https://www.coingecko.com/api/documentations/v3).

## Local Development
1. Clone this repo
1. Copy default environment variables file: `cp .env.default .env.local`
1. Create Alchemy tokens for **Mainnet** and **Kovan**
    1. Navigate to [Alchemy](https://www.alchemy.com/) and create an account
    1. Click **Create app** and provide a name (e.g. **explore-sets-mainnet**)
    1. Navigate to your new app and click **View key** then copy the API key URL
    1. Repeat these steps to generate a Kovan token
    1. Populate the fields in `.env.local`
1. Start the app in dev mode with `yarn dev`
1. Open [http://localhost:3000](http://localhost:3000)

## Contribute

This project is under active development. I'd appreciate any feedback via [issues](https://github.com/rootulp/explore-sets/issues/new).

## License

[MIT](https://rootulp.mit-license.org/) © [Rootul Patel](https://rootulp.com)
