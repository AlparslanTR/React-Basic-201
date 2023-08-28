import React, { useEffect, useState } from 'react'

function UserDetails({activeUser}) {

    const [users,setUserDetails] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${activeUser}`)
        .then((res)=> res.json())
        .then((data)=> setUserDetails(data))
        .finally(()=> setLoading(false))
    },[activeUser]);
  return (
    <div>
        {loading && <p>Yükleniyor...</p>}
        
           <pre>
            {JSON.stringify(users , null , 2)}
           </pre>
    </div>
  )
}

export default UserDetails