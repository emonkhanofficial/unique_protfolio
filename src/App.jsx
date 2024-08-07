// src/App.js
import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects/>
      <Contact />
    </Layout>
  )
}

export default App;

