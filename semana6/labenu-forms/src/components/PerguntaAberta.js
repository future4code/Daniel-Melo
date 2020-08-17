import React, {Component} from 'react';
import styled from 'styled-components';

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  * {
    margin: 10px 0;
  }

  input {
    width: 100%;
  }
`

const StyledSpan = styled.span`
  color: red;
`

class PerguntaAberta extends Component {
  state = {
    isInvalidInput: false,
    invalidInputMessage: ''
  }
  
  handleInvalidInput = (e) => {
    e.preventDefault()
    
    this.setState({
      isInvalidInput: true
    })
  }
  
  handleChange = () => {
    this.setState({isInvalidInput: false})
  }

  handleInputType() {
    switch (this.props.questionType) {
      case 'idade':
        return <input id={this.props.questionType} type="number" min="0" required={this.props.required} onInvalid={this.handleInvalidInput} onChange={this.handleChange}/>
      case 'email':
        return <input id={this.props.questionType} type="email" required={this.props.required} onInvalid={this.handleInvalidInput} onChange={this.handleChange}/>
      default:
        return <input id={this.props.questionType} type="text" required={this.props.required} onInvalid={this.handleInvalidInput} onChange={this.handleChange}/>
    }
  }
 
  setErrorMessage = () => {
    return this.state.isInvalidInput && (<StyledSpan>{this.props.errorMessage}</StyledSpan>)
  }

  render() {
    return (
      <StyledInputGroup>
        <label htmlFor={this.props.questionType}>{this.props.label}</label>
        {this.handleInputType()}
        {this.setErrorMessage()}
      </StyledInputGroup>
    )
  }
}

export default PerguntaAberta