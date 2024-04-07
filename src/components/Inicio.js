// cliente/src/components/Inicio.js
import React from 'react';
import './styles/styles.css'; // Importa el archivo CSS para los estilos del inicio
import imagen1 from '../components/assets/imagen1.jpg'; // Importa la primera imagen
import imagen2 from '../components/assets/imagen2.jpg'; // Importa la segunda imagen

const Inicio = () => {
  return (
    <div className="inicio-container">
      <div className="imagen-container">
        <img src={imagen1} alt="Imagen 1" />
      </div>
      <div className="texto-container">
        <h1>Bienvenido a SaniMovil de Tlaxcala</h1>
        <p>En SANIMÓVIL DE TLAXCALA usted encontrará servicio y atención en la renta de sanitarios móviles para eventos. Dentro de nuestros productos en renta podemos ofrecerle sanitarios de diferentes tipos, tales como: V.I.P., de obra, para personas con capacidades diferentes, lavamanos, regaderas y módulos para gel alcohol y sanitizante.</p>
      </div>
      <div className="imagen-container">
      <img src={imagen2} alt="Imagen 2" />
      </div>
    </div>
  );
};

export default Inicio;
