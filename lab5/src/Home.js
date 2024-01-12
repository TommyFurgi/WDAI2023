import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ username, onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <h1>Strona Startowa</h1>
      {username !== null && <h3>Zalogowano jako: {username}</h3>}
      <nav>
        <ul>
          <li>
            <Link to="/Zad1">Zadanie 1</Link>
          </li>
          <li>
            <Link to="/Zad2">Zadanie 2</Link>
          </li>
          <li>
            <Link to="/Zad4">Zadanie 4</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Wyloguj</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
