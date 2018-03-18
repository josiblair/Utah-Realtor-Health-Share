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
        <div>
          <span>ARE YOU READY TO TAKE CONTROL OF YOUR MEDICAL CARE COSTS?</span>
          <span>Get A Free Quote!</span>

          <span>vaughn@affiliateguard.info</span>
          <span>801-688-4883</span>

          <div>
            <input type='text' value='Name*' onChange={ (e) => this.updateName(e.target.value) }/>
            <input type='text' value='Email*' onChange={ (e) => this.updateEmail(e.target.value) }/>
            <input type='text' value='Subject' onChange={ (e) => this.updateSubject(e.target.value) }/>
            <input type='text' value='Message' onChange={ (e) => this.updateMessage(e.target.value) }/>

            <button className='submit-button' onClick={ this.submitMessage(name, email, subject, message)} >Submit</button>
          </div>
        </div>
        <div className='contact-pic'>
          <img src={ sign } alt='sign' />
        </div>
      </div>
    );
  }
}

export default ContactForm;