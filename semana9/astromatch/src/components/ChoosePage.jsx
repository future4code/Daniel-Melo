import React, {useState, useEffect} from 'react'
import { getProfileToChoose, choosePerson } from '../services/api'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ProfileSlider from './ProfileSlider'
import ButtonGroup from './ButtonGroup'
import ProgressFeedback from './ProgressFeedback'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide'

const ChoosePage = () => {
  const [loaded, setLoaded] = useState(false)
  const [profile, setProfile] = useState({})
  const [choosed, setChoosed] = useState(false)
  const [liked, setLiked] = useState(false)
  const [match, setMatch] = useState(false)

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
      .then(response => {
        setMatch(response.data.isMatch)
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

      <Snackbar 
        open={match}
        autoHideDuration={1000}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        TransitionComponent={Slide}
        onClose={() => setMatch(false)}
      >
        <Alert severity="success" variant="filled">
          IT'S A MATCH!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default ChoosePage