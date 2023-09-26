import isEmpty from 'lodash/isEmpty'
import { Plus, XIcon } from 'lucide-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'

import { Button, LineBreak } from '@/components/base'
import Dialog, { DialogClose, DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { Input } from '@/components/form'
import { useIsMe } from '@/hooks/custom'
import { cn } from '@/utils'

import s from './styles.module.css'

const CreateCollectionSection = () => {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState(1)
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      posts: [],
    },
  })

  const VIEW_LIST = {
    1: {
      title: 'New Collection',
      component: (
        <CollectionForm
          onSubmit={(value) => {
            setView(2)
          }}
        />
      ),
    },
    2: {
      title: 'Add from saved',
    },
  }

  const handleFormSubmit = (value) => {}

  return (
    <div className="flex w-full items-center justify-between">
      <p className="text-xs text-comment">Only you can see what you&apos;ve saved</p>
      <FormProvider {...methods}>
        <Dialog
          isOpen={open}
          onClose={setOpen}
          trigger={
            <DialogTrigger className="focus-visible:outline-none">
              <Button type="trigger" variant="link" className="shrink-0">
                <Plus size={12} />
                New Collection
              </Button>
            </DialogTrigger>
          }
        >
          <DialogContent size="small" className="max-w-[400px]" title={VIEW_LIST[view].title}>
            <DialogClose className="absolute right-2 top-2 focus-visible:outline-none">
              <XIcon className="hover:text-btn-ghost-hover" />
            </DialogClose>
            {view === 1 && (
              <CollectionForm
                onSubmit={(value) => {
                  setView(2)
                }}
              />
            )}
            {view === 2 && <SavedPostSelectForm onSubmit={handleFormSubmit} />}
          </DialogContent>
        </Dialog>
      </FormProvider>
    </div>
  )
}

const CollectionForm = ({ onSubmit }) => {
  const { register, watch, handleSubmit } = useFormContext()

  const watchName = watch('name', false)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center space-y-4 py-4"
    >
      <div className="w-full px-4">
        <Input
          name="name"
          id="name"
          isHaveValue={!isEmpty(watchName)}
          wrapperClassName="bg-secondary-bg w-full rounded-md border-story-line border-[0.5px]"
          inputClassName="text-sm p-2 placeholder-story-line leading-[14px]"
          placeholder="Collection Name"
          {...register('name', { required: true })}
        />
      </div>
      <LineBreak className="w-full bg-divide" />
      <Button fullWidth type="submit" variant="ghost" disabled={!watchName}>
        Add
      </Button>
    </form>
  )
}

const SavedPostSelectForm = ({ onSubmit }) => {
  const { register, watch, handleSubmit } = useFormContext()

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center space-y-4 py-4"
    >
      <div className="h-screen max-h-[calc(100vh-240px)] min-h-[420px] w-full px-4">123</div>
      <LineBreak className="w-full bg-divide" />
      <Button fullWidth type="submit" variant="ghost">
        Add
      </Button>
    </form>
  )
}

const CollectionItem = ({ name }) => {
  return (
    <div
      className={cn(
        s['collection-item-bg'],
        'h-[300px] w-[300px]',
        'rounded-md border border-divide',
        'cursor-pointer',
        'flex justify-items-end'
      )}
    >
      <span className="mt-auto pb-4 pl-4 text-xl font-medium text-white">{name}</span>
    </div>
  )
}

const ProfileSavedPost = () => {
  const router = useRouter()
  const isMe = useIsMe(router.query?.username)

  const data = []

  return (
    <div className="flex flex-1 flex-col items-center gap-y-4">
      {isMe && <CreateCollectionSection />}
      <div className="flex max-w-[300px] flex-wrap gap-4 md:max-w-[616px] min-[1280px]:max-w-full">
        <CollectionItem name="All Posts" />
        <CollectionItem name="123" />
        <CollectionItem name="123" />
        <CollectionItem name="123" />
      </div>
    </div>
  )
}

export default ProfileSavedPost
