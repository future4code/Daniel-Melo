import React from 'react'
import { Box } from '@material-ui/core'

import Header from './Header'
import { common } from '@material-ui/core/colors'

const Layout = () => {
  return (
    <Box
     width={430}
     height={680}
     border={1}
     borderRadius={8}
     bgcolor={common.white}
    >
      <Header />
    </Box>
  )
}

export default Layout