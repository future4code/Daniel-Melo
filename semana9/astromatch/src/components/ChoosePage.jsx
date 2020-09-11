import React, {useState, useEffect} from 'react'
import { getProfileToChoose, choosePerson } from '../services/api'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ProfileSlider from './ProfileSlider'
import ButtonGroup from './ButtonGroup'
import ProgressFeedback from './ProgressFeedback'

const ChoosePage = () => {
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
     justifyContent="space-between"
     height="100%"
    >
      { profile
        ? 
          <>
            { loaded 
              ? <ProfileSlider profile={profile} liked={liked} choosed={choosed} getNextProfile={getNextProfile} />
              : <ProgressFeedback />
            }
            <ButtonGroup handleClick={handleChoice} />
          </>
        : <Typography variant='h6' align='center'>Woow! Você zerou o astromatch!</Typography>
      }
    </Box>
  )
}

export default ChoosePage