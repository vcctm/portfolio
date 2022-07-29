import { useRecoilValue } from 'recoil'
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider
} from '@mui/material'
import { themeAtom } from 'store/themeAtom'
import { ReactElement, useMemo } from 'react'
import { defaultThemeOptions } from 'styles/theme'

interface Props {
  children: React.ReactNode
}

function AppThemeProvider({ children }: Props): ReactElement {
  const mode = useRecoilValue(themeAtom)
  const theme = useMemo(
    () => createTheme(defaultThemeOptions(mode as PaletteMode)),
    [mode]
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default AppThemeProvider
