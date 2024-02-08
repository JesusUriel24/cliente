// cliente/src/components/Inventario.js
import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
//import FormularioProducto from './FormularioProducto';
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
import './styles/styles.css';

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

      <div className="search-bar">
        {/* ... (código existente) */}
      </div>
      <div className="category-buttons">
        <Link to ="/secciones/FivePeaks">
        <button className="button" onClick={() => handleCategoryChange('FivePeaks')}>Five Peaks</button>
        </Link>
        <Link to="/secciones/FiveVip">
          <button className="button" onClick={() => handleCategoryChange('FiveVip')}>Five VIP</button>
        </Link>
        <Link to="/secciones/Italianos">
          <button className="button" onClick={() => handleCategoryChange('Italianos')}>Italianos</button>
        </Link>
        <Link to="/secciones/ItalianosFlush">
          <button className="button" onClick={() => handleCategoryChange('ItalianosFlush')}>ItalianosFlush</button>
        </Link>
        <Link to="/secciones/Discapacitados">
          <button className="button" onClick={() => handleCategoryChange('Discapacitados')}>Discapacitados</button>
          </Link>
          <Link to="/secciones/BlustarEvento">
            <button className="button" onClick={() => handleCategoryChange('BlustarEvento')}>BlustarEvento</button>
          </Link>
          <Link to="/secciones/BlustarObra">
            <button className="button" onClick={() => handleCategoryChange('BlustarObra')}>BlustarObra</button>
          </Link>
          <Link to="/secciones/Armal">
            <button className="button" onAuxClick={() => handleCategoryChange('Armal')}>Armal</button>
          </Link>
          <Link to="/secciones/Fibra">
            <button className="button" onAuxClick={() => handleCategoryChange('Fibra')}>Fibra</button>
          </Link>
          <Link to="/secciones/Lavamanos">
            <button className="button" onAuxClick={() => handleCategoryChange('Lavamanos')}>Lavamanos</button>
          </Link>


      </div>

      <Routes>
        <Route path="/secciones/FivePeaks" element={<FivePeaks />} />
        <Route path="/secciones/FiveVip" element={<FiveVip />} />
        <Route path="/secciones/Italianos" element={<Italianos />} />
        <Route path="/secciones/ItalianosFlush" element={<ItalianosFlush />} />
        <Route path="/secciones/Discapacitados" element={<Discapacitados />} />
        <Route path="/secciones/BlustarEvento" element={<BlustarEvento />} />
        <Route path="/secciones/BlustarObra" element={<BlustarObra />} />
        <Route path="/secciones/Armal" element={<Armal />} />
        <Route path="/secciones/Fibra" element={<Fibra />} />
        <Route path="/secciones/Lavamanos" element={<Lavamanos />} />

      </Routes>
    </div>
  );
};

export default Inventario;