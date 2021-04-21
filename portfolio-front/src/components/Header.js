import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import NHicon3 from '../public/NHicon3-noBackground.svg';


const Header = () => {
    return (
        <header className="header">
                <Link to='/'><img className="nh-icon" width="50px" src={NHicon3}/></Link>
                <Menu className='menu-placement'/>
        </header>
    )
}

export default Header
