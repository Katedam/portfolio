import React from 'react';
import PropTypes from 'prop-types';
import ProjectDetails from './ProjectDetails';
import Figure from './Figure';
import styles from '../styles/project.css';

function Project({ project }) {
  const { url, alt, title, media, about, siteURL, githubURL } = project;
  return (
    <section className={styles.project}>
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
    </section>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default Project;
