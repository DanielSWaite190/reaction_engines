import React, {useState} from 'react';

function EditForm(props) {
    
    const [name, setName] = useState('');
    const [cycle_type, setCycleType] = useState('');
    const [fule_type, setFule_type] = useState('');
    const [thrust, setThrust] = useState('');
    const [thrust_to_weight, setThrust_to_weight] = useState('');
    const [specific_impulse_cl, setSpecific_impulse_cl] = useState('');
    const [specific_impulse_vac, setSpecific_impulse_vac] = useState('');
    const [pressure, setPressure] = useState('');
    const [image, setImage] = useState('');

    const postEngine = async (engine) => {
        const url = props.config['id'] ? 
        `http://localhost:4000/engine/${props.config['id']}` :
        `http://localhost:4000/engine`;

        try {
            fetch(url, {
                method: props.config['method'],
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(engine)
            });
        console.log('Engine Posted: ', engine);
        props.callback()

        } catch(error) {
            console.log(error.message);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const engine = {
            name,
            cycle_type,
            fule_type,
            thrust,
            thrust_to_weight,
            specific_impulse_cl,
            specific_impulse_vac,
            pressure,
            image,
        }

        setName(name)
        setCycleType(cycle_type)
        setFule_type(fule_type)
        setThrust(thrust)
        setThrust_to_weight(thrust_to_weight)
        setSpecific_impulse_cl(specific_impulse_cl)
        setSpecific_impulse_vac(specific_impulse_vac)
        setPressure(pressure)
        setImage(image)

        postEngine(engine)
    }
    
    // return(
    //     <div className='edit-form'>
    //             <div className="container">
    //                 <form onSubmit={handleSubmit}>
    //                     <input type='text' placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
    //                     <input type='text' placeholder='Cycle Type' value={cycle_type} onChange={(event) => setCycleType(event.target.value)} />
    //                     <input type='text' placeholder='Thrust' value={thrust} onChange={(event) => setThrust(event.target.value)} />
    //                     <input type='text' placeholder='Specific Inpulse' value={specific_impulse} onChange={(event) => setSpecificImpulse(event.target.value)} />
    //                     <input type='text' placeholder='image url' value={image} onChange={(event) => setImage(event.target.value)} />
    //                     <button type='update'>Submit</button>
    //                 </form>
    //             </div>
    //     </div>
    // )

    return(
        <div class="container my-5">
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
                <input type='text' placeholder='Cycle Type' value={cycle_type} onChange={(event) => setCycleType(event.target.value)} />
                <input type='text' placeholder='Fule Type' value={fule_type} onChange={(event) => setFule_type(event.target.value)} />
                <input type='number' placeholder='Thrust' value={thrust} onChange={(event) => setThrust(event.target.value)} />
                <input type='number' placeholder='Thrust To Weight' value={thrust_to_weight} onChange={(event) => setThrust_to_weight(event.target.value)} />
                <input type='number' placeholder='Specific Inpulse Sea Level' value={specific_impulse_cl} onChange={(event) => setSpecific_impulse_cl(event.target.value)} />
                <input type='number' placeholder='Specific Inpulse Vacuum' value={specific_impulse_vac} onChange={(event) => setSpecific_impulse_vac(event.target.value)} />
                <input type='number' placeholder='Chamber Pressure' value={pressure} onChange={(event) => setPressure(event.target.value)} />
                <input type='text' placeholder='image url' value={image} onChange={(event) => setImage(event.target.value)} />                
                <button type='update' class="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}
export default EditForm