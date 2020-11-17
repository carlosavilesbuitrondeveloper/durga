import React from 'react';

//assets
import Logo from '../assets/logo.svg'

const Intro:React.FC = ()=>{
    return(
        <div className="intro-wrapper">
            <div className="intro-bg"></div>
            <div className="intro-body">
            <img src={Logo} alt="Durga Purga Logo" />
            </div>
        </div>
    );
};

export default Intro;