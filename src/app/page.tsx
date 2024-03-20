
  // PortfolioPage.js
  import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import Projects from '@/components/Projects';
import Skills from '@/components/skills';
import Education from '@/components/Education';
import Social from '@/components/Social';

export default function PortfolioPage() {
  return (
    <div>
      <Navbar/>
       <HomePage/>
      
      {/* <Skills />
     
      <Education />
     
      <Social/>  */}
    </div>
  );
}


