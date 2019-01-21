import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

import { StyledButton } from 'core/styled/button.styled'
import { color } from 'core/commons'

const Button = ({
  children, style, type, bg, activeBg, fontColor, ...rest
}) => {
  const styles = style || undefined
  const props = {
    bg : type ? (color[type]) : bg,
    color: type === 'light' ? color.dark : fontColor,
    activeBg: type ? color[`${type}Active`] : activeBg,
    ...rest,
  }
  return (
    <StyledButton {...props} style={styles}>{children}</StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  style: PropTypes.oneOfType([PropTypes.object]),
  type: PropTypes.string,
  bg: PropTypes.string,
  activeBg: PropTypes.string,
  color: PropTypes.string,
}

Button.defaultProps = {
  children: 'Button',
  style: null,
  type: 'primary',
  bg: color.primary,
  activeBg: undefined,
  color: color.light,
}

export default Button