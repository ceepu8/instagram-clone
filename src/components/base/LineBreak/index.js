import { twMerge } from 'tailwind-merge'

const LineBreak = ({ className }) => {
  return <div className={twMerge('my-2 h-[1px] w-auto bg-divide', className)} />
}

export default LineBreak
