// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.section`
  padding: 60px 20px;
  background: white;
  text-align: center;
`;

const ProjectCard = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <h2>Projects</h2>
      <div>
        <ProjectCard>
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </ProjectCard>
        <ProjectCard>
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </ProjectCard>
      </div>
    </ProjectsWrapper>
  );
};

export default Projects;
