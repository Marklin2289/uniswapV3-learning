// create a pool instance
const { ethers } = require("ethers")

// UniswapV3 USDC/WETH address
const poolAddress = "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640"
// provider = what network we are using
const poolContract = new ethers.Contract(poolAddress, poolABI, provider)
