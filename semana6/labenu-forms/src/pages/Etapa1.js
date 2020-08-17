import React, {Component} from 'react';

import StyledPage from '../components/StyledPage'
import Form from '../components/Form'

import PerguntaAberta from '../components/PerguntaAberta'
import PerguntaFechada from '../components/PerguntaFechada'

class Etapa1 extends Component {
  state = {
    escolaridade: 1
  }

  handleChangeEscolaridade = (e) => {
    this.setState({
      escolaridade: e.target.value
    })
  }

  setNextStep() {
    return this.state.escolaridade === "3" || this.state.escolaridade === "4" ? 2 : 3
  }

  render() {
    return (
      <StyledPage>
        <h1>Etapa 1 - Dados Gerais</h1>
        <Form last={this.props.last} onSubmit={(e) => this.props.onComplete(e, this.setNextStep())}>
          <PerguntaAberta 
            questionType="nome"
            label="1. Qual o seu nome?"
            errorMessage="Insira seu nome!"
            required
          />
          <PerguntaAberta
            questionType="idade"
            label="2. Qual a sua idade?"
            errorMessage="Insira sua idade!"
            required
          />
          <PerguntaAberta
            questionType="email"
            label="3. Qual seu email?"
            errorMessage="Insira um email válido!"
            required
          />
          <PerguntaFechada
            answer = {this.state.escolaridade}
            onChange = {this.handleChangeEscolaridade}
            questionType="escolaridade"
            label="4. Qual sua escolaridade?"
            options={[
              {label: "Ensino Médio Incompleto", value: 1},
              {label: "Ensino Médio Completo", value: 2},
              {label: "Ensino Superior Incompleto", value: 3},
              {label: "Ensino Superior Completo", value: 4}
            ]}
          />
        </Form>
      </StyledPage>
    )
  }
}

export default Etapa1;