import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';

function App() {
  let nombre = 'Soy Gio';
  let auth = false;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*Interpolar Variables*/}
        <h2>{nombre}</h2>

        {/*Interpolar boleanos*/}
        <p>{auth ? "El usuario esta logueado":"El usuario no está logueado"}</p>
        <ul>

          {/*Interpolar arreglos*/}
          {estaciones.map((el, index) => (
          <li key={index}>{el}</li>
          ))}
        </ul>
        </section>
        
      <section>
        <Componente msg="Hola, soy un componente desde una prop"/>
        <hr/>
        <Propiedades 
          cadena="Esto es una cadena de texto" 
          numero={19} 
          booleano={false}
          arreglo={[1,2,3]} 
          objeto={{nombre: "Gio", correo: "duvanprogrammer@gmail.com"}}
          funcion= {(num) => num * num}
          elementoReact = {<i>Esto es un elemento React</i>}
          componenteReact = {<Componente msg="Soy un componente pasado como prop"/>}
        />
        <hr />
        <Estado />  
        <hr />
        <RenderizadoCondicional />
      </section>
        
      </header>
    </div>
  );
}

export default App;
