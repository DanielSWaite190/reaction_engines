import React from 'react';
import { Link } from 'react-router-dom';

function DisplayCard(props) {
    return (
        <div className="card">
            <img src={props.engine.image} alt={'Picture of the '+props.engine.name} width="130" height="130" />
            <h1>{props.engine.name}</h1>
            <h5>Cycle Type: {props.engine.cycle_type}</h5>
            <h5>Thrust Capacity: {props.engine.thrust} MN</h5>
            <h5>Specific Impulse: {props.engine.specific_impulse}</h5>
            <Link to={`engine/${props.engine.id}`} className='link-btn-user'>Open</Link>
        </div>
    )
}

export default DisplayCard;