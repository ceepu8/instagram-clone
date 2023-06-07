import { DARK_THEME, LIGHT_THEME } from '@/constants'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

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
