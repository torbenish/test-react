import { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";

const Home = () => {
  const [ isLoad, setIsLoad ] = useState(true);
  return (
    <Container>
      { isLoad ? (
        <div>
          <p>Carregando...</p>
        </div>

      ) : (
        <div>
          <h1>Home</h1>
          <Link to="/signin">Acessar página de contato</Link>
        </div>
      )}
      <div className="button-container">
        <button onClick={ () => setIsLoad(!isLoad)}> 
          clique aqui 
        </button>
      </div>
    </Container>
  );
};

export default Home;
