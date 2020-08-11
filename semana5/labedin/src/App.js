import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars2.githubusercontent.com/u/59712925?s=400&u=5b9703545a00a7aae09e46f62918ac620daf11e0&v=4" 
          nome="Daniel Melo" 
          descricao="Entusiasta e encantado pela área de desenvolvimento de softwares. Sempre estudando e aprendendo novas tecnologias e ferramentas através da comunidade, de cursos e da literatura. Um fascinado pelo processo de aprendizagem."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQHMShmG4cji_A/company-logo_200_200/0?e=1605139200&v=beta&t=YSvGJJoXra7P0bk6VZKZUWwOOdvRqOslLwg6KMUC7-w" 
          nome="Centro Universitário FACOL" 
          descricao="Professor do curso de Engenharia Civil. Cursos de Estabilidade das Estruturas II, Hidráulica Geral e Lógica de Programação" 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQGSQ2RYkwPVPQ/company-logo_200_200/0?e=1605139200&v=beta&t=nl3x3KZH4Qe2x4hmjgaiEUoeWC8doie11-XpB7Nz1EU" 
          nome="Baltar Tecnologia & Equipamentos LTDA." 
          descricao="Desenvolvimento e Manutenção de Sistemas IoT, utilizando Arduino, Raspberry pi e ESP8266" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
