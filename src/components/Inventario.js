// cliente/src/components/Inventario.js
import React, { useEffect, useState } from 'react';
import FormularioProducto from './FormularioProducto';

const Inventario = () => {
  const [inventario, setInventario] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Construir la URL de la solicitud al backend con los parámetros necesarios
    let url = `http://localhost:3001/inventario?_page=${currentPage}&_limit=${productsPerPage}&q=${searchTerm}`;
    if (selectedCategory) {
      url += `&category=${selectedCategory}`;
    }

    // Hacer una solicitud al backend para obtener el inventario paginado y filtrado
    fetch(url)
      .then(response => response.json())
      .then(data => setInventario(data))
      .catch(error => console.error('Error al obtener el inventario:', error));
  }, [currentPage, productsPerPage, searchTerm, selectedCategory]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleSearch = term => {
    setSearchTerm(term);
  };

  const handleCategoryChange = category => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reiniciar a la primera página cuando se cambia la categoría
  };

  return (
    <div>
      <h2>Inventario</h2>
      <FormularioProducto onAgregarProducto={(producto) => setInventario([...inventario, producto])} />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="category-buttons">
        {/* Agregar botones para cada categoría */}
        <button onClick={() => handleCategoryChange('Categoria1')}>FIVE PEAKS</button>
        <button onClick={() => handleCategoryChange('Categoria2')}>FIVE VIP</button>
        <button onClick={() => handleCategoryChange('Categoria2')}>ITALIANOS</button>
        <button onClick={() => handleCategoryChange('Categoria2')}>ITALIANOS FLUSH</button>
        <button onClick={() => handleCategoryChange('Categoria2')}>DISCAPACITADOS</button>
        <button onClick={() => handleCategoryChange('Categoria2')}>BLUSTAR EVENTO</button>
        <button onClick={() => handleCategoryChange('Categoria2')}>BLUSTAR OBRA</button>
        <button onClick={() => handleCategoryChange('Categoria2')}>ARMAL</button>
        <button onClick={() => handleCategoryChange('Categoria2')}>FIBRA</button>
        <button onClick={() => handleCategoryChange('Categoria2')}>LAVAMANOS</button>
        {/* ... Agregar más botones según tus necesidades */}
      </div>
      <ul>
        {inventario.map(producto => (
          <li key={producto._id}>
            {producto.nombre} - Precio: ${producto.precio} - Cantidad: {producto.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventario;
