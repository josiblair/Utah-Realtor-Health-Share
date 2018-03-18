import React, { Component } from 'react';
import './Home.css';
import logo from '../../assets/urhs-logo.png';
import { Link } from 'react-router-dom';
import ContactForm from '../ContactForm/ContactForm';

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
          <div className='site-info'>
            <Link to='/'><img src={logo} alt='logo' className='logo' /></Link>
            <span className='site-name'>UTAH REALTOR HEALTH SHARE</span>
          </div>

          <div className='nav-section'>
            <div className='nav'>
              <a href='#home' className='nav-link'>Home</a>
              <a href='#howitworks' className='nav-link'>How It Works</a>
              <Link to='/solution' className='nav-link'><span>The URHS Solution</span></Link>
              <a href='#contact' className='nav-link'>Contact</a>
            </div>

            <div className='phoneNumber'>801-688-4883</div>
          </div>
        </div>

        <div className='welcome'>
          <div className='intro-container'>
            <span className='intro'>INTRODUCING UTAH REALTOR HEALTH SHARE</span>
            <span className='intro-paragraph'>Utah Realtor Health Share puts our clients’ needs first. By replacing traditional Major Medical Insurance with an Affordable Care Act Compliant Health Care Cost Sharing plan, we achieve immediate cost savings with long term rate stability.</span>
            <Link to='/solution' className='learn-more'>Learn More</Link>
          </div>
        </div>

        <div className='steps'>
          <div className='step step1'>
            <img src={business} alt='business' className='step-img business-img' />
            <div className='step-info'>
              <span className='steps-header'>Obamacare Compliant</span>
              <span className='steps-paragraph'>As a member you are compliant with the individual mandate penalties under the ACA (Obamacare).</span>
            </div>
          </div>

          <div className='step step2'>
            <div className='step-info'>
              <span className='steps-header'>Choose Your Doctor/Hospital</span>
              <span className='steps-paragraph'>One of the benefits of membership in a Health Care Cost Sharing organizaton is that you are not tied to a traditional network.</span>
            </div>
            <img src={doctor} alt='doctor' className='step-img doctor-img' />
          </div>

          <div className='step step3'>
            <img src={calculate} alt='calculate' className='step-img calculate-img' />
            <div className='step-info'>
              <span className='steps-header'>Typically 50% Less Expensive</span>
              <span className='steps-paragraph'>Monthly programs range from $235 per month for a single member under 30 years old to $857 per month for our most comprehensive program for a family which has no annual or lifetime maximums.</span>
            </div>
          </div>
        </div>

        <div className='how-it-works'>
          <img src={question} alt='faq' className='faq-icon' />

          <span className='steps-header'>HOW IT WORKS | FAQs</span>
          <span className='faq-paragraph'>Health Care Cost Sharing is an affordable alternative to expensive healthcare. Join a group of like minded individuals who share medical expenses together.</span>

          <Link to='/solution' className='faq-button'>Tell Me More!</Link>
        </div>

        <div className='about'>
          <img src={meeting} alt='meeting' className='about-pic' />

          <div className='about-container'>
            <div className='about-info'>
              <span className='about-header'>A BIT ABOUT US</span>
              <span className='about-paragraph'>Utah Realtor Health Share offers clients the best possible protection for all of their insurance needs. As one of the leading insurance companies in the greater San Francisco area, we have built quite the clientele by maintaining a strict customer-comes-first approach. If you are looking to do business with a top notch company that does everything in its power to ensure your satisfaction, contact us today. Our experts are here for your every insurance need and will be happy to supply you with a free estimate.</span>
            </div>
          </div>
        </div>

        <div className='home-contact'>
          <ContactForm />
        </div>

        <div className='footer'>
          <div className='footer1'>
            <span className='footer-contact'>Contact</span>
            <span>vaughn@affiliateguard.info</span>
            <span>801-688-4883</span>
          </div>
          <span className='footer2'>©2018 by Utah Realtor Health Share.</span>
        </div>
      </div>
    );
  }
}

export default Home;