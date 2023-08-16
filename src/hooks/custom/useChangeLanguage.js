import { useTranslation } from 'react-i18next'

export const useChangeLanguage = () => {
  const { i18n } = useTranslation()

  const onChangeLanguage = (value) => {
    i18n.changeLanguage(value)
  }

  return { onChangeLanguage }
}
