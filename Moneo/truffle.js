/*module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
}; */


// Allows us to use ES6 in our migrations and tests.
require('babel-register')

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "secretkey";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/secretkey"),
      network_id: 3
    }
  }
};

//truffle migrate --all --network ropsten

//Contract Address for MoneoICO
//0x3dbfa0a958ec144ade4b6e7fdc33618105183440

