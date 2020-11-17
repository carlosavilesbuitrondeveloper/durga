import React from 'react';

const Headline:React.FC<{copy:string}> = ({copy})=>{
    return(<h1 className="headline">{copy}</h1>);
};

export default Headline;