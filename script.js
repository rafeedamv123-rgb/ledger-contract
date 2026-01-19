import { ethers } from "https://cdn.jsdelivr.net/npm/ethers@6.10.0/+esm";
import { contractaddress , abi} from "./constant.js";
const connect = document.getElementById("connect");
connect.onclick = connectnow;
let provider;
let signer;
let contract;
let writecontract;
let readprovider;
async function connectnow (){
    if(typeof window.ethereum !== "undefined"){
        await ethereum.request({method : "eth_requestAccounts"});
       readprovider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/AOtJ9FjcF9TpK5tY0qkpp");



        provider = new ethers.BrowserProvider(
            window.ethereum
        );
        signer = await provider.getSigner();
        readcontract = new ethers.Contract(contractAddress , abi , readprovider);
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
const contractAddress = document.getElementById("contractaddress");
balance.onclick = getbalance;
async function getbalance(){
    const balanceamount = await contract.getBalance();
    balance.innerHTML=balanceamount.toString();

}
contractAddress.onclick= contracttt;
function contracttt(){
    contractAddress.innerHTML=contractaddress;
}
