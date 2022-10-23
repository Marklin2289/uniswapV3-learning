// create a pool instance

// yarn add --dev ethers
const { ethers } = require("ethers")

// yarn add --dev @uniswap/v3-cord
const UniswapV3Pool = require("@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json")

// connect ethers to blockchains provider (infura)
const provider = new ethers.providers.JsonRpcProvider("")

// UniswapV3 USDC/WETH address
const poolAddress = "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640"

// provider = what network we are using
const poolContract = new ethers.Contract(poolAddress, UniswapV3Pool.abi, provider)

async function main() {}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
