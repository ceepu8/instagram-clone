import { ThemeProvider as NextThemeProvider } from 'next-themes'

import { DARK_THEME, LIGHT_THEME } from '@/constants'

const ThemeProvider = ({ children }) => {
  return (
    <NextThemeProvider
      attribute="data-theme"
      enableSystem={false}
      themes={[LIGHT_THEME, DARK_THEME]}
    >
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider
