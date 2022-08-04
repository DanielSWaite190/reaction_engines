import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DetailCard(props) {

    const {id} = useParams();
    const [engine, setEngine] = useState([]);


    const getData = async () => {
        const response = await fetch(`http://localhost:4000/engine/${id}`);
        const data = await response.json();
        setEngine(data)
        console.log('hi')
    }

    // console.log('Here', id, engine)

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="card">
            <img src={engine.image} alt={'Picture of the '+engine.name} width="130" height="130" />
            <h1>{engine.name}</h1>
            <h5>Cycle Type: {engine.cycle_type}</h5>
            <h5>Thrust Capacity: {engine.thrust} MN</h5>
            <h5>Specific Impulse: {engine.specific_impulse}</h5>
            <Link to={`/engine/${engine.id}/eddit`} className='link-btn-user'>Eddit</Link>
        </div>
    )
}

export default DetailCard;