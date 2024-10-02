import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider
} from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop';
import ShowBalance from './ShowBalance';
import Header from './components/Header';
export default function App() {
  const endpoint = import.meta.env.VITE_ENDPOINT;
  console.log(endpoint);


  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
      <WalletProvider wallets={[]}>
        <WalletModalProvider>
          <div className='min-h-screen w-screen overflow-hidden py-2 px-2 md:px-12'>
          <Header />
            <Airdrop />
            <ShowBalance />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}