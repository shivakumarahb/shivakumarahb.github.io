import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../App.css';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          <h1>Follow our page for more</h1>
        </p>
        <p className='footer-subscription-text'>
          its worth a visit.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'> Send me a shot </Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How we do it</Link>
            <Link to='/sign-up'>Experience</Link>
            <Link to='/sign-up'>Life</Link>
            <Link to='/sign-up'>Inventors</Link>
            <Link to='/sign-up'>Creators</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/sign-up'>Contact</Link>
            <Link to='/sign-up'>Support</Link>
            <Link to='/sign-up'>Destinations</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/sign-up'>Submit Video</Link>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/sign-up'>Try it</Link>
            <Link to='/sign-up'>Influence</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/sign-up'>Instagram</Link>
            <Link to='/sign-up'>Facebook</Link>
            <Link to='/sign-up'>Youtube</Link>
            <Link to='/sign-up'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/gallery' className='social-logo'>
              WILDRECKSHOTS
              <i class='fa-solid fa-tree' />
            </Link>
          </div>
          <small class='website-rights'>WILDRECKSHOTS © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/sign-up'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/sign-up'
              target='_blank'
              aria-label='Instagram' 
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='sign-up'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='sign-up'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='sign-up'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
