import { Head } from '@/components/head'
import { cardsContent } from '@/utils/utils'

export function Admin() {
  const card = cardsContent

  return (
    <div className="w-full h-screen pr-10">
      <div>
        <Head />
      </div>
      <div className="w-full pt-[60px]">
        <div className="w-full grid grid-cols-3 gap-10 justify-items-center">
          {card.map(item => (
            <a key={item.id} href={item.url} className="cursor-pointer">
              <div className="w-[510px] py-20 border border-zinc-700 rounded-xl">
                <div className="w-full flex flex-col items-center font-bold gap-2">
                  <span>{item.icon}</span>
                  <span className="text-2xl">{item.description}</span>
                </div>
                <div>
                  <p className="text-zinc-400 pt-3 text-center">
                    {item.content}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
