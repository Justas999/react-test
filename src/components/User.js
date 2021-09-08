import React from 'react';

const User = ({ user }) => {
  return (
    <ul>
      <li>{user.name}</li>
      <button>delete</button>
    </ul>
  );
};

export default User;
