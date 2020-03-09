import React from 'react';
import '../App.css'; 

const Header = () => (
  <header>
        <nav>
          <div className="logo">
            <h3>facebook</h3>
          </div>
          <div className="perfil">
            <a href="#">Meu Perfil</a>
            <span>
              <i className="material-icons">account_circle</i>
            </span>
          </div>
        </nav>
      </header>
)

export default Header;