import React, {useState, useEffect} from 'react'
import { getProfileToChoose, choosePerson } from '../services/api'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import StyledButton from '../styles/StyledButton'
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CircularProgress from '@material-ui/core/CircularProgress'


const StyledBox = styled(Box)`
  background-image: url(${(props) => props.bgimage});
  background-position: center;
  background-clip: border-box;
  background-size: cover;
`

const ChoosePage = () => {
  const theme = useTheme()
  const [loaded, setLoaded] = useState(false)
  const [profile, setProfile] = useState({})
  const [choosed, setChoosed] = useState(false)
  const [liked, setLiked] = useState(false)

  const getProfile = () => {
    setLoaded(false)
    getProfileToChoose()
      .then(response => {
        setProfile(response.data.profile)
        setChoosed(false)
        setLoaded(true)
      })
      .catch(_ => alert('Erro ao buscar profile'))
  }

  const handleChoice = (choice) => {
    setChoosed(true)
    setLiked(choice)
    
  }
  
  const getNextProfile = () => {
    choosePerson(profile.id, liked)
      .then(_ => {
        getProfile()
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
      {
        profile
        ? 
          <>
            { 
              loaded 
              ? 
                <>
                  <Slide 
                    direction={ liked ? "left" : "right"}
                    in={!choosed}
                    appear={false}
                    onExit={getNextProfile}
                    timeout={500}
                  >
                    <StyledBox
                      display='flex'
                      height={450}
                      width={370}
                      borderRadius={8}
                      boxShadow={4}
                      bgimage={profile.photo}
                      overflow='hidden'
                    >
                      <Box
                        color='common.white'
                        bgcolor='text.disabled'
                        alignSelf="flex-end"
                        px={1}
                        pb={1}
                        width='100%'
                      >
                        <Typography variant='h5'>
                          <strong>{profile.name}</strong>, {profile.age}
                        </Typography>
                        <Typography>
                          {profile.bio}
                        </Typography>
                      </Box>
                    </StyledBox>
                  </Slide>
                </>
              : 
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  height={450}
                  width={370}
                >
                  <CircularProgress />
                </Box>
            }

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
          </>
        : <Typography variant='h6'>Woow! Você zerou o astromatch!</Typography>
      }
    </Box>
  )
}

export default ChoosePage