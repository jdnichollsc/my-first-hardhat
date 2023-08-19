// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "hardhat/console.sol";

contract MyFirstContract {
    address public owner;
    uint256 number;

    event LogSetNumber(uint num, uint when);

    constructor() {
        owner = msg.sender;
        number = 0;
    }
 
    function setNumber(uint256 _num) public {
        require(msg.sender == owner, "You aren't the owner");
        number = _num;
        emit LogSetNumber(_num, block.timestamp);
        console.log("Setting the number %o", _num);
    }
 
 
    function getNumber() public view returns (uint256){
        return number;
    }
}