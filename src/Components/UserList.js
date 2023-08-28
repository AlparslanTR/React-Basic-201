import React, { useEffect, useState } from 'react'

function UserList({setActiveUserId}) {
    const [users,setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=> setUsers(data))
        .finally(()=> setLoading(false))
        .catch((error)=>{
            console.log('hata',error);
        })
    });
  return (
    <div>
        {loading && <p>Yükleniyor...</p>}
        <ul className='user-list'>

        {
            users.map((user)=>(
                <li key={user.id} onClick={()=> setActiveUserId(user.id)}>
                    {user.id}-
                    {user.name}
                </li>
            ))
        }

        </ul>

    </div>
  )
}

export default UserList