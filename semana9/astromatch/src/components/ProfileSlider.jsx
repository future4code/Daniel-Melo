import React from 'react'
import styled from 'styled-components'

import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const StyledBox = styled(Box)`
  background-image: url(${(props) => props.bgimage});
  background-repeat: no-repeat;
  background-position: center;
  background-clip: border-box;
  background-size: 100% 100%;
`

const ProfileSlider = ({ profile, liked, choosed, getNextProfile }) => {
  return (
    <Slide 
      direction={ liked ? "left" : "right"}
      in={!choosed}
      appear={false}
      onExit={getNextProfile}
      timeout={500}
    >
      <StyledBox
        display='flex'
        flexGrow={1}
        borderRadius={8}
        boxShadow={4}
        bgimage={profile.photo}
        overflow='hidden'
      >
        <Box
          color='common.white'
          bgcolor='text.disabled'
          alignSelf="flex-end"
          flexGrow={1}
          px={1}
          pb={1}
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
  )
}

export default ProfileSlider