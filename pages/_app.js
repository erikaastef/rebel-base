import React, { useState, useEffect } from 'react'
import { GlobalStyle } from '../styles/Global'
import { ResetStyle } from '../styles/Reset'
import { theme } from '../styles/Theme'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ResetStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp