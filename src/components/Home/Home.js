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
              <a href='#about' className='nav-link'>About Us</a>
              <a href='#contact' className='nav-link'>Contact</a>
              <Link to='/enroll' className='nav-link em-link'>Enroll Now!</Link>
            </div>

            <div className='phoneNumber'>801-688-4883</div>
          </div>
        </div>

        <div id='home' className='welcome'>
          <div className='intro-container'>
            <span className='intro'>INTRODUCING UTAH REALTOR HEALTH SHARE</span>
            <span className='intro-paragraph'>A Better Way to Pay for Health Care - The medical cost sharing model worked for 25 years in private communities. Over one million people are currently using it.  Now it is available for individuals through SHMI.</span><span className='intro-paragraph'>Everyday is Open Enrollment</span>
            <Link to='/solution' className='learn-more'>Learn More</Link>
            
          </div>
        </div>

        <div className='slogan'>
          <span>No application fees - No membership fees - No annual commitment</span>
        </div>

        <div className='steps'>
          <div className='step step1'>
            <img src={business} alt='business' className='step-img business-img' />
            <div className='step-info'>
              <span className='steps-header'>The HealthShare Plan Does It All!</span>
              <span className='steps-paragraph'>ACA compliant, Health Cost Sharing, Medical Bill Negotiation, Telemedicine, Expert Second Opinion, and caring personal Member Advisor services for all members.</span>
            </div>
          </div>

          <div className='step step2'>
            <div className='step-info'>
              <span className='steps-header'>Choose Your Own Doctors</span>
              <span className='steps-paragraph'>One of the benefits of membership in a Health Care Cost Sharing organizaton is that you are not tied to a traditional network.</span>
            </div>
            <img src={doctor} alt='doctor' className='step-img doctor-img' />
          </div>

          <div className='step step3'>
            <img src={calculate} alt='calculate' className='step-img calculate-img' />
            <div className='step-info'>
              <span className='steps-header'>Proven & Affordable</span>
              <span className='steps-paragraph'>Monthly programs range from $238 per month for a single member under 30 years old to $953 per month for our most comprehensive program for a family which has no annual or lifetime maximums.</span>
            </div>
          </div>
        </div>

        <div>

        </div>

        <div id='howitworks' className='how-it-works'>
          <img src={question} alt='faq' className='faq-icon' />

          <span className='steps-header'>HOW IT WORKS | FAQs</span>
          <span className='faq-paragraph'>Making smart choices (diet, exercise, lifestyle, etc.) can greatly improve one's quality of life. These choices can also dramatically impact the cost of healthcare in positive ways. That's where Health Care Sharing comes in.</span>

          <Link to='/solution' className='faq-button'>Tell Me More!</Link>
        </div>

        <div id='about' className='about'>
          <img src={meeting} alt='meeting' className='about-pic' />

          <div className='about-container'>
            <div className='about-info'>
              <span className='about-header'>A BIT ABOUT US</span>
              <span className='about-paragraph'>Utah Realtor Health Share offers clients the best possible protection for all of their insurance needs. As one of the leading insurance companies in the greater San Francisco area, we have built quite the clientele by maintaining a strict customer-comes-first approach. If you are looking to do business with a top notch company that does everything in its power to ensure your satisfaction, contact us today. Our experts are here for your every insurance need and will be happy to supply you with a free estimate.</span>
            </div>
          </div>
        </div>

        <div id='contact' className='home-contact'>
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