// cliente/src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* Botones */}
      <div className="botones-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/inventario">Inventario</Link>
            </li>
            <li>
              <Link to="/contratos">Contratos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;