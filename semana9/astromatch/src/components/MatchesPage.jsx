import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'
import { getMatches, clearAll } from '../services/api'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import MatchUser from './MatchUser'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ProgressFeedback from './ProgressFeedback'

const StyledButton = styled(Button)`
  background-color: ${props => props.buttoncolor};
  color: ${props => props.textcolor};
  margin-top: 15px;
  
  :hover {
    background-color: ${props => props.hovercolor}
  }
`

const StyledBox = styled(Box)`
  /* width */
::-webkit-scrollbar {
  width: 5px;
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
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    getMatches()
      .then(response => {
          setLoaded(true)
          setMatches(response.data.matches)
        })
      .catch(_ => alert('Erro ao buscar matches'))
  }, [])

  const handleClear = () => {
    setMatches([])
    clearAll().catch(_ => alert('Erro ao limpar matches'))
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      height='100%'
    >
      { loaded
        ? 
          <StyledBox
            display='flex'
            flexDirection='column'
            flexGrow={1}
            maxHeight={400}
            overflow='auto'
            scrollbarcolor={theme.palette.primary.main}
          >
            {matches.map(match => <MatchUser key={match.id} avatar={match.photo} name={match.name}/> )}
          </StyledBox>
        : <ProgressFeedback />
      }

      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <StyledButton
          onClick={handleClear}
          variant='contained'
          startIcon={<DeleteForeverIcon/>}
          size='large'
          buttoncolor={theme.palette.error.main}
          hovercolor={theme.palette.error.dark}
          textcolor={theme.palette.common.white}
        >
          Clear all Matches
        </StyledButton>
      </Box>
    </Box>
  )
}

export default MatchesPage