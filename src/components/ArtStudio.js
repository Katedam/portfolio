import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';
import Figure from './Figure';

const Wrapper = styled.section`display: grid`;

const List = styled.ul`
  display: grid;
  font-family: "Ubuntu", sans-serif;
  list-style-type: none;
  padding: 0;

  @media (min-width: 1026px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

const MediaType = styled.li`
justify-self: center;
display: grid;
grid-template-rows: repeat(5, 70px);
grid-template-columns: 40px 300px 40px;
text-align: center;
font-size: 1.2em;
cursor: pointer;
`;

const MediaTitle = styled.h2`
grid-column-start: 2;
grid-row-start: 3;
color: #000000;
z-index: 10;
background-color: white;
height: 53%;
opacity: 0.8;
`;

const MediaImage = styled.img`opacity: 0.5;`;

const ArtStudio = () => (
  <>
  <SectionHeader headerText="Art Studio"/>
  <Wrapper>
    <main>
      <List>
        <MediaType>
          <MediaTitle>Ceramic - Fiber</MediaTitle>
          <Link to="/3dAlbum">
            <figure>
              <MediaImage src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_300/v1553379268/IMG_6437.jpg" alt="clay vessel with fiber decoration"/>
            </figure>
          </Link>
        </MediaType>
        <MediaType>
          <MediaTitle>Paint - Pencil</MediaTitle>
          <Link to="/2dAlbum">
            <figure>
              <MediaImage src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552852892/IMG_6807.jpg" alt="oil painting of a dog"/>
            </figure>
          </Link>
        </MediaType>
      </List>
    </main>
  </Wrapper>
  </>
);

export default ArtStudio;