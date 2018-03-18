import React, { Component } from 'react';
import './Home.css';
import logo from '../../assets/urhs-logo.png';
import { Link } from 'react-router-dom';

import business from '../../assets/business1.webp';
import calculate from '../../assets/calculate.webp';
import doctor from '../../assets/doctor.webp';
import question from '../../assets/question.png';
import meeting from '../../assets/meeting.webp';


class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="header">
          <Link to='/'><img src={ logo } alt='logo' className='logo' /></Link>
          <span>UTAH REALTOR HEALTH SHARE</span>

          <div className='nav'>
            <a href='#home'>Home</a>
            <a href='#howitworks'>How It Works</a>
            <Link to='/solution'><span>Solution</span></Link>
            <a href='#contact'>Contact</a>
          </div>

          <div className='phoneNumber'>801-688-4883</div>
        </div>

        <div className='welcome'>
          <span>INTRODUCING UTAH REALTOR HEALTH SHARE</span>
          <span>Utah Realtor Health Share puts our clients’ needs first. By replacing traditional Major Medical Insurance with an Affordable Care Act Compliant Health Care Cost Sharing plan, we achieve immediate cost savings with long term rate stability.</span>
          <Link to='/solution'><button className='learn-more'>Learn More</button></Link>
        </div>

        <div className='steps'>
          <div className='step1'>
            <img src={business} alt='business' className='business-img' />
            <div>
              <span className='steps-header'>Obamacare Compliant</span>
              <span className='steps-paragraph'>As a member you are compliant with the individual mandate penalties under the ACA (Obamacare).</span>
            </div>
          </div>

          <div className='step2'>
            <div>
              <span className='steps-header'>Choose Your Doctor/Hospital</span>
              <span className='steps-paragraph'>One of the benefits of membership in a Health Care Cost Sharing organizaton is that you are not tied to a traditional network.</span>
            </div>
            <img src={doctor} alt='doctor' className='doctor-img' />
          </div>
          
          <div className='step3'>
          <img src={calculate} alt='calculate' className='calculate-img' />
            <div>
              <span className='steps-header'>Typically 50% Less Expensive</span>
              <span className='steps-paragraph'>Monthly programs range from $235 per month for a single member under 30 years old to $857 per month for our most comprehensive program for a family which has no annual or lifetime maximums.</span>
            </div>
          </div>
        </div>

        <div className='how-it-works'>
          <img src={ question } alt='faq' className='faq-icon' />

          <span>HOW IT WORKS</span>
          <span>Health Care Cost Sharing is an affordable alternative to expensive healthcare. Join a group of like minded individuals who share medical expenses together.</span>

          <Link to='/solution'><button>Tell Me More!</button></Link>
        </div>

        <div className='about'>
          <img src={ meeting } alt='meeting' className='about-pic' />

          <span>A BIT ABOUT US</span>
          <span>Utah Realtor Health Share offers clients the best possible protection for all of their insurance needs. As one of the leading insurance companies in the greater San Francisco area, we have built quite the clientele by maintaining a strict customer-comes-first approach. If you are looking to do business with a top notch company that does everything in its power to ensure your satisfaction, contact us today. Our experts are here for your every insurance need and will be happy to supply you with a free estimate.</span>
        </div>

        <div className='contact'>
        </div>
      </div>
    );
  }
}

export default Home;