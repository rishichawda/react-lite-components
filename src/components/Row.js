import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable no-restricted-globals */
const RowWrapper = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-gap: 2% 0.5%;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;

    ${props => (props.h ? `height : ${isNaN(props.h) ? props.h : `${props.h}px`};` : '')}
    ${props => (props.w ? `width : ${isNaN(props.w) ? props.w : `${props.w}px`};` : '')}
    ${props => (props.bg ? `background: ${props.bg};` : '')}
    ${props => (props.m ? `margin: ${props.m}` : '')}
`;

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
