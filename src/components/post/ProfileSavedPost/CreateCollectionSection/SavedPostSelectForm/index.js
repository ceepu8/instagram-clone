import { Save } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Button, LineBreak } from '@/components/base'
import EmptyPost from '@/components/post/EmptyPost'

import MultiSelectImages from '../MultiSelectImages'

const SavedPostSelectForm = ({ onSubmit }) => {
  const [data, setData] = useState([])
  const [selected, setSelected] = useState([])

  const { setValue } = useFormContext()

  const onSelected = (newSelected) => {
    setSelected((prev) => {
      if (prev.includes(newSelected)) {
        return prev.filter((each) => each !== newSelected)
      }
      return Array.from(new Set([...prev, newSelected]))
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValue('posts', selected)
    onSubmit()
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

  const isEmpty = !data || data.length === 0

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
      <div className="h-screen max-h-[calc(100vh-240px)] min-h-[420px] w-full flex-wrap">
        {isEmpty ? (
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
        Done {isEmpty ? '' : `(${selected.length})`}
      </Button>
    </form>
  )
}

export default SavedPostSelectForm
