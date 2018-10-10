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
              <Link to='/' className='nav-link'><span>Home</span></Link>
              <Link to='/solution' className='nav-link'><span>The URHS Solution</span></Link>
              <a href='#sol-contact' className='nav-link'>Contact</a>
              <Link to='/enroll' className='nav-link em-link'>Enroll Now!</Link>
            </div>

            <div className='phoneNumber'>801-688-4883</div>
          </div>
        </div>

        <div className='solution-welcome'>
          <span className='solution-preheader'>Making Health Care</span><span className='solution-preheader2'>Exceptional. Accessible. Affordable.</span>
          <span className='solution-header'>THE URHS SOLUTION</span>
        </div>


        <div className='solution-body'>
          <div className='content'>
            <h1 className='body-header'>HEALTH CARE COST SHARING</h1>

            <div className='solution-info'>
              <h3 className='subheader'>Powered by <a href='http://sedera.com/'>Sedera Health</a></h3>

              <p>Watch the video below to learn more.</p>
              {/* <p>To those who may be unfamiliar with the concept of people caring for one another and voluntarily sharing their medical needs:  We work with a recognized Health Care Cost Sharing Company where individuals, couples, families and organizations make voluntary financial contributions into an escrow account that hold funds which are used to share the medical needs of the members. The Health Care Cost Sharing acts as a neutral escrow agent for the members and pays medical expenses according to the agreed upon guidelines.</p>
              <p>Our solution meets the ACA requirements to have insurance, therefore you avoid the fines. Members of a recognized Health Care Sharing Ministry are exempt from the mandate to purchase health insurance by 2014 or face financial penalties. Enrollment with a recognized Health Care Sharing Ministry REMOVES your requirement under the healthcare mandate to purchase health insurance and also removes the penalty.</p> */}

              <iframe width="560" height="315" src="https://www.youtube.com/embed/TlAcnLbBaNU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen classname='video'></iframe>

            </div>

            <div className='solution-info'>
              <span className='list-header'>FAQs</span>
              <ul className='list'>
                <li className='list-item'>Can I choose my own doctors and hospitals without being penalized?</li>
                <li className='answer'>- Yes! There are no “preferred providers”, or network restrictions in regards to Sedera Health Care Sharing therefore there are no “out of network” penalties. With our 40 years of experience in healthcare we know the importance in continuity of care.</li>

                <li className='list-item'>Can my family members participate in health care sharing?</li>
                <li className='answer'>- Yes, spouses and dependent children up to age 25 are welcome.</li>

                <li className='list-item'>Is there a yearly or annual maximum amount that is eligible for sharing for an individual or family?s</li>
                <li className='answer'>- There are no annual or lifetime maximums on sharing needs. There is no limit on the number of needs that an individual or household may have.</li>

                <li className='list-item'>If I have large amounts of medical expenses, how will that affect my membership?</li>
                <li className='answer'>- Neither your membership nor your monthly share is affected by the amount of medical expenses you have.</li>

                <li className='list-item'>Is this compliant with the Affordable Care Act so that I will be covered for the individual mandate penalty?</li>
                <li className='answer'>- Yes</li>

                <li className='list-item'>Is HealthShare.Fit and Sedera Health available in my state?</li>
                <li className='answer'>- HealthShare.Fit and Sedera Health is available in all 50 U.S. states.</li>

                <li className='list-item'>Will Sedera share medical costs that were incurred outside of the United States?</li>
                <li className='answer'>- Yes, members’ eligible needs, wherever incurred, will be handled through the Sedera health sharing membership.</li>

                <li className='list-item'>Does Sedera charge monthly premiums?</li>
                <li className='answer'>- No. Instead of premiums Sedera has monthly Contributions. The difference is very important. Insurance Premiums are set by the collective needs of all people insured by that company. Sedera Contributions are set to meet the needs of all Sedera clients – with added funds for special needs.</li>

                <li className='list-item'>Does Sedera use deductibles and coinsurance?</li>
                <li className='answer'>- No and No. Member obligations are for the small bills and the first $500 - the threshold to sparing large bills. If you have more than three such $500 expenses, the threshold to sharing drops to $300 then to $0 (see guidelines for details).</li>

                <li className='list-item'>What happens when I have a large bill?</li>
                <li className='answer'>- You are a self-pay patient. There is no “claim.” You send the bills for your expenses and a receipt showing you paid your $500 to Sedera. Sedera evaluates the bills according to the Guidelines. Then funds are used for qualified needs.</li>

                <li className='list-item'>How does Sedera handle very large medical expenses?</li>
                <li className='answer'>- There is no maximum limit to the amount that Sedera will share towards a specific medical need. However, the need must be within the scope of the Guidelines before it will be eligible for sharing. Members are encouraged to speak to their Counselor at Sedera if a large bill is anticipated.</li>

                <li className='list-item'>What if I have a medical need that is not shareable?</li>
                <li className='answer'>- For needs that do not qualify for sharing which create a financial burden to the member or family, the Special Needs Sharing membership may be of assistance. See Section 5 of the Guidelines.</li>

                <li className='list-item'>What about pregnancy and delivery?</li>
                <li className='answer'>- For a pregnancy that begins after the start of your membership, maternity needs are shared like any other need. For a pregnancy that began prior to your membership, the amount shared is generally limited to the amount of shares you have sent from the beginning of the mother’s membership.</li>

                <li className='list-item'>This all sounds too good to be true! Does this really work?</li>
                <li className='answer'>- Absolutely! The Health Care Sharing model has existed for over 25 years and today serves hundreds of thousands of members.</li>
              </ul>
            </div>
          </div>
        </div>

        <div id='sol-contact' className='solution-contact'>
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