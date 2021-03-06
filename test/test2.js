//要在NodeJS中使用Truffle，我们要先引入web3
const Web3 = require('web3');
const contract = require("truffle-contract");

const buildTestJson = require('../build/contracts/Coin')

//http://localhost:7545地址为开发客户端地址
// const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const provider = new Web3.providers.HttpProvider("http://localhost:7545");
const web3 = new Web3(provider)

const myAddr = '0x9815E8Fd855346d9204a19E17dcc35Fa847c207f'
// web3.eth.getBlock(3, function(error, result){
//   if(!error)
//     console.log(result)
//   else
//     console.error(error);
// })

web3.eth.getBalance(myAddr).then(console.log)

//使用truffle-contract包的contract()方法
//请务必使用你自己编译的Test.json文件内容
const Test = contract(buildTestJson);

Test.setProvider(provider);

Test.defaults({
  from : myAddr
});


web3.eth.sendTransaction({
  from: '0x9815E8Fd855346d9204a19E17dcc35Fa847c207f',
  to: '0xF65d9e83838DfD3B41646f2894923572a12d5f0e',
  value: 10000000000000,
  gas: 30000
}).then(console.log)

// Test.deployed().then(async (inst)=>{
//
//   const bb = await inst.mint('0x28a08a762983801654CB6872Fff866f721218ca2',200,{from:myAddr});
//   console.log(bb)
//   // await inst.mint.call('0xe8ABc60252b477810a7e2578C0c0199d6736e0C7',100);
//   // await inst.mint.call('0x0cD8372c886Aa7325d433cd92AbEf56DB09f0545',300);
//
//   // const minteraddr = await inst.getMinter.call()
//
//   // console.log(minteraddr)
//
//   // await inst.setD(888,{from:myAddr});
//   const storedata = await inst.getD({from:myAddr});
//   console.log(storedata)
//
//   // await inst.send.call('0x01d9743E23395BA4eF16Ad385839e77dbAd53878',5);
//   // await inst.send('0x01d9743E23395BA4eF16Ad385839e77dbAd53878',5,{from:myAddr});
//
//
//  // return inst.sendDemo.call('0xAAbBaEcb399Bdf3Cec692CAC94365edEC49Ef709',{from:'0x1306899E0869CBED71E25910872b34260a68eE1C'})
//
// })
