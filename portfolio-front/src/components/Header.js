import React, { useState } from 'react';
import Menu from './Menu';
import Checkbox from './Checkbox';
import PropTypes from 'prop-types';

const Header = ({check, expandMenu}) => {
    const [menu, setMenu] = useState(false);
    return (
        <div className="header-outer header">
            <h1 className="header-name">Noah Huff</h1>
            <Menu className='menu-placement'/>
            <div className="header-inner">
                <span>
                    {/* <img src='/images/header-background.png'></img> */}
                </span>
                <span>
                    {/* <img src="/images/header-background.png"></img> */}
                </span>
            </div>           
        </div>
    )
}

export default Header
