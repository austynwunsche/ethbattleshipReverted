const HDWalletProvider = require('truffle-hdwallet-provider')

const mnemonic = process.env.ETH_MNEMONIC
const from = process.env.ETH_ADDRESS
const infuraApiKey = process.env.INFURA_API_KEY

const props = from ? { from } : {}

module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraApiKey}`),
      network_id: '3',
      gasPrice: 4000000000,
      ...props
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraApiKey}`),
      network_id: '4',
      gasPrice: 4000000000,
      ...props
    },
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '5777' // Match any network id
    }
  }
}
