const Migrations = artifacts.require("Migrations");
// const Coin = artifacts.require('Coin');
// const Test = artifacts.require('Test');
// const Token = artifacts.require('Token');
const TokenERC20 = artifacts.require('TokenERC20');

// console.log(Coin)

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  // deployer.deploy(Coin);
  // deployer.deploy(Test);

  // deployer.deploy(Token);
  deployer.deploy(TokenERC20, 10000,"ERC20",8,"EC");
};
