import React from 'react';

import islLogo from '../../assets/images/pngwing.com.png';
import './Logo.css'

const logo = (props) => (
    <div className="Logo">
        <img src={islLogo} alt="MyLogo"/>
    </div>
);

export default logo;