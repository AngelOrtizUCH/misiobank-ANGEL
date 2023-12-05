// Section.js
import React, { useState, useEffect } from 'react';
import '../Section/Section.css';
import HamburguesaImage from './img/hamburguesa.jpg'; // Ajusta la ruta según tu estructura de carpetas
import CocinaImage from './img/cocina.jpg'; // Ajusta la ruta según tu estructura de carpetas

const Section = ({ selectedIngredients }) => {
  const [result, setResult] = useState(CocinaImage); // Establece la imagen de la cocina como valor inicial

  const pasoAPasoActual = [
    'Pan Inferior',
    'Lechuga',
    'Tomate',
    'Mortadella',
    'Salsa Secreta',
    'Pan Superior',
  ];

  useEffect(() => {
    // Verifica si se han seleccionado todos los ingredientes
    const allIngredientsSelected = pasoAPasoActual.every(ingredient => selectedIngredients.includes(ingredient));

    // Si todos los ingredientes están seleccionados, evalúa la lógica
    if (allIngredientsSelected) {
      const isEqual = JSON.stringify(selectedIngredients) === JSON.stringify(pasoAPasoActual);

      if (isEqual) {
        setResult(HamburguesaImage);
      } else {
        setResult('¡PREPARA BONITO BOB SPONJA!');
      }
    }
    // Si no todos los ingredientes están seleccionados, no actualiza el resultado
  }, [selectedIngredients]);

  const resultClassName = result !== '¡PREPARA BONITO BOB SPONJA!' ? 'success' : 'error';

  return (
    <div className='section'>
      {result !== '¡PREPARA BONITO BOB SPONJA!' ? (
        <img src={result} alt='Hamburguesa' className='hamburguesa-img' />
      ) : (
        <h2 className={`h2-section ${resultClassName}`}>{result}</h2>
      )}
    </div>
  );
};

export default Section;
