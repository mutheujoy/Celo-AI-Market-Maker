# CeloAI Market Maker (CAMM)

## Overview

**CeloAI Market Maker (CAMM)** is an innovative automated market maker (AMM) designed to enhance liquidity, improve trading efficiency, and drive financial inclusion using the Celo Kenya Shilling (cKES). Leveraging advanced artificial intelligence (AI) algorithms, CAMM creates a user-friendly and engaging trading platform that rewards participants and fosters the adoption of cKES in everyday transactions.

## Problem Statement

Kenya faces several unique challenges in its digital economy, including:

1. **Limited Access to Financial Services**: Many individuals lack access to traditional banking and financial services, hindering their ability to participate in the digital economy.
2. **Low Liquidity in Digital Markets**: Limited trading opportunities and low liquidity can result in high transaction costs and slippage, discouraging users from engaging in trading activities.
3. **Financial Literacy Gaps**: A significant portion of the population lacks the knowledge and resources needed to effectively navigate digital trading platforms.
4. **Need for Trustworthy Solutions**: Concerns about security and the integrity of digital financial systems can deter users from adopting new technologies.

**CAMM** addresses these challenges by providing a robust platform that promotes financial inclusion and cKES adoption, ensuring that all users can benefit from participating in the digital economy.

## Project Goals

1. **Enhance Liquidity**: Ensure a stable and liquid market for cKES, allowing for efficient trade execution and reducing costs associated with slippage.
2. **Increase Trading Efficiency**: Use AI-driven insights to optimize trading strategies and provide users with real-time market analytics.
3. **Promote Financial Inclusion**: Create an accessible platform that empowers users to engage with cKES easily and confidently, bridging the gap to financial services.

## Key Features

### 1. AI-Powered Trading Algorithms
- CAMM utilizes machine learning algorithms to analyze market trends, execute trades automatically, and manage liquidity efficiently, ensuring that users can trade seamlessly.

### 2. Predictive Analytics
- Users receive real-time insights and forecasts on market movements, enabling them to make informed trading decisions and react promptly to market changes.

### 3. Rewards System
- Participants earn cKES coins as rewards for providing liquidity and engaging in trading, incentivizing community participation and fostering loyalty.

### 4. User-Friendly Interface
- The platform features an intuitive design, allowing users of all backgrounds to navigate the trading environment easily and access essential information.

### 5. Educational Resources
- CAMM offers gamified learning tools and tutorials that enhance users' financial literacy, helping them understand trading strategies, market risks, and the benefits of using cKES.

### 6. Community Feedback Mechanisms
- Tools for gathering user feedback ensure that the platform evolves based on community needs, fostering trust and engagement.

## Addressing Kenya's Unique Challenges

**CeloAI Market Maker (CAMM)** specifically tackles the unique challenges faced in Kenya by:

- **Increasing Accessibility**: By creating a platform that operates on cKES, CAMM enables users to easily convert between cKES and local currency, facilitating daily transactions.
- **Enhancing Trust**: Leveraging the secure and transparent nature of blockchain technology, CAMM builds user confidence in digital transactions.
- **Promoting Financial Literacy**: Through educational initiatives, CAMM empowers users with knowledge about digital finance, ensuring they feel competent in using cKES for everyday transactions.
- **Creating a Vibrant Ecosystem**: By engaging local merchants and businesses, CAMM promotes the acceptance of cKES in everyday transactions, driving its use as a viable currency in the Kenyan economy.

## Technology Stack

- **Blockchain**: Celo
- **Smart Contracts**: Solidity
- **AI/ML Frameworks**: TensorFlow, Scikit-learn
- **Frontend**: React, Web3.js
- **Backend**: Node.js, Express

### Instructions for Setup and Running


### 1. Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** (Node Package Manager)
- **Python** (v3.8 or higher)
- **Ganache** or **Truffle** (for local blockchain testing)
- **MetaMask** (browser extension for connecting to the Celo network)
- **MongoDB** (for backend data storage)

### 2. Clone the Repository

First, clone the repository from GitHub and navigate into the project directory:

```bash
git clone https://github.com/yourusername/celoai-market-maker.git
cd celoai-market-maker
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
# .env file content
MONGODB_URI=your_mongodb_connection_string
PORT=5000
CELO_RPC_URL=https://alfajores-forno.celo-testnet.org  # Celo testnet RPC URL
PRIVATE_KEY=your_private_key  # Private key for deploying contracts (use only for testing)
```

Replace `your_mongodb_connection_string` and `your_private_key` with values for your environment.

### 4. Install Dependencies

Navigate to the backend and frontend folders separately to install the required dependencies:

- **Backend Setup:**

   ```bash
   cd server
   npm install
   ```

- **Frontend Setup:**

   ```bash
   cd client
   npm install
   ```

- **AI Model Setup:**

   ```bash
   cd ai
   pip install -r requirements.txt
   ```

### 5. Deploy Smart Contracts

Use a local blockchain environment like Ganache or a Celo testnet. Compile and deploy the smart contracts using Hardhat:

```bash
cd contracts
npx hardhat compile
npx hardhat run scripts/deploy.js --network celoTestnet
```

This will deploy the contracts to the specified network and output the contract addresses. Update the frontend and backend configuration files with these addresses.

### 6. Run the Backend Server

Start the backend server that handles API requests and interacts with the smart contracts:

```bash
cd server
npm start
```

The backend will run on the port specified in the `.env` file (default is `5000`).

### 7. Run the Frontend Client

Start the frontend React app, which serves as the user interface for trading and reward management:

```bash
cd client
npm start
```

This will start the application on `http://localhost:3000`.

### 8. Train the AI Model

If you want to train or retrain the AI model, use the following command:

```bash
cd ai
python train.py
```

This will train the model on the provided dataset (`market_data.csv`) and save the trained model as `camm_model.pkl`.

### 9. Testing the Application

1. **Trading on CAMM**: Use the trading interface to execute trades and see real-time updates on liquidity and price adjustments.
   
2. **Earning Rewards**: Monitor the rewards section to see cKES rewards accrued from trading activities.

3. **AI Insights**: The AI model provides predictive analytics to assist users in making informed trading decisions.

### 10. Connecting to MetaMask

To interact with the smart contracts on the Celo network, configure MetaMask to connect to the Celo testnet:

1. Open MetaMask and add a new network with the following details:
   - **Network Name**: Celo Testnet
   - **New RPC URL**: `https://alfajores-forno.celo-testnet.org`
   - **Chain ID**: 44787
   - **Currency Symbol**: cUSD
2. Save and switch to the Celo Testnet network.

### 11. Live Testing

For live testing, connect your browser to `http://localhost:3000`. Ensure MetaMask is set to the Celo network and that you have some test cKES tokens in your wallet to execute trades.

### Troubleshooting

- **Connection Issues**: Ensure that all URLs and private keys in your `.env` file are correct.
- **Contract Deployment Errors**: Check the Hardhat configuration and ensure the network is correctly set up.
- **AI Model Errors**: Verify that Python dependencies are correctly installed and the dataset is properly formatted.






