import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.aside`
  display: grid;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;

  @media (min-width: 436px) {
    img {
      width: 400px;
  }
}
`;

const Header = styled.header`
  border-bottom: black solid 2px; 
`;

const Tech = styled.p`
  font-size: 1em;
  text-align: center;
  padding-right: 5px;
`;

const Heading1 = styled.h1`
margin-top: 0;
padding-left: 0;
text-align: center;
font-size: 1.4em;
`;

const Details = styled.p`
  font-size: 0.8em;
  padding-left: 5px;
  grid-row: auto;
`;

const NavList = styled.ul`
  position: relative;
  border-bottom: black solid 2px;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  padding: 0;
  width: 100%;
`;

const ListItem = styled.li`
  display: inline-block;
  &:hover {
    text-decoration: underline;
    position: relative;
    z-index: 1;
  }
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  padding: 2px 0;

 &:hover {
  text-decoration: underline;
  position: relative;
  z-index: 1;
 }
`;

const ProjectDetails = ({ title, media, about, siteURL, githubURL }) => (
  <Wrapper>
    <Header>
      <Heading1>{title}</Heading1> 
      <nav>
        <NavList>
          {siteURL &&
            <ListItem>
              <Link href={siteURL}>SITE</Link>
            </ListItem>}
            <ListItem>
              <Link href={githubURL}>GITHUB</Link>
            </ListItem>
        </NavList>
      </nav>
      <Tech>{media}</Tech>
    </Header>
    <Details>{about}</Details>
  </Wrapper>
);

ProjectDetails.propTypes = {
  title: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  siteURL: PropTypes.string,
  githubURL: PropTypes.string
};

export default ProjectDetails;
