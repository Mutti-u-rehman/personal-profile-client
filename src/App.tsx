import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';


type User = {
  name: string;
  email?: string; // add other fields as needed
  age?: number;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:5000/api/users');
        const data = await res.json();  // <== you need this
        console.log(data);
        if (data?.length)
          setUsers(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h2>List of Users</h2>
      <ul>
        { 
          users.map((user, index) => (
            <li key={index}>
              name: {user?.name || ''}</li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
