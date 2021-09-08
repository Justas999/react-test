import React from 'react';
import Points from '../components/Points';
import './JonyBetPage.css';

const JonyBetPage = () => {
  return (
    <>
      <h2>Kas laimes? </h2>
      <div className='allTeams'>
        <div className='team'>
          <p>Geriečiai</p>
          <Points />
        </div>
        <div className='team'>
          <p>Blogiečiai</p>
          <Points />
        </div>
        <div className='team'>
          <p>Gargždų banga</p>
          <Points />
        </div>
        <div className='team'>
          <p>Kuršėnų viniotinis</p>
          <Points />
        </div>
      </div>
    </>
  );
};

export default JonyBetPage;
