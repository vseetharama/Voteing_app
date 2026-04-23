import React from 'react';
import NavbarBrand from './NavbarBrand';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav className="d-flex justify-content-between align-items-center px-4 py-3 w-100 h-100 nav">
                <NavbarBrand />
            </nav>
        </div>
    )
}

export default Navbar