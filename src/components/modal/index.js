import React, { Component } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Flex } from '../../core/styled/box.styled';
import { Position } from '../../core/styled/position.styled';


class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setState({
        isOpen: this.props.isOpen,
      })
    }
  }
  
  handleClose = () => {
    const { onClose } = this.props;
    this.setState({ isOpen: false },
    () => {
      const { isOpen } = this.state;
      onClose(isOpen);
    });
  }

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    console.log(isOpen, 'inside modal');
    return (
      <div>
      { /* Ignore inline styles, will move them to position.styled */ }
      { isOpen && (
          <Position position="fixed" top="0" left="0" style={{backgroundColor: 'rgba(0,0,0,0.5)', width: '100vw', height: '100vh'}} onClick={this.handleClose}>
            <Flex>
              {children}
            </Flex>
          </Position>
        )
      }
      </div>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
}

export default Modal