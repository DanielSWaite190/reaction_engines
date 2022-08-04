import React, { useParams } from 'react-router';
import Form from '../components/Form'


function NewEngine(dataToPost) {

    const postEngine = async () => {
        try {
            const response = await fetch('http://localhost:4000/engine', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToPost)
            });
        console.log('Engine Posted: ', dataToPost);
        } catch(error) {
            console.log(error.message);
        }
    }

    postEngine()

  return (
    <div className='container'>
        <Form/>
    </div>
  )
}

export default NewEngine 