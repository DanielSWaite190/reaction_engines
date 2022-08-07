import React from 'react';
import { Link } from 'react-router-dom';

export default function DisplayCard(props) {
    
    return (
        <div class="card p-5" style={{width: "18rem"}}>
            <img class="card-img-top" src={props.engine.image} alt={'Picture of the '+props.engine.name} width="200" height="200" />
            
            <div className="card-body">
                <h5 class="card-title">{props.engine.name}</h5>
                <p class="card-text">Cycle Type: {props.engine.cycle_type}</p>
                <p class="card-text">Thrust Capacity: {props.engine.thrust} MN</p>
                <p class="card-text">Specific Impulse: {props.engine.specific_impulse}</p>
                <Link to={`engine/${props.engine.id}`} className='link-btn-user'>Open</Link>
            </div>
        </div>
    )
}