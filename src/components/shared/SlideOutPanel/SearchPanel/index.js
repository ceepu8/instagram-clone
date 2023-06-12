import Image from 'next/image'

import { Button, LineBreak } from '@/components/base'
import { X } from '@/components/icons'

import SearchInput from '../../SearchInput'

const SearchItem = () => {
  const onClick = () => {}
  return (
    <div className="flex items-center space-x-4">
      <Image
        width={40}
        height={40}
        src="/profile.jpeg"
        alt="search-image"
        className="rounded-full"
      />
      <div className="flex-1">
        <h1 className="text-base font-bold text-sm leading-4">mirea_03</h1>
        <p className="text-note text-sm leading-4">hi, me!</p>
      </div>
      <div>
        <Button
          variant="text-secondary"
          icon={X}
          iconClassName="w-6 h-6 stroke-3 text-note"
          onClick={onClick}
        />
      </div>
    </div>
  )
}

const SearchPanel = () => {
  return (
    <>
      <div className="flex flex-col space-y-6">
        <h1 className="font-bold text-2xl px-2 mb-3">Search</h1>
        <SearchInput />
        <LineBreak className="-mx-4" />
      </div>
      <div className="mt-4 px-2">
        <h2 className="font-bold">Recent</h2>
        <div className="flex flex-col space-y-4 mt-6">
          <SearchItem />
        </div>
      </div>
    </>
  )
}

export default SearchPanel
