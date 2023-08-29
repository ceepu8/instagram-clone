import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import { Button, LineBreak } from '@/components/base'
import Dialog, { DialogClose, DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { Input } from '@/components/form'
import { Plus, XIcon } from '@/components/icons'

const StoryNameForm = ({ handleAddStoryHighlight }) => {
  return (
    <form className="flex flex-col items-center justify-center space-y-4 py-4">
      <div className="w-full px-4">
        <Input
          wrapperClassName="bg-story-item-bg p-2 w-full rounded-md border-story-line border-[0.5px]"
          inputClassName="text-sm placeholder-story-line leading-[14px]"
          placeholder="Highlight Name"
        />
      </div>
      <LineBreak className="w-full" />
      <Button variant="ghost">Add</Button>
    </form>
  )
}

const ProfileStoryAddButton = ({ handleAddStoryHighlight }) => {
  const [open, setOpen] = useState(false)

  const trigger = (
    <div className="flex w-[72.5px] shrink-0 cursor-pointer  flex-col items-center justify-center space-y-1 overflow-auto py-1 md:w-[115px]">
      <div className="h-14 w-14 rounded-full border-[0.5px] border-story-line p-0.5 md:h-[79px] md:w-[79px]">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-story-item-bg">
          <Plus size={44} className="text-story-line" />
        </div>
      </div>
      <p className="text-center text-xs font-bold">New</p>
    </div>
  )

  return (
    <Dialog isOpen={open} onClose={setOpen} trigger={<DialogTrigger>{trigger}</DialogTrigger>}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-100"
        enterFrom="opacity-0 scale-110"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-110"
      >
        <DialogContent className="min-w-[300px] max-w-[400px]" title="New Highlight">
          <DialogClose className="absolute right-2 top-2">
            <Button variant="ghost" icon={XIcon} />
          </DialogClose>
          <StoryNameForm handleAddStoryHighlight={handleAddStoryHighlight} />
        </DialogContent>
      </Transition.Child>
    </Dialog>
  )
}

export default ProfileStoryAddButton
