import React from 'react';
import PropTypes from 'prop-types';

function Figure({ url, alt }) {
  return (
    <figure>
      <img src={url}
        alt={alt}
      />
    </figure>
  );
}

Figure.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
