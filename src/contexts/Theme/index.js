import { ThemeProvider as NextThemeProvider } from 'next-themes'

import { DARK_THEME, LIGHT_THEME } from '@/constants'

const ThemeProvider = ({ children }) => {
  return (
    <NextThemeProvider
      themes={[LIGHT_THEME, DARK_THEME]}
      attribute="data-theme"
      enableSystem={false}
    >
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider
