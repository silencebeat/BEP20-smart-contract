const TestContract = artifacts.require("TestToken");

module.exports = function (deployer) {
  deployer.deploy(TestContract);
};
