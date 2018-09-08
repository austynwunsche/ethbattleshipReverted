# ethbattleshipReverted
Reverted to an older version for easier testing

# ETH Battleship -- ConsenSys Dev Program 2018
## Battleship on the Ethereum blockchain
  
Battleship on the Ethereum blockchain, it is to be played by 2 players (i.e. 2 accounts) with as many people as you want watching the game.

### Development Test
* Download / Clone Repository
* Install [Metamask](https://metamask.io/) and connect to Ropsten or Rinkeby testnets

Install the descrepecies you will need. 
```
yarn
```

Install Truffle
```
npm install -g truffle
```
Make sure Metamask is signed in with Ropsten or Rinkeby test networks.

```
npm install truffle-hdwallet-provider --save
```
```
sudo npm install --dotenv-extended
```
```
truffle compile
```
```
truffle develop
```
Open a new tab in Terminal and run
```
truffle deploy
```
Prepare and deploy the contracts with [Truffle](https://truffleframework.com/truffle)
```
truffle migrate --reset
```
Run the dApp [locally](http://localhost:3000/):
```
yarn start
```

Test smart contracts with Remix or
```
truffle test
```

### Game guide

Rules: [https://en.wikipedia.org/wiki/Battleship_(game)](https://en.wikipedia.org/wiki/Battleship_(game))
