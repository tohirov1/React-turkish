import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import './Asstes/main.css'
function App() {
  return (
    <>
      <Header/>
      <main>
          <Section/>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
      </main>
    </>
  );
}

export default App;
