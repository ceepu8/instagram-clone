import { useRouter } from 'next/router'
import { useMemo } from 'react'

export const useChangeLanguage = () => {
  const router = useRouter()

  const currentLocale = useMemo(() => router.locale, [router.locale])

  const onChangeLanguage = (newLocale) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return { onChangeLanguage, currentLocale }
}
