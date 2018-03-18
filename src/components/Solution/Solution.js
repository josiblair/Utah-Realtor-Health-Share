import React, { Component } from 'react';
import './Solution.css';
import logo from '../../assets/urhs-logo.png';
import { Link } from 'react-router-dom';
import ContactForm from '../ContactForm/ContactForm';

class Solution extends Component {
  render() {
    return (
      <div className="Solution">
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

        <div className='solution-welcome'>
          <span className='solution-preheader'>A Comprehensive Approach to Health Care</span>
          <span className='solution-header'>THE URHS SOLUTION</span>
        </div>


        <div className='solution-body'>
          <div className='content'>
            <h1 className='body-header'>HEALTH CARE COST SHARING</h1>

            <div className='solution-info'>
              <h3 className='subheader'>HOW HEALTH CARE COST SHARING WORKS</h3>

              <p>To those who may be unfamiliar with the concept of people caring for one another and voluntarily sharing their medical needs:  We work with a recognized Health Care Cost Sharing Company where individuals, couples, families and organizations make voluntary financial contributions into an escrow account that hold funds which are used to share the medical needs of the members. The Health Care Cost Sharing acts as a neutral escrow agent for the members and pays medical expenses according to the agreed upon guidelines.</p>
              <p>Our solution meets the ACA requirements to have insurance, therefore you avoid the fines. Members of a recognized Health Care Sharing Ministry are exempt from the mandate to purchase health insurance by 2014 or face financial penalties. Enrollment with a recognized Health Care Sharing Ministry REMOVES your requirement under the healthcare mandate to purchase health insurance and also removes the penalty.</p>
            </div>

            <div className='solution-info'>
              <span className='list-header'>All Of The Following Benefits Are Included With Our Plan:</span>
              <ul className='list'>
                <li className='list-item'>It’s NOT Insurance… It’s Better Than Insurance.</li>
                <li className='list-item'>This is 100% coverage not an 80/20 plan. This means no more having to pay 20% of your medical bills</li>
                <li className='list-item'>Members contribute monthly to the general fund to pay for each other’s medical needs</li>
                <li className='list-item'>Costs Less than Traditional Insurance</li>
                <li className='list-item'>Lower Out-of-Pocket Expenses</li>
                <li className='list-item'>Satisfies ACA Individual Mandate* (Avoid Obamacare Penalties)</li>
                <li className='list-item'>Wellness benefits are provided under a qualifying Minimum Essential Coverage Plan that is included in the ABA Health Solution</li>
                <li className='list-item'>NO NETWORKS (Use Any Doctor/Hospital)</li>
                <li className='list-item'>No “Specialist Referral” Requirement</li>
                <li className='list-item'>No “Open Enrollment” Limitations (Join 365 Days/Yr.)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='solution-contact'>
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

export default Solution;