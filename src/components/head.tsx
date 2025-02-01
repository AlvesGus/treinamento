import { sidebarMenu } from '@/utils/utils'
import { Search } from 'lucide-react'

export function Head() {
  const card = sidebarMenu
  const urlPath = window.location.pathname


  return (
    <div className="flex items-center justify-between pt-10">
      <div>
        {card.map(item => {
          if (urlPath === item.redirect) {
            return (
              <div key={item.id}>
                <p className="text-4xl">{item.description}</p>
              </div>
            )
          }
        })}
      </div>
      <div className="w-[350px] flex items-center gap-3 px-3 bg-[#585858] h-10 rounded-full mr-10">
        <input
          className="bg-transparent w-full outline-none pl-4"
          placeholder="Pesquisar..."
        />
        <span className="">
          <Search />
        </span>
      </div>
    </div>
  )
}
