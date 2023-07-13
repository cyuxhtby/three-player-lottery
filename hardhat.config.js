require("@nomicfoundation/hardhat-toolbox");
const { mnemonicToSeed, mnemonicToEntropy } = require("ethers/lib/utils");

// Load environment variables
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      chainId: 1337,
      gasPrice: 20000000000,
      gas: 6721975,
    },
    goerli: {
      url: process.env.INFURA_URL,
      accounts: {
        mnemonic: process.env.ACCOUNT_PHRASE
      }
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
