import React, { Component } from 'react';
import './Enroll.css';
import logo from '../../assets/urhs-logo.png';
import { Link } from 'react-router-dom';

// import guidelines from '../../assets/Guidelines.pdf';


class Enroll extends Component {
  render() {
    return (
      <div className="Enroll">

        <div className="header">
          <div className='site-info'>
            <Link to='/'><img src={logo} alt='logo' className='logo' /></Link>
            <span className='site-name'>UTAH REALTOR HEALTH SHARE</span>
          </div>

          <div className='nav-section'>
            <div className='nav'>
              <Link to='/' className='nav-link'><span>Home</span></Link>
              <Link to='/solution' className='nav-link'><span>The URHS Solution</span></Link>
              <a href='#sol-contact' className='nav-link'>Contact</a>
              <Link to='/enroll' className='nav-link em-link'>Enroll Now!</Link>
            </div>

            <div className='phoneNumber'>801-688-4883</div>
          </div>
        </div>

        <div className='enroll-welcome'>
          <span className='enroll-message'>Enrollment Form</span>
        </div>

        <div className='enroll-body'>
          {/* <a href={guidelines} target='_blank' className='guidelines'> GUIDELINES </a> */}

          <div className='enroll-steps'>
            <span className='enroll-steps-header'>TO ENROLL PLEASE FOLLOW THESE SIMPLE STEPS</span>

            <ol className='steps-list'>
              <li className='enroll-step'>READ THE GUIDELINES LINK ON THE LEFT</li>
              <li className='enroll-step'>FILL OUT AND SUBMIT ENROLLMENT APPLICATION</li>
            </ol>
          </div>
        </div>

        <div className='enroll-container'>
          <a href='https://benefitshm.formstack.com/forms/healthshare' target='_blank'><button className='enroll-button'>Click Here to Enroll</button></a>
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

export default Enroll;