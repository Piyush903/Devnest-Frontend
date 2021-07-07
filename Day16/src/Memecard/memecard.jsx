import React from 'react';
import Dogo from './meme.jpg';
import './memecard.css'

const Memecard = () => {
    return (
        <>
          <div className="App">
              <div className="imgDiv">
              <img src={Dogo} alt='JustinMEME_Image' />
              </div>
              <div className='mainText'>
          <h1 className='mainHeading'>Aj maine meme banaye</h1>
          <p className='mainPara'>dehklena</p>
        </div>
              </div>  
        </>
    )
};
export  default Memecard


