import React from 'react';
import styled from 'styled-components';

const Wrap = styled.footer`
  background-color: whitesmoke;
  color: black;
  position: relative;
  bottom: 0;
  width: 100vw;
  text-align: center;
  margin-top: 0;
  font-family: sans-serif;
  box-shadow: inset 5px 0 5px -2px #e0dfdf;

  @media (min-width: 760px) {
    width: 75vw;
    left: 25vw;
  }
`;

const Heading6 = styled.h6`margin: 10px;`;

const Footer = () => (
  <Wrap>
    <Heading6>Made by Kate R. Dameron &copy; 2019</Heading6>
  </Wrap>
);

export default Footer

