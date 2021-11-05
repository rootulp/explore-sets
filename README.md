# Explore Sets

[![License](https://img.shields.io/:license-mit-blue.svg)](https://rootulp.mit-license.org)

A small app to explore sets. Inspired by [tokensets.com/explore](https://www.tokensets.com/explore).

Built with [Next.js](https://nextjs.org/), [set.js](https://github.com/SetProtocol/set.js), [ethers](https://docs.ethers.io/v5/), [web3-react](https://github.com/NoahZinsmeister/web3-react), [useDapp](https://usedapp.readthedocs.io/en/latest/), and [tokenlists](https://tokenlists.org/).

## Local Development
1. Clone this repo
1. Create an Infura token
    1. Navigate to [Infura](https://infura.io) and create an account
    1. Click **Create new project** and provide a name (e.g. explore-sets)
    1. Navigate to your new project and copy the project id (the part after `https://mainnet.infura.io/v3/`)
1. Copy the default environment variable file to a `.env.local` file
    ```bash
    cp .env.default .env.local
    ```
1. Populate Infura token
1. Start the app in dev mode with `yarn dev`
1. Open [http://localhost:3000](http://localhost:3000)

## Contribute

I'd appreciate any feedback via [issues](https://github.com/rootulp/explore-sets/issues/new).

## License

[MIT](https://rootulp.mit-license.org/) © [Rootul Patel](https://rootulp.com)
