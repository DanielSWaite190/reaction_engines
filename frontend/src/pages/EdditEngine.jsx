import React from 'react-router';
import { useParams } from 'react-router-dom';
import Form from '../components/Form'



function EdditEngine() {

  const {id} = useParams();
  const method = id ? 'PUT' : 'POST';


  return (
    <div className='container'>
        <Form config={{method: method, id: id}}/>
    </div>
  )
}

export default EdditEngine 


// const updateUser = async (userId, updatedUser) => {
//     if(window.confirm('User Updated!')){
//         try {
//             const response = await fetch(`http://localhost:8000/api/users/${userId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'SameSite': 'None'
//                 },
//                 body: JSON.stringify(updatedUser)
//             });
    
//             const data = await response.json();
    
//             console.log('User Updated!', data);
//         } catch(error) {
//             console.log(error.message);
//         }

//         navigate(`/users/${userId}`);

//     }
// }


// const createUser = async (newUser) => {
        
//     if(window.confirm('User Created!')){
//         try {
//             const response = await fetch('http://localhost:8000/api/users', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newUser)
//             });
    
//             const data = await response.json();
    
//             console.log('User Created!', data);
//         } catch(error) {
//             console.log(error.message);
//         }

//         navigate('/')
//     }
// }