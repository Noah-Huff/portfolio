import React from 'react-dom';

const Menu = () => {
    return (
        <div className="menu-wrap">
            <input
            type="checkbox" 
            className='toggler'
            />
            <div className='hamburger'><div></div></div>
            <div className='menu'>
                <div>
                    <div>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Work</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Menu;