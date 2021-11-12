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

2. copy your private key to a `.secret` file : this is needed for when to deploy your smart contract on other network than localhost.

```
echo "<your_private_key>" > .secret
```

**PS** : obviously this not the best way to do this bcause your private key will be saved in the shell history, but we just test locally.

3. run a local ethereum node with hardhat

```shell
npx hardat node
```

4. run tests (will also compile smart contracts)

```shell
npx hardhat test
```

5. create a new `config.js` file to hold the smart contracts addresses when you deploy

```
cp config.example.js config.js
```

6. deploy to local node

```
npx hardhat run scripts/deploy.js --network localhost
```

7. run the next js server

```
npm run dev
```

## Known Issues

1. When creating the first transaction on the blockchain

```
Nonce too high. Expected nonce to be 0 but got 2. Note that transactions can't be queued when automining.
```

**solution**: this happens because of old history saved in the accocunt from previous tests => open advanced options in Metamask and reset the account.
