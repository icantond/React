import React from 'react';
import '../NavBar/NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './logo.png';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand"><img src={Logo} alt="logo" className='brand-logo'/><br/><span className='brand-subtitle'>RECORDS</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <NavLink to={'category/Rock Nacional'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option nav-link'}>Rock Nacional</NavLink>
                        <NavLink to={'category/Rock Internacional'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option nav-link'}>Rock Internacional</NavLink>
                        <NavLink to={'category/Pop Nacional'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option nav-link'}>Pop Nacional</NavLink>
                        <NavLink to={'category/Pop Internacional'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option nav-link'}>Pop Internacional</NavLink>
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
};

export default NavBar;

