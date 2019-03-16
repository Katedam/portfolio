import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Contact from './Contact';

export default function Nav() {
  return (
    <nav>
      <Link to="/"><Logo /></Link>
      <ul>
        <li>DEV PROJECTS</li>
        <li>TECH STACK</li>
        <li>ART STUDIO</li>
        <li>
          <h2>CONTACT</h2>
          <Contact />
        </li>
        <li>RESUME</li>
      </ul>
    </nav>
  );
}
