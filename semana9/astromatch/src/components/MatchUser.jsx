import React from 'react'
import styled from 'styled-components'

import { useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'

const StyledAvatar = styled(Avatar)`
  height: 60px;
  width: 60px;
`

const StyledBox = styled(Box)`
  cursor: pointer;
  transition: background-color 300ms ease-in;

  :hover {
    background-color: ${props => props.hoverbg};
  }
`

const MatchUser = ({ avatar, name }) => {
  const theme = useTheme()
  
  return (
    <StyledBox
      display="flex"
      alignItems="center"
      minHeight={70}
      hoverbg={theme.palette.divider}
    >
      <StyledAvatar alt={name} src={avatar} />
      <Box ml={1}>
        <Typography variant='h6'>{name}</Typography>
      </Box>
    </StyledBox>
  )
}

export default MatchUser