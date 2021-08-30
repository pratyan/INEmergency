import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useHistory } from 'react-router-dom';

function HeroSection() {
  const history = useHistory();
  return (
    <div className='hero-container'>
      <img src='/images/bg.jpg' />
      <h1>NEED HELP?</h1>
      <p>Click to book your hospital bed</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => history.push('/emergency')}
        >
          EMERGENCY HELP
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          OUR PROJECT <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
