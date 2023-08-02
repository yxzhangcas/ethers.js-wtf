// 导入ethers包
import { ethers } from "ethers";
// playcode免费版不能安装ethers，用这条命令，需要从网络上import包（把上面这行注释掉）
// import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.2.3/ethers.js";

// 利用ethers默认的Provider连接以太坊网络
// 内置的provider连接较慢，访问延迟较高
// const provider = new ethers.getDefaultProvider();

// 个人rpc
const ALCHEMY_MAINNET_URL = 'https://eth-mainnet.g.alchemy.com/v2/oKmOQKbneVkxgHZfibs-iFhIlIAl6HDN';
const provider = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL)

// async/await语法糖
const main = async () => {
    // 查询vitalik的ETH余额（ethers支持ENS域名）
    const balance = await provider.getBalance(`vitalik.eth`);
    // 将余额输出在console
    console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);}
main()


// npm install ethers
// node 01_HelloVatalik/HelloVitalik.js