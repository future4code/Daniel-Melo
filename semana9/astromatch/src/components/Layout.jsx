import React from 'react'
import { common } from '@material-ui/core/colors'

import Box from '@material-ui/core/Box'
import Header from './Header'
import Content from './Content'

const Layout = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      width={430}
      height={680}
      border={1}
      borderRadius={8}
      bgcolor={common.white}
    >
      <Header />
      <Content />
    </Box>
  )
}

export default Layout