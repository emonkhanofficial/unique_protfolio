// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const HomeWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/path-to-your-image.jpg') no-repeat center center/cover;
  color: black;
`;

const Home = () => {
  return (
    <HomeWrapper id="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2>Welcome to My Portfolio</h2>
        <p>Front-End Developer | Web Designer
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil alias fuga in temporibus quaerat, necessitatibus hic, esse officia ut est libero id cupiditate vitae sint rem ad saepe quia perspiciatis laborum quod totam. Quo iste quia laudantium exercitationem omnis, voluptate a nam neque alias temporibus molestiae. Quibusdam nisi magnam quod dicta soluta a optio laborum inventore veritatis, odio fuga excepturi. Libero reiciendis dolorem dolores dolorum, distinctio nostrum accusantium inventore ipsum dolore ratione, corporis officia est adipisci. Natus, fugiat illo obcaecati aspernatur hic, nihil doloribus eveniet sit aliquid repudiandae a porro libero aliquam iusto facere modi nostrum fugit, aut quisquam!
        </p>
      </motion.div>
    </HomeWrapper>
  );
};

export default Home;
