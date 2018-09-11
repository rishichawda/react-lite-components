import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const ContainerWrapper = styled.div`
    box-sizing: border-box;
    ${props => props.h ? `height : ${isNaN(props.h) ? props.h : `${props.h}px`};` :`` }
    ${props => props.w ? `width : ${isNaN(props.h) ? props.h : `${props.h}px`};` :`` }
    ${props => props.bg ? `background: ${props.bg};` : ``}
    ${props => {
        if(props.m !== '0 10%') {
            return `margin: ${props.m};`;
        } else {
            if(props.fluid) {
                return `margin: 0;`
            }
            return `margin: ${props.m};`
        }
    }}
`;

const Container = (props) => (
    <ContainerWrapper {...props}>
        {props.children}
    </ContainerWrapper>
)

Container.propTypes = {
    h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bg: PropTypes.string,
    m: PropTypes.string,
    fluid: PropTypes.bool,
};

Container.defaultProps = {
    h: null,
    w: null,
    bg: null,
    m: '0 10%',
    fluid: false,
}

export default Container;