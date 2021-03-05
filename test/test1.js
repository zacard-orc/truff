//要在NodeJS中使用Truffle，我们要先引入web3
const Web3 = require('web3');
const contract = require("truffle-contract");

const buildTestJson = require('../build/contracts/Test')

//http://localhost:7545地址为开发客户端地址
// const provider = new Web3.providers.HttpProvider("http://localhost:8545");
const provider = new Web3.providers.HttpProvider("http://localhost:7545");
const web3 = new Web3(provider)

const myAddr = '0x79ABeDFDEb6c705A679B262c8F2858724e26fD0d'
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

//没有默认地址，会报错
//UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 3): Error: invalid address
//务必设置为自己的钱包地址，如果不知道，可通过开发者客户端查看

Test.defaults({
  from : myAddr
});


// Test.deployed().then(function(instance){
//   return instance.sayHi.call();
// }).then(function(result){
//   console.log(result);
// });

Test.deployed().then(async (inst)=>{

  // await inst.deposit({
  //   from: '0x1306899E0869CBED71E25910872b34260a68eE1C\n',
  //   value: 1,
  //   gas: '4712388'
  // })

  // console.log(inst)
  const sumres = await inst.addFunc.call(50, 20)
  console.log(sumres)
  // return inst.sayHi.call()
  // console.log(await inst.sayHi2.call())
  // return inst.fba.call()
  // return inst.set_sender.call()
  // return inst.set.call()
  await inst.set.call(3000)
  const ret =  await inst.get.call()
  // console.log(ret)

  const retbal = await inst.get_balance.call()
  console.log(retbal)

 // return inst.sendDemo.call('0xAAbBaEcb399Bdf3Cec692CAC94365edEC49Ef709',{from:'0x1306899E0869CBED71E25910872b34260a68eE1C'})

})
//   .then(res=>{
//   console.log(res)
// }).catch(e=>{
//   console.log(e)
// })
