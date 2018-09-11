import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AvatarWrapper = styled.div`
  ${(props) => {
    switch (props.size) {
      case 'small':
        return 'height: 35px; width: 35px';
      case 'medium':
        return 'height: 45px; width: 45px';
      case 'large':
        return 'height: 55px; width: 55px';
      case 'massive':
        return 'height: 70px; width: 70px';
      default:
        return 'height: 35px; width: 35px';
    }
  }};
  background-color: ${props => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  overflow: hidden;
`;

const AvatarImage = styled.img`
  max-height: 100%;
  width: auto;
`;

const Avatar = (props) => {
  const {
    avatarImage, avatarAlt, size, bg,
  } = props;
  return (
    <AvatarWrapper
      bg={bg}
      size={size}
    >
      {(
        avatarImage
   && (
   <AvatarImage
     src={avatarImage}
   />
   )
      ) || avatarAlt}
    </AvatarWrapper>
  );
};

Avatar.propTypes = {
  avatarImage: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  avatarAlt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'massive']),
  bg: PropTypes.string,
};

Avatar.defaultProps = {
  avatarImage: null,
  size: 'small',
  bg: '#aaa',
};

export default Avatar;
