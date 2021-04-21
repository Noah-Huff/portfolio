import React, { useEffect } from 'react';
import MountainLake from '../components/MountainLake';
import Profile from '../components/Profile';
import Rellax from 'rellax';
import { Container } from 'react-bootstrap';


const HomeScreen = () => {

    useEffect(() => {
        let name = new Rellax('#name-title', {
            speed: -5,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }, [])

    return (
        <div>
            <h1 id="name-title" >Noah Huff</h1>
            < MountainLake />
            <div class="under-lake">
                    <Profile/>
            </div>
        </div>
    )
}

export default HomeScreen;