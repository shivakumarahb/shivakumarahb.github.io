import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className='cards_heading'><h1>Check out these EPIC SHOTS</h1></div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/sky.webp'
              text='the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/gallery'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Islands of Bali in a Private Cruise'
              label='explore'
              path='/gallery'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text=' Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/gallery'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Top of the Himilayan Mountains'
              label='Adventure'
              path='/gallery'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Sahara Desert on a camel'
              label='Adrenaline'
              path='/gallery'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
