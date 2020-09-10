import React from 'react'
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear';

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const StyledBox = styled(Box)`
  background-image: url(${(props) => props.bgImage});
`

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  border: 3px solid;
  border-color: ${props => props.color};
  border-radius: 50%;
  transition: height 300ms ease-in, width 300ms ease-in, background-color 300ms ease-in, color 300ms ease-in;
  color: ${props => props.color};

  :hover {
    color: #FFF;
    height: 75px;
    width: 75px;
    background-color: ${props => props.color}
  }
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
        bgImage={'https://picsum.photos/370/450'}
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