import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeader } from '../../core/styled/text.styled';
import { size as sizes } from '../../core/commons';

const Header = ({ children, style, size }) => {
  const styles = style || undefined;
  const props = {
    size: sizes.font[size],
  };
  return (
    <StyledHeader {...props} style={styles}>{children}</StyledHeader>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  style: PropTypes.oneOfType([PropTypes.object]),
};

Header.defaultProps = {
  children: 'Header',
  style: null,
};

export default Header;
