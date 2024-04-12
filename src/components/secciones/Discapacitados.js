import React, { useState } from 'react';
import grisImage from '../assets/gris.png'; // Importa la imagen para el color Gris
import azulImage from '../assets/azul.png';
import rojoImage from '../assets/rojo.png'; // Importa la imagen para el color Azul
import cafeImage from '../assets/cafe.png';
import '../styles/styles.css';

const Discapacitados = () => {
  const [piezas, setPiezas] = useState([
    { color: 'Gris', cantidad: 0 },
    { color: 'Azul', cantidad: 0 },
    { color: 'Rojo', cantidad: 0 },
    { color: 'Cafe', cantidad: 0 },
    // Puedes agregar más colores aquí si es necesario
  ]);

  const handleAddPiece = (index) => {
    const nuevasPiezas = [...piezas];
    nuevasPiezas[index].cantidad += 1;
    setPiezas(nuevasPiezas);
  };

  const handleRemovePiece = (index) => {
    const nuevasPiezas = [...piezas];
    if (nuevasPiezas[index].cantidad > 0) {
      nuevasPiezas[index].cantidad -= 1;
      setPiezas(nuevasPiezas);
    }
  };

  return (
    <div className="table-container">
      <h2>Discapacitados</h2>
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {piezas.map((pieza, index) => (
            <tr key={index}>
              <td className="color-cell">
                {pieza.color === 'Gris' && <img src={grisImage} alt={pieza.color} style={{ width: '50px', height: '50px' }} />}
                {pieza.color === 'Azul' && <img src={azulImage} alt={pieza.color} style={{ width: '50px', height: '50px' }} />}
                {pieza.color === 'Rojo' && <img src={rojoImage} alt={pieza.color} style={{ width: '50px', height: '50px' }} />}
                {pieza.color === 'Cafe' && <img src={cafeImage} alt={pieza.color} style={{ width: '50px', height: '50px' }} />}
              </td>
              <td>{pieza.cantidad}</td>
              <td>
                <button onClick={() => handleAddPiece(index)}>Agregar</button>
                <button onClick={() => handleRemovePiece(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Discapacitados;
