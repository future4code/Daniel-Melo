import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'
import { getMatches, clearAll } from '../services/api'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import MatchUser from './MatchUser'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const StyledButton = styled(Button)`
  background-color: ${props => props.buttoncolor};
  color: ${props => props.textcolor};
  
  :hover {
    background-color: ${props => props.onhovercolor}
  }
`

const StyledBox = styled(Box)`
  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.scrollbarcolor};
  border-radius: 10px;
}
`

const MatchesPage = () => {
  const theme = useTheme()
  const [matches, setMatches] = useState([])
  
  useEffect(() => {
    getMatches()
      .then(response => setMatches(response.data.matches))
      .catch(_ => alert('Erro ao buscar matches'))
  }, [])

  const handleClear = () => {
    clearAll()
      .then(response => {
        setMatches([])
      })
      .catch(_ => alert('Erro ao limpar matches'))
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      height={550}
    >
      <StyledBox
        display='flex'
        flexDirection='column'
        height={450}
        overflow='auto'
        scrollbarcolor={theme.palette.primary.main}
      >
        {matches.map(match => <MatchUser key={match.id} avatar={match.photo} name={match.name}/> )}
      </StyledBox>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight={75}
        minWidth={255}
      >
        <StyledButton
          onClick={handleClear}
          variant='contained'
          startIcon={<DeleteForeverIcon/>}
          size='large'
          buttoncolor={theme.palette.error.main}
          onhovercolor={theme.palette.error.dark}
          textcolor={theme.palette.common.white}
        >
          Clear all Matches
        </StyledButton>
      </Box>
    </Box>
  )
}

export default MatchesPage