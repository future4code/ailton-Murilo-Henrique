import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from './img/foto-perfil.jpeg'
import ImagemUnip from './img/logo-unip.png'
import ImagemSenai from './img/logo-senai.png'
import ImagemLabenu from './img/logo-labenu.png'
import ImagemEmail from './img/logo-email.png'
import ImagemEndereco from './img/logo-endereço.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';
import {DivButton} from './components/ImagemButton/ImagemButton'



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPerfil} 
          nome="Murilo Caun" 
          descricao="Oi, eu sou o Murilo Caun. Tenho 24 anos, sou formado em Engenharia Mecanica e atualmente sou estudante de Desenvolvimento Web Full Stack na Labenu "
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271208.png" 
          texto="Ver mais"
        />
         <CardPequeno
          imagem={ImagemEmail} 
          titulo="E-mail"
          texto= "mcchenrique2101@gmail.com"
        />
         <CardPequeno 
          imagem={ImagemEndereco} 
          titulo="Endereço:"
          texto="Rua Bento Ortiz de Camargo Junior, Vinhedo/SP" 
          
        />
        
      </div>

      <div className="page-section-container">
        <h2>Formações Acadêmicas</h2>
        <CardGrande 
          imagem={ImagemLabenu} 
          nome="Labenu" 
          descricao="Cursando Desenvolvimento Web Full Stack, conclusão prevista em Novembro 2022" 
        />

        <CardGrande 
          imagem={ImagemUnip} 
          nome="Universidade Paulista" 
          descricao="Bacharelado em Engenharia Mecânica, concluido em Dezembro de 2020" 
        />
          <CardGrande
          imagem={ImagemSenai} 
          nome="SENAI" 
          descricao="Curso Tecnico em Mecâtronica, concluído em Dezembro de 2015" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
       
        
        <DivButton>
           
        <ImagemButton 
          imagem="https://e7.pngegg.com/pngimages/778/732/png-clipart-logo-linkedin-computer-icons-facebook-facebook-blue-text.png" 
          texto="Linkedin" 
          link= "https://www.linkedin.com/in/murilo-caun-henrique-979430206/" 
        />     
         <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
          texto="GitHub"
          link= "https://github.com/MuriloCaun" 
          
        />
            <ImagemButton 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" 
          texto="Instagram"
          link= "https://www.instagram.com/murilo_k1/" 
          
        />
      
        </DivButton>   
        
      </div>
    </div>
  );
}

export default App;
