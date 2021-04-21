import React, { useState } from 'react';
import { Link, Redirect, Route, useHistory } from 'react-router-dom';
import { svgZoom } from '../javascripts/animations';
import { Button } from 'react-bootstrap';

const Menu = () => {
    let [check, setCheck] = useState(false);
    let history = useHistory();

    const toggleMenu = () => {
        if (check) {
            setCheck(false);
        } else {
            setCheck(true);
        }
    }

    const test = async () => {
        toggleMenu();
        let wait = await svgZoom();
        console.log("WAIT ", wait);
        history.push("/projects");
    }

    return (
        <div className="menu-wrap">
            <label>
            <input
            type="checkbox" 
            className='toggler'
            onChange={toggleMenu}
            checked={check}
            />
            <div className='hamburger'><div></div></div>
            <div className='menu'>
                <div>
                    <div>
                        <ul>
                            <li><Link to={`/`} onClick={toggleMenu}>Home</Link></li>
                            {/* <li><a>About Me</a></li> */}
                            {/* <li><Button onClick={test}>Test</Button></li> */}
                            <li><Link to={`/projects`} onClick={toggleMenu}>Projects</Link></li>
                            <li><Link to={'/contact'} onClick={toggleMenu}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            </label>
       </div>
    )
}

export default Menu;