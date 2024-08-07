// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 60px 20px;
  background: #f5f5f5;
  text-align: center;
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <h2>About Me</h2>
      <p>This is a brief introduction about me. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti aspernatur minima provident sequi iusto magnam at facilis, cupiditate inventore? Aspernatur, voluptatibus repudiandae officia aliquam saepe ducimus odio quis. Eveniet laborum, cupiditate quo excepturi sapiente, consectetur laudantium ipsam nihil reiciendis nostrum sed doloribus quas ipsum aliquam laboriosam veritatis nulla obcaecati perferendis consequuntur quasi. Perspiciatis reprehenderit enim repudiandae pariatur blanditiis itaque ad neque. Iure laudantium quisquam quod sint rerum quaerat quam perferendis.</p>
    </AboutWrapper>
  );
};

export default About;



