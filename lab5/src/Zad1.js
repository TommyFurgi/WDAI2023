import React from 'react';
import { useNavigate } from 'react-router-dom';

const catInBoots = 'https://sm.ign.com/ign_pl/screenshot/default/obraz-2022-03-15-162505_eafr.jpg';

function Zad1() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return (
      <div>
        <button onClick={goToHome}>Home</button>
        <h1>da Pan 3</h1>
        <img src={catInBoots} alt="Cat in Boots" style={{ maxWidth: '1000px', height: 'auto' }} />
      </div>
  );
}


export default Zad1;
