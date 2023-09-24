import React from 'react'

import { Heading } from '@/components/base'

const EmptyPost = ({ icon: Icon, title, message }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center md:gap-y-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-default">
        {Icon && <Icon size={42} strokeWidth={1.5} />}
      </div>
      <Heading className="text-xl font-extrabold md:text-2xl">{title}</Heading>
      <p className="text-center">{message}</p>
    </div>
  )
}

export default EmptyPost
