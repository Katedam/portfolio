import React from 'react';
import PropTypes from 'prop-types';
import ProjectDetails from './ProjectDetails';
import Figure from './Figure';
import styled from 'styled-components';


const Section = styled.section`
  display: grid;
  background-color: white;
  box-shadow: 2px 2px 5px #d8d8d8;
  border-radius: 2px;
  opacity: 1;
  margin: 10px;
  margin-bottom: 15px;
  animation: transitionOpac 0.7s linear;

  @keyframes transitionOpac {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
  }

  @media (min-width: 900px) {
    display: flex;
  }
}`;

const ProjectCard = ({ project }) => {
  const { url, alt, title, media, about, siteURL, githubURL } = project;
  return (
    <Section>
      <Figure 
        url={url}
        alt={alt}
      />
      <ProjectDetails 
        title={title}
        media={media}
        about={about}
        siteURL={siteURL}
        githubURL={githubURL}
      />
    </Section>
  );
};


ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectCard;
