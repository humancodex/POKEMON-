import React from 'react';

export default function Pokemon({image,name,type}) {
    return <div>
        <h3>{name}</h3>
        <img src={image} alt="image not found" width="200px" height="250px"/>
        <h5>{type}</h5>
    </div> 
};


