import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom";

const Form = ({...props}) => {
    const navigate = useNavigate();
  return (
    <div className="w-full mx-auto border border-zinc-800 p-6 rounded-md space-y-4">
        <div className="">
            <div className="text-2xl font-bold">
                {props.title}
            </div>
            <div className="text-gray-400 text-sm mt-2">
                {props.description}
            </div>
        </div>
        <div className="space-y-4">
            {props.name as boolean? <div className="">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Mahesh Dalle" type="text" className="mt-1"/>
            </div>: null}
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="batman@gmail.com" type="email" className="mt-1"/>
            </div>
            {props.link && <div>
                <div className="flex justify-between">
                    <Label htmlFor="password">Password</Label>
                    {(props.title==='Login')?
                        <span onClick={()=>navigate('/reset-password')}
                        className="hover:underline underline-offset-4 cursor-pointer">
                            Forgot password?
                        </span>
                    :null}
                </div>
                <Input id="password" placeholder="meowmeow" type="password" className="mt-1"/>
            </div>  }
            <div>
                <Button className="w-full">{props.button}</Button>
            </div>
            <div>
                {props.link && <div className="text-center text-sm text-gray-400">
                    {(props.title === 'Register')?`Already`:`Don't`} have an account? <a onClick={()=>navigate(props.link)} className="underline underline-offset-4 cursor-pointer">Sign in</a>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default Form