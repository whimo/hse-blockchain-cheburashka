require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY;
const endpoint = process.env.URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: endpoint,
      accounts: [`0x${privateKey}`]
    }
  }
};
