import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/rickandmorty.png';
import { motion } from 'framer-motion';

const Nav: React.FC = () => {
    return (
        <header>
            <motion.nav
                className="nav-bar container"
                animate={{ x: [-800, 100, 0]}}
            >
            <img src={Logo} alt="Logo" /> 

                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/rm">About</Link>
                    <Link to="/form">Form</Link>
                    <Link to="/todo">Todo</Link>
                </div>
            </motion.nav>
        </header>
    );
};

export default Nav;