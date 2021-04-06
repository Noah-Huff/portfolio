import React from 'react';
import Menu from './Menu';
import { Container } from 'react-bootstrap';


const Header = () => {
    return (
        <header className="header">
            <Container>
                <h1 className="header-name">Noah Huff</h1>
                <Menu className='menu-placement'/>
            </Container>
        </header>
    )
}

export default Header
