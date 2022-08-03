import React from 'react';

function Card({engine}) {
    return (
        <div className="card">
            <h1>Name{engine.name}</h1>
            <h5>{engine.cycle_type}</h5>
            <h5>{engine.cycle_type}</h5>
            <h5>{engine.thrust}</h5>
            <h5>{engine.specific_impulse}</h5>
        </div>
    )
}

export default Card