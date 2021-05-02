import React, { useEffect } from 'react';
import MountainLake from '../components/MountainLake';
import Profile from '../components/Profile';
import Rellax from 'rellax';
import { Container } from 'react-bootstrap';
import ArialNoahHuff from '../public/ArialNoahHuff.svg';
import pathLength from '../public/pathLength';
import NameTitle from '../components/NameTitle';


const HomeScreen = () => {

    useEffect(() => {
        pathLength();
        let name = new Rellax('#name-svg', {
            speed: -3,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    }, [])

    return (
        <div>
            <NameTitle/>
            {/* <img src={ArialNoahHuff} id="name-svg"></img> */}
            {/* <h1 id="name-title">Noah Huff</h1> */}
            < MountainLake />
            <div className="under-lake">
                    <Profile/>
            </div>
        </div>
    )
}

export default HomeScreen;