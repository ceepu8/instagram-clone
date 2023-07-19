import Image from 'next/image'
import { useCallback, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { useGetUserByName } from '@/api'
import { Button, LineBreak } from '@/components/base'
import { AnimatedBarSpinnerIcon, XIcon } from '@/components/icons'
import Assets from '@/constants/Assets'
import { cn } from '@/utils'

import SearchInput from '../../SearchInput'

const SearchItem = (props) => {
  const { username, image } = props || {}

  const onClick = () => {}

  return (
    <div className="flex items-center space-x-4 w-full">
      <Image
        width={40}
        height={40}
        src={image || Assets.COMMON.PLACEHOLDER}
        alt="search-image"
        className="rounded-full"
      />
      <div className="flex-1">
        <h1 className="text-base font-bold text-sm leading-4">{username}</h1>
        <p className="text-note text-sm leading-4">description</p>
      </div>
      <div>
        <Button
          variant="text-secondary"
          icon={XIcon}
          iconClassName="w-6 h-6 stroke-3 text-note"
          onClick={onClick}
        />
      </div>
    </div>
  )
}

const SearchPanelHeader = ({ onSearch, clearSearch, searchValue }) => {
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="font-bold text-2xl px-2 mb-3">Search</h1>
      <SearchInput onSearch={onSearch} clearSearch={clearSearch} searchValue={searchValue} />
      <LineBreak className="-mx-4" />
    </div>
  )
}

const SearchList = ({ value }) => {
  const onClear = () => {}

  const { isLoading, data } = useGetUserByName({
    username: value,
  })

  return (
    <div className="flex-1 flex flex-col mt-4 px-2">
      <div className="flex justify-between">
        <h2 className="font-bold">Recent</h2>
        <Button variant="text-primary" size="small" onClick={onClear}>
          Clear all
        </Button>
      </div>
      <div
        className={cn(
          'flex-1 flex flex-col items-center space-y-4 mt-6',
          !data?.users?.length && 'justify-center'
        )}
      >
        {isLoading && <AnimatedBarSpinnerIcon size={20} />}
        {!isLoading &&
          (data?.users || []).map((user) => <SearchItem key={user.username} {...user} />)}
        {!isLoading && !data?.users?.length && value && (
          <p className="text-comment text-sm font-semibold">No results found</p>
        )}
        {!isLoading && !value && (
          <p className="text-comment text-sm font-semibold">No recent searches</p>
        )}
      </div>
    </div>
  )
}

const SearchPanel = () => {
  const [searchValue, setSearchValue] = useState('')

  const [value] = useDebounce(searchValue, 1000)

  const onSearch = useCallback((e) => {
    setSearchValue(e.target.value)
  }, [])

  const clearSearch = useCallback(() => setSearchValue(''), [])

  return (
    <div className="flex flex-col h-full">
      <SearchPanelHeader onSearch={onSearch} clearSearch={clearSearch} searchValue={searchValue} />
      <SearchList value={value} />
    </div>
  )
}

export default SearchPanel
