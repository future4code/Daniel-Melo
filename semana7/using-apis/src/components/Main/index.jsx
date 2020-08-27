import React from 'react'

import { Container } from './styles'

import FindAddress from '../FindAddress'
import FindLyric from '../FindLyric'
import FindPicture from '../FindPicture'
import TellMeAJoke from '../TellMeAJoke'

const Main = ({ page }) => {
  const selectPageToRender = () => {
    switch(page) {
      case 1:
        return <FindAddress />
      case 2:
        return <FindLyric />
      case 3:
        return <FindPicture />
      case 4:
        return <TellMeAJoke />
      default:
        return <FindAddress />
    }
  }

  return (
    <Container>
      {selectPageToRender()}
    </Container>
  )  
}

export default Main