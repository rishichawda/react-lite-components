import React, { Component } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import { ToggleButton, ToggleSwitch } from 'core/styled/button.styled'
import { color } from 'core/commons';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    }
  }
  
  toggle = () => {
    const { onChange } = this.props;
    this.setState(prev => ({ isOn: !prev.isOn }),
    () => {
      const { isOn } = this.state;
      onChange(isOn);
    });
  }

  render() {
    const { onColor, offColor } = this.props;
    const { isOn } = this.state;
    return (
      <ToggleButton
        isOn={isOn}
        activeBg={onColor}
        inactiveBg={offColor}
        onClick={this.toggle}
      >
        <ToggleSwitch isOn={isOn} />
      </ToggleButton>
    )
  }
}

Toggle.propTypes = {
  onColor: PropTypes.string,
  offColor: PropTypes.string,
  onChange: PropTypes.func,
}

Toggle.defaultProps = {
  onColor: color.success,
  offColor: color.textMuted,
  onChange: () => {},
}

export default Toggle