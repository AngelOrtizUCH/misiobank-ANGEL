// Aside.js
import React, { useState } from 'react';
import '../Aside/Aside.css';

const Aside = ({ onIngredientClick }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleIngredientClick = (ingredient) => {
    const updatedIngredients = selectedIngredients.includes(ingredient)
      ? selectedIngredients.filter(item => item !== ingredient)
      : [...selectedIngredients, ingredient];

    setSelectedIngredients(updatedIngredients);
    onIngredientClick(updatedIngredients);
  };

  const handleCookClick = () => {
    console.log('Cocina', selectedIngredients);
    // Puedes hacer algo más con los ingredientes aquí si es necesario
  };

  const handleSalirClick = () => {
    // Refresca la página al hacer clic en "SALIR"
    window.location.reload();
  };

  return (
    <div className='aside'>
      <p
        className={`p-aside ${selectedIngredients.includes('Pan Superior') && 'selected'}`}
        onClick={() => handleIngredientClick('Pan Superior')}
      >
        Pan Superior
      </p>
      <p
        className={`p-aside ${selectedIngredients.includes('Pan Inferior') && 'selected'}`}
        onClick={() => handleIngredientClick('Pan Inferior')}
      >
        Pan Inferior
      </p>
      <p
        className={`p-aside ${selectedIngredients.includes('Mortadella') && 'selected'}`}
        onClick={() => handleIngredientClick('Mortadella')}
      >
        Mortadella
      </p>
      <p
        className={`p-aside ${selectedIngredients.includes('Lechuga') && 'selected'}`}
        onClick={() => handleIngredientClick('Lechuga')}
      >
        Lechuga
      </p>
      <p
        className={`p-aside ${selectedIngredients.includes('Tomate') && 'selected'}`}
        onClick={() => handleIngredientClick('Tomate')}
      >
        Tomate
      </p>
      <p
        className={`p-aside ${selectedIngredients.includes('Salsa Secreta') && 'selected'}`}
        onClick={() => handleIngredientClick('Salsa Secreta')}
      >
        Salsa Secreta
      </p>
      <button onClick={handleSalirClick}>SALIR</button>
    </div>
  );
};

export default Aside;
