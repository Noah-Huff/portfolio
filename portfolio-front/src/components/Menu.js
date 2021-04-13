import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    let [check, setCheck] = useState(false);

    let toggleMenu = () => {
        if (check) {
            setCheck(false);
        } else {
            setCheck(true);
        }
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