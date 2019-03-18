import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import styles from '../styles/artStudio.css';

function Album({ projects }) {
  const projectList = projects.map((project, i) => {
    return <Project key={i} project={project}/>;
  });
  return (
    <main>
      {projectList}
    </main>
  );
}

Album.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Album;
