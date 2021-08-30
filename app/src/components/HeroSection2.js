import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useHistory } from 'react-router-dom';

function HeroSection() {
  const history = useHistory();
  return (
    <div className='hero-container'>
      <img src='/images/about.jpg' />
      <h1>ABOUT US</h1>
      <p>We are team DARKneuron</p>
    </div>
  );
}

export default HeroSection;