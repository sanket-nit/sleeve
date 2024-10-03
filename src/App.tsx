import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider
} from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Header from './components/Header';
import Home from './Home';
import { ThemeProvider } from './components/theme-provider';
import { Toaster } from './components/ui/toaster';
export default function App() {
  const endpoint = import.meta.env.VITE_ENDPOINT;
  console.log(endpoint);


  return (
    <ThemeProvider>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]}>
          <WalletModalProvider>
            <Header />
            <div className='min-h-screen w-screen overflow-hidden py-2 px-2 md:px-12 flex justify-center'>
              <Home />
              <Toaster />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  )
}