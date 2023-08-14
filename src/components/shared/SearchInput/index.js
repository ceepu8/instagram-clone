import { useCallback, useState } from 'react'

import { Button } from '@/components/base'
import { Input } from '@/components/form'
import { Search, XIcon } from '@/components/icons'
import { cn } from '@/utils'

const EraseInputButton = ({ onClick }) => {
  return (
    <Button
      variant="secondary"
      className={cn('bg-chinese-silver p-px')}
      icon={XIcon}
      iconClassName="w-3 h-3 stroke-1 text-base-reverse"
      onMouseDown={onClick}
    />
  )
}

const SearchInput = ({ onSearch, clearSearch, searchValue }) => {
  const [isFocused, setIsFocused] = useState(false)

  const onBlur = useCallback(() => setIsFocused(false), [])
  const onFocus = useCallback(() => setIsFocused(true), [])

  return (
    <div
      className={cn(
        'flex items-center justify-center space-x-2',
        'rounded-lg bg-search-input px-3 py-2'
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
