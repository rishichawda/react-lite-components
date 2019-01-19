import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from 'core/styled/button.styled';
import { color } from 'core/commons';

const Button = ({
  children, style, type, bg, fontColor, ...rest
}) => {
  const styles = style || undefined;
  const props = {
    bg,
    color: type === 'light' ? color.dark : fontColor,
    ...rest,
  };
  return (
    <StyledButton {...props} style={styles}>{children}</StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  style: PropTypes.oneOfType([PropTypes.object]),
  type: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  children: 'Button',
  style: null,
  type: 'primary',
  bg: color.primary,
  color: color.light,
};

export default Button;
