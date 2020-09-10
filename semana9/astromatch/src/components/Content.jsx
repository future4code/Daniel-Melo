import React from 'react'

import Box from '@material-ui/core/Box'
import ChoosePage from './ChoosePage'
import MatchesPage from './MatchesPage'

const Content = ({ page }) => {
  return (
    <Box
      m={2}
      flexGrow={1}
    >
      {page === 1 ? <ChoosePage /> : <MatchesPage />}
    </Box>
  )
}

export default Content