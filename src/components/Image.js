import React from 'react';
import PropTypes from 'prop-types';
import { ImageWrapper } from '../core';

const Image = props => (
  <ImageWrapper {...props} />
);

Image.propTypes = {
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  m: PropTypes.string,
};

Image.defaultProps = {
  h: '100%',
  w: 'auto',
  m: null,
};

export default Image;
