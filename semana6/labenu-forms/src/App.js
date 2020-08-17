import React, {Component} from 'react';
import './App.css';

import Etapa1 from './pages/Etapa1'
import Etapa2 from './pages/Etapa2'
import Etapa3 from './pages/Etapa3'
import Etapa4 from './pages/Etapa4'

class App extends Component {
  state = {
    currentStep: 1,
  }

  nextStep = (e, nextStep) => {
    e.preventDefault()
    
    this.setState({
      currentStep: nextStep
    })
  }
  
  choosePageToRender() {
    switch (this.state.currentStep) {
      case 2:
        return <Etapa2 onComplete={this.nextStep} last />
      case 3:
        return <Etapa3 onComplete={this.nextStep} last />
      case 4:
        return <Etapa4 onComplete={this.nextStep} />
      default:
        return <Etapa1 onComplete={this.nextStep} />
    }
  }

  render() {
    return (
      <div className="App">
        {this.choosePageToRender()}
      </div>
    );
  }
}

export default App;
