import { render, RenderResult } from '@testing-library/react'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { defaultThemeOptions } from 'styles/theme'

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  const darkTheme = createTheme(defaultThemeOptions('dark'))

  return render(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
