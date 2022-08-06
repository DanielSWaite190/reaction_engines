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

        postEngine(engine)
    }
    
    return (
    <div className='edit-form'>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
                <input type='text' placeholder='Cycle Type' value={cycle_type} onChange={(event) => setCycleType(event.target.value)} />
                <input type='number' placeholder='Thrust' value={thrust} onChange={(event) => setThrust(event.target.value)} />
                <input type='number' placeholder='Specific Inpulse' value={specific_impulse} onChange={(event) => setSpecificImpulse(event.target.value)} />
                <input type='text' placeholder='image url' value={image} onChange={(event) => setImage(event.target.value)} />
                <button type='update'>Submit</button>
            </form>
        </div>
    </div>
  )

// return (
//     <div class='mb-3'>
//         <div className="container">
//             <form onSubmit={handleSubmit}>
//                 <input class="form-control" id="exampleInputEmail1" type='text' placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
//                 <input class="form-control" id="exampleInputEmail1" type='text' placeholder='Cycle Type' value={cycle_type} onChange={(event) => setCycleType(event.target.value)} />
//                 <input class="form-control" id="exampleInputEmail1" type='number' placeholder='Thrust' value={thrust} onChange={(event) => setThrust(event.target.value)} />
//                 <input class="form-control" id="exampleInputEmail1" type='number' placeholder='Specific Inpulse' value={specific_impulse} onChange={(event) => setSpecificImpulse(event.target.value)} />
//                 <input class="form-control" id="exampleInputEmail1" type='text' placeholder='image url' value={image} onChange={(event) => setImage(event.target.value)} />
//                 <button type='update'>Submit</button>
//             </form>
//         </div>
//     </div>
//   )

    return (
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )


}

export default EditForm