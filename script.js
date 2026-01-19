import { ethers } from "https://cdn.jsdelivr.net/npm/ethers@6.10.0/+esm";

const contractaddress ="0x6267811fcfaa170006cd3f24ccc4b49ef674a3fa";
const abi = 
[
  {
    "type": "constructor",
    "inputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "balancee",
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "deposit",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getBalance",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "Deposit",
    "inputs": [
      {
        "name": "sender",
        "type": "address",
        "indexed": false
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false
      }
    ],
    "anonymous": false
  }
]
console.log("ADDR TYPE:", typeof contractaddress);
const connect = document.getElementById("connect");
connect.onclick = connectnow;
let provider;
let signer;
let contract;
let writecontract;
let readcontract;
async function connectnow (){
    if(typeof window.ethereum !== "undefined"){
        await ethereum.request({method : "eth_requestAccounts"});
       readprovider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/AOtJ9FjcF9TpK5tY0qkpp");



        provider = new ethers.BrowserProvider(
            window.ethereum
        );
        signer = await provider.getSigner();
        readcontract = new ethers.Contract(contractaddress , abi , readprovider);
        contract = new ethers.Contract(contractaddress , abi , signer);
connect.innerHTML="connected!";
    }
    else {
        connect.innerHTML="metamask not installed";
    }
}
const deposits=document.getElementById("deposit");
const depositinput=document.getElementById("depositnumber");
deposits.onclick = depositnow
async function depositnow() {
    if(window.ethereum==undefined){
console.log("not connected to metamask");
    }
const amount = depositinput.value;
if(amount==0){
    alert("send something greater than 0");
}
else {


alert("setting to " + amount);
const tx = await contract.deposit({
    value: ethers.parseEther(amount)
});
await tx.wait();
alert("click balance button to see your balance in wei")}
}
const balance = document.getElementById("balance");
const contractAddress = document.getElementById("showcontractaddress");
balance.onclick = getbalance;
async function getbalance(){
    const balanceamount = await contract.getBalance();
    balance.innerHTML=balanceamount.toString();

}
contractAddress.onclick= contracttt;
function contracttt(){
    contractAddress.innerHTML=contractaddress;
}
