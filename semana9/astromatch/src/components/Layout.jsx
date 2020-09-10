import React, {useState} from 'react'
import { common } from '@material-ui/core/colors'

import Box from '@material-ui/core/Box'
import Header from './Header'
import Content from './Content'

const Layout = () => {
  const [page, setPage] = useState(1)
  
  const handlePageChanging = (destiny) => {
    setPage(destiny)
  }

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
      <Header page={page} onClickIcons={handlePageChanging}/>
      <Content page={page}/>
    </Box>
  )
}

export default Layout