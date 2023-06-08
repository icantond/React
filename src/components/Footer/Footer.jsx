import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./logo.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className=" footer-container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-cente p-3 container">
                    <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        {<img src={logo} alt='logo' className='footer-logo'/>}
                    </Link>
                    <span className="mb-3 mb-md-0 text-body-secondary">©2023 Metro Records</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
