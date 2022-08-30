import React from 'react';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

import './NavBar.css'

export const NavBar = () => {
    return (
        <><div><NavLink className="titulo" to='/'>Mi marca</NavLink></div><nav className="navbar navbar-expand-lg nav">
            <div className="container-fluid nav">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item nav-ul-li">
                            <NavLink className="nav-link active text-white" to='/categoria/cursos'>Cursos</NavLink>
                        </li>
                        <li className="nav-item nav-ul-li">
                            <NavLink className="nav-link active text-white" to='/categoria/seminarios'>Seminarios</NavLink>
                        </li>
                        <li className="nav-item nav-ul-li">
                            <NavLink className="nav-link active text-white" to='/categoria/nosotros'>Nosotros</NavLink>
                        </li>
                        <li className="nav-item nav-ul-li">
                            <NavLink className="nav-link active text-white" to='/cart'>
                            <CartWidget/>
                            </NavLink>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav></>
    );
}

export default NavBar; 