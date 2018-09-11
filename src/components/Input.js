import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputWrapper = styled.input`
    box-sizing: border-box;
    border-style: ridge;
    outline: none;
    ${props =>
      props.h ? `height : ${isNaN(props.h) ? props.h : `${props.h}px`};` : ``}
    ${props =>
      props.w ? `width : ${isNaN(props.h) ? props.h : `${props.h}px`};` : ``}
    ${props => props.bg ? `background: ${props.bg};` : ``}
    ${props => props.border ? `border: ${props.border};` : ``}
    ${props => props.borderRadius ? `border-radius: ${props.borderRadius};` : ``}
    ${props => props.m ? `margin: ${props.m};` : ``}
    padding : ${props => props.p};

    &:focus {
      border-bottom: 1px solid ${props => props.focusColor} !important;
    }
`;

const Input = props => <InputWrapper {...props} />;

Input.propTypes = {
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  m: PropTypes.string,
  placeholder: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  p: PropTypes.string,
  focusColor: PropTypes.string,
};

Input.defaultProps = {
  h: null,
  w: null,
  bg: '#eee',
  m: null,
  placeholder: 'Type here',
  border: 'none',
  borderRadius: null,
  p: '1%',
  focusColor: 'blue',
};

export default Input;
