import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable no-restricted-globals */
const ColumnWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-flow: row;
    flex-grow: ${props => props.span};

    @media only screen and (max-width: ${props => (props.break ? props.break : '600')}px) {
        flex-flow: column;
        width: 100%;
    }
    ${props => (props.h ? `height : ${isNaN(props.h) ? props.h : `${props.h}px`};` : '')}
    ${props => (props.w ? `width : ${isNaN(props.w) ? props.w : `${props.w}px`};` : '')}
    ${props => (props.bg ? `background: ${props.bg};` : '')}
    ${props => (props.m ? `margin: ${props.m}` : '')}
    ${props => (props.p ? `padding: ${props.p}` : '')}
`;

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
};

Col.defaultProps = {
  children: null,
  h: null,
  w: null,
  bg: null,
  m: null,
  span: 1,
};

export default Col;
