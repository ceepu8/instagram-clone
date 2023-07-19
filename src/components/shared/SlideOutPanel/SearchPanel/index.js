import Image from 'next/image'
import { useCallback, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { useGetUserByName } from '@/api'
import { Button, LineBreak } from '@/components/base'
import { AnimatedBarSpinnerIcon, XIcon } from '@/components/icons'
import Assets from '@/constants/Assets'

import SearchInput from '../../SearchInput'

const SearchItem = (props) => {
  const { name, username, image } = props || {}

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

const SearchList = ({ userList, isLoading = false }) => {
  const onClear = () => {}

  return (
    <div className="mt-4 px-2">
      <div className="flex justify-between">
        <h2 className="font-bold">Recent</h2>
        <Button variant="text-primary" size="small" onClick={onClear}>
          Clear all
        </Button>
      </div>
      <div className="flex flex-col items-center space-y-4 mt-6">
        {isLoading && <AnimatedBarSpinnerIcon size={20} />}
        {!isLoading && (userList || []).map((user) => <SearchItem key={user.username} {...user} />)}
      </div>
    </div>
  )
}

const SearchPanel = () => {
  const [searchValue, setSearchValue] = useState('')

  const [value] = useDebounce(searchValue, 1000)

  const { isLoading, data } = useGetUserByName({
    username: value,
  })
  console.log(data)

  const onSearch = useCallback((e) => {
    setSearchValue(e.target.value)
  }, [])

  const clearSearch = useCallback(() => setSearchValue(''), [])

  return (
    <div>
      <SearchPanelHeader onSearch={onSearch} clearSearch={clearSearch} searchValue={searchValue} />
      <SearchList isLoading={isLoading} userList={data?.data} />
    </div>
  )
}

export default SearchPanel
