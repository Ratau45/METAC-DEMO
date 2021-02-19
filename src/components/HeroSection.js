import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
    
      <h1>Welcome to METAC</h1>
      <p>A digital platform that brings</p>
      <p>Awareness</p>
    
      
      <div className='hero-btns'>

      
        <Button
        onClick=""
        type=""
        children=""
          className="btns"
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SIGN IN
        </Button>
       {/*} <Button
        
        type=""
        children=""
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SEE HOW IT WORKS <i className='far fa-play-circle' />
  </Button>*/}
      </div>
    </div>
  );
}

export default HeroSection;