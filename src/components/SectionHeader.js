import React from 'react';
import styled from 'styled-components';


const Header = styled.header`
  text-align: center;
  margin: 2rem auto;
  height: 100px;
`;

const SectionHeading1 = styled.h1`
  margin-top: 1em;
  padding: 1em;
  font-family: "Syncopate", sans-serif;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const BigChartrueseArrow = styled.img`
  display: block;
  margin: 0 auto;
`;

const SectionHeader = ({ headerText }) => (
  <Header>
    <SectionHeading1>{headerText}</SectionHeading1>
    <BigChartrueseArrow src="https://res.cloudinary.com/dzxqhkyqd/image/upload/a_270/v1553999875/triangle_copy.png"/>
  </Header>
)

export default SectionHeader;