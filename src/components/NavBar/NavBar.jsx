import React from 'react';
import '../NavBar/NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './logo.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={Logo} alt="logo" className='brand-logo'/><br/>Records</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Rock
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Rock Nacional</a></li>
                                <li><a className="dropdown-item" href="#">Rock Internacional</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pop
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Nacional</a></li>
                                <li><a className="dropdown-item" href="#">Internacional</a></li>
                                <li><a className="dropdown-item" href="#">Latino</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Otros
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">R&B</a></li>
                                <li><a className="dropdown-item" href="#">Brit Rock</a></li>
                                <li><a className="dropdown-item" href="#">Electrónica</a></li>
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

