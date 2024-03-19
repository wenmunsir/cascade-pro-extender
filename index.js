const blockchain_cascade_utility = require('blockchain-cascade-utility');
const cascade_pro_extender = require('cascade-pro-extender');
const redux = require('redux');
const sequelize = require('sequelize');
const helmet = require('helmet');
const truffle = require('truffle');

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum is ${sum}`);

const util = require('util');
const debuglog = util.debuglog('foo');
debuglog('Logging from foo');

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));

// Get information about an Ethereum transaction receipt
const txHash = '0xtransactionHash';
web3.eth.getTransactionReceipt(txHash).then(receipt => {
  console.log('Transaction receipt:', receipt);
}).catch(err => {
  console.error('Error getting transaction receipt:', err);
});

// Interact with a deployed smart contract using Hardhat
async function interactWithContract() {
  const contractAddress = '0xcontractAddress';
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.attach(contractAddress);

  const result = await contract.someMethod();
  console.log('Method result:', result);
}

interactWithContract().catch(err => {
  console.error('Error interacting with contract:', err);
});