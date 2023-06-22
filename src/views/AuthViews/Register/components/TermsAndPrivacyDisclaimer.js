import Link from 'next/link'

const TermsAndPrivacyDisclaimer = () => {
  return (
    <div className="text-xs leading-4 mt-4">
      By signing up, you agree to our and{' '}
      <Link href="/">
        <span className="text-metallic-blue font-semibold">Terms , Privacy Policy</span>
      </Link>{' '}
      and{' '}
      <Link href="/">
        <span className="text-metallic-blue font-semibold">Cookies Policy.</span>
      </Link>
    </div>
  )
}

export default TermsAndPrivacyDisclaimer
