import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Inventario from './components/Inventario';
import Contratos from './components/Contratos'; // Importa el componente de Contratos

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contratos" element={<Contratos />} />
          <Route path="/inventario" element={<Inventario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;