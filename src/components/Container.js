import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable no-restricted-globals */
const ContainerWrapper = styled.div`
    box-sizing: border-box;
    ${props => (props.h ? `height : ${isNaN(props.h) ? props.h : `${props.h}px`};` : '')}
    ${(props) => {
    if (props.w === '70%') {
      if (props.fluid) {
        return 'width: 100%;';
      }
      return 'width: 70%;';
    }
    return `width : ${isNaN(props.h) ? props.h : `${props.h}px`};`;
  }} 
    ${props => (props.bg ? `background: ${props.bg};` : '')}
    ${props => (props.m ? `margin: ${props.m}` : '')}
    ${props => (props.p ? `padding: ${props.p}` : '')}
`;

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
