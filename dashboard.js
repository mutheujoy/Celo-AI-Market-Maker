import React from 'react';
import Trade from './Trade';
import Rewards from './Rewards';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>CeloAI Market Maker Dashboard</h1>
            <Trade />
            <Rewards />
        </div>
    );
};

export default Dashboard;
