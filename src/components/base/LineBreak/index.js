import React from 'react'
import { twMerge } from 'tailwind-merge'

const LineBreak = ({ className }) => {
  return <div className={twMerge('bg-divide h-[1px] w-auto -mx-2 my-2', className)} />
}

export default LineBreak
