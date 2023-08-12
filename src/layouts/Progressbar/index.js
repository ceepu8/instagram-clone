import NextNProgress from 'nextjs-progressbar'

const Progressbar = () => {
  return (
    <NextNProgress
      color="var(--gradient)"
      startPosition={0.3}
      stopDelayMs={200}
      showOnShallow
      height={2}
    />
  )
}

export default Progressbar
