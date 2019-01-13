import React from 'react';
import PropTypes from 'prop-types';
import { ColumnWrapper } from '../core';

const Col = (props) => {
  const { children } = props;
  return (
    <ColumnWrapper {...props}>
      {children}
    </ColumnWrapper>
  );
};

Col.propTypes = {
  children: PropTypes.arrayOf([PropTypes.node, PropTypes.element]),
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  m: PropTypes.string,
  span: PropTypes.number,
  break: PropTypes.number,
  p: PropTypes.string,
};

Col.defaultProps = {
  children: null,
  h: 'fit-content',
  w: null,
  bg: null,
  m: null,
  span: 1,
  p: '2%',
  break: null,
};

export default Col;
