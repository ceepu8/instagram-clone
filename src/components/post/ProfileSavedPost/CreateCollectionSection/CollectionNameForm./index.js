import isEmpty from 'lodash/isEmpty'
import { useFormContext } from 'react-hook-form'

import { Button, LineBreak } from '@/components/base'
import { Input } from '@/components/form'

const CollectionNameForm = ({ onSubmit }) => {
  const { register, watch } = useFormContext()

  const watchName = watch('name', false)

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center justify-center">
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

export default CollectionNameForm
