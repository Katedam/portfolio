import React from 'react';
import Card from './Card';
import SectionHeader from './SectionHeader';
import styled from 'styled-components';


const Wrapper = styled.main`
  padding: 1em;
  display: grid;
  grid-template-rows: repeat(4, 15rem);
`;

const About = () => (
  <Wrapper>
    <SectionHeader headerText={"About"}/>
    <Card title="Bio" text="As a Full-stack Developer with a background in arts education I enjoy making accessible tools that improve the community. When I am not building components and working on my debugging superpowers, I enjoy hiking with my philosophical pup and partner, making food, and working in the art studio."/>
  </Wrapper>
);

export default About;
