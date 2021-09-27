const Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const rpcURL = "https://rinkeby.infura.io/v3/5a97ab8c906a4455ade4d4c9c97ebaaa"
const web3 = new Web3(rpcURL)
const account1 = "0x9f440c6c82D107991b423F27e019D8A5a35AbCc3"
const account2 = "0xDcadd4F42677E538EC04E65d99cBe00c3ad53D1a"


const privateKey1 = Buffer.from('ee29da1a5b58aa2b5c57d430d10ffe47eed00a23f7a64f977eb432dd1bf9bf77', 'hex')
const privateKey2 = Buffer.from('58af7971221fc1c7aa08a4b15483508e9d398a8bb898132156bbf50bb0c62bfa', 'hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    to:       account2,
    value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  }

  // Sign the transaction
  const tx = new Tx(txObject,{chain: 'rinkeby'})
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash)
    // Now go check etherscan to see the transaction!
  })
})

