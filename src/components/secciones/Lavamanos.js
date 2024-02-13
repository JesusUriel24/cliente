// cliente/src/components/secciones/FivePeaks.js
import React from 'react';
import '../styles/styles.css'


const Lavamanos = () => {
  // Datos de ejemplo para la tabla
  const datosTabla = [
    { color: 'Lavamanos Doble', cantidad: 10, style: { backgroundColor: '#ED7FE8' } },
    { color: 'Lavamanos Acero Inoxidable', cantidad: 15, style: { backgroundColor: '#65E041' } },

  ];

  return (
    <div className="table-container">
      <h2>Five Peaks</h2>
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

export default Lavamanos;
