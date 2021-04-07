import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core'
import AuthProvider from './contexts/auth'
import App from './App'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
})

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <AuthProvider>
      <CssBaseline />
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </AuthProvider>
  </MuiThemeProvider>
)

export default Root
