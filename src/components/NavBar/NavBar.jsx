import React from 'react';
import '../NavBar/NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './logo.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={Logo} alt="logo de eLiving" className='brand-logo'/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Living
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Sofás</a></li>
                                <li><a className="dropdown-item" href="#">Sillones</a></li>
                                <li><a className="dropdown-item" href="#">Mesas</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Comedor
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Sillas</a></li>
                                <li><a className="dropdown-item" href="#">Mesas</a></li>
                                <li><a className="dropdown-item" href="#">Baiuts</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dormitorio
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Respaldos</a></li>
                                <li><a className="dropdown-item" href="#">Mesas de Luz</a></li>
                                <li><a className="dropdown-item" href="#">Guardado</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
};

export default NavBar;

