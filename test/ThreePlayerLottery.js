const { ethers } = require('hardhat');

async function main() {
  const ThreePlayerLottery = await ethers.getContractFactory('ThreePlayerLottery');
  const lottery = await ThreePlayerLottery.deploy();
  await lottery.deployed();

  console.log('Lottery deployed to:', lottery.address);

  const accounts = await ethers.getSigners();
  const alice = accounts[0];
  const bob = accounts[1];
  const charlie = accounts[2];

  await lottery.connect(alice).buyTicket({ value: ethers.utils.parseEther('0.01') });
  await lottery.connect(bob).buyTicket({ value: ethers.utils.parseEther('0.01') });
  await lottery.connect(charlie).buyTicket({ value: ethers.utils.parseEther('0.01') });

  const jackpotBefore = await ethers.provider.getBalance(lottery.address);
  console.log('Jackpot before:', ethers.utils.formatEther(jackpotBefore));

  await lottery.selectWinner();

  const jackpotAfter = await ethers.provider.getBalance(lottery.address);
  console.log('Jackpot after:', ethers.utils.formatEther(jackpotAfter));

  const aliceBalance = await ethers.provider.getBalance(alice.address);
  console.log('Alice balance:', ethers.utils.formatEther(aliceBalance));

  const bobBalance = await ethers.provider.getBalance(bob.address);
  console.log('Bob balance:', ethers.utils.formatEther(bobBalance));
  
  const charlieBalance = await ethers.provider.getBalance(charlie.address);
  console.log('Charlie balance:', ethers.utils.formatEther(charlieBalance));
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
