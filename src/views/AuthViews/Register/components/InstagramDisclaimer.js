import Link from 'next/link'

const InstagramDisclaimer = () => {
  return (
    <div className="text-xs leading-4">
      <span>
        People who use our service may have uploaded your contact information to Instagram.{' '}
      </span>
      <Link href="/">
        <span className="font-semibold text-metallic-blue">Learn More</span>
      </Link>
    </div>
  )
}

export default InstagramDisclaimer
