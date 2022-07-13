import React from 'react';
import CartWidget from '../CartWidget';

import './NavBar.css'

export const NavBar = () => {
    return (
        <><div><a class="titulo" href="#">Mi marca</a></div><nav class="navbar navbar-expand-lg nav">
            <div class="container-fluid nav">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse nav" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item nav-ul-li">
                            <a class="nav-link active text-white" href="#">Cursos</a>
                        </li>
                        <li class="nav-item nav-ul-li">
                            <a class="nav-link active text-white" href="#">Seminarios</a>
                        </li>
                        <li class="nav-item nav-ul-li">
                            <a class="nav-link active text-white" href="#">Nosotros</a>
                        </li>
                        <li class="nav-item nav-ul-li">
                            <a class="nav-link active text-white" href="#">
                            <CartWidget/>
                            </a>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav></>
    );
}

export default NavBar; 