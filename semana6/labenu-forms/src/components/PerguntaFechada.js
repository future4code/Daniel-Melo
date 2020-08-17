import React, {Component} from 'react';
import styled from 'styled-components';

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin: 10px 0;
    width: 100%;
  }
`

class PerguntaFechada extends Component {
  render() {
    return (
      <StyledInputGroup>
        <label htmlFor={this.props.questionType}>{this.props.label}</label>
        <select
          id={this.props.questionType}
          value={this.props.answer}
          onChange={this.props.onChange}
          required
        >
          {this.props.options.map((option) => <option key ={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </StyledInputGroup>
    )
  }
}

export default PerguntaFechada