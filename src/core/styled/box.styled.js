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
bottom: -1.5em;
padding: 0.2em;
font-size: ${size.font.sm};
box-shadow: ${borderStyle.boxShadowmed};
color: ${color.light}
background-color: ${props => props.bg ? props.bg : color.dark}70;
`;