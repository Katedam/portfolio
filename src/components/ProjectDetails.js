import React from 'react';
import PropTypes from 'prop-types';

function ProjectDetails({ title, media, about, siteURL, githubURL }) {
  return (
    <aside>
      <header>
        <h1>{title}</h1>
        <p>{media}</p>
      </header>
      <p>{about}</p>
      {(siteURL && githubURL) && 
      <nav>
        <a href={siteURL}>SITE</a>
        <a href={githubURL}>GITHUB</a>
      </nav>}
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