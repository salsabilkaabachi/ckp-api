import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

import UserList from './Components/UserList';



function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setUsers(result.data);
    });
  }, []);
  
 
    
  return (
    <div className="App">

        <UserList users={users}  />
      
    </div>
  );
}

export default App;