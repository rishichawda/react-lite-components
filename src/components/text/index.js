import React from 'react';
import PropTypes from 'prop-types';

import { StyledText } from '../../core/atoms/text.styled';

const Text = ({ children, style }) => {
  const styles = style || undefined;
  return (
    <StyledText style={styles}>{children}</StyledText>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  style: PropTypes.oneOfType([PropTypes.object]),
};

Text.defaultProps = {
  children: 'default text',
  style: null,
};

export default Text;
