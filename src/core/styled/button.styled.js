import styled from 'styled-components';
import { color } from 'core/commons';
import { baseStyle as boxStyle } from 'core/styled/box.styled';

const StyledButton = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
color: ${props => (props ? props.color : color.light)};
background-color: ${props => (props ? props.bg : color.primary)};
${boxStyle}
`;

export default StyledButton;
