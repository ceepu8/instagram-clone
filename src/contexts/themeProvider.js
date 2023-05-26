import { ThemeProvider as NextThemeProvider } from 'next-themes'

const ThemeProvider = ({ children }) => {
  return (
    <NextThemeProvider attribute="data-theme" enableSystem={false} themes={['light', 'dark']}>
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider
