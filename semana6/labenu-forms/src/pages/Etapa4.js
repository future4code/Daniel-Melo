import React, {Component} from 'react';
import styled from 'styled-components'
import StyledPage from '../components/StyledPage'


const StyledSummary = styled.table`
  border-spacing: 10px 10px;
`

class Etapa4 extends Component {
  extendedSummary = () => {
    if(this.props.escolaridade.includes('Ensino Superior')) {
      return (
        <>
          <tr>
            <td><strong>Curso</strong></td>
            <td>{this.props.curso}</td>
          </tr>
          <tr>
            <td><strong>Unidade de Ensino</strong></td>
            <td>{this.props.unidadeDeEnsino}</td>
          </tr>
        </>
      ) 
    } else {
        return (
        <>
          <tr>
            <td><strong>Justificativa</strong></td>
            <td>{this.props.motivo || "Não informado"}</td>
          </tr>
          <tr>
            <td><strong>Curso Complementar</strong></td>
            <td>{this.props.cursoComplementar}</td>
          </tr>
        </>
        )
    }
  }
  
  render() {
    return (
      <StyledPage>
        <h1>O FORMULÁRIO ACABOU</h1>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
        <h2>Resumo</h2>
        <StyledSummary>
          <tbody>
            <tr>
              <td><strong>Nome</strong></td>
              <td>{this.props.nome}</td>
            </tr>
            <tr>
              <td><strong>Idade</strong></td>
              <td>{this.props.idade}</td>
            </tr>
            <tr>
              <td><strong>E-mail</strong></td>
              <td>{this.props.email}</td>
            </tr>
            {this.extendedSummary()}
          </tbody>
        </StyledSummary>
      </StyledPage>
    )
  }
}

export default Etapa4;