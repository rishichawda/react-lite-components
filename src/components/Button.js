import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getColor = (type) => {
  switch (type) {
    case 'primary':
      return '#2979ff';
    case 'secondary':
      return '#616161';
    case 'success':
      return '#689F38';
    case 'warning':
      return '#FF9800';
    case 'danger':
      return '#D32F2F';
    case 'dark':
      return '#212121';
    default:
      return '#eee';
  }
};

const getTextColor = (type) => {
  switch (type) {
    case 'primary': case 'success': case 'danger': case 'dark': case 'secondary': case 'warning':
      return 'white';
    default:
      return 'black';
  }
};

/* eslint-disable no-restricted-globals */
const ButtonWrapper = styled.button`
box-sizing: border-box;
cursor: pointer;
    outline: none;
    ${props => (props.h ? `height : ${isNaN(props.h) ? props.h : `${props.h}px`};` : '')}
    ${props => (props.w ? `width : ${isNaN(props.h) ? props.h : `${props.h}px`};` : '')}
    ${props => (props.type
    ? `background: ${getColor(props.type)} !important;
                            color: ${getTextColor(props.type)} !important;`
    : '')}
    ${props => (props.bg ? `background: ${props.bg};` : '')}
    ${props => (props.m ? `margin: ${props.m};` : '')}
    padding : ${props => props.p};
    border-radius: ${props => props.borderRadius};
    border: ${props => props.border};
`;

const Button = (props) => {
  const { children } = props;
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

Button.propTypes = {
  children: PropTypes.arrayOf([PropTypes.node, PropTypes.element]),
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
};

Button.defaultProps = {
  children: 'Default Text',
  h: null,
  w: null,
  bg: '#eee',
  m: null,
  p: '0.7%',
  borderRadius: '2px',
  border: 'none',
};

export default Button;
