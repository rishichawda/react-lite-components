import React from 'react';
import PropTypes from 'prop-types';
import StyledImage from 'core/styled/image.styled';

const Image = ({ style, ...rest }) => {
  const props = {
    ...rest,
  };
  return (
    <StyledImage {...props} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
