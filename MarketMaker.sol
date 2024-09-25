// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MarketMaker {
    IERC20 public cKES;
    address public owner;

    event TradeExecuted(address indexed user, uint256 amountIn, uint256 amountOut);

    constructor(address _cKES) {
        cKES = IERC20(_cKES);
        owner = msg.sender;
    }

    function trade(uint256 amountIn) external {
        require(cKES.balanceOf(msg.sender) >= amountIn, "Insufficient balance");

        uint256 amountOut = calculateTrade(amountIn);
        cKES.transferFrom(msg.sender, address(this), amountIn);
        cKES.transfer(msg.sender, amountOut);

        emit TradeExecuted(msg.sender, amountIn, amountOut);
    }

    function calculateTrade(uint256 amountIn) internal pure returns (uint256) {
        // Simple pricing algorithm for demonstration
        return amountIn * 98 / 100; // 2% fee
    }
}
