import React, {Component} from 'react';

import StyledPage from '../components/StyledPage'
import Form from '../components/Form'

import PerguntaAberta from '../components/PerguntaAberta'
import PerguntaFechada from '../components/PerguntaFechada'

class Etapa3 extends Component {
  render() {
    return (
      <StyledPage>
        <h1>Etapa 3 - Informações Gerais de Ensino</h1>
        <Form last={this.props.last} onSubmit={(e) => this.props.onComplete(e, 4)}>
          <PerguntaAberta
            questionType="motivo"
            label="5. Por que você não terminou um curso de graduação?"
          />
          <PerguntaFechada 
            questionType="curso-complementar"
            label="6. Você fez algum curso complementar?"
            options={[
              {label: "Curso de inglês", value: 1},
              {label: "Curso técnico", value: 2},
              {label: "Não fiz curso complementar", value: 3}
            ]}
          />
        </Form>
      </StyledPage>
    )
  }
}

export default Etapa3;