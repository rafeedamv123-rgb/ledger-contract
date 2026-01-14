// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Ledger {
    mapping(address => uint256) public balancee;
address public owner;
constructor(){
    owner = msg.sender;
}
event Deposit(address sender, uint256 amount);
function deposit() external payable{
    require(msg.value > 0, "send something greater than 0");
    balancee[msg.sender] += msg.value;
    emit Deposit(msg.sender, msg.value);
}
function getBalance() external view returns(uint256){
    return balancee[msg.sender];
}
}