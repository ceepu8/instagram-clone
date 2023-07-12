import NextImage from 'next/image'

const Image = ({ width, height, src, ...props }) => {
  const style = { paddingBottom: `min(800px, ${100 / (width / height)}%)` }

  return (
    <div style={style} className="relative h-full w-full" {...props}>
      <NextImage fill src={src} className="object-cover" />
    </div>
  )
}

export default Image
