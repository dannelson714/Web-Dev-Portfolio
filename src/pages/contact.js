import { forgetCache } from '@apollo/client/cache/inmemory/reactiveVars';
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import emailjs from 'emailjs-com';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState("Submit");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleOnBlur = (e) => {
    const {target } = e;
    const inputType = target.name;

    if (inputType === 'email' && !email) {
      setErrorMessage('Email is a required field')
    }
    if (inputType === 'name' && !name) {
      setErrorMessage('Name is a required field')
    }
    if (inputType === 'message' && !message) {
      setErrorMessage('Message is a required field')
    }
  }

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (!name || !message) {
        setErrorMessage('Please provide your name and message');
    }

    setStatus("Sending...");

    let details = {
      name: name,
      email: email,
      message: message,
    };

    let response = await forgetCache("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    })

    setStatus("Submit");
    let result = await response.json();

    alert(result.status);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <p>Please contact me for further information {name}</p>
      <form className="form" id="contactForm">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="text"
          placeholder="name"
        />
        </form>
        <textarea
          value={message}
          form="contactForm"
          name="message"
          rows="5"
          cols="36"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          placeholder="message"
        />
        <button form="contactForm" type="button" onClick={handleFormSubmit}>{status}</button>
      
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

