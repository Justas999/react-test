import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='logo'>JONY BET</div>
      <nav>
        <ul className='navWrapper'>
          <li>
            <Link to='/' style={{ textDecoration: 'none' }}>
              Užsiregistruojam
            </Link>
          </li>
          <li>
            <Link to='/logout' style={{ textDecoration: 'none' }}>
              Prabalsuojam
            </Link>
          </li>
          <li>
            <Link to='/admin' style={{ textDecoration: 'none' }}>
              Čia nespausti
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
