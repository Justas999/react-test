import React, { useState, useEffect } from 'react';
import User from './User';
import './Users.css';

const Users = () => {
  const API = 'https://jsonplaceholder.typicode.com/users';
  //Hooks
  //-- state

  const [users, setUser] = useState([]);
  //--side effects

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setUser(data));
  });

  return (
    <div className='usersWrapper'>
      <h2>Voted Clients</h2>
      {users.slice(0, 5).map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};

export default Users;
