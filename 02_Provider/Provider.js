// 创建Infura API Key
// infura.io
// https://mainnet.infura.io/v3/34409a4f99694380822f32643f423763
// alchemy.com
// https://eth-mainnet.g.alchemy.com/v2/cGozNpfzyRn0mhOLRX1B-1gekfrkj4HD
// https://eth-sepolia.g.alchemy.com/v2/UZrL-5UIpqOmiJ6w3t0Kvg2S14GTANuj
// https://eth-goerli.g.alchemy.com/v2/lG36vElcX9Zw7_nolONp7fvc2SC2gzvm

import { ethers } from "ethers";

// Infura
const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/34409a4f99694380822f32643f423763`);
// Mainnet
const providerETH = new ethers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/cGozNpfzyRn0mhOLRX1B-1gekfrkj4HD`);
// Sepolia
const providerSepolia = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/UZrL-5UIpqOmiJ6w3t0Kvg2S14GTANuj`);
// Goerli
const providerGoerli = new ethers.JsonRpcProvider(`https://eth-goerli.g.alchemy.com/v2/lG36vElcX9Zw7_nolONp7fvc2SC2gzvm`);

// 1. 查询vitalik在主网和Goerli测试网的ETH余额
console.log("1. 查询vitalik在主网和Goerli测试网的ETH余额");

// 查询余额
// const balance = await provider.getBalance(`vitalik.eth`);                    // 连接超时
const balanceETH = await providerETH.getBalance(`vitalik.eth`);
// const balanceSepolia = await providerSepolia.getBalance(`vitalik.eth`);      // Sepolia测试网不支持ENS
const balanceGoerli = await providerGoerli.getBalance(`vitalik.eth`);

// 打印余额
console.log(`ETH Balance of vitalik: ${ethers.formatEther(balanceETH)} ETH`);
console.log(`Goerli ETH Balance of vitalik: ${ethers.formatEther(balanceGoerli)} ETH`);

// 2. 查询provider连接到了哪条链
console.log("\n2. 查询provider连接到了哪条链");

const networkETH = await providerETH.getNetwork();
const networkGoerli = await providerGoerli.getNetwork();

console.log(networkETH.toJSON());
console.log(networkGoerli.toJSON());

// 3. 查询区块高度
console.log("\n3. 查询区块高度");

const blockNumberETH = await providerETH.getBlockNumber();
const blockNumberGoerli = await providerGoerli.getBlockNumber();

console.log(blockNumberETH);
console.log(blockNumberGoerli);

// 4. 查询 Vitalik 钱包历史交易次数
console.log("\n4. 查询 Vitalik 钱包历史交易次数");

const txCountETH = await providerETH.getTransactionCount(`vitalik.eth`);
const txCountGoerli = await providerGoerli.getTransactionCount(`vitalik.eth`);

console.log(txCountETH);
console.log(txCountGoerli);

// 5. 查询当前建议的gas设置
console.log("\n5. 查询当前建议的gas设置");

const feeDataETH = await providerETH.getFeeData();
const feeDataGoerli = await providerGoerli.getFeeData();

console.log(feeDataETH);
console.log(feeDataGoerli);

// 6. 查询区块信息
console.log("\n6. 查询区块信息");

const blockETH = await providerETH.getBlock(0);
const blockGoerli = await providerGoerli.getBlock(0);

console.log(blockETH);
console.log(blockGoerli);

// 7. 查询指定合约的bytecode
console.log("\n7. 查询指定合约的bytecode");

const code = await providerETH.getCode("0xc778417e063141139fce010982780140aa0cd5ab");       // WETH

console.log(code);