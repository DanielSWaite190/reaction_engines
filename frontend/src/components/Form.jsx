import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NewEngine from '../pages/NewEngine';

function EditForm() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [cycle_type, setCycleType] = useState('');
    const [thrust, setThrust] = useState('');
    const [specific_impulse, setSpecificImpulse] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedUser = {
            name,
            cycle_type,
            thrust,
            specific_impulse,
            image,
        }

        // buldEngine(userId, updatedUser);


        setName(name)
        setCycleType(cycle_type)
        setThrust(thrust)
        setSpecificImpulse(specific_impulse)
        setImage(image)

        NewEngine(updatedUser)
    }

    // useEffect(() => {
    //     getUser(userId);
    // },[userId]);

    useEffect(() => {
    },[]);

  return (
    <div className='edit-form'>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter First Name' value={name} onChange={(event) => setName(event.target.value)} />
                <input type='text' placeholder='Enter Last Name' value={cycle_type} onChange={(event) => setCycleType(event.target.value)} />
                <input type='text' placeholder='Enter Email' value={thrust} onChange={(event) => setThrust(event.target.value)} />
                <input type='text' placeholder='Enter Avatar URL' value={specific_impulse} onChange={(event) => setSpecificImpulse(event.target.value)} />
                <input type='text' placeholder='Enter Job Title' value={image} onChange={(event) => setImage(event.target.value)} />
                <button type='update'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default EditForm