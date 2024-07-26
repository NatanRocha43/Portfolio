import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Sobre mim</Link></li>
            <li><Link to="/projects">Projetos</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
