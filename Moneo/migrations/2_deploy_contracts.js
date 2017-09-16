var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var Moneo = artifacts.require("./Moneo.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
};

module.exports = function(deployer) {
  

  deployer.deploy(Moneo, 1000000, "MoneoICO", 1, "MO");
};