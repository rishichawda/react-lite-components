import React from 'react';
import PropTypes from 'prop-types';

import { StyledText } from '../../core/styled/text.styled';
import { size as sizes } from '../../core/commons';

const Text = ({ children, style, size }) => {
  const styles = style || undefined;
  const props = {
    size: sizes.font[size],
  };
  return (
    <StyledText {...props} style={styles}>{children}</StyledText>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  style: PropTypes.oneOfType([PropTypes.object]),
  size: PropTypes.string,
};

Text.defaultProps = {
  children: 'default text',
  style: null,
  size: 'md',
};

export default Text;
