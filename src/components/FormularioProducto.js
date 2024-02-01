// cliente/src/components/FormularioProducto.js
import React, { useState } from 'react';

const FormularioProducto = ({ onAgregarProducto }) => {
  const [producto, setProducto] = useState({ nombre: '', precio: 0, cantidad: 0 });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProducto(prevProducto => ({ ...prevProducto, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Validar que los campos no estén vacíos antes de agregar el producto
    if (!producto.nombre || !producto.precio || !producto.cantidad) {
      alert('Por favor, completa todos los campos antes de agregar el producto.');
      return;
    }

    // Hacer una solicitud al backend para agregar el nuevo producto
    fetch('http://localhost:3001/inventario/agregar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Actualizar la interfaz con el nuevo inventario
        onAgregarProducto(data.producto);
        // Limpiar el formulario
        setProducto({ nombre: '', precio: 0, cantidad: 0 });
      })
      .catch(error => console.error('Error al agregar el producto:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={producto.nombre}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Precio:
        <input
          type="number"
          name="precio"
          value={producto.precio}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Cantidad:
        <input
          type="number"
          name="cantidad"
          value={producto.cantidad}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default FormularioProducto;
