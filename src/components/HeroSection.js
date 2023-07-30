import React from 'react';
import '../App.css';
import { Button_to_bio } from './Button';
import { Button_to_gallery } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>WILDRECKSHOTS</h1>
      <p>For visuals of most beautiful nature</p>
      <div className='hero-btns'>
      
        <Button_to_gallery
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/gallery'
        >
          Visit Gallary
        </Button_to_gallery>
        
        <Button_to_bio
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Creator
           <i class="fa-brands fa-instagram"></i>
        </Button_to_bio>
      </div>
    </div>
  );
}

export default HeroSection;
