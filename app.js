const Web3 = require('web3')
const rpcURL = "https://rinkeby.infura.io/v3/5a97ab8c906a4455ade4d4c9c97ebaaa"
const web3 = new Web3(rpcURL)

const account = "0x9f440c6c82D107991b423F27e019D8A5a35AbCc3"

web3.eth.getBalance(account, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
    console.log(balance)
  })