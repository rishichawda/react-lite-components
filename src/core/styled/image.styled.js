import styled from 'styled-components'

const StyledImage = styled.img`
width: ${props => (props.w ? props.w : '100%')};
height: ${props => (props.w ? props.w : 'auto')};
`

export default StyledImage