import React from 'react'
import styled from 'styled-components'

import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'

const StyledAvatar = styled(Avatar)`
  height: 60px;
  width: 60px;
`

const MatchUser = ({ avatar, name }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      minHeight={70}
    >
      <StyledAvatar alt={name} src={avatar} />
      <Box ml={1}>
        <Typography variant='h6'>{name}</Typography>
      </Box>
    </Box>
  )
}

export default MatchUser