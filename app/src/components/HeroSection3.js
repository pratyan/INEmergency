import React from 'react';
import '../App.css';
import { Button2 } from './Button2';
import './HeroSection.css';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function HeroSection() {
  // const history = useHistory();
  return (
    <div className='hero-container'>
      <img src='/images/emergency.jpg' />
      <h1>ENSURE YOUR HOSPITAL BED NOW!</h1>
      <div className='hero-btns'>
        <Button2
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        //   onClick={() => history.push('/emergency')}
        >
          GET HOSPITAL RECOMMENDATION
        </Button2>
      </div>
    </div>
  );
}

export default HeroSection;