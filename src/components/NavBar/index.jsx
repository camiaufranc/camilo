import React from 'react';
import './NavBar.css'

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg nav">
      <div class="container-fluid nav">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse nav" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item nav-ul-li">
              <a class="nav-link active text-white" href="./Pages/cursos.html">Cursos</a>
            </li>
            <li class="nav-item nav-ul-li">
              <a class="nav-link active text-white" href="./Pages/seminarios.html">Seminarios</a>
            </li>
            <li class="nav-item nav-ul-li">
              <a class="nav-link active text-white" href="./Pages/nosotros.html">Nosotros</a>
            </li>
            <li class="nav-item nav-ul-li">
              <a class="nav-link active text-white" href="./Pages/contacto.html">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}

export default NavBar; 