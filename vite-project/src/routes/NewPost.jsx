import React from 'react'
import './NewPost.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';



function NewPost() {

  const navigate = useNavigate();

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [telefone, setTelefone] = useState();
  const [idade, setIdade] = useState();
  const [endereco, setEndereco] = useState();


const createPost = async (e)=>{
  e.preventDefault();
  // console.log(nome);
  // console.log(email);
  // console.log(cpf);
  // console.log(telefone);
  // console.log(idade);
  // console.log(endereco);

await axios.post('http://localhost:3000/clientes/', {
  nome: nome,
  email: email,
  cpf: cpf,
  telefone: telefone,
  idade: idade,
  endereco: endereco,
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.error(error);
});

}


  return (
    <div className='new-post' >
      <h2>Novo Cliente</h2>
      <form onSubmit={(e)=>createPost(e)}>
        <div className='form-control'>
          <label htmlFor='name' >Nome:</label>
          <input type="text" 
                 name="nome"
                 id='nome'
                 placeholder='Digite o nome'
                 onChange={(e)=> setNome(e.target.value)}
                 />
        </div>

        <div className='form-control'>
          <label htmlFor='email'> Email: </label>
          <input type="text"
                 name="email"
                 id='email'
                 placeholder='Digite o seu e-mail'
                 onChange={(e)=> setEmail(e.target.value)}
                 />
        </div>

        <div className='form-control'>
          <label htmlFor='cpf'>Cpf:</label>
          <input type="text"
                 name="cpf"
                 id='cpf'
                 placeholder='Digite o seu CPF'
                 onChange={(e)=> setCpf(e.target.value)}
                 />
        </div>

        <div className='form-control'>
          <label htmlFor='telefone'>Telefone</label>
          <input type="text"
                 name="telefone"
                 id='telefone'
                 placeholder='Digite o seu Telefone'
                 onChange={(e)=> setTelefone(e.target.value)}
                 />
        </div>

        <div className='form-control'>
          <label htmlFor='idade'>Idade:</label>
          <input name="idade"
                 id='idade'
                 placeholder='Digite o sua Idade'
                 onChange={(e)=> setIdade(e.target.value)}
                 />
        </div>

        <div className='form-control'>
          <label htmlFor='endereco'>Endereço:</label>
          <input type="text"
                 name="endereco"
                 id='endereco'
                 placeholder='Digite o seu Endereco' 
                 onChange={(e)=> setEndereco(e.target.value)}
                 />
        </div>


        <input type="submit" value="Enviar" className='btn' />
    </form>
    </div>
  )
}

export default NewPost