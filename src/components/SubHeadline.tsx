import React from 'react';

const SubHeadline:React.FC<{copy:string}> = ({copy})=>{
    return(<h2 className="front">{copy}</h2>);
};  

export default SubHeadline;