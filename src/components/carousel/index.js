import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CarouselContainer = styled.div`
  position: relative;
`;

const CarouselInner = styled.div`
  position: absolute;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
`;

class Carousel extends React.Component {

  static propTypes = {
    carouselItems: PropTypes.arrayOf(PropTypes.node).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
    this.scrollInterval = null
  }

  componentDidMount() {
    this.changeItem()
  }

  setActiveItem = () => {
    const { carouselItems } = this.props
    this.setState(
      prevState => ({
        active: (prevState.active + 1) % carouselItems.length
      }),
      this.changeItem
    )
  }

  changeItem = () => {
    this.scrollInterval = setTimeout(this.setActiveItem, 2000)
  }

  render() {
    const { carouselItems } = this.props
    const { active } = this.state
    return (
      <CarouselContainer>
        {carouselItems.map((item, index) => (
          <CarouselInner visible={active === index}>
            {item}
          </CarouselInner>
            ))}
      </CarouselContainer>
    );
  }
}

export default Carousel