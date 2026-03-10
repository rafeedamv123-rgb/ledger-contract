# Ledger Contract

A simple Ethereum dApp that lets users **deposit ETH** and **check their balance** via a Solidity smart contract and a Web3 frontend (HTML, CSS, JavaScript) using **ethers.js**. Built for learning; runs on **Sepolia testnet**.

---

## Features

- Connect wallet (MetaMask)
- Deposit ETH to the contract
- View balance and contract address
- Dark Web3-style UI with red accents, responsive layout

---

## Tech Stack

| Layer        | Tech |
|-------------|------|
| Smart contract | Solidity |
| Build & deploy | Foundry (forge) |
| Frontend      | HTML, CSS, JavaScript |
| Blockchain    | ethers.js v6 |
| Wallet        | MetaMask |
| Network       | Sepolia Testnet |

---

## Project Structure

- **Frontend** – `index.html`, `style.css`, `script.js` – user interface and wallet/contract interaction
- **Contract** – `ledger.sol` – deposit and balance logic
- **Deploy** – `deploy.s.sol` – deployment script

---

## Contract

- **Address (Sepolia):** `0x6267811fcfaa170006cd3f24ccc4b49ef674a3fa`
- Deployed with Foundry’s `forge` to Sepolia. If the deployed contract is unavailable, run and use the app locally (see below).

---

## Run Locally

1. Clone the repo and open the project folder.
2. Serve the frontend (required for ES modules and MetaMask):
   - Use a local server, e.g. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code, or:
   - `npx serve .` then open the URL shown (e.g. `http://localhost:3000`).
3. Open the app in the browser, connect MetaMask (Sepolia), and use Deposit / Balance / Contract address.

---

## License

For learning use.
