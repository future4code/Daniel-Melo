import React from 'react'
import { useTheme } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import MatchUser from './MatchUser'
import StyledButton from '../styles/StyledButton'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const MatchesPage = () => {
  const theme = useTheme()
  
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      height={550}
    >
      <Box
        display='flex'
        flexDirection='column'
        height={450}
        overflow='auto'
      >
        <MatchUser avatar="https://picsum.photos/60?a=5" name='Nome da Pessoa'/>
        <MatchUser avatar="https://picsum.photos/60?a=5" name='Nome da Pessoa'/>
        <MatchUser avatar="https://picsum.photos/60?a=5" name='Nome da Pessoa'/>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight={75}
        minWidth={255}
      >
        <StyledButton color={theme.palette.error.main}>
          <DeleteForeverIcon fontSize='large'/>
        </StyledButton>
      </Box>
    </Box>
  )
}

export default MatchesPage