import React, {useState} from 'react';

function EditForm(props) {
    
    const [name, setName] = useState('');
    const [cycle_type, setCycleType] = useState('');
    const [thrust, setThrust] = useState('');
    const [specific_impulse, setSpecificImpulse] = useState('');
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
            thrust,
            specific_impulse,
            image,
        }

        setName(name)
        setCycleType(cycle_type)
        setThrust(thrust)
        setSpecificImpulse(specific_impulse)
        setImage(image)

        console.log('handleSubmit')
        postEngine(engine)
    }
    
  return (
    <div className='edit-form'>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
                <input type='text' placeholder='Cycle Type' value={cycle_type} onChange={(event) => setCycleType(event.target.value)} />
                <input type='text' placeholder='Thrust' value={thrust} onChange={(event) => setThrust(event.target.value)} />
                <input type='text' placeholder='Specific Inpulse' value={specific_impulse} onChange={(event) => setSpecificImpulse(event.target.value)} />
                <input type='text' placeholder='image url' value={image} onChange={(event) => setImage(event.target.value)} />
                <button type='update'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default EditForm