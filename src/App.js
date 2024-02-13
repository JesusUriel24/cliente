import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Inventario from './components/Inventario';
import Contratos from './components/Contratos'; // Importa el componente de Contratos
import BlustarEvento from './components/secciones/BlustarEvento';
import FivePeaks from './components/secciones/FivePeaks';
import FiveVip from './components/secciones/FiveVip';
import BlustarObra from './components/secciones/BlustarObra';
import Fibra from './components/secciones/Fibra';
import Italianos from './components/secciones/Italianos';
import ItalianosFlush from './components/secciones/ItalianosFlush';
import Lavamanos from './components/secciones/Lavamanos';
import Discapacitados from './components/secciones/Discapacitados';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contratos" element={<Contratos />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/secciones/FivePeaks" element={<FivePeaks />} />
          <Route path="/secciones/FiveVip" element={<FiveVip />} />
          <Route path="/secciones/BlustarEvento" element={<BlustarEvento />} />
          <Route path="/secciones/BlustarObra" element={<BlustarObra />} />
          <Route path="/secciones/Discapacitados" element={<Discapacitados />} />
          <Route path="/secciones/Fibra" element={<Fibra />} />
          <Route path="/secciones/Italianos" element={<Italianos />} />
          <Route path="/secciones/ItalianosFlush" element={<ItalianosFlush />} />
          <Route path="/secciones/Lavamanos" element={<Lavamanos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;