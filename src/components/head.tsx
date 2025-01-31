import { Search } from 'lucide-react'

export function Head() {
  return (
    <div className="w-full flex items-center justify-between pt-10">
      <div>
        <span className="text-3xl">Seja bem vindo DashShop</span>
      </div>
      <div className="w-[350px] flex items-center gap-3 px-3 bg-[#585858] h-10 rounded-full">
        <input className="bg-transparent w-full outline-none pl-4" />
        <span className="">
          <Search />
        </span>
      </div>
    </div>
  )
}
