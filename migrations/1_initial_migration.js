const FbPumpkins = artifacts.require("FbPumpkins");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(FbPumpkins, "FbPumpkins", "FBP", accounts[0]);
};
