/* eslint-disable no-restricted-globals */
import styled from 'styled-components';

export const RowWrapper = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-gap: 2% 0.5%;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;

    ${props => (props.h ? `height : ${isNaN(props.h) ? props.h : `${props.h}px`};` : '')}
    ${props => (props.w ? `width : ${isNaN(props.w) ? props.w : `${props.w}px`};` : '')}
    ${props => (props.bg ? `background: ${props.bg};` : '')}
    ${props => (props.m ? `margin: ${props.m}` : '')}
`;

export const InputWrapper = styled.input`
box-sizing: border-box;
border-style: ridge;
outline: none;
${props => (props.h ? `height : ${isNaN(props.h) ? props.h : `${props.h}px`};` : '')}
${props => (props.w ? `width : ${isNaN(props.h) ? props.h : `${props.h}px`};` : '')}
${props => (props.bg ? `background: ${props.bg};` : '')}
${props => (props.border ? `border: ${props.border};` : '')}
${props => (props.borderRadius ? `border-radius: ${props.borderRadius};` : '')}
${props => (props.m ? `margin: ${props.m};` : '')}
padding : ${props => props.p};

&:focus {
  border-bottom: 1px solid ${props => props.focusColor} !important;
}
`;

export const ImageWrapper = styled.img`
    ${props => (props.w !== 'auto'
    ? `width: ${props.w};
        height: auto;`
    : `width: ${props.w};
        height: ${props.h};`)}
`;

export const ContainerWrapper = styled.div`
    box-sizing: border-box;
    ${props => (props.h ? `height : ${isNaN(props.h) ? props.h : `${props.h}px`};` : '')}
    ${(props) => {
    if (props.w === '70%') {
      if (props.fluid) {
        return 'width: 100%;';
      }
      return 'width: 70%;';
    }
    return `width : ${isNaN(props.w) ? props.w : `${props.w}px`};`;
  }} 
    ${props => (props.bg ? `background: ${props.bg};` : '')}
    ${props => (props.m ? `margin: ${props.m}` : '')}
    ${props => (props.p ? `padding: ${props.p}` : '')}
`;

export const ColumnWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-flow: row;
    grid-column: span ${props => props.span};

    @media only screen and (max-width: ${props => (props.break ? props.break : '600')}px) {
        flex-flow: column;
        grid-column: span 12;
    }
    ${props => (props.h ? `height : ${isNaN(props.h) ? props.h : `${props.h}px`};` : '')}
    ${props => (props.w ? `width : ${isNaN(props.w) ? props.w : `${props.w}px`};` : '')}
    ${props => (props.bg ? `background: ${props.bg};` : '')}
    ${props => (props.m ? `margin: ${props.m}` : '')}
    ${props => (props.p ? `padding: ${props.p}` : '')}
`;

export const ButtonWrapper = styled.button`
box-sizing: border-box;
cursor: pointer;
    outline: none;
    ${props => (props.h ? `height : ${isNaN(props.h) ? props.h : `${props.h}px`};` : '')}
    ${props => (props.w ? `width : ${isNaN(props.h) ? props.h : `${props.h}px`};` : '')}
    ${props => (props.type
    ? `background: ${getColor(props.type)} !important;
                            color: ${getTextColor(props.type)} !important;`
    : '')}
    ${props => (props.bg ? `background: ${props.bg};` : '')}
    ${props => (props.m ? `margin: ${props.m};` : '')}
    padding : ${props => props.p};
    border-radius: ${props => props.borderRadius};
    border: ${props => props.border};
`;
