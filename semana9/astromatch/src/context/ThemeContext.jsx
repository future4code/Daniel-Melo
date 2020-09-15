import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const ThemeContext = ({ children }) => {
  const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#50B2C0'
          },
          secondary: {
            main: '#FF4000'
          },
          text: {
            primary: '#201E1F'
          },
          background: { 
            default: '#FEEFDD'
          }
        },
        typography: {
          h5: {
            fontSize: '2rem'
          }
        },
        spacing: [0, 15, 30, 60, 90, 120]
      })
    
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeContext