// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #282c34;
  color: white;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 My Portfolio</p>
    </FooterWrapper>
  );
};

export default Footer;
