const { mnemonicToSeed, mnemonicToEntropy } = require("ethers/lib/utils");

require("@nomicfoundation/hardhat-toolbox");
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
      url: "https://goerli.infura.io/v3/6b492347014d46b1be2fc125723856e1",
      accounts:{
        mnemonic: "ticket duck balcony afford silent stairs shift common actual edit earth file"
      }
    }
  },
  etherscan: {
    apiKey: "81AMC46XCF7YS2C7QJSMA82A31KZRZZYPQ"
  }
};
