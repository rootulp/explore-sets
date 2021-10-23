# Explore Sets

[![License](https://img.shields.io/:license-mit-blue.svg)](https://rootulp.mit-license.org)

A small app to explore sets. Inspired by [tokensets.com/explore](https://www.tokensets.com/explore).

Built with [Next.js](https://nextjs.org/), [set.js](https://github.com/SetProtocol/set.js), [ethers](https://docs.ethers.io/v5/).

## Local Development
1. Clone this repo
1. `cp .env.default .env`
1. Populate tokens in `.env`
1. Start the app in dev mode with `yarn dev`
1. Open [http://localhost:3000](http://localhost:3000)

## To-do

- [X] Create Next.js app
- [X] Convert it to TypeScript
- [X] Set up an Alchemy project
- [X] Configure an Ethers provider
- [X] Create a page for all Set cards. Possible URL path `/sets`
- [ ] Read basic Set info from Set.js
- [ ] Populate cards
- [ ] Style cards in a 3 x 1 grid
- [ ] Add a network selector to switch between mainnet and Kovan

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
