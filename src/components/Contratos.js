import React from 'react';
import { Link } from 'react-router-dom';

const Contratos = () => {
  return (
    <div>
      <h2>Menú de Contratos</h2>
      <ul>
        <li>
          <Link to="/contratos">Nuevo</Link>
        </li>
        <li>
          <Link to="/contratos/nuevo">Renovacion</Link>
        </li>
        <li>
          <Link to="/contratos/pendientes">Visualizar</Link>
        </li>
        <li>
          <Link to="/contratos/finalizados">Contratos Finalizados</Link>
        </li>
      </ul>
    </div>
  );
};

export default Contratos;
