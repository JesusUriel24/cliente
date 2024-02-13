// cliente/src/components/secciones/FivePeaks.js
import React from 'react';
import '../styles/styles.css'


const BlustarObra = () => {
  // Datos de ejemplo para la tabla
  const datosTabla = [
    { color: 'Blustar Estandar Obra', cantidad: 10, style: { backgroundColor: '#ED7FE8' } },
    { color: 'Blustar Ejecutivos Obra', cantidad: 15, style: { backgroundColor: '#65E041' } },
  ];

  return (
    <div className="table-container">
      <h2>BlustarObra</h2>
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

export default BlustarObra;
