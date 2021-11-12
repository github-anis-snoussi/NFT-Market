# NFT-Market

NFT Marketplace on Ethereum (ERC721)

## Stack used

- Web App : [Next.js](https://nextjs.org/)
- Solidity development : [Hardhat](https://hardhat.org/)
- File Storage : [IPFS](https://ipfs.io/)
- Ethereum Web Client Library : [Ethers.js](https://docs.ethers.io/v5/)
- Deployment : [Polygon](https://polygon.technology/)

## Run locally

1. install dependencies

```shell
npm install
```

2. run a local ethereum node with hardhat

```shell
npx hardat node
```

3. run tests (will also compile smart contracts)

```shell
npx hardhat test
```

4. deploy to local node

```
npx hardhat run scripts/deploy.js --network localhost
```
