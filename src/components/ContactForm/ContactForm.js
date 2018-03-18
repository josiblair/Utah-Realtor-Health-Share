import React, { Component } from 'react';
import './ContactForm.css';
import sign from '../../assets/sign.webp';

class ContactForm extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  }

updateName(name) {
  this.setState({
    name: name
  })
}

updateEmail(email) {
  this.setState({
    email: email
  })
}

updateSubject(subject) {
  this.setState({
    subject: subject
  })
}

updateMessage(message) {
  this.setState({
    message: message
  })
}

submitMessage(name, email, subject, message) {
  //send email to Vaughn
  console.log(name, email, subject, message);
}


  render() {

    const { name, email, subject, message } = this.state;

    return (
      <div className="ContactForm">
        <div className='contact-prompt'>
          <span className='prompt'>ARE YOU READY TO TAKE CONTROL OF YOUR MEDICAL CARE COSTS?</span>
          <span className='prompt2'>Get A Free Quote!</span>

          {/* <span className='prompt3'>vaughn@affiliateguard.info</span>
          <span className='prompt3'>801-688-4883</span> */}

          <div className='input-boxes'>
            <input className='name-input' type='text' placeholder='Name*' onChange={ (e) => this.updateName(e.target.value) }/>
            <input className='email-input' type='text' placeholder='Email*' onChange={ (e) => this.updateEmail(e.target.value) }/>
            <input className='subject-input' type='text' placeholder='Subject' onChange={ (e) => this.updateSubject(e.target.value) }/>
            <input className='message-input' type='text' placeholder='Message' onChange={ (e) => this.updateMessage(e.target.value) }/>

            <button className='submit-button' onClick={ this.submitMessage(name, email, subject, message)} >Submit</button>
          </div>
        </div>
        <div>
          <img src={ sign } alt='sign' className='contact-pic'/>
        </div>
      </div>
    );
  }
}

export default ContactForm;