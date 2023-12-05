import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from '../../actions/authActions2';
import '../Login/Login.css';

const Login = ({ isAuthenticated, loginSuccess, loginFailure }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert("Bienvenido Bob!");
    // Simulación de autenticación
    const validUsername = 'bob';
    const validPassword = 'sponja';

    if (username === validUsername && password === validPassword) {
      loginSuccess();
    } else {
      loginFailure();
    }
  };

  return (
    <div>
      <div className="login-container">
      <h1>WELCOME TO THE KRUSTY KRAB</h1>
      <h2>NOMBRE DE USUARIO</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <h2>CONTRASEÑA</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
      <div><a href='https://www.youtube.com/watch?v=nJrHppTEaN4'>Haga clic para recuperar su password</a></div>
      
    </div>
    
    
    
  );
};
//<p>{isAuthenticated ? '¡Inicio de sesión exitoso!' : 'Inicio de sesión fallido'}</p>
const mapStateToProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps, { loginSuccess, loginFailure })(Login);
