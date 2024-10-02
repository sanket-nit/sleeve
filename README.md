## Sleeve - Solana DApp

This is a multifunctional DApp which leverages the features provided by Solana.

* **Wallet Connection:** Easily integrate with various Solana wallets like Phantom and Solflare using the Solana Wallet Adapter.
* **Airdrop:**  A simple airdrop feature that allows users to receive test SOL on the Devnet.

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sanket-nit/sleeve.git
   ```

2. **Install dependencies:**

   ```bash
   pnpm install 
   ```

3. **Start the development server:**

   ```bash
   pnpm dev
   ```

4. **Access the app:** Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Configuration

* **Devnet Endpoint:**  Update the `VITE_ENDPOINT` in `.env` to your preferred Solana Devnet API endpoint.
* **Wallet Adapters:** In `src/App.tsx`, add the wallet adapters you want to use to the `wallets` array in the `WalletProvider`.
* **Theme:** You can customize the default theme and storage key in `src/components/theme-provider.tsx`.

### Running Tests

This starter kit does not currently include any tests. You can add tests using your preferred framework.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.


