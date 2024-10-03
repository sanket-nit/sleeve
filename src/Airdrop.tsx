import { Label } from "@radix-ui/react-label";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { ChangeEvent, useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { toast } from "./hooks/use-toast";

export default function Airdrop() {
  const LAMPORTS_PER_SOL = 1000000000;

  const wallet = useWallet();
  const { connection } = useConnection()

  const [sol, setSol] = useState(1)
  const [address, setAddress] = useState<string>('')


  const handleAddressInput = (ev: ChangeEvent<HTMLInputElement>) => {
    const value = ev.target.value ?? '';
    setAddress(value)
  }

  const airdropToUser = async () => {
    if (!wallet.publicKey && !address) {
      toast({
        description: 'Please connect wallet or Input address 😓',
      });
      return;
    }
    try {
      let publicKey = null;
      if (address) {
        try {
          publicKey = new PublicKey(address)
        } catch (error) {
          toast({
            description: 'Please input valid Public Key.'
          })
          console.log(error);
          return;
        }
      } else {
        publicKey = wallet.publicKey
      }
      if (publicKey) {
        await connection.requestAirdrop(publicKey, sol * LAMPORTS_PER_SOL)
        toast({
          description: `Airdropped ${sol} SOL to ${publicKey.toBase58()} 🚀`
        })
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (

    <Card>
      <CardHeader>
        <CardTitle className="text-primary text-xl">Let's Airdrop some SOL!</CardTitle>
        <CardDescription className="text-[.75rem]">You can either airdrop into connected wallet or input address</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Input Address" autoComplete="false" value={address} onChange={handleAddressInput} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="amount">Amount</Label>
              <Input value={sol} onChange={(ev) => setSol(Number(ev.target.value))} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant={'secondary'} onClick={airdropToUser}>Send</Button>
      </CardFooter>
    </Card>
  )
}