import React from 'react';
import PropTypes from 'prop-types';
import ProjectDetails from './ProjectDetails';
import Figure from './Figure';

function Project({ project }) {
  const { imageUrl, alt, title, media, about, siteURL, githubURL } = project;
  return (
    <section>
      <Figure 
        imageUrl={imageUrl}
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
