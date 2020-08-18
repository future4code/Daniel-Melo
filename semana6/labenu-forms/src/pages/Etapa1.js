import React, {Component} from 'react';

import StyledPage from '../components/StyledPage'
import Form from '../components/Form'

import PerguntaAberta from '../components/PerguntaAberta'
import PerguntaFechada from '../components/PerguntaFechada'

class Etapa1 extends Component {
  setNextStep() {
    return this.props.escolaridade.includes('Ensino Superior') ? 2 : 3
  }

  render() {
    return (
      <StyledPage>
        <h1>Etapa 1 - Dados Gerais</h1>
        <Form last={this.props.last} onSubmit={(e) => this.props.onComplete(e, this.setNextStep())}>
          <PerguntaAberta 
            answer = {this.props.nome}
            onChange = {this.props.onChangeNome}
            questionType="nome"
            label="1. Qual o seu nome?"
            errorMessage="Insira seu nome!"
            required
          />
          <PerguntaAberta
            answer = {this.props.idade}
            onChange = {this.props.onChangeIdade}
            questionType="idade"
            label="2. Qual a sua idade?"
            errorMessage="Insira sua idade!"
            required
          />
          <PerguntaAberta
            answer = {this.props.email}
            onChange = {this.props.onChangeEmail}
            questionType="email"
            label="3. Qual seu email?"
            errorMessage="Insira um email válido!"
            required
          />
          <PerguntaFechada
            answer = {this.props.escolaridade}
            onChange = {this.props.onChangeEscolaridade}
            questionType="escolaridade"
            label="4. Qual sua escolaridade?"
            options={[
              "Ensino Médio Incompleto",
              "Ensino Médio Completo",
              "Ensino Superior Incompleto",
              "Ensino Superior Completo"
            ]}
          />
        </Form>
      </StyledPage>
    )
  }
}

export default Etapa1;