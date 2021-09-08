import React, { useState } from 'react';
import './Login1.css';

const Login1 = () => {
  //Hooks
  //-- form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  //-- submit message state

  const [message, setMessage] = useState('Prašome užsiregistruoti');

  //--Custom functions

  const submitHandler = (e) => {
    e.preventDefault();

    if (+age >= 18) {
      setMessage(
        `Sveikiname prisijungus, p.${name}, galite prabalsuoti už savo favoritą`
      );
    } else {
      setMessage(`p. ${name} biški dar per mažas tokiems žaidimukams`);
    }
  };

  return (
    <>
      <h2>{message}</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor='name'>Vardas</label>
        <br />
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor='name'>Email</label>
        <br />
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor='name'>Amžius</label>
        <br />
        <input
          type='text'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <input type='submit' />
      </form>

      <p></p>
    </>
  );
};

export default Login1;
