import React from 'react-router';
import Form from '../components/Form'
import {useNavigate} from 'react-router-dom';

export default function NewEngine() {
  const navigate = useNavigate();
  const goHome = () => {navigate('/')}

  return (
    <div className='container'>
        <h3>Add a new engine</h3>
        <Form config={{method: "POST"}} callback={goHome}/>
    </div>
  )
}