import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <h2>
            <Link to={`/`} >Loja do Magnata</Link>
        </h2>

        <ul>
            <li>
                <Link to={`/`} className="new-btn" >Home de Clientes</Link>
            </li>
            <li>
                <Link to={`/new`} className="new-btn">Novo Cliente</Link>    
            </li>
            <li>
                <Link to={`/newCar`} className="new-btn">Lista de Carros</Link>    
            </li>
            <li>
                <Link to={`/novoCarro`} className="new-btn">Novo de Carro</Link>    
            </li>
        </ul>

    </nav>
  )
}

export default Navbar