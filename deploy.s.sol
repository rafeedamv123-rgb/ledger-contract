// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {Ledger} from "../src/ledger.sol";

contract deployledger is Script {
    function run() external {
        vm.startBroadcast();
        new Ledger();
        vm.stopBroadcast();
    }
    }