import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Zad1 from './Zad1';
import Zad2 from './Zad2';
import Zad4 from './Zad4';
import Login from './Login';

const App = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);
  const [username, setUsername] = useState(localStorage.getItem('username') || null);
  

  const handleLogin = (token, username) => {
    setAuthToken(token);
    setUsername(username);
  };  

  const handleLogout = () => {
    setAuthToken(null);
    setUsername(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
  };

  const isUserLoggedIn = authToken !== null;

  return (
    <Router>
      <div>
        <Routes>
          
          <Route path="/Zad1" element={isUserLoggedIn ? <Zad1 authToken={authToken} username={username} /> : <Navigate to="/" />} />
          <Route path="/Zad2" element={isUserLoggedIn ? <Zad2 authToken={authToken} username={username} /> : <Navigate to="/" />} />
          <Route path="/Zad4" element={isUserLoggedIn ? <Zad4 authToken={authToken} username={username} /> : <Navigate to="/" />} />
          <Route path="/home" element={isUserLoggedIn ? <Home authToken={authToken} username={username} onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
