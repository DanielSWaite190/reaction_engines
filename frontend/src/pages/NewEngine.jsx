import React, { useParams } from 'react-router';
import Form from '../components/Form'


function NewEngine() {
    //TODO fix this redundant function NewEngine & postEngine

    
    // const postEngine = async (dataToPost) => {
    //     const url = dataToPost['id'] ? `http://localhost:4000/engine/dataToPost/${dataToPost['id']}` : `http://localhost:4000/engine`
    //     try {
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(dataToPost['engine'])
    //         });
    //     console.log('Engine Posted: ', dataToPost['engine']);
    //     } catch(error) {
    //         console.log(error.message);
    //     }
    //     console.log(dataToPost['id'])
    // }


  return (
    <div className='container'>
        <Form config={{method: "POST"}}/>
    </div>
  )
}

export default NewEngine 