import React, {Component} from 'react'
import Router from '../../Router'
import Header from '../Header'

import { Container } from './styles'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 2,
      currentUserId: null
    }
  }

  setUserRegisterPage = () => {
    this.setState({page: 1, currentUserId: null})
  }

  setUserListPage = () => {
    this.setState({page: 2, currentUserId: null})
  }

  getUserDetail = (id) => {
    this.setState({page: 3, currentUserId: id})
  }
  
  render() {
    return (
      <Container>
        <Header 
          onClickUserRegisterPageButton={this.setUserRegisterPage}
          onClickUserListPageButton={this.setUserListPage}
        />
        
        <Router
          page={this.state.page}
          currentUserId={this.state.currentUserId}
          setUserListPage={this.setUserListPage}
          onClickUserDetail={this.getUserDetail}
        />
      </Container>
    )
  }
}

export default Layout