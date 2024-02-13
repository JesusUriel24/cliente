// cliente/src/components/secciones/FivePeaks.js
import React from 'react';
import '../styles/styles.css'


const Italianos = () => {
  // Datos de ejemplo para la tabla
  const datosTabla = [
    { color: 'Rosa', cantidad: 10, style: { backgroundColor: '#ED7FE8' } },
    { color: 'Verde', cantidad: 15, style: { backgroundColor: '#65E041' } },
    { color: 'Naranja', cantidad: 20, style: { backgroundColor: 'orange' } },
    { color: 'Azul', cantidad: 12, style: { backgroundColor: '#2591E0' } },
    { color: 'Gris', cantidad: 8, style: { backgroundColor: '#A6A8AA' } },
    { color: 'Amarillo', cantidad: 18, style: { backgroundColor: '#F7FB0A' } },
    { color: 'Rojo', cantidad: 25, style: { backgroundColor: '#F52413' } },
    { color: 'Blanco', cantidad: 30, style: { backgroundColor: 'white' } },
  ];

  return (
    <div className="table-container">
      <h2>Italianos</h2>
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

export default Italianos;
