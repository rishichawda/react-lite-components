import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const ContainerWrapper = styled.div`
    box-sizing: border-box;
    ${props => props.h ? `height : ${isNaN(props.h) ? props.h : `${props.h}px`};` :`` }
    ${props => props.w ? `width : ${isNaN(props.h) ? props.h : `${props.h}px`};` :`` }
    ${props => props.bg ? `background: ${props.bg};` : ``}
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
};

Container.defaultProps = {
    h: null,
    w: null,
    bg: null,
}

export default Container;