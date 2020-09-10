import React from 'react'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import StyledButton from '../styles/StyledButton'
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';


const StyledBox = styled(Box)`
  background-image: url(${(props) => props.bgimage});
`

const ChoosePage = () => {
  const theme = useTheme()
  
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
        bgimage={'https://picsum.photos/370/450'}
      >
        <Typography variant='h5'>
          <strong>Courney Henry</strong>, 27
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in.
        </Typography>
      </StyledBox>

      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        minHeight={75}
        minWidth={255}
      >
        <StyledButton color={theme.palette.error.main}>
          <ClearIcon fontSize='large'/>
        </StyledButton>
        <StyledButton color={theme.palette.success.main}>
          <FavoriteIcon fontSize='large'/>
        </StyledButton>
      </Box>
    </Box>
    
  )
}

export default ChoosePage