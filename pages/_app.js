import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/GlobalStyle'


const theme = {
  colors: {
    primary: '#ff6a00',
  },
}

export default class nextBlogPrototype extends App {
  
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
