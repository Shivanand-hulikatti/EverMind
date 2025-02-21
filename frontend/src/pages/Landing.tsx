import { BackgroundLines } from "@/components/ui/background-lines"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"





const Landing = () => {
  const navigate = useNavigate();

  return (
  <div className="max-w-[70%] h-screen mx-auto">
    <div className="flex h-[4rem] justify-between items-center p-4 mt-4 relative z-10">
      <span onClick={()=>navigate('/')} className="font-medium text-3xl cursor-pointer hover:text-blue-500 transition-all duration-200">Mentis</span>
      <div className="flex space-x-4">
        <Button onClick={()=>navigate("/signin")} variant={"outline"}>Sign In</Button>
        <Button  onClick={()=>navigate("/signup")}>Get Started</Button>
      </div>
    </div>
    <div className="min-h-[calc(100%-5rem)] flex items-center justify-center content-center">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text opacity-85 text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-5 relative z-20 font-bold tracking-tight">
          Collect, Organize <br /> Rediscover.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-500 dark:text-neutral-400 text-center">
          Effortlessly store tweets, YouTube videos, and all the links that matter. 
          Organize your digital world with ease and rediscover valuable content anytime.
        </p>
        <div className="flex space-x-4 mt-4 curosr-pointer relative z-20"
          onClick={()=>navigate("/signup")}
        >
          <Button>Join now</Button>
        </div>
      </BackgroundLines>

    </div>
  </div>  
  )
}

export default Landing