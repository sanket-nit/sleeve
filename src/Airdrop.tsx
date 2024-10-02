import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

export default function Airdrop() {

  const [sol, setSol] = useState(1)
  const LAMPORTS_PER_SOL = 1000000000;

  const wallet = useWallet();
  const { connection } = useConnection()

  const airdropToUser = async () => {
    console.log(wallet?.publicKey?.toString(), sol, );
    
    if (!wallet.publicKey) {
      alert('Wallet not connected! 😓')
      return
    }
    try {
      await connection.requestAirdrop(wallet.publicKey, sol * LAMPORTS_PER_SOL)
      alert(`Airdropped ${sol} SOL 🚀`)

    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="flex flex-col gap-4 w-fit items-center justify-center">
      <input value={sol} className="border p-2 border-black rounded-md" type="number" onChange={(ev) => setSol(Number(ev.target.value))} />
      <button className="bg-slate-600 rounded-lg text-white py-2 px-4" onClick={airdropToUser}>Send Airdrop</button>
    </div>
  )
}