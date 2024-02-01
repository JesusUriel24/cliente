// cliente/src/components/Inventario.js
import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import FormularioProducto from './FormularioProducto';
import FivePeaks from './secciones/FivePeaks';  
import FiveVip from './secciones/FiveVip'; 
import Italianos from './secciones/Italianos'; 
import ItalianosFlush from './secciones/ItalianosFlush';
import Discapacitados from './secciones/Discapacitados';
import BlustarEvento from './secciones/BlustarEvento';
import BlustarObra from './secciones/BlustarObra';
import Armal from './secciones/Armal';
import Fibra from './secciones/Fibra';
import Lavamanos from './secciones/Lavamanos';

const Inventario = () => {
  const [inventario, setInventario] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

 // const handlePageChange = page => {
   // setCurrentPage(page);
  //};

  //const handleSearch = term => {
    //setSearchTerm(term);
  //};

  const handleCategoryChange = category => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  useEffect(() => {
    // Hacer una solicitud al backend para obtener el inventario paginado y filtrado
    // Usa las variables de estado adecuadas aquí (inventario, currentPage, productsPerPage, searchTerm, selectedCategory)
  }, [currentPage, productsPerPage, searchTerm, selectedCategory]);

  return (
    <div>
      <h2>Inventario</h2>
      <FormularioProducto onAgregarProducto={(producto) => setInventario([...inventario, producto])} />
      <div className="search-bar">
        {/* ... (código existente) */}
      </div>
      <div className="category-buttons">
        <Link to ="/secciones/FivePeaks">
          <button onClick={() => handleCategoryChange('FivePeaks')}>Five Peaks</button>
        </Link>
        <Link to="/secciones/FiveVip">
          <button onClick={() => handleCategoryChange('FiveVip')}>Five VIP</button>
        </Link>
        <Link to="/secciones/Italianos">
          <button onClick={() => handleCategoryChange('Italianos')}>Italianos</button>
        </Link>
        <Link to="/secciones/ItalianosFlush">
          <button onClick={() => handleCategoryChange('ItalianosFlush')}>ItalianosFlush</button>
        </Link>
        <Link to="/secciones/Discapacitados">
          <button onClick={() => handleCategoryChange('Discapacitados')}>Discapacitados</button>
          </Link>
          <Link to="/secciones/BlustarEvento">
            <button onClick={() => handleCategoryChange('BlustarEvento')}>BlustarEvento</button>
          </Link>
          <Link to="/secciones/BlustarObra">
            <button onClick={() => handleCategoryChange('BlustarObra')}>BlustarObra</button>
          </Link>
          <Link to="/secciones/Armal">
            <button onAuxClick={() => handleCategoryChange('Armal')}>Armal</button>
          </Link>
          <Link to="/secciones/Fibra">
            <button onAuxClick={() => handleCategoryChange('Fibra')}>Fibra</button>
          </Link>
          <Link to="/secciones/Lavamanos">
            <button onAuxClick={() => handleCategoryChange('Lavamanos')}>Lavamanos</button>
          </Link>


      </div>

      <Routes>
        <Route path="/secciones/FivePeaks" element={<FivePeaks />} />
        <Route path="/secciones/FiveVip" element={<FiveVip />} />
        <Route path="/secciones/Italianos" element={<Italianos />} />
        <Route path="/secciones/ItalianosFlush" element={<ItalianosFlush />} />
        <Route path="/secciones/Discapacitados" element={<Discapacitados/>} />
        <Route path="/secciones/BlustarEvento" element={<BlustarEvento/>} />
        <Route path="/secciones/BlustarObra" element={<BlustarObra/>} />
        <Route path="/secciones/Armal" element={<Armal/>} />
        <Route path="/secciones/Fibra" element={<Fibra/>} />
        <Route path="/secciones/Lavamanos" element={<Lavamanos/>} />

      </Routes>
    </div>
  );
};

export default Inventario;

