import React from 'react'
import './NewCarro.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function NewCarro() {

  const navigate = useNavigate();

  const [nome, setNome] = useState();
  const [marca, setMarca] = useState();
  const [cor, setCor] = useState();
  const [placa, setPlaca] = useState();
  const [preco, setPreco] = useState();


const createPost = async (e)=>{
  e.preventDefault();
  // console.log(nome);
  

await axios.post('http://localhost:3000/carros/', {
  nome: nome,
  marca: marca,
  cor: cor,
  placa: placa,
  preco: preco,
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
      <h2>Novo Carro</h2>
      <form onSubmit={(e)=>createPost(e)}>
        <div className='form-control'>
          <label htmlFor='name' >Modelo:</label>
          <input type="text" 
                 name="nome"
                 id='nome'
                 placeholder='Digite o modelo'
                 onChange={(e)=> setNome(e.target.value)}
                 />
        </div>

        <div className='form-control'>
          <label htmlFor='marca'> Marca </label>
          <input type="text"
                 name="marca"
                 id='marca'
                 placeholder='Digite o seu e-mail'
                 onChange={(e)=> setMarca(e.target.value)}
                 />
        </div>

        <div className='form-control'>
          <label htmlFor='cor'>Cor</label>
          <input type="text"
                 name="cor"
                 id='cor'
                 placeholder='Digite a Cor'
                 onChange={(e)=> setCor(e.target.value)}
                 />
        </div>

        <div className='form-control'>
          <label htmlFor='placa'>Placa</label>
          <input type="text"
                 name="placa"
                 id='placa'
                 placeholder='Digite a Placa'
                 onChange={(e)=> setPlaca(e.target.value)}
                 />
        </div>

        <div className='form-control'>
          <label htmlFor='preco'>Preço</label>
          <input name="preco"
                 id='preco'
                 placeholder='Digite o Valor'
                 onChange={(e)=> setPreco(e.target.value)}
                 />
        </div>

        <input type="submit" value="Enviar" className='btn' />
    </form>
    </div>
  )
}

export default NewCarro