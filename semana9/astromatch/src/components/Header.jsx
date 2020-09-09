import React from 'react'
import Box from '@material-ui/core/Box'
import chooseUserIcon from '../assets/img/mdi_account-switch.svg'
import logo from '../assets/img/logo.svg'
import userMatchesIcon from '../assets/img/mdi_account-check.svg'

const Header = () => {
  return (
    <Box
      height={70}
      boxShadow={1}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      px={2}
    >
      
      <img src={chooseUserIcon} alt='user matches icon' />
      <img src={logo} alt='logo' />
      <img src={userMatchesIcon} alt='user matches icon' />
    </Box>
  )
}

export default Header