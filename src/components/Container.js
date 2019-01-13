import React from 'react';
import PropTypes from 'prop-types';
import { ContainerWrapper } from '../core';

const Container = (props) => {
  const { children } = props;
  return (
    <ContainerWrapper {...props}>
      {children}
    </ContainerWrapper>
  );
};

Container.propTypes = {
  children: PropTypes.arrayOf([PropTypes.node, PropTypes.element]),
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  children: null,
  h: null,
  w: '70%',
  bg: null,
  m: 'auto',
  p: '1%',
  fluid: false,
};

export default Container;
