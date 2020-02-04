import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  height: 100%;
  overflow: scroll;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: repeat(8, 11rem);

  @media (min-width: 1024px) {
    grid-column-start: 4;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 3;
    text-align: right;
  }

  @media (min-width: 760px) {
    grid-template-columns: repeat(6, 6rem);
    grid-template-rows: repeat(11, 6rem);
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(8, 6rem);
  }
`;

const Header = styled.header`
  grid-column-start: 1;
  grid-column-end: 5;
  color: black;
  font-family: "Ubuntu", sans-serif;
  font-size: 0.9em;
  text-align: center;
  margin: 0;

  @media (min-width: 760px) {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 3;
    font-size: 1.1em;
  }
  @media (min-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 9;
    font-size: 1.5em;
    margin: 0;
  }
`;

const Heading1 = styled.h1`
  margin: 5% 0;
  letter-spacing: 0.3em;
  font-size: 1.5em;
`;

const SubHeader = styled.h2`
  margin: 0;
  letter-spacing: 0.5em;
  font-size: 1.8em;
`;

const CollageImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 2px;
`;

const Desk = styled(CollageImage)`
  grid-column-start: 1;
  grid-column-end: 3;

  @media (min-width: 760px) {
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 3;
    grid-row-end: 5;
  }
  @media (min-width: 1024px) {
    grid-column-start: 8;
    grid-column-end: 9;
    grid-row-start: 4;
    grid-row-end: 5;
  }
`;

const FatHalfOne = styled(CollageImage)`
  grid-column-start: 3;
  grid-column-end: 5;

  @media (min-width: 760px) {
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 5;
    grid-row-end: 7;
  }
  @media (min-width: 1024px) {
    grid-column-start: 8;
    grid-column-end: 9;
    grid-row-start: 5;
    grid-row-end: 6;
  }
`;

const SkinnyHalfOne = styled(CollageImage)`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;
  width: 50%;
  height: 50%;
  z-index: 10;
  margin: auto 0;

  @media (min-width: 760px) {
    height: 100%;
    grid-row-start: 9;
    grid-row-end: 10;
  }
  @media (min-width: 1024px) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 5;
    grid-row-end: 6;
    height: 100%;
    width: 100%;
  }
`;

const SkinnyHalfTwo = styled(CollageImage)`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;
  width: 50%;
  height: 50%;
  z-index: 10;
  margin: auto 0;

  @media (min-width: 760px) {
    height: 100%;
    grid-row-start: 8;
    grid-row-end: 9;
  }
  @media (min-width: 1024px) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 5;
    grid-row-end: 6;
    height: 100%;
    width: 100%;
  }
`;

const Cup = styled(CollageImage)`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 6;

  @media (min-width: 760px) {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 7;
    grid-row-end: 8;
  }
  @media (min-width: 1024px) {
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 7;
    grid-row-end: 8;
  }
`;

const LandscapeOne = styled(CollageImage)`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 5;

  @media (min-width: 760px) {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 6;
    grid-row-end: 7;
  }
  @media (min-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    height: 100%;
  }
`;

const SkinnyHalfThree = styled(CollageImage)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  height: 50%;
  margin: auto 0;

  @media (min-width: 760px) {
    height: 100%;
    grid-row-start: 9;
    grid-row-end: 10;
  }
  @media (min-width: 1024px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
    height: 100%;
  }
`;

const SkinneyHalfFour = styled(CollageImage)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 4;
  height: 50%;
  margin: auto 0;

  @media (min-width: 760px) {
    height: 100%;
    grid-row-start: 8;
    grid-row-end: 9;
  }
  @media (min-width: 1024px) {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 5;
    grid-row-end: 6;
    height: 100%;
  }
`;

const TriangleOne = styled(CollageImage)`
  width: 50%;
  grid-column-start: 3;
  grid-column-end: 5;

  @media (min-width: 760px) {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 5;
    grid-row-end: 6;
  }
  @media (min-width: 1024px) {
    width: 50%;
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 6;
    grid-row-end: 7;
  }
`;

const TriangleTwo = styled(CollageImage)`
  width: 50%;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 6;

  @media (min-width: 760px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }
  @media (min-width: 1024px) {
    width: 50%;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
  }
`;

// const LandscapeTwo = styled(CollageImage)`
//   grid-column-start: 7;
//   grid-column-end: 9;
//   grid-row-start: 6;

//   @media (min-width: 1024px) {
//     grid-column-start: 7;
//     grid-column-end: 9;
//     grid-row-start: 7;
//     grid-row-end: 8;
//   }
// `;

const Desert = styled(CollageImage)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 7;

  @media (min-width: 760px) {
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 8;
    grid-row-end: 9;
  }
  @media (min-width: 1024px) {
    grid-column-start: 7;
    grid-column-end: 8;
    grid-row-start: 6;
    grid-row-end: 7;
  }
`;

const Wheat = styled(CollageImage)`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 3;

  @media (min-width: 760px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  @media (min-width: 1024px) {
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row-start: 5;
    grid-row-end: 6;
  }
`;

const SkinnyHalfFive = styled(CollageImage)`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 4;
  height: 50%;
  z-index: 10;
  margin: auto 0;

  @media (min-width: 760px) {
    height: 100%;
    grid-row-start: 9;
    grid-row-end: 10;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const SkinnyHalfSix = styled(CollageImage)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 4;
  height: 50%;
  margin: auto 0;

  @media (min-width: 760px) {
    height: 100%;
    grid-row-start: 9;
    grid-row-end: 10;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

export default function Home() {
  return (
    <MainContainer>
      <Header>
        <Heading1>Kate  R  Dameron</Heading1>
        <SubHeader>Full-Stack</SubHeader>
        <SubHeader>Developer</SubHeader>
      </Header>
      <Desk 
        src='https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_200/v1553993220/kari-shea-226153-unsplash.jpg' 
        alt='desk with chair and mac book'/>
      <FatHalfOne
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/a_90/v1553444925/semi-circle1-yellow.png" 
        alt="half circle shape"/>
      <SkinnyHalfOne
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,h_100/v1553994751/semi-circle2.png"
        alt="half circle shape"/>
      <SkinnyHalfTwo
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,h_100/a_180/v1553994751/semi-circle2.png"
        alt="half circle shape"/>
      <Cup
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_250/v1553993214/artem-sapegin-199614-unsplash.jpg"
        alt="computer and red cup on desk" />
      <SkinnyHalfThree
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,h_250/v1553012906/semi-circle2-invert.png"
        alt="half circle shape"/>
      <SkinneyHalfFour
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,h_250/a_180/v1553012906/semi-circle2-invert.png"
        alt="half circle shape"/>
      <TriangleOne
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/a_vflip/v1553997486/triangle.png"
        alt="trangle shape"/>
      <TriangleTwo
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,h_200/a_180/v1553999875/triangle_copy.png"
        alt="triangle shape"/>
      <LandscapeOne
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,h_400/v1554002950/IMG_7171.jpg"
        alt="landscape of lower utah"/>
      <Desert
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_250/v1554002944/IMG_7216.jpg"
        alt="cactus in the desert"/>
      <Wheat
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_250/v1554002944/IMG_4651.jpg"
        alt="wheat tops"/>
      <SkinnyHalfFive
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,h_100/v1553994751/semi-circle2.png"
        alt="half circle shape"/>
      <SkinnyHalfSix
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,h_250/v1553012906/semi-circle2-invert.png"
        alt="half circle shape"/>
    </MainContainer>
  );
}
