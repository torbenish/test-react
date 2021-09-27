import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";



const Contact = () => {
  const [ data, setData ] = useState({})
  return (
    <Container>
      <div className="form-wrapper">
        <h1>Contact</h1>
        Name: {data?.name}
        <br />
        Email: {data?.email}
        <div className="card">
          <form onSubmit={ () => {} }>
            <input 
            type="text" 
            placeholder="nome" 
            onChange = { e => setData({ ...data, name: e.target.value }) }
            />
            <input 
            type="text" 
            placeholder="email" 
            onChange = { e => setData({ ...data, email: e.target.value }) }
            />
            <input 
            type="submit" 
            value="cadastrar"
            />
          </form>
        </div>
        <Link to="/">Voltar para home</Link>
      </div>
    </Container>
  );
};

export default Contact;
