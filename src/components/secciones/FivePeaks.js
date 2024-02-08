// src/components/secciones/FivePeaks.js (y otros archivos de secciones similares)
import React from 'react';

const fivepeaks = ({ nombre, colores }) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Color</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {colores.map((color, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{color.nombre}</td>
              <td>{color.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default fivepeaks;