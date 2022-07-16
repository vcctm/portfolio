export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

import React from 'react'

import { addDecorator } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'
import {
  ThemeProvider as MUIThemeProvider,
  createTheme
} from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'

import {defaultThemeOptions} from '../src/styles/theme'
import { useDarkMode } from 'storybook-dark-mode';
import { RecoilRoot } from 'recoil'


function ThemeWrapper({children}) {
  const actualTheme = createTheme(useDarkMode() ? defaultThemeOptions('dark') : defaultThemeOptions('light'))
  return (
    <MUIThemeProvider theme={actualTheme}>
    <ThemeProvider theme={actualTheme}>{children}</ThemeProvider>
  </MUIThemeProvider>
  );
}


addDecorator((story) => (
  <RecoilRoot>
    <ThemeWrapper>
      {story()}
    </ThemeWrapper>
  </RecoilRoot>
))
addDecorator(withRouter)
