import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Nav() {
  return (
    <>
    <Link to="/"><Logo /></Link>
    <ul>
      <li>DEV PROJECTS</li>
      <li>TECH STACK</li>
      <li>ART STUDIO</li>
      <li>CONTACT</li>
      <li>RESUME</li>
    </ul>
    </>
  );
}
