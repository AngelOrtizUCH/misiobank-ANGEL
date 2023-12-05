// Dashboard.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from '../../actions/authActions2';
import Header from '../Header/Header';
import Aside from '../Aside/Aside';
import Section from '../Section/Section';
import '../Dashboard/Dashboard.css';

const Dashboard = ({ isAuthenticated, loginSuccess, loginFailure }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleIngredientClick = (ingredients) => {
    // Puedes hacer algo con los ingredientes seleccionados, si es necesario
    console.log('Ingredientes seleccionados:', ingredients);
    setSelectedIngredients(ingredients);
  };

  const handleCookClick = (ingredients) => {
    // Puedes hacer algo con los ingredientes seleccionados, si es necesario
    console.log('Cocinando con:', ingredients);
  };

  return (
    <div>
      <Header />
      <h2>Cocina</h2>
      <div className='caja-dashboard'>
      <Aside onCookClick={handleCookClick} onIngredientClick={handleIngredientClick} />
        <Section selectedIngredients={selectedIngredients} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps, { loginSuccess, loginFailure })(Dashboard);
