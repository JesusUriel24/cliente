// cliente/src/components/Inventario.js
import React, { useEffect, useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

 // const handlePageChange = page => {
   // setCurrentPage(page);
  //};
;
  //const handleSearch = term => {
    //setSearchTerm(term);
  //};

  const handleCategoryChange = (category,to) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    navigate(to);
  };

  useEffect(() => {
    // Hacer una solicitud al backend para obtener el inventario paginado y filtrado
    // Usa las variables de estado adecuadas aquí (inventario, currentPage, productsPerPage, searchTerm, selectedCategory)
  }, [currentPage, productsPerPage, searchTerm, selectedCategory]);
  return (
    <div>
      <h2>INVENTARIO</h2>

      <div className="search-bar">
        {/* ... (código existente) */}
      </div>
      <div className="category-buttons">
        {/*<Link to ="/secciones/FivePeaks">*/}
        <button className="button" onClick={() => handleCategoryChange('FivePeaks','/secciones/FivePeaks')}>Five Peaks</button>
        {/*</Link>*/}
        {/*<Link to="/secciones/FiveVip">*/}
          <button className="button" onClick={() => handleCategoryChange('FiveVip','/secciones/FiveVip')}>Five VIP</button>
        {/*</Link>*/}
        {/*<Link to="/secciones/Italianos">*/}
          <button className="button" onClick={() => handleCategoryChange('Italianos','/secciones/Italianos')}>Italianos</button>
        {/*</Link>*/}
        {/*<Link to="/secciones/ItalianosFlush">*/}
          <button className="button" onClick={() => handleCategoryChange('ItalianosFlush','/secciones/ItalianosFlush')}>ItalianosFlush</button>
        {/*</Link>*/}
        {/*<Link to="/secciones/Discapacitados">*/}
          <button className="button" onClick={() => handleCategoryChange('Discapacitados','/secciones/Discapacitados')}>Discapacitados</button>
          {/*</Link>*/}
          {/*<Link to="/secciones/BlustarEvento">*/}
            <button className="button" onClick={() => handleCategoryChange('BlustarEvento','/secciones/BlustarEvento')}>BlustarEvento</button>
          {/*</Link>*/}
          {/*<Link to="/secciones/BlustarObra">*/}
            <button className="button" onClick={() => handleCategoryChange('BlustarObra','/secciones/BlustarObra')}>BlustarObra</button>
          {/*</Link>*/}
          {/*<Link to="/secciones/Armal">*/}
            <button className="button" onClick={() => handleCategoryChange('Armal','/secciones/Armal')}>Armal</button>
          {/*</Link>*/}
          {/*<Link to="/secciones/Fibra">*/}
            <button className="button" onClick={() => handleCategoryChange('Fibra','/secciones/Fibra')}>Fibra</button>
          {/*</Link>*/}
          {/*<Link to="/secciones/Lavamanos">*/}
            <button className="button" onClick={() => handleCategoryChange('Lavamanos','/secciones/Lavamanos')}>Lavamanos</button>
          {/* </Link> */}
      </div>

      <Routes>
        <Route path="/secciones/fivePeaks" element={<FivePeaks />} />
        <Route path="/secciones/fiveVip" element={<FiveVip />} />
        <Route path="/secciones/italianos" element={<Italianos />} />
        <Route path="/secciones/italianosFlush" element={<ItalianosFlush />} />
        <Route path="/secciones/discapacitados" element={<Discapacitados />} />
        <Route path="/secciones/blustarevento" element={<BlustarEvento />} />
        <Route path="/secciones/blustarobra" element={<BlustarObra />} />
        <Route path="/secciones/armal" element={<Armal />} />
        <Route path="/secciones/fibra" element={<Fibra />} />
        <Route path="/secciones/lavamanos" element={<Lavamanos />} />

      </Routes>
    </div>
  );
};

export default Inventario;