import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our technology!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ml.jpg'
              text='Getting you hospital recommendations'
              label='Artificial intelligence'
              path='/'
            />
            <CardItem
              src='images/blockchain.jpg'
              text='Guarantee your treatment with smart contracts!'
              label='Blockchain'
              path='/'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
