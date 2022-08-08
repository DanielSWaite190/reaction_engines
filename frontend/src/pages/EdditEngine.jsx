import React from 'react-router';
import Form from '../components/Form'
import { useParams, useNavigate } from 'react-router-dom';

export default function EdditEngine() {
  const {id} = useParams();
  const navigate = useNavigate();

  const goHome = () => {navigate('/')}

  const Delete = () => {
    fetch(`http://localhost:4000/engine/${id}`, {
      method: 'DELETE'
    })
    navigate('/')
  }

  return (
    <div className='container'>
        <h3>Eddit your engine</h3>
        <Form config={{method: 'PUT', id: id}} callback={goHome}/>
        <button onClick={Delete} type="button">DELETE</button>
    </div>
  )
}