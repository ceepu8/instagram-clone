import { useCallback, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { useGetUserByName } from '@/apis'
import { Button, LineBreak, Link } from '@/components/base'
import { AnimatedBarSpinnerIcon, XIcon } from '@/components/icons'
import { ProfileAvatar } from '@/components/profile'
import { Routes } from '@/constants'
import { cn } from '@/utils'

import SearchInput from '../../SearchInput'

const SearchItem = (props) => {
  const { username, image } = props || {}

  return (
    <li className="flex w-full cursor-pointer items-center px-6 py-2 transition-[background] hover:bg-nav-hover">
      <Link
        className="flex-1"
        href={Routes.PROFILE.replace('[username]', username)}
        disabled={!username}
      >
        <div className="flex w-full cursor-pointer items-center space-x-4">
          <ProfileAvatar image={image} size={44} />
          <div>
            <h1 className="text-sm font-bold leading-4 text-default">{username}</h1>
            <p className="text-sm leading-4 text-note">description</p>
          </div>
        </div>
      </Link>
      <Button variant="ghost" icon={XIcon} iconClassName="stroke-3 text-note" />
    </li>
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
    <div className="-mx-4 mt-4 flex flex-1 flex-col space-y-3">
      <div className="flex justify-between px-6">
        <h2 className="font-bold">Recent</h2>
        <Button variant="link" size="small">
          Clear all
        </Button>
      </div>
      <div className={cn('flex flex-1 flex-col items-center justify-center')}>
        {isLoading && <AnimatedBarSpinnerIcon size={20} />}
        {!isLoading && data?.users?.length > 0 && (
          <ul className="flex w-full flex-1 flex-col items-center">
            {(data?.users || []).map((user) => (
              <SearchItem key={user.username} {...user} />
            ))}
          </ul>
        )}
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
    <div className="flex h-full flex-col ">
      <SearchPanelHeader onSearch={onSearch} clearSearch={clearSearch} searchValue={searchValue} />
      <SearchList value={value} />
    </div>
  )
}

export default SearchPanel
