// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  padding: 20px;
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>My Portfolio</h1>
      <Nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
