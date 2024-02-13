// cliente/src/components/FivePeaks.js
// cliente/src/components/secciones/FivePeaks.js
import React from 'react';
import '../styles/styles.css'


const BlustarEvento = () => {
  // Datos de ejemplo para la tabla
  const datosTabla = [
    { color: 'Rosa', cantidad: 10, style: { backgroundColor: '#E44235' } },

  ];

  return (
    <div className="table-container">
      <h2>BlustarEvento</h2>
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {datosTabla.map((fila, index) => (
            <tr key={index}>
              <td className="color-cell" style={fila.style}>{fila.color}</td>
              <td>{fila.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlustarEvento;
