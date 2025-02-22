import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";


export default function NewPassword() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="w-full mx-auto border border-zinc-800 p-6 rounded-md space-y-4">
            <div className="text-2xl font-bold">
                Reset Your Password
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="password">New Password</Label>
                    <Input id="password" placeholder="meowmeow" type="password" className="mt-1"/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Confirm Password</Label>
                    <Input id="password1" placeholder="meowmeow" type="password" className="mt-1"/>
                </div>
                <Button className="w-full">Continue</Button>
            </div>
        </div>
      </div>
    </div>
  )
}