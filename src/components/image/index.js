import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import StyledImage from 'core/styled/image.styled'

const Image = ({ style, ...rest }) => {
  const props = {
    ...rest,
  }
  return (
    <StyledImage {...props} />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  w: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  h: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Image.defaultProps = {
  w: undefined,
  h: undefined,
}

export default Image