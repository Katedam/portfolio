import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import { Main, Section } from '../styles/home';

export default function Home() {
  return (
    <Main>
      <Nav />
      <Section>
        <Logo />
      </Section>
    </Main>
  );
}
