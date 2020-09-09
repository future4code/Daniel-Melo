import React from 'react'
import styled from 'styled-components'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const StyledBox = styled(Box)`
  background-image: url(${(props) => props.bgImage});
`

const ChoosePage = () => {
  return (
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
        <strong>Courney Henry</strong>, idade
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in.
      </Typography>
    </StyledBox>
  )
}

export default ChoosePage