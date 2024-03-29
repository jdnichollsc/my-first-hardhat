const { getBalance } = require('../utils/account');

async function main() {
 
  const [owner] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    owner.address
  );

  console.log("Account balance:", await getBalance(owner));

  const MyFirstContract = await hre.ethers.getContractFactory("MyFirstContract");
  const deployedContract = await MyFirstContract.deploy();
  console.log("Deployed MyFirstContract contract address:", deployedContract.address);

  await deployedContract.setNumber(7)

  let result = BigInt(await deployedContract.getNumber()).toString()
  console.log('Stored value in contract is: ', result)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
