const Migrations = artifacts.require("Migrations");
const Coin = artifacts.require('Coin');

console.log(Coin)

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Coin);
};
