import React from 'react';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

import './NavBar.css'

export const NavBar = () => {
    return (
        <><div><NavLink class="titulo" to='/'>Mi marca</NavLink></div><nav class="navbar navbar-expand-lg nav">
            <div class="container-fluid nav">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse nav" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item nav-ul-li">
                            <NavLink class="nav-link active text-white" to='/categoria/cursos'>Cursos</NavLink>
                        </li>
                        <li class="nav-item nav-ul-li">
                            <NavLink class="nav-link active text-white" to='/categoria/seminarios'>Seminarios</NavLink>
                        </li>
                        <li class="nav-item nav-ul-li">
                            <NavLink class="nav-link active text-white" to='/categoria/nosotros'>Nosotros</NavLink>
                        </li>
                        <li class="nav-item nav-ul-li">
                            <NavLink class="nav-link active text-white" to='/cart'>
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