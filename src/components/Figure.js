import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledFigure = styled.figure`
  justify-self: center;
  height: max-content;
  margin: 2%;
`;

const Image = styled.img`width: 100%;
`;

function Figure({ url, alt }) {
  return (
    <StyledFigure>
      <Image src={url}
        alt={alt}
      />
    </StyledFigure>
  );
}

Figure.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Figure;
