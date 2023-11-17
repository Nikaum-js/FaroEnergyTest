import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './global/styles/global'
import theme from './global/styles/theme'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
