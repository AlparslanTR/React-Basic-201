import { useState } from 'react';
import './App.css';
import UserDetails from './Components/UserDetails';
import UserList from './Components/UserList';

// Apiden kullanıcı ve kullanıcıya ait veri çekme işlemi.

function App() {

  const [activeUser, setActiveUserId] = useState(null);

  return (
    <div className="App">
     <div>
          <h1>Kullanıcı Listesi</h1>
          Seçilen Kullanıcı Id : {activeUser} 
          <UserList
          setActiveUserId = {setActiveUserId}
          />
     </div>

     { 
        activeUser&& <div>
        <h1>Kullanıcı Özellikleri</h1>
        <UserDetails
          activeUser={activeUser}
        />
   </div>
     }

    </div>
  );
}

export default App;
