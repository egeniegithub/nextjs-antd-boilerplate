

import React ,{useState} from 'react'
import gql from 'graphql-tag'
require('isomorphic-fetch');



const Users = () => {
    
const [user , setUser] = useState({});
    React.useEffect(()=>{
   
        fetch('http://localhost:3000/api/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: '{ user { _id , name , email } }' }),
          })
            .then(res => res.json())
            .then(res =>setUser(res.data.user));
    
    },[])
    
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>User From MongoDB through graphql</th>
            </tr>
          </thead>
          <tbody>
            
              <tr key={user._id}>
                <td>{user.name}</td>
              </tr>
              <tr >
                <td>{user.email}</td>
              </tr>
             
          
          </tbody>
        </table>
      </div>
    )
  }
  
  export default Users