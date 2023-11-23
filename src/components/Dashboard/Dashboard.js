import React from 'react';
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from '../../actions/authActions2';
import Header from '../Header/Header';
import Aside from '../Aside/Aside';
import Section from '../Section/Section';
import '../Dashboard/Dashboard.css'

const Dashboard = ({ isAuthenticated, loginSuccess, loginFailure }) => {

    return (
      <div>

        <Header />
      
        <h2>Mi informacion</h2>
        <div className='caja-dashboard'>
          <Aside />
          <Section />
        </div>
        
      </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated,
});
  
export default connect(mapStateToProps, { loginSuccess, loginFailure })(Dashboard);