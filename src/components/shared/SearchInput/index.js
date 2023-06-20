import { useCallback, useDeferredValue, useState } from 'react'

import { Button } from '@/components/base'
import { Input } from '@/components/form'
import { X, Search } from '@/components/icons'
import { cn } from '@/utils'

const EraseInputButton = ({ onClick }) => {
  return (
    <Button
      variant="secondary"
      rootClassName={cn('bg-chinese-silver p-px')}
      icon={X}
      iconClassName="w-3 h-3 stroke-1 text-base-reverse"
      onMouseDown={onClick}
    />
  )
}

const SearchInput = ({ width = 365 }) => {
  const [searchValue, setSearchValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const deferredSearch = useDeferredValue(searchValue)

  const onSearch = useCallback((e) => setSearchValue(e.target.value), [])
  const clearSearch = useCallback(() => setSearchValue(''), [])
  const onBlur = useCallback(() => setIsFocused(false), [])
  const onFocus = useCallback(() => setIsFocused(true), [])

  return (
    <div
      className={cn(
        'flex items-center justify-center space-x-2',
        'bg-search-input px-3 py-2 rounded-lg',
        `min-w-[${width}px]`
      )}
    >
      {!isFocused && <Search width={17} height={17} strokeWidth={1} />}
      <Input
        value={searchValue}
        onChange={onSearch}
        placeholder="Search"
        wrapperClassName="flex-1"
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {isFocused && <EraseInputButton onClick={clearSearch} />}
    </div>
  )
}

export default SearchInput