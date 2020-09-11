import React from 'react'

import Box from '@material-ui/core/Box'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ClearIcon from '@material-ui/icons/Clear'
import Fab from '@material-ui/core/Fab'

const ButtonGroup = ({handleClick}) => {
  return (
    <Box
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
      alignSelf='strech'
      mt={1}
    >
      <Fab onClick={() => handleClick(false)} color="secondary" aria-label="add">
        <ClearIcon color='action'/>
      </Fab>
      <Fab onClick={() => handleClick(true)} color="primary" aria-label="edit">
        <FavoriteIcon color='action'/>
      </Fab>
    </Box>
  )
}

export default ButtonGroup