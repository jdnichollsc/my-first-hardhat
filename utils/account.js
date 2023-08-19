/**
 * Get Contract balance
 * @param address - contract address
 */
exports.getBalance = async (address, unit = 'ether') => {
  const contractBalance = await hre.ethers.provider.getBalance(address);
  return hre.ethers.formatUnits(contractBalance.toString(), unit);
};