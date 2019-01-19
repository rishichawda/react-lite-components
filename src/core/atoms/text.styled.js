import styled from 'styled-components';
import { color, size } from '../commons';

const baseStyle = `
font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
color: ${color.text};
`;

export const StyledText = styled.p`
${baseStyle}
${props => (props.color ? `color: ${props.color};` : '')}
font-size: ${props => (props.size ? props.size : size.font.md)};
`;

export const StyledHeader = styled.h2`
${baseStyle}
${props => (props.color ? `color: ${props.color};` : '')}
font-size: ${props => (props.size ? props.size : size.font.lg)};
`;
