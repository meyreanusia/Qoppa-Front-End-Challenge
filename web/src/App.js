import handleNewUser from './api/index.js';
import CadastroConcluido from './telas/CadastroConcluido.js';
import { useState } from 'react';
import './App.css';

function App() {
  const [isCadastroConcluido, setIsCadastroConcluido] = useState(false);
  async function inputValidation(event){
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const data = {
        username: username,
        email: email,
        password: password
    }

    const response =  await handleNewUser(data);
    if(response.status === 200){
      setIsCadastroConcluido(true)

    }
    else{
      console.log("Responsta inválida da API");
    }
  }

  return (
    <div className="App">
      
      {isCadastroConcluido? (<CadastroConcluido/>):(
      <form action="#" id="form" onSubmit={inputValidation}>
      <label htmlFor="username">User Name:</label>
      <input type="text" id="username" autoComplete="username" required/>
      <label htmlFor="email">Email: </label>
      <input type="email" name="" id="email" autoComplete='email' required/>
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" autoComplete="current-password"/><button type="submit" required>Register</button>
      </form>)}
      
    </div>
  );
}

export default App;
