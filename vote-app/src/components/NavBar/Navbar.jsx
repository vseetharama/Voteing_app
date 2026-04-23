import React from 'react';
import NavbarBrand from './NavbarBrand';

const Navbar = () => {
    return (
        <nav className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
            <NavbarBrand />
        </nav>
    )
}

export default Navbar