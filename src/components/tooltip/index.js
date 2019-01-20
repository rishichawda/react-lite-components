import React, { Component } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'

import { StyledTooltip, Flex } from 'core/styled/box.styled'

export default class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    tooltipText: PropTypes.string,
  }


  static defaultProps = {
    tooltipText: 'Tooltip'
  }

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
    this.show = () => this.setState({ show: true })
    this.hide = () => this.setState({ show: false })
  }

  render() {
    const { tooltipText, children } = this.props;
    const { show } = this.state;
    return (
      <Flex bg='yellow' p='0' onMouseEnter={this.show} onMouseLeave={this.hide}>
        {children}
        { show && <StyledTooltip>{tooltipText}</StyledTooltip> }
      </Flex>
    )
  }
}
