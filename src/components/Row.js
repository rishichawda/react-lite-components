import React from 'react';
import PropTypes from 'prop-types';
import { RowWrapper } from '../core';

const Row = (props) => {
  const { children } = props;
  return (
    <RowWrapper {...props}>
      {children}
    </RowWrapper>
  );
};

Row.propTypes = {
  children: PropTypes.arrayOf([PropTypes.node, PropTypes.element]),
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  m: PropTypes.string,
};

Row.defaultProps = {
  children: null,
  h: null,
  w: '100%',
  bg: null,
  m: null,
};

export default Row;
