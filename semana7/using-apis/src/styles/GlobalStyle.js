import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000000;
    --onix: #363946;
    --dim-gray: #696773;
    --morning-blue: #819595;
    --ash-gray: #B1B6A6;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  }
  
  body {
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  button {
    cursor: pointer;
    margin: 2px;
    padding: 2px;
  }
`