const Web3 = require('web3')
const rpcURL = "https://rinkeby.infura.io/v3/5a97ab8c906a4455ade4d4c9c97ebaaa"
const web3 = new Web3(rpcURL)

// get latest block number
web3.eth.getBlockNumber().then(console.log)

// // get latest block
web3.eth.getBlock('latest').then(console.log)

// get latest 10 blocks
web3.eth.getBlockNumber().then((latest) => {
  for (let i = 0; i < 10; i++) {
    web3.eth.getBlock(latest - i).then(console.log)
  }
})

// get transaction from specific block
const hash = '0xbec4ffc6e015986ef2b3a329ea1543c6d797c777ef90351556b4f544b29c822f'
web3.eth.getTransactionFromBlock(hash, 2).then(console.log)