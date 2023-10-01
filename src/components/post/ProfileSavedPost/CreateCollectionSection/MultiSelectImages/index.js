import { Pressable } from '@react-aria/interactions'
import { Check } from 'lucide-react'

import { Image } from '@/components/base'
import { cn } from '@/utils'

const ImageOption = ({ item, onSelected, isSelected }) => {
  const handlePress = () => {
    if (item?.id) {
      onSelected(item.id)
    }
  }

  const imageUrl = item?.images?.[0] || ''

  const overlayClassName = cn(
    'absolute inset-0 transition-all group-hover:bg-[rgba(255,255,255,0.2)]',
    'flex items-center justify-center',
    isSelected && 'bg-[rgba(255,255,255,0.2)]'
  )

  const checkClassName = cn('h-8 w-8 text-default transition-all', !isSelected && 'scale-0')

  return (
    <Pressable onPress={handlePress}>
      <div className="group relative cursor-pointer">
        <div className="aspect-square w-full">
          {imageUrl && <Image fill src={imageUrl} alt="item-image" />}
        </div>
        <div className={overlayClassName}>
          <Check className={checkClassName} />
        </div>
      </div>
    </Pressable>
  )
}

const MultiSelectImages = ({ images, selected, onSelected }) => {
  const renderItem = (item) => {
    const isSelected = selected.includes(item?.id)
    return (
      <li key={item?.id}>
        <ImageOption item={item} onSelected={onSelected} isSelected={isSelected} />
      </li>
    )
  }
  return <ul className="grid grid-cols-3">{(images || []).map(renderItem)}</ul>
}

export default MultiSelectImages
