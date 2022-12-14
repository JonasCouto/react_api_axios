import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import axios from 'axios';
import Button from 'react-bootstrap/Button';



function HomeCar() {

const[post, setPost] = useState([]);

const getPosts = async () =>{
  
  try{
    const response = await axios.get("http://localhost:3000/carros/");
    
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
            <h1>Carros</h1>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col' >ID</th>
                  <th scope='col' >Modelo</th>
                  <th scope='col' >Marca</th>
                  <th scope='col' >Cor</th>
                  <th scope='col' >Placa</th>
                  <th scope='col' >Preco</th>            
                </tr>
              </thead>
              <tbody>
                  {post.map(post =>{
                    return <tr key={post.cod_carro}>
                        <td>{post.cod_carro}</td>
                        <td>{post.nome}</td>
                        <td>{post.marca}</td>
                        <td>{post.cor}</td>
                        <td>{post.placa}</td>
                        <td>{post.preco}</td>
                    </tr>
                  })}
              </tbody>
            </table>   
         </div>
         
  
}

export default HomeCar;