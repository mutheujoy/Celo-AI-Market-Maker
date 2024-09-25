const express = require('express');
const router = express.Router();
const Trade = require('../models/TradeModel');

router.post('/execute', async (req, res) => {
    const { amountIn, amountOut } = req.body;

    try {
        const trade = new Trade({ amountIn, amountOut });
        await trade.save();
        res.status(201).json({ message: 'Trade executed successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to execute trade' });
    }
});

module.exports = router;
