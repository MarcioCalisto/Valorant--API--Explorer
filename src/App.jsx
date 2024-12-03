import { useState } from 'react'
import './App.css'

/**
 * Nome do arquivo: App.jsx
 * 
 * @author Marcio Calisto
 * 
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as funcionalidades
 * de interação do usuário com a interface gráfica com PokeApi.
 * Aqui são tratados eventos de cliques, validações de entrada e comunicação
 * com APIs para envio e recebimento de dados.
 */

function App() {

  const [getIMG, setIMG] = useState([]);

  const consultar = async => {
    const resultado_api = fetch(`https://valorant-api.com/v1/weapons`);
    const resultado_obj = resultado_api.json();
    setIMG(resultado_obj.data);
  }

  return (
    <>
      <button className="btn btn-outline-success" onClick={consultar}>
        Buscar
      </button>

      {getIMG.map((weapon, index) => (
        <div key={index}>
          <img src={weapon.displayIcon} />

          {/* <p></p>
          <p></p> */}
          
        </div>
      ))}
    </>
  );
}

export default App;