import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

const Fibra = () => {
  // Datos de ejemplo para la tabla
  const [datosTabla, setDatosTabla] = useState([

    { color: 'Blanco', cantidad: 30, style: { backgroundColor: 'white' } },
  ]);

  // Estado para almacenar el total
  const [total, setTotal] = useState(0);

  // Calcula la suma total de las cantidades cuando cambia el estado de datosTabla
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
      <h2>Fibra</h2>
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
      <p>Total: {total}</p> {/* Muestra el total debajo de la tabla */}
    </div>
  );
};

export default Fibra;

