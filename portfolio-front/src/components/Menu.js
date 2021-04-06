import React from 'react-dom';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu-wrap">
            <label>
            <input
            type="checkbox" 
            className='toggler'
            />
            <div className='hamburger'><div></div></div>
            <div className='menu'>
                <div>
                    <div>
                        <ul>
                            <li><Link to={`/`}>Home</Link></li>
                            <li><a>About Me</a></li>
                            <li><Link to={`/projects`}>Projects</Link></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </label>
       </div>
    )
}

export default Menu;