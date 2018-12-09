import { createGlobalStyle } from 'styled-components'

const injectGlobalStyles = () => {
  createGlobalStyle`
    body {
      background-color: #FAFAFA;
    }
  `
}

export default injectGlobalStyles
