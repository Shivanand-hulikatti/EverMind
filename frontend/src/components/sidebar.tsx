import { YoutubeIcon,LucideIcon, CircleEllipsis, Globe, TwitterIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface menu {
    title : String,
    icon : LucideIcon | any
}

const menuItems:menu[] = [
    {
        title:"Youtube",
        icon: <YoutubeIcon />,
    },
    {
        title:"Twiiter",
        icon: <TwitterIcon />,
    },
    {
        title:"Websites",
        icon:<Globe />
    },
    {
        title:"Others",
        icon:<CircleEllipsis />
    }
]



const Sidebar = () => {
    const navigate = useNavigate();

  return (
    <div className="w-[70%] md:w-[15%] h-screen bg-zinc-900 pl-6 pt-3">
        <div onClick={()=>navigate('/dashboard')} 
            className="text-2xl font-semibold cursor-pointer pl-3">
            Mentis
        </div>
        <div className="flex flex-col gap-3 text-lg mt-4">
            {menuItems.map((item,index)=>{
                return (
                    <div key={index} className="flex gap-5 items-center hover:bg-zinc-600 cursor-pointer p-3 rounded-md transition-all w-fit px-3">
                        <div>{item.icon}</div>
                        <div>{item.title}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Sidebar