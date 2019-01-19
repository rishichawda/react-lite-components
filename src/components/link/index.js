import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from '../../core/styled/text.styled';
import { size as sizes } from '../../core/commons';

const Link = ({
  children, style, size, ...rest
}) => {
  const styles = style || undefined;
  const props = {
    size: sizes.font[size],
    ...rest,
  };
  return (
    <StyledLink {...props} style={styles}>{children}</StyledLink>
  );
};

Link.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  style: PropTypes.oneOfType([PropTypes.object]),
  size: PropTypes.string,
  nounderline: PropTypes.bool,
};

Link.defaultProps = {
  children: 'default text',
  style: null,
  size: 'md',
  nounderline: true,
};

export default Link;
