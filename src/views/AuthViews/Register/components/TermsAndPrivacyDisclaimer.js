import Link from 'next/link'

const TermsAndPrivacyDisclaimer = () => {
  return (
    <div className="mt-4 text-xs leading-4">
      By signing up, you agree to our and{' '}
      <Link href="/">
        <span className="font-semibold text-metallic-blue">Terms , Privacy Policy</span>
      </Link>{' '}
      and{' '}
      <Link href="/">
        <span className="font-semibold text-metallic-blue">Cookies Policy.</span>
      </Link>
    </div>
  )
}

export default TermsAndPrivacyDisclaimer
