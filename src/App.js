import { useState, useEffect } from 'react';
import axios from "axios";
import UserList from './component/UserList';
import './App.css';

function App() {
  const [users, setUsers]= useState([])
  useEffect(() => {
     axios
       .get("https://jsonplaceholder.typicode.com/users")
       .then((response) => setUsers(response.data))
       .catch((error) => console.log(error));
    
  },[])
  console.log("users" ,users)
  return (
    <div className="App">
     <UserList users={users}/>
    </div>
  );
}

export default App;
