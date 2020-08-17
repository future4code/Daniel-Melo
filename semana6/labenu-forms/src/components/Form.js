import React, {Component} from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 10px;
  }
`

class Form extends Component {
  render() {
    return (
      <StyledForm onSubmit={this.props.onSubmit}>
        {this.props.children}
        <button type="submit">{this.props.last ? "Finalizar" : "Continuar"}</button>
      </StyledForm>
    )
  }
}

export default Form