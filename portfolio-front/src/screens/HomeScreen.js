import React from 'react';
import { Container } from 'react-bootstrap';
import Profile from '../components/Profile';

const HomeScreen = () => {
    return (
        <div>
            <Container>
                <Profile/>
            </Container>
        </div>
    )
}

export default HomeScreen;