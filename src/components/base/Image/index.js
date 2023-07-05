import NextImage from 'next/image'

const Image = ({ width, height, src, ...props }) => {
  const style = { paddingBottom: `min(350px, ${100 / (width / height)}%)` }

  return (
    <div style={style} className="relative">
      <NextImage fill src={src} className="object-cover" {...props} />
    </div>
  )
}

export default Image
