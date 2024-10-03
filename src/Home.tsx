import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Airdrop from "./Airdrop"
import Sign from "./Sign"
import Send from "./Send"
import TokenLaunchPad from "./TokenLaunchpad"

export default function Home() {
  return (
    <Tabs defaultValue="faucet" className="flex w-11/12 md:w-9/12 lg:w-6/12 flex-col space-y-4 items-center">
      <TabsList className="w-full flex flex-col md:flex-row">
        <TabsTrigger className="w-full" value="faucet">Faucet</TabsTrigger>
        <TabsTrigger className="w-full" value="sign">Sign Message</TabsTrigger>
        <TabsTrigger className="w-full" value="send">Send SOL</TabsTrigger>
        <TabsTrigger className="w-full" value="token-launchpad">Token Launchpad</TabsTrigger>
      </TabsList>
      <div className="w-full md:w-[90%] lg:w-[80%]">
        <TabsContent value="faucet">
          <Airdrop />
        </TabsContent>
        <TabsContent value="sign">
          <Sign />
        </TabsContent>
        <TabsContent value="send">
          <Send />
        </TabsContent>
        <TabsContent value="token-launchpad">
          <TokenLaunchPad />
        </TabsContent>
      </div >
    </Tabs>
  )
}