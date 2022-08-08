import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DetailCard() {

    const {id} = useParams();
    const [engine, setEngine] = useState([]);

    const getData = async () => {
        const response = await fetch(`http://localhost:4000/engine/${id}`);
        const data = await response.json();
        setEngine(data)
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="container bg-dark">

            <div className="card container " style={{width: "30rem", height: "30rem"}}>

                <div className="container text-center bg-primary">
                    <img src={engine.image} alt={'Picture of the '+engine.name} width="300" height="300" />
                    <h1>{engine.name}</h1>
                    <h5>Cycle Type: {engine.cycle_type}</h5>
                    <h5>Thrust Capacity: {engine.thrust} MN</h5>
                    <h5>Specific Impulse: {engine.specific_impulse}</h5>
                    <Link to={`/engine/${engine.id}/eddit`} className='link-btn-user'>Eddit</Link>
                </div>

            </div>

        </div>
    )
}

export default DetailCard;