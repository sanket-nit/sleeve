import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Airdrop from "./Airdrop"
import Sign from "./Sign"
import Send from "./Send"

export default function Home() {
  return (
    <Tabs defaultValue="faucet" className="flex flex-col space-y-4 items-center justify-center">
      <TabsList className="w-[500px]">
        <TabsTrigger className="w-full" value="faucet">Faucet</TabsTrigger>
        <TabsTrigger className="w-full" value="sign">Sign Message</TabsTrigger>
        <TabsTrigger className="w-full" value="send">Send SOL</TabsTrigger>
      </TabsList>
      <TabsContent value="faucet">
        <Airdrop />
      </TabsContent>
      <TabsContent value="sign">
        <Sign />
      </TabsContent>
      <TabsContent value="send">
        <Send />
      </TabsContent>
    </Tabs>
  )
}