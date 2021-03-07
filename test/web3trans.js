/*
 * @authror : Leiyin.lin
 * @Date : 2021-03-06
 * @Timestamp : 2021-03-06 13:23
 * @Project : t41
 * @CorpChn : 上海珺程网络科技有限公司
 * @CorpEng : JadeProgram.Shanghai,Ltd.Co
 * @CorpBu : R&D
 * @WebSite : http://shjson.top
 * @WeChat : llysonylin2012
 * @DescriptionMain : web3trans
 * @Description : ...
 */


//要在NodeJS中使用Truffle，我们要先引入web3
const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;


const provider = new Web3.providers.HttpProvider("http://localhost:7545");
const web3 = new Web3(provider)
const {abi} =require('./abi')


const ctAddr = '0x5974843C17a81456B1BC56216E7d1B80802F2866';

/*
签名某个交易
 */
// web3.eth.accounts.signTransaction({
//   to: '0x7bC38f9e6A9dD19AA147D400a01308868CEb8890',
//   value: '1000000000',
//   gas: 2000000
// }, '0x53f7ad981a309aafc90a6ebd710e0bc14727e6c1933ff455357c1cd3f62462df')
//   .then(console.log);

/*
 给正常地址发以太币，可以不unlock
 目录在web3.eth
 */
// web3.eth.sendTransaction({
//   from: '0xe8ABc60252b477810a7e2578C0c0199d6736e0C7',
//   gasPrice: '20000000000',
//   gas: '21000',
//   to: '0x3ca6580a8Eff3d33165c4711c041D187d3d9aABe',
//   value: web3.utils.toWei('10', 'ether'),
//   data: ''
// }).then(console.log);

/*
 给合约发以太币，可以不unlock
 目录在web3.eth
 */
web3.eth.sendTransaction({
  from: '0x9aD2361Fba3aa31c46eF2978E7976fe43d2ECA8C',
  gasPrice: '20000000000',
  gas: '51040',
  // gasLimit: '31560',
  to: ctAddr,
  // to: '0x7bC38f9e6A9dD19AA147D400a01308868CEb8890',
  value: web3.utils.toWei('5', 'ether'),
  data: ''
}).then(console.log);


const inst = new web3.eth.Contract(
  abi,
  ctAddr,
  {from:'0x43F8935BcA3399E00e3ACE2f9f2D08052CC40fA0'}
);

/*
 免费调用合约constant的call行为
 */
// inst.methods.get().call().then(console.log)
// inst.methods.getAmt().call().then(console.log)

/*
 从服务端来调用web3.js
 acc: 0xf1db9EEDe82134B769fF613a9416ffBB5eCc9E64
 pwd: c2e42f9e4ddbeb54ec72990afcba8ab130e9ff46424dadc979c84238a09cd8a5
 */
// inst
//   .methods
//   .set(502)
//   .send({from: '0x9bb56394a0F598A1BCc033CA848d6d61B59De3a0'}, (err, txhash) => {
//     console.log(err)
//     console.log(txhash)
//   })

// const dataTx = inst.methods.set(2995).encodeABI()
// console.log(dataTx)
//
// const rawTx = {
//   to: '0x97ddad0d82257b63531ec341f6bc0524a07926f5',
//   from: '0x3ca6580a8Eff3d33165c4711c041D187d3d9aABe',
//   data: dataTx,
//   nonce: '0x00',
//   gas: '0x6744',
//   gasPrice: '0x4a817c800',
// }
//
// const privateKey = Buffer.from('80a8a336c6fcd38c0cdac300484cff53163fa582564924b449725875b01b19c2', 'hex');
// const deftx = new Tx(rawTx);
// deftx.sign(privateKey);
//
// const serializedTx = deftx.serialize();
// console.log(serializedTx.toString('hex'))
//
// web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
//   .on('receipt', console.log);


/*
 调用合约拿钱
 */
// const dataTx = inst.methods.withdraw().encodeABI()
// console.log(dataTx)
//
// const rawTx = {
//   to: '0x0318c17c65e65368cBC45b6AE2a2bef063B065b7',
//   from: '0x43F8935BcA3399E00e3ACE2f9f2D08052CC40fA0',
//   data: dataTx,
//   nonce: '0x00',
//   gas: '0x6744',
//   gasPrice: '0x4a817c800',
// }
//
// const privateKey = Buffer.from('8f756332c832a31ff3778308f02ee841cb1ebde99f0cab8382ac17c98d1c9066', 'hex');
// const deftx = new Tx(rawTx);
// deftx.sign(privateKey);
//
// const serializedTx = deftx.serialize();
// console.log(serializedTx.toString('hex'))
//
// web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
//   .on('receipt', console.log);
