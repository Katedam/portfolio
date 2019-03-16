import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Contact from './Contact';
import TeckStack from './TechStack';
import { StyledNav, StyledLi } from '../styles/nav';
import { List, A } from '../styles/mainStyles';

export default function Nav() {
  return (
    <StyledNav>
      <Link to="/"><Logo /></Link>
      <List>
        <StyledLi>DEV PROJECTS</StyledLi>
        <StyledLi>TECH STACK
          <TeckStack className="subList"/>
        </StyledLi>
        <StyledLi>ART STUDIO</StyledLi>
        <StyledLi>CONTACT
          <Contact className="subList"/>
        </StyledLi>
        <StyledLi><A target="_blank" rel='noopener noreferrer' href='https://www.canva.com/design/DADRV2MZo2E/sCf0cigLV8DZzmCA69udBA/view?website#4'>RESUME</A></StyledLi>
      </List>
    </StyledNav>
  );
}
