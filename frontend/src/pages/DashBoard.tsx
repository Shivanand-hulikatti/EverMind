import { Button } from "@/components/ui/button";


export function DashBoard() {
  return (
    <div className="h-screen w-full">
      <div className="flex justify-between mt-3 px-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="../../logo.svg" alt="Mentis logo" className="h-9" />
          <span className="text-3xl font-bold">Mentis</span>
        </div>
        <div>
          Search
        </div>
        <div>
          <Button variant={"outline"}>Share</Button>
          <Button>Create New</Button>
        </div>
      </div>
    </div>
  )
}
