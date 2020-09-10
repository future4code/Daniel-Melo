import React, {useState, useEffect} from 'react'
import { getProfileToChoose, choosePerson } from '../services/api'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import StyledButton from '../styles/StyledButton'
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';


const StyledBox = styled(Box)`
  background-image: url(${(props) => props.bgimage});
  background-position: center;
  background-clip: border-box;
  background-size: cover;
`

const ChoosePage = () => {
  const theme = useTheme()
  const [profile, setProfile] = useState({})

  const getProfile = () => {
    getProfileToChoose()
      .then(response => setProfile(response.data.profile))
      .catch(_ => alert('Erro ao buscar profile'))
  }

  const handleChoice = (choice) => {
    choosePerson(profile.id, choice)
      .then(response => {
        getProfile()
        response.data.isMatch && alert("It's a match!")
      })
      .catch(_ => alert('Erro ao enviar escolha'))
  }

  useEffect(() => {
    getProfile()
  },[])


  return (
    <Box
     display='flex'
     flexDirection='column'
     justifyContent='space-around'
     alignItems='center'
     height={550}
     width={370}
    >
      <StyledBox
        display='flex'
        flexDirection="column"
        alignItems='flex-start'
        justifyContent='flex-end'
        px={1}
        pb={2}
        height={450}
        width={370}
        border={1}
        borderRadius={8}
        color="common.white"
        boxShadow={4}
        bgimage={profile.photo}
      >
        <Typography variant='h5'>
          <strong>{profile.name}</strong>, {profile.age}
        </Typography>
        <Typography>
          {profile.bio}
        </Typography>
      </StyledBox>

      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        minHeight={75}
        minWidth={255}
      >
        <StyledButton onClick={() => handleChoice(false)} color={theme.palette.error.main}>
          <ClearIcon fontSize='large'/>
        </StyledButton>
        <StyledButton onClick={() => handleChoice(true)} color={theme.palette.success.main}>
          <FavoriteIcon fontSize='large'/>
        </StyledButton>
      </Box>
    </Box>
    
  )
}

export default ChoosePage