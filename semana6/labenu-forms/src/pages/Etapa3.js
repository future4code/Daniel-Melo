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
            answer={this.props.motivo}
            onChange={this.props.onChangeMotivo}
            questionType="motivo"
            label="5. Por que você não terminou um curso de graduação?"
          />
          <PerguntaFechada
            answer={this.props.cursoComplementar}
            onChange={this.props.onChangeCursoComplementar}
            questionType="curso-complementar"
            label="6. Você fez algum curso complementar?"
            options={[
              "Não fiz curso complementar",
              "Curso de inglês",
              "Curso técnico"
            ]}
          />
        </Form>
      </StyledPage>
    )
  }
}

export default Etapa3;