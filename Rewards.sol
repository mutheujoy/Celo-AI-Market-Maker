// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Rewards {
    IERC20 public cKES;
    mapping(address => uint256) public rewards;

    constructor(address _cKES) {
        cKES = IERC20(_cKES);
    }

    function distributeRewards(address user, uint256 amount) external {
        rewards[user] += amount;
        cKES.transfer(user, amount);
    }
}
