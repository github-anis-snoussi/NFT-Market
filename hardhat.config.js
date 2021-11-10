require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
// todo : change this to env file
const projectId = "df632fa05cb14b1bbc6cfd8aa8667fb5";

module.exports = {
  networks: {
    // local network
    hardhat: {
      chainId: 1337,
    },
    // **** network rndpoints from infura ****
    // 1. polygon test net : mumbai
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    // 2. polygon mainnet
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
