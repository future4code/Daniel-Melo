import React, {Component} from 'react';
import './App.css';

import Etapa1 from './pages/Etapa1'
import Etapa2 from './pages/Etapa2'
import Etapa3 from './pages/Etapa3'
import Etapa4 from './pages/Etapa4'

class App extends Component {
  state = {
    currentStep: 1,
    nome: '',
    idade: '',
    email: '',
    escolaridade: '',
    curso: '',
    unidadeDeEnsino: '',
    motivo: '',
    cursoComplementar: ''
  }

  nextStep = (e, nextStep) => {
    e.preventDefault()
    
    this.setState({
      currentStep: nextStep
    })
  }

  handleChangeNome = (e) => {
    this.setState({ nome: e.target.value })
  }
  
  handleChangeIdade = (e) => {
    this.setState({ idade: e.target.value })
  }
  
  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  
  handleChangeEscolaridade = (e) => {
    this.setState({ escolaridade: e.target.value })
  }
  
  handleChangeCurso = (e) => {
    this.setState({ curso: e.target.value })
  }
  
  handleChangeUnidadeDeEnsino = (e) => {
    this.setState({ unidadeDeEnsino: e.target.value })
  }
  
  handleChangeMotivo = (e) => {
    this.setState({ motivo: e.target.value })
  }

  handleChangeCursoComplementar = (e) => {
    this.setState({ cursoComplementar: e.target.value })
  }

  choosePageToRender() {
    switch (this.state.currentStep) {
      case 2:
        return (
          <Etapa2 
            onComplete={this.nextStep}
            curso={this.state.curso}
            unidadeDeEnsino={this.state.unidadeDeEnsino}
            onChangeCurso={this.handleChangeCurso}
            onChangeUnidadeDeEnsino={this.handleChangeUnidadeDeEnsino}
            last 
          />)
      case 3:
        return (
          <Etapa3
            onComplete={this.nextStep}
            motivo={this.state.motivo}
            cursoComplementar={this.state.cursoComplementar}
            onChangeMotivo={this.handleChangeMotivo}
            onChangeCursoComplementar={this.handleChangeCursoComplementar}
            last
          
          />)
      case 4:
        return (
          <Etapa4 
            onComplete={this.nextStep}
            nome={this.state.nome}
            idade={this.state.idade}
            email={this.state.email}
            escolaridade={this.state.escolaridade}
            curso={this.state.curso}
            unidadeDeEnsino={this.state.unidadeDeEnsino}
            motivo={this.state.motivo}
            cursoComplementar={this.state.cursoComplementar}
          />)
      default:
        return (
          <Etapa1 
            onComplete={this.nextStep}
            nome={this.state.nome}
            idade={this.state.idade}
            email={this.state.email}
            escolaridade={this.state.escolaridade}
            onChangeNome={this.handleChangeNome}
            onChangeIdade={this.handleChangeIdade}
            onChangeEmail={this.handleChangeEmail}
            onChangeEscolaridade={this.handleChangeEscolaridade}
          />)
    }
  }

  render() {
    console.table(this.state)

    return (
      <div className="App">
        {this.choosePageToRender()}
      </div>
    );
  }
}

export default App;
