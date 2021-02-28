//要在NodeJS中使用Truffle，我们要先引入web3
const Web3 = require('web3');
const contract = require("truffle-contract");

const buildTestJson = require('../build/contracts/Test')

//http://localhost:7545地址为开发客户端地址
const provider = new Web3.providers.HttpProvider("http://localhost:7545");

//使用truffle-contract包的contract()方法
//请务必使用你自己编译的Test.json文件内容
const Test = contract(buildTestJson);

Test.setProvider(provider);

//没有默认地址，会报错
//UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 3): Error: invalid address
//务必设置为自己的钱包地址，如果不知道，可通过开发者客户端查看

Test.defaults({
  from : "0x381bF2586df35Fe30aEe317b1D954179F5b72204"
});


Test.deployed().then(function(instance){
  return instance.sayHi.call();
}).then(function(result){
  console.log(result);
});
