import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'

const ProgressFeedback = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexGrow={1}
    >
      <CircularProgress />
    </Box>
  )
}

export default ProgressFeedback