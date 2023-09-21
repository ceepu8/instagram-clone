import React from 'react'

import { Heading } from '@/components/base'

const NoPostYet = ({ icon: Icon, title, message }) => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-default">
        {Icon && <Icon size={42} strokeWidth={1.5} />}
      </div>
      <Heading className="font-extrabold">{title}</Heading>
      <p>{message}</p>
    </div>
  )
}

export default NoPostYet
