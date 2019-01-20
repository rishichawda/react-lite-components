import styled from 'styled-components'
import { borderStyle, color, size } from 'core/commons'

export const baseStyle = `
box-sizing: border-box;
display: flex;
width: fit-content;
position: relative;
border-radius: ${borderStyle.borderRadius};
`

export const Flex = styled.div`
padding: ${props => typeof props.p === 'string' ? props.p : '0.5em'};
${baseStyle}
${props => (props.shadow ? `box-shadow:${props.shadow};` : '')}
background-color: ${props => props.bg ? props.bg : color.light};
`

Flex.row = styled(Flex)`
${baseStyle}
flex-direction: row;
`

Flex.column = styled(Flex)`
${baseStyle}
flex-direction: column;
`

export const StyledTooltip = styled(Flex.row)`
position: absolute;
bottom: -2.5em;
padding: 0.3em;
font-size: ${size.font.sm};
filter: drop-shadow(${borderStyle.boxShadowmed});
color: ${color.light}
background-color: ${props => props.bg ? props.bg : color.dark}70;
&:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    transform: rotate(180deg);
    border-color: ${props => props.bg ? props.bg : color.dark}70 transparent transparent transparent;
}
`;