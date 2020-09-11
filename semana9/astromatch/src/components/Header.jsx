import React from 'react'
import Box from '@material-ui/core/Box'
import styled from 'styled-components'

import chooseUserIcon from '../assets/img/mdi_account-switch.svg'
import logo from '../assets/img/logo.svg'
import userMatchesIcon from '../assets/img/mdi_account-check.svg'

const IconImg = styled.img`
  cursor: pointer;
  visibility: ${(props) => props.active ? 'visible' : 'hidden' };
`

const Header = ({ page, onClickIcons }) => {
  return (
    <Box
      height={70}
      flexShrink={0}
      boxShadow={1}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      px={2}
    >
      <IconImg onClick={() => onClickIcons(1)}  src={chooseUserIcon} alt='user matches icon' active={page === 2}/>
      <img src={logo} alt='logo' />
      <IconImg onClick={() => onClickIcons(2)} src={userMatchesIcon} alt='choose user icon' active={page === 1}/>
    </Box>
  )
}

export default Header