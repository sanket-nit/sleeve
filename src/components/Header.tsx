import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export default function Header() {

  const wallet = useWallet();
  const { connection } = useConnection();

  const [userBalance, setUserBalance] = useState(0);

  async function getUserBalance() {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey)
      setUserBalance(balance / LAMPORTS_PER_SOL);
    }
  }

  useEffect(() => {
    if (wallet.connected) {
      getUserBalance();
    }
  }, [wallet.connected])

  return (
    <nav className="w-full top-0 rounded-lg min-h-12 mb-4 text-white flex items-center justify-between px-4 py-2 border border-gray-800">
      <div className="logo">
        Tower
      </div>

      <div className="grid grid-flow-col items-center gap-4">

        <div>
          <span>Balance:</span> <span>{userBalance} SOL</span>
        </div>

        {
          wallet.connected ? <WalletDisconnectButton/> : <WalletMultiButton />
        }
      </div>

    </nav>
  )
}