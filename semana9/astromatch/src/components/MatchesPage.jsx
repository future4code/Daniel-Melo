import React, {useState, useEffect} from 'react'
import { useTheme } from '@material-ui/core/styles'
import { getMatches, clearAll } from '../services/api'

import Box from '@material-ui/core/Box'
import MatchUser from './MatchUser'
import StyledButton from '../styles/StyledButton'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


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
        alert(response.data.message)
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
      <Box
        display='flex'
        flexDirection='column'
        height={450}
        overflow='auto'
      >
        {matches.map(match => <MatchUser key={match.id} avatar={match.photo} name={match.name}/> )}
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight={75}
        minWidth={255}
      >
        <StyledButton onClick={handleClear} color={theme.palette.error.main}>
          <DeleteForeverIcon fontSize='large'/>
        </StyledButton>
      </Box>
    </Box>
  )
}

export default MatchesPage