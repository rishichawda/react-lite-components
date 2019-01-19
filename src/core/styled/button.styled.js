import styled from 'styled-components'
import { color, size } from 'core/commons'
import { baseStyle as boxStyle } from 'core/styled/box.styled'

const StyledButton = styled.button`
${boxStyle}
font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
font-size: ${props => (props.size ? props.size : size.font.md)};
cursor: pointer;
color: ${props => (props.color ? props.color : color.light)};
background-color: ${props => (props.bg ? props.bg : color.primary)};
user-select: none;
outline: none;
border: none;
&:active {
    background-color: ${props => (props.activeBg ? props.activeBg : color.primaryActive)};
}
`

export default StyledButton