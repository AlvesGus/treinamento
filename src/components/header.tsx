import { sidebarMenu } from '@/utils/utils'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { LogOut } from 'lucide-react'

export function Header() {
  const urlPath = window.location.pathname
  const sidebar = sidebarMenu

  return (
    <>
      <aside className="w-[250px] h-screen rounded-r-lg bg-[#161616] flex flex-col items-center justify-between pt-10 border-r-[1px] border-r-zinc-800">
        <div>
          <h1 className="text-3xl font-bold">
            <a href="/">
              Dash<span className="text-indigo-500">Shop</span>
            </a>
          </h1>
        </div>
        <Separator className="bg-zinc-800 mt-5" />

        <div className="flex-1 pt-10 space-y-8 flex flex-col w-full px-3">
          {sidebar.map(item => (
            <div>
              <ul>
                <li>
                  <a href={item.redirect}>
                    <div
                      className={`${
                        item.redirect === urlPath
                          ? 'text-slate-50 bg-indigo-500 rounded-lg transition-colors duration-75 ease-in'
                          : 'text-slate-400'
                      } flex gap-2 items-center pl-5 h-10 `}
                    >
                      <span>{item.icon}</span>
                      <span>{item.description}</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <Separator className="bg-zinc-800" />
        <div className="py-3 w-full flex items-center justify-center">
          <Button className="px-20 font-bold text-md" variant="destructive">
            <span>
              <LogOut />
            </span>
            Sair
          </Button>
        </div>
      </aside>
    </>
  )
}
