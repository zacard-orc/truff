//要在NodeJS中使用Truffle，我们要先引入web3
const Web3 = require('web3');
const contract = require("truffle-contract");

const buildTestJson = require('../build/contracts/Test')

const provider = new Web3.providers.HttpProvider("http://localhost:7545");
const web3 = new Web3(provider)

const myAddr = '0x9815E8Fd855346d9204a19E17dcc35Fa847c207f'


web3.eth.getBalance(myAddr).then(console.log)

//使用truffle-contract包的contract()方法
//请务必使用你自己编译的Test.json文件内容
const Test = contract(buildTestJson);

Test.setProvider(provider);

Test.defaults({
  from : myAddr
});


Test.deployed().then(async (inst)=>{
  const bb = await inst.set(3999,{from:myAddr});
  console.log(bb)
  const storedata = await inst.get({from:myAddr});
  console.log(storedata)
})
