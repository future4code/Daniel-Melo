import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --dutch-white: #DBCFB0;
    --laurel-green: #BFC8AD;
    --dark-sea-green: #90B494;
    --steel-teal: #718F94;
    --independece: #545775;
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Roboto';
  }
  
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: var(--dutch-white);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
  }
`