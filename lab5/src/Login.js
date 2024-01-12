import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    console.log('Login credentials:', username, password);

    try {
      const response = await axios.post('http://localhost:3001/api/login', { username, password });
      const token = response.data.token;
  
      localStorage.setItem('authToken', token);
      localStorage.setItem('username', username);
  
      onLogin(token, username);
      navigate('/home');
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid credentials. Please try again.');
      console.log('Error response:', error.response); // Dodaj ten log
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" ref={usernameRef} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" ref={passwordRef} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
