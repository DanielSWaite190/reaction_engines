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

            <div className="card container " style={{width: "35rem", height: "35rem"}}>

                <div className="row">
                    <div class="text-center"><h1>{engine.name}</h1></div>
                   
                    <img src={engine.image} alt={'Picture of the '+engine.name} width="300" height="300" style={{"object-fit": "contain"}}/>
                    
                    <div className="col">
                        <p>Cycle Type: {engine.cycle_type}</p>
                        <p>Thrust Capacity: {engine.thrust} MN</p>
                        <p>Thrust To Weight Ration: {engine.thrust_to_weight}:1</p>
                    </div>
                    
                    <div className="col">
                        <p>Specific Impulse (Sea Level): {engine.specific_impulse_cl}</p>
                        <p>Specific Impulse (vacuum): {engine.specific_impulse_vac}</p>
                        <p>Chamber Pressure: {engine.pressure}</p>
                    </div>
                    
                    <div class="text-center btn">
                        <Link to={`/engine/${engine.id}/eddit`} className='link-btn-user'>Eddit</Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default DetailCard;