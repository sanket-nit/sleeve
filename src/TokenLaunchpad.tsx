import { Label } from "@radix-ui/react-label";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";

export default function TokenLaunchPad() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          Solana Token Launchpad
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 items-center w-full">
        <div className="flex flex-col space-y-1.5">
          <Label>Name</Label>
          <Input type="text" placeholder="DoggoCoin" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label>Symbol</Label>
          <Input type="text" placeholder="DG" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label>Image URL</Label>
          <Input type="text" placeholder="Enter Image URL" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label>Initial Supply</Label>
          <Input type="number" placeholder="0" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant={'secondary'}>Create</Button>
      </CardFooter>
    </Card>
  )
}