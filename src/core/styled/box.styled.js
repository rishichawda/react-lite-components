import styled from 'styled-components'
import { borderStyle } from 'core/commons'

export const baseStyle = `
padding: 0.5em;
box-sizing: border-box;
display: flex;
width: fit-content;
border-radius: ${borderStyle.borderRadius};
`

export const Flex = styled.div`
${baseStyle}
${props => (props.shadow ? `box-shadow:${props.shadow};` : '')}
`

Flex.row = styled(Flex)`
flex-direction: row;
`

Flex.column = styled(Flex)`
flex-direction: column;
`