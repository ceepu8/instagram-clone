import { Pressable } from '@react-aria/interactions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { useGetUserByName } from '@/api'
import { Button, LineBreak } from '@/components/base'
import { AnimatedBarSpinnerIcon, XIcon } from '@/components/icons'
import { Routes } from '@/constants'
import Assets from '@/constants/Assets'
import { cn } from '@/utils'

import SearchInput from '../../SearchInput'

const SearchItem = (props) => {
  const { username, image } = props || {}
  const router = useRouter()

  return (
    <div className="flex w-full cursor-pointer items-center">
      <Pressable
        onPress={() => router.push({ pathname: Routes.PROFILE, query: { id: username } })}
        isDisabled={!username}
      >
        <div className="flex w-full cursor-pointer items-center space-x-4">
          <Image
            width={40}
            height={40}
            src={image || Assets.COMMON.PLACEHOLDER}
            alt="search-image"
            className="rounded-full"
          />
          <div className="flex-1">
            <h1 className="text-sm font-bold leading-4 text-base">{username}</h1>
            <p className="text-sm leading-4 text-note">description</p>
          </div>
        </div>
      </Pressable>
      <Button variant="ghost" icon={XIcon} iconClassName="stroke-3 text-note" />
    </div>
  )
}

const SearchPanelHeader = ({ onSearch, clearSearch, searchValue }) => {
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="mb-3 px-2 text-2xl font-bold">Search</h1>
      <SearchInput onSearch={onSearch} clearSearch={clearSearch} searchValue={searchValue} />
      <LineBreak className="-mx-4" />
    </div>
  )
}

const SearchList = ({ value }) => {
  const { isLoading, data } = useGetUserByName({
    username: value,
  })

  return (
    <div className="mt-4 flex flex-1 flex-col px-2">
      <div className="flex justify-between">
        <h2 className="font-bold">Recent</h2>
        <Button variant="link" size="small">
          Clear all
        </Button>
      </div>
      <div
        className={cn(
          'mt-6 flex flex-1 flex-col items-center space-y-4',
          !data?.users?.length && 'justify-center'
        )}
      >
        {isLoading && <AnimatedBarSpinnerIcon size={20} />}
        {!isLoading &&
          (data?.users || []).map((user) => <SearchItem key={user.username} {...user} />)}
        {!isLoading && !data?.users?.length && value && (
          <p className="text-sm font-semibold text-comment">No results found</p>
        )}
        {!isLoading && !value && (
          <p className="text-sm font-semibold text-comment">No recent searches</p>
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
    <div className="flex h-full flex-col">
      <SearchPanelHeader onSearch={onSearch} clearSearch={clearSearch} searchValue={searchValue} />
      <SearchList value={value} />
    </div>
  )
}

export default SearchPanel
