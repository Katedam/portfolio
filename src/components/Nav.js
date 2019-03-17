import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Contact from './Contact';
import TeckStack from './TechStack';
// import { StyledNav, StyledLi } from '../styles/nav';
// import { List, A } from '../styles/mainStyles';
import styles from '../styles/nav.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/"><Logo /></Link>
      <ul>
        <li>DEV PROJECTS</li>
        <li>TECH STACK
          <TeckStack className="subList"/>
        </li>
        <li>ART STUDIO</li>
        <li>CONTACT
          <Contact className="subList"/>
        </li>
        <li><a target="_blank" rel='noopener noreferrer' href='https://www.canva.com/design/DADRV2MZo2E/sCf0cigLV8DZzmCA69udBA/view?website#4'>RESUME</a></li>
      </ul>
    </nav>
  );
}
