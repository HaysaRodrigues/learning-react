import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import AuterBox from './components/Autor'

class App extends Component {
  
  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>
      <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="http://localhost:3000">Company</a>
            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="http://localhost:3000" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a href="http://localhost:3000" className="pure-menu-link">Autor</a></li>
                <li className="pure-menu-item"><a href="http://localhost:3000" className="pure-menu-link">Livro</a></li>
            </ul>
        </div>
      </div>
      <div id="main">
        <div className="header">
          <h1>Cadastro de Autores</h1>
        </div>
        <div className="content" id="content">
          <AuterBox />
        </div>
      </div>            
    </div>     
    );
  }
}

export default App;