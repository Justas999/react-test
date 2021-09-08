import React, { useState, useEffect, useRef } from 'react';
import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import './Points.css';

const Points = () => {
  //--Hooks
  //-- state
  //-- local
  const [points, setPoints] = useState(0);

  //side effect

  useEffect(() => {
    //-- "cia reikes sufechinti duomenis"
    setPoints(5);
  }, []);

  //-- Custom functions
  let liked = useRef(false);
  const clickHandlerDowngrade = () => {
    if (!liked.current) {
      setPoints(points - 1);

      liked.current = true;

      //- čia reikia išsiųsti duomenis su Fetch arba axios
    }
  };
  const clickHandlerUpgrade = () => {
    if (!liked.current) {
      setPoints(points + 1);

      liked.current = true;
    }
  };

  return (
    <div className='thumbsWrapper'>
      <button onClick={clickHandlerDowngrade}>
        <FaThumbsDown />
      </button>
      <div>{points}</div>
      <button onClick={clickHandlerUpgrade}>
        <FaThumbsUp />
      </button>
    </div>
  );
};
<div>labas</div>;
export default Points;
