import { Pressable } from '@react-aria/interactions'
import { Check } from 'lucide-react'

import { Image } from '@/components/base'
import { cn } from '@/utils'

const MultiSelectImages = ({ images, selected, onSelected }) => {
  return (
    <ul className="grid grid-cols-3">
      {images?.map((item) => {
        const isSelected = !!selected.find((each) => {
          return each === item.id
        })

        return (
          <li key={item.id}>
            <Pressable onPress={() => onSelected(item.id)}>
              <div className="group relative cursor-pointer">
                <div className="aspect-square w-full">
                  <Image alt="item-image" fill src={item.images[0]} />
                </div>
                <div
                  className={cn(
                    'absolute inset-0 transition-all group-hover:bg-[rgba(255,255,255,0.2)]',
                    isSelected && 'bg-[rgba(255,255,255,0.2)]'
                  )}
                >
                  <Check
                    className={cn(
                      'absolute right-1/2 top-1/2 h-8 w-8 -translate-y-1/2 translate-x-1/2 text-default',
                      'transition-all',
                      !isSelected && 'scale-0'
                    )}
                  />
                </div>
              </div>
            </Pressable>
          </li>
        )
      })}
    </ul>
  )
}

export default MultiSelectImages
