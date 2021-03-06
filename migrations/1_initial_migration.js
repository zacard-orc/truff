const Migrations = artifacts.require("Migrations");
const Coin = artifacts.require('Coin');
const Test = artifacts.require('Test');

// console.log(Coin)

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Coin);
  deployer.deploy(Test);
};
