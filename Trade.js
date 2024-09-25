import React, { useState } from 'react';
import axios from 'axios';

const Trade = () => {
    const [amountIn, setAmountIn] = useState('');
    const [amountOut, setAmountOut] = useState('');

    const handleTrade = async () => {
        try {
            const response = await axios.post('/api/trades/execute', { amountIn, amountOut });
            console.log(response.data.message);
        } catch (error) {
            console.error('Error executing trade:', error);
        }
    };

    return (
        <div className="trade">
            <h2>Trade cKES</h2>
            <input
                type="number"
                placeholder="Amount In"
                value={amountIn}
                onChange={(e) => setAmountIn(e.target.value)}
            />
            <button onClick={handleTrade}>Execute Trade</button>
        </div>
    );
};

export default Trade;
