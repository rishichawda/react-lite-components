import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BadgeWrapper = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '1%';
      case 'medium':
        return '1.5%';
      case 'large':
        return '2%';
      case 'massive':
        return '2.5%';
      default:
        return '1%';
    }
  }};
`;

const BadgeHolder = styled.div`
  ${(props) => {
    switch (props.size) {
      case 'small':
        return 'height: 15px; width: 15px; font-size: 0.7em';
      case 'medium':
        return 'height: 20px; width: 20px; font-size: 0.8em';
      case 'large':
        return 'height: 25px; width: 25px; font-size: 0.8em';
      case 'massive':
        return 'height: 30px; width: 30px; font-size: 1em';
      default:
        return 'height: 15px; width: 15px';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  background: ${props => props.bg};
  color: ${props => props.color};
`;

const Badge = (props) => {
  const {
    badgeCount, children, bg, size, badgeTextColor,
  } = props;
  return (
    <BadgeWrapper size={size}>
      {children}
      <BadgeHolder bg={bg} size={size} color={badgeTextColor}>
        {badgeCount}
      </BadgeHolder>
    </BadgeWrapper>
  );
};

Badge.propTypes = {
  badgeCount: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  bg: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'massive']),
  badgeTextColor: PropTypes.string,
};

Badge.defaultProps = {
  badgeCount: 0,
  bg: 'red',
  badgeTextColor: 'white',
  size: 'small',
};

export default Badge;
