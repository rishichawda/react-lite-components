import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getElevation = (raised) => {
  switch (raised) {
    case 'low':
      return 'box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.5);';
    case 'medium':
      return 'box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.5);';
    case 'high':
      return 'box-shadow: 3px 3px 5px 4px rgba(0,0,0,0.5);';
    case 'floating':
      return 'box-shadow: 4px 4px 9px 6px rgba(0,0,0,0.5);';
    default:
      return false;
  }
};

/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
const CardWrapper = styled.div`
    box-sizing: border-box;
    ${props => (props.h ? `height : ${isNaN(props.h) ? props.h : `${props.h}px`};` : '')}
    ${props => (props.w ? `width : ${isNaN(props.w) ? props.w : `${props.w}px`};` : '')}
    ${props => (props.bg ? `background: ${props.bg};` : '')}
    ${props => (props.m ? `margin: ${props.m};` : '')}
    padding : ${props => props.p};
    ${props => (props.raised
    ? getElevation(props.raised)
    : props.boxShadow
      ? `box-shadow: ${props.boxShadow}`
      : '')}
    border-radius: ${props => props.borderRadius};
    display: flex;
    flex-flow: column;
`;

const CardTitle = styled.p`
box-sizing: border-box;
  font-weight: ${props => props.fontWeight || 'bold'};
  margin: 0 0 1% 0;
  padding: 1%;
`;

const CardBody = styled.div`
box-sizing: border-box;
  margin: 0 0 1% 0;
  padding: 1%;
`;

const CardFooter = styled.div`
box-sizing: border-box;
  margin: 0 0 1% 0;
  padding: 1%;
`;

const Container = (props) => {
  const {
    children, title, cardBody, cardFooter,
  } = props;
  return (
    <CardWrapper {...props}>
      {title !== undefined && <CardTitle>{title}</CardTitle>}
      {cardBody !== undefined && <CardBody>{cardBody}</CardBody>}
      <CardBody>{children}</CardBody>
      {cardFooter !== undefined && <CardFooter>{cardFooter}</CardFooter>}
    </CardWrapper>
  );
};

Container.propTypes = {
  children: PropTypes.arrayOf([PropTypes.node, PropTypes.element]),
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bg: PropTypes.string,
  m: PropTypes.string,
  p: PropTypes.string,
  borderRadius: PropTypes.string,
  raised: PropTypes.oneOf(['low', 'medium', 'high', 'floating']),
  title: PropTypes.string,
};

Container.defaultProps = {
  children: null,
  h: null,
  w: '100%',
  bg: null,
  m: null,
  p: '1%',
  borderRadius: '2px',
  raised: 'low',
  title: undefined,
};

export default Container;
