import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ModeToggle } from "./mode-toggle";

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
    <nav className="w-full sticky bg-background top-0 min-h-12 mb-4 text-white flex items-center justify-between px-4 py-1 border-b border-gray-800">
      <Logo />
      <div className="grid grid-flow-col items-center gap-4">
        {
          wallet.connected ?
            (
              <div className="flex items-center gap-2">
                <div>
                  <span className="font-extrabold">Balance:</span> <span>{userBalance} SOL</span>
                </div>
                <WalletDisconnectButton />
              </div>
            ) : <WalletMultiButton />
        }
        <div>
          <ModeToggle />
        </div>
      </div>

    </nav>
  )
}