import React, {Component} from 'react';

import StyledPage from '../components/StyledPage'
import Form from '../components/Form'

import PerguntaAberta from '../components/PerguntaAberta'

class Etapa2 extends Component {
  render() {
    return (
      <StyledPage>
        <h1>Etapa 2 - Informações do Ensino Superior</h1>
        <Form last={this.props.last} onSubmit={(e) => this.props.onComplete(e, 4)}>
          <PerguntaAberta
            questionType="curso"
            label="5. Qual curso?"
            errorMessage="Insira seu curso"
            required
          />

          <PerguntaAberta
            questionType="unidade-de-ensino"
            label="6. Qual unidade de ensino?"
            errorMessage="Insira sua unidade de ensino"
            required
          />
        </Form>
      </StyledPage>
    )
  }
}

export default Etapa2;