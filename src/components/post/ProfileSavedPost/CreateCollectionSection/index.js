import isEmpty from 'lodash/isEmpty'
import { ChevronLeft, Plus, Save, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'

import { Button, LineBreak } from '@/components/base'
import Dialog, { DialogClose, DialogContent, DialogTrigger } from '@/components/base/Dialog'
import { Input } from '@/components/form'
import EmptyPost from '@/components/post/EmptyPost'

import MultiSelectImages from './MultiSelectImages'

const CollectionForm = ({ onSubmit }) => {
  const { register, watch, handleSubmit } = useFormContext()

  const watchName = watch('name', false)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
      <div className="w-full px-4 py-4">
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
      <LineBreak className="my-0 w-full bg-divide" />
      <Button fullWidth type="submit" variant="ghost" disabled={!watchName} className="py-3">
        Add
      </Button>
    </form>
  )
}

const SavedPostSelectForm = ({ onSubmit }) => {
  const { handleSubmit } = useFormContext()

  const [data, setData] = useState([])

  const [selected, setSelected] = useState([])

  const onSelected = (newSelected) => {
    setSelected((prev) => {
      const isExisted = prev.includes(newSelected)
      if (isExisted) {
        return prev.filter((each) => each !== newSelected)
      }
      return [...new Set([...prev, newSelected])]
    })
  }

  useEffect(() => {
    setData([
      {
        id: '64f6a8aac7db1c93ab3149fb',
        createdAt: '2023-09-05T04:03:54.315Z',
        owner: {
          id: '64ba42f8d9c09fb4fe407b59',
          username: 'vivi123',
          email: null,
          phoneNumber: '0909876777',
          name: 'Dang Thi Nguyen Hong',
          emailVerified: null,
          image: null,
          hashedPassword: '$2b$12$IZ87C20Q5CprAXqLI9DzAubjw3sIUl9PgOn5US4u7tr/uc7xFBsHa',
          createdAt: '2023-07-21T08:33:59.866Z',
          updatedAt: '2023-07-21T08:33:59.866Z',
          followByViewer: null,
          likedPostIds: [],
          savedPostIds: [],
          taggedPostIds: [],
        },
        caption: 'mini abyssian guinea pig!😍😍',
        images: [
          'http://res.cloudinary.com/dr4xirffu/image/upload/v1693886632/dapvb4hgd8nuvz57xvsw.jpg',
        ],
        videos: [],
        liked: [],
        comment: [],
      },
      {
        id: '64f35a479ea03781d62d6c64',
        createdAt: '2023-09-02T15:52:39.581Z',
        owner: {
          id: '64ba42f8d9c09fb4fe407b59',
          username: 'vivi123',
          email: null,
          phoneNumber: '0909876777',
          name: 'Dang Thi Nguyen Hong',
          emailVerified: null,
          image: null,
          hashedPassword: '$2b$12$IZ87C20Q5CprAXqLI9DzAubjw3sIUl9PgOn5US4u7tr/uc7xFBsHa',
          createdAt: '2023-07-21T08:33:59.866Z',
          updatedAt: '2023-07-21T08:33:59.866Z',
          followByViewer: null,
          likedPostIds: [],
          savedPostIds: [],
          taggedPostIds: [],
        },
        caption: '❤️❤️',
        images: [
          'http://res.cloudinary.com/dr4xirffu/image/upload/v1693669958/ywbunxcjibp47gdgn3m4.png',
        ],
        videos: [],
        liked: [],
        comment: [],
      },
      {
        id: '64f356909ea03781d62d6c48',
        createdAt: '2023-09-02T15:36:48.414Z',
        owner: {
          id: '64ba42f8d9c09fb4fe407b59',
          username: 'vivi123',
          email: null,
          phoneNumber: '0909876777',
          name: 'Dang Thi Nguyen Hong',
          emailVerified: null,
          image: null,
          hashedPassword: '$2b$12$IZ87C20Q5CprAXqLI9DzAubjw3sIUl9PgOn5US4u7tr/uc7xFBsHa',
          createdAt: '2023-07-21T08:33:59.866Z',
          updatedAt: '2023-07-21T08:33:59.866Z',
          followByViewer: null,
          likedPostIds: [],
          savedPostIds: [],
          taggedPostIds: [],
        },
        caption: 'new american babies😍😍🔥🔥',
        images: [
          'http://res.cloudinary.com/dr4xirffu/image/upload/v1693669007/rdmxi3rjcqcogev23hbi.jpg',
        ],
        videos: [],
        liked: [],
        comment: [],
      },
    ])
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
      <div className=" h-screen max-h-[calc(100vh-240px)] min-h-[420px] w-full flex-wrap">
        {!data?.length ? (
          <div className="flex h-full items-center justify-center">
            <EmptyPost
              icon={Save}
              title="Start Saving"
              message="Save photos and videos to your collection."
            />
          </div>
        ) : (
          <MultiSelectImages images={data} selected={selected} onSelected={onSelected} />
        )}
      </div>
      <LineBreak className="my-0 w-full bg-divide" />
      <Button fullWidth type="submit" variant="ghost" className="py-3">
        Done {data?.length > 0 && `(${selected.length})`}
      </Button>
    </form>
  )
}

const CreateCollectionSection = ({ setCollection }) => {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState(1)
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      posts: [],
    },
  })

  const handleFormSubmit = async (value) => {
    setCollection((prev) => [...prev, { ...value }])
    methods.reset()
    setOpen(false)
    setTimeout(() => {
      setView(1)
    }, 1000)
  }

  const VIEW_LIST = {
    1: {
      title: 'New Collection',
      renderComponent: () => <CollectionForm onSubmit={() => setView(2)} />,
    },
    2: {
      title: 'Add from saved',
      renderComponent: () => <SavedPostSelectForm onSubmit={handleFormSubmit} />,
    },
  }

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

            {view !== 1 && (
              <Button
                icon={ChevronLeft}
                variant="ghost"
                className="absolute left-2 top-2"
                onClick={() => setView((prev) => prev - 1)}
              />
            )}

            {VIEW_LIST[view].renderComponent()}
          </DialogContent>
        </Dialog>
      </FormProvider>
    </div>
  )
}

export default CreateCollectionSection
