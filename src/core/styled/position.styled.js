import styled from 'styled-components';
import { position } from 'core/commons';

export const Position = styled.div`
position: ${props => props.position ? props.position : position.static};
`;