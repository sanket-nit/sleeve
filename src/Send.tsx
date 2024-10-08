import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label.tsx";
import { toast } from "./hooks/use-toast.ts";
export default function Send() {
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [signature, setSignature] = useState("");
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  async function sendSolana() {
    if (!publicKey) {
      toast({
        description: "Please connect your wallet!",
        variant: "destructive",
      });
    }
    if (!amount || !address) {
      toast({
        description: "Please Input valid address and amount",
        variant: "destructive",
      });
      return;
    }
    if (publicKey) {
      try {
        const recipient = new PublicKey(address);
        if (!PublicKey.isOnCurve(recipient.toBuffer())) {
          toast({
            description: "Invalid recipient address",
            variant: "destructive",
          });
          return;
        }
        const transaction = new Transaction();
        const sendSolInstruction = SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipient,
          lamports: amount * LAMPORTS_PER_SOL,
        });
        transaction.add(sendSolInstruction);
        const signature = await sendTransaction(transaction, connection);
        toast({
          description: "Transaction complete!",
        });
        setSignature(signature);
        console.log(recipient);
      } catch (error: any) {
        console.log(error);
        toast({
          description: error.message,
          variant: "destructive",
        });
        return;
      }
    }
  }

  return (
    <Card className="grid w-full items-center gap-4">
      <CardHeader>
        <CardTitle className="text-primary text-xl">Let's Send Some SOL</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 w-full">
          <Label>Address</Label>
          <Input type="text" placeholder="Address" value={address} onChange={(ev) => setAddress(ev.target.value)} />
          <Label>Amount</Label>
          <Input type="number" placeholder="Input amount" value={amount} onChange={(ev) => setAmount(Number(ev.target.value))} />
          <Button onClick={sendSolana}>Send</Button>
          {signature && <div className="border">{signature}</div>}
        </div>
      </CardContent>
    </Card>
  );
}
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label.tsx";
import { toast } from "./hooks/use-toast.ts";
export default function Send() {
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [signature, setSignature] = useState("");
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  async function sendSolana() {
    if (!publicKey) {
      toast({
        description: "Please connect your wallet!",
        variant: "destructive",
      });
    }
    if (!amount || !address) {
      toast({
        description: "Please Input valid address and amount",
        variant: "destructive",
      });
      return;
    }
    if (publicKey) {
      try {
        const recipient = new PublicKey(address);
        if (!PublicKey.isOnCurve(recipient.toBuffer())) {
          toast({
            description: "Invalid recipient address",
            variant: "destructive",
          });
          return;
        }
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipient,
          lamports: amount * LAMPORTS_PER_SOL,
        }))
        const signature = await sendTransaction(transaction, connection);
        toast({
          description: "Transaction complete!",
        });
        setSignature(signature);
        console.log(recipient);
      } catch (error: any) {
        console.log(error);
        toast({
          description: error.message,
          variant: "destructive",
        });
        return;
      }
    }
  }

  return (
    <Card className="grid w-full items-center gap-4">
      <CardHeader>
        <CardTitle className="text-primary text-xl">Let's Send Some SOL</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 w-full">
          <Label>Address</Label>
          <Input type="text" placeholder="Address" value={address} onChange={(ev) => setAddress(ev.target.value)} />
          <Label>Amount</Label>
          <Input type="number" placeholder="Input amount" value={amount} onChange={(ev) => setAmount(Number(ev.target.value))} />
          <Button onClick={sendSolana}>Send</Button>
          {signature && <div className="border">{signature}</div>}
        </div>
      </CardContent>
    </Card>
  );
}
