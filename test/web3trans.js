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
const provider = new Web3.providers.HttpProvider("http://localhost:7545");
const web3 = new Web3(provider)
const {abi} =require('./abi')

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
 发送以太币，可以不unlock
 目录在web3.eth
 */
// web3.eth.sendTransaction({
//   from: '0x28a08a762983801654CB6872Fff866f721218ca2',
//   gasPrice: '20000000000',
//   gas: '21000',
//   to: '0x7bC38f9e6A9dD19AA147D400a01308868CEb8890',
//   value: web3.utils.toWei('0.01', 'ether'),
//   data: ''
// }, '0x53f7ad981a309aafc90a6ebd710e0bc14727e6c1933ff455357c1cd3f62462df').then(console.log);


const inst = new web3.eth.Contract(
  abi,
  '0x97ddad0d82257b63531ec341f6bc0524a07926f5',
  {from:'0x7bC38f9e6A9dD19AA147D400a01308868CEb8890'}
);

/*
 免费调用合约constant的call行为
 */
inst.methods.get().call().then(console.log)


// inst
//   .methods
//   .set(5999)
//   .send({}, (err, txhash) => {
//     console.log(err)
//     console.log(txhash)
//   })
