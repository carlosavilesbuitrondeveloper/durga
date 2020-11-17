import React from 'react';

//assets
import Icon from '../assets/icon.svg';

const Interaction:React.FC = ()=>{
    return(
        <div className="interaction">
            <button className="primary">Volunteer <img src={Icon} className="icon" alt="button icon" /></button>
            <button className="secondary">Learn More <img src={Icon} className="icon" alt="button icon" /></button>
         </div>
    );
};

export default Interaction;