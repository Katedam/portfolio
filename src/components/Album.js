import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';

const Main = styled.main`
@media (min-width: 760px) {
  display: grid;
  grid-template-rows: max-content;
  margin: 1em;
  font-family: "Ubuntu", sans-serif;
}
`;

const Album = ({ projects }) => {
  const projectList = projects.map((project, i) => {
    return <ProjectCard key={i} project={project}/>;
  });
  return (
    <Main>{projectList}</Main>
  );
}

Album.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Album;
