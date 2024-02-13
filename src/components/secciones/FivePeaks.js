// cliente/src/components/secciones/FivePeaks.js
import React, { useState } from 'react';
import '../styles/styles.css';

const FivePeaks = () => {
  // Datos de ejemplo para la tabla
  const [datosTabla, setDatosTabla] = useState([
    { color: 'Rosa', cantidad: 10, style: { backgroundColor: '#ED7FE8' } },
    { color: 'Verde', cantidad: 15, style: { backgroundColor: '#65E041' } },
    { color: 'Naranja', cantidad: 20, style: { backgroundColor: 'orange' } },
    { color: 'Azul', cantidad: 12, style: { backgroundColor: '#2591E0' } },
    { color: 'Gris', cantidad: 8, style: { backgroundColor: '#A6A8AA' } },
    { color: 'Amarillo', cantidad: 18, style: { backgroundColor: '#F7FB0A' } },
    { color: 'Rojo', cantidad: 25, style: { backgroundColor: '#F52413' } },
    { color: 'Blanco', cantidad: 30, style: { backgroundColor: 'white' } },
  ]);

  const handleCantidadChange = (index, newValue) => {
    const nuevaTabla = [...datosTabla];
    nuevaTabla[index].cantidad = newValue;
    setDatosTabla(nuevaTabla);
  };

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
              <td>
                <input
                  type="number"
                  value={fila.cantidad}
                  onChange={(e) => handleCantidadChange(index, parseInt(e.target.value))}
                  min="0"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FivePeaks;
