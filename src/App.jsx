import { useState } from 'react';
import './App.css';

function App() {
  const [getIMG, setIMG] = useState([]);

  const consultar = async () => {
    const resultado_api = await fetch('https://valorant-api.com/v1/weapons');
    const resultado_obj = await resultado_api.json();
    setIMG(resultado_obj.data); 
  };

  return (
    <>
      <button className="btn btn-outline-success" onClick={consultar}>
        Buscar
      </button>
      
        {getIMG.map((weapon, index) => (
          <div key={index}>
            <img src={weapon.displayIcon} />
          </div>
        ))}

    </>
  );
}

export default App;