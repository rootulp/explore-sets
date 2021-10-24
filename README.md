# Explore Sets

[![License](https://img.shields.io/:license-mit-blue.svg)](https://rootulp.mit-license.org)

A small app to explore sets. Inspired by [tokensets.com/explore](https://www.tokensets.com/explore), [web3modal-example](https://github.com/ChangoMan/web3modal-example).

Built with [Next.js](https://nextjs.org/), [set.js](https://github.com/SetProtocol/set.js), [ethers](https://docs.ethers.io/v5/), [web3-react](https://github.com/NoahZinsmeister/web3-react), [useDapp](https://usedapp.readthedocs.io/en/latest/), [coingecko API](https://www.coingecko.com/api/documentations/v3).

## Local Development
1. Clone this repo
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
- [X] Add back other chains to chains.ts
- [X] Display an error if on an unsupported chain

## Extra credit
- [ ] Add tests
- [ ] Answer questions in PDF
- [ ] Style Navbar
- [ ] Reduce the precision of position values
- [ ] Improve loading states
- [ ] Add ESLint
- [ ] Move Set to a context
- [ ] Set detail page. Possible URL path `/set/[:symbol]`
- [ ] List streaming fee on Set detail page
- [ ] Surface price of Set token using CoinGecko API. Consider using [useDapp.useCoingeckoPrice](https://usedapp.readthedocs.io/en/latest/coingecko.html#hooks)
- [ ] Fix https://github.com/rootulp/explore-sets/issues/1

## Contribute

This project is under active development. I'd appreciate any feedback via [issues](https://github.com/rootulp/explore-sets/issues/new).

## License

[MIT](https://rootulp.mit-license.org/) © [Rootul Patel](https://rootulp.com)
