import { PlusCircle, PlusIcon } from 'lucide-react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog'
import { cardsContent } from '@/utils/utils'

interface 

export function DialogAddButton() {
  const card = cardsContent

  return (
    <div>
      <Dialog>
        <DialogTrigger className="flex items-center gap-2">
          <Button className="bg-violet-500 hover:bg-violet-600">
            <span className="text-lg">Adicionar</span>
            <span>
              <PlusIcon />
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#1a1a1a]">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

;<Button
  variant="secondary"
  className="px-10 h-10 bg-violet-500 hover:bg-violet-600"
>
  <PlusCircle />
</Button>
