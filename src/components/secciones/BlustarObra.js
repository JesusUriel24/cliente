// cliente/src/components/secciones/FivePeaks.js
import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

const BlustarObra = () => {
  // Datos de ejemplo para la tabla
  const [datosTabla, setDatosTabla] = useState([
    { color: 'Blustar Estandar Obra', cantidad: 10, style: { backgroundColor: '#EF2312' } },
    { color: 'Blustar Ejecutivos Obra', cantidad: 15, style: { backgroundColor: '#EF2312' } },
  ]);

  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const sumaTotal = datosTabla.reduce((total, fila) => total + fila.cantidad, 0);
    setTotal(sumaTotal);
  }, [datosTabla]);

  const handleCantidadChange = (index, newValue) => {
    const nuevaTabla = [...datosTabla];
    nuevaTabla[index].cantidad = newValue;
    setDatosTabla(nuevaTabla);
  };

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
      <p>Total: {total}</p>
    </div>
  );
};

export default BlustarObra;
