import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/projectDetails.css';

function ProjectDetails({ title, media, about, siteURL, githubURL }) {
  return (
    <aside className={styles.aside}>
      <header>
        <h1>{title}</h1> 
        <nav>
          <ul>
            {siteURL && <li><a href={siteURL}>SITE</a></li>}
            <li><a href={githubURL}>GITHUB</a></li>
          </ul>
        </nav>
        <p>{media}</p>
      </header>
      <p>{about}</p>
    </aside>
  );
}

ProjectDetails.propTypes = {
  title: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  siteURL: PropTypes.string,
  githubURL: PropTypes.string
};

export default ProjectDetails;
