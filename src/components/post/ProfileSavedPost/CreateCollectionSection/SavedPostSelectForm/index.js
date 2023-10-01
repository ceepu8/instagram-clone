import { Save } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Button, LineBreak } from '@/components/base'
import EmptyPost from '@/components/post/EmptyPost'
import savedPosts from '@/services/saved-post.json'
import { COLLECTION_FORM } from '@/validates/collection.schema'

import MultiSelectImages from '../MultiSelectImages'

const SavedPostSelectForm = ({ onSubmit }) => {
  const [data, setData] = useState([])
  const [selected, setSelected] = useState([])

  const { setValue } = useFormContext()

  const onSelected = (newSelected) => {
    setSelected((prev) => {
      if (prev?.includes(newSelected)) {
        return (prev || []).filter((each) => each !== newSelected)
      }
      return Array.from(new Set([...prev, newSelected]))
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValue(COLLECTION_FORM.POSTS, selected)
    onSubmit()
  }

  useEffect(() => {
    setData(savedPosts)
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
