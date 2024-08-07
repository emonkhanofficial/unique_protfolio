// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 60px 20px;
  background: #f5f5f5;
  text-align: center;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <h2>Contact</h2>
      <ContactForm>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;
