const Migrations = artifacts.require("Migrations");
const Test = artifacts.require('Test');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Test);
};
