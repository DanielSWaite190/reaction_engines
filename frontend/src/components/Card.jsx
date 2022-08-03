import React from 'react';

function Card({engine}) {
    return (
        <div className="card">
            <img src={engine.image} alt={'Picture of the '+engine.name} width="130" height="130" />
            <h1>{engine.name}</h1>
            <h5>Cycle Type: {engine.cycle_type}</h5>
            <h5>Thrust Capacity: {engine.thrust} MN</h5>
            <h5>Specific Impulse: {engine.specific_impulse}</h5>
        </div>
    )
}

export default Card;