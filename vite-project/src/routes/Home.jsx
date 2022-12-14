import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import axios from 'axios';



function Home() {

const[post, setPost] = useState([]);

const getPosts = async () =>{
  
  try{
    const response = await axios.get("http://localhost:3000/clientes/");
    
    const data = response.data;

    setPost(data)
    
    console.log(data);

  }catch(e){
    console.log(e);
  }
}
useEffect(()=>{
  getPosts();
},[])

  return <div className='container'>
            <h1>Clientes</h1>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col' >ID</th>
                  <th scope='col' >Nome</th>
                  <th scope='col' >E-mail</th>
                  <th scope='col' >CPF</th>
                  <th scope='col' >Idade</th>
                  <th scope='col' >Telefone</th>  
                  <th scope='col' >Endereco</th>            
                </tr>
              </thead>
              <tbody>
                  {post.map(post =>{
                    return <tr key={post.cod_cliente}>
                        <td>{post.cod_cliente}</td>
                        <td>{post.nome}</td>
                        <td>{post.email}</td>
                        <td>{post.cpf}</td>
                        <td>{post.idade}</td>
                        <td>{post.telefone}</td>
                        <td>{post.endereco}</td>
                    </tr>
                  })}
              </tbody>
            </table>   
         </div>
         
  
}

export default Home