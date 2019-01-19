import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from 'core/styled/box.styled';
import { borderStyle } from 'core/commons';

const Card = ({
  children, style, raised, ...rest
}) => {
  const elevation = typeof raised === 'boolean' && raised ? 'low' : raised;
  const styles = style || undefined;
  const props = {
    shadow: typeof elevation === 'string' ? borderStyle[`boxShadow${elevation}`] : undefined,
    ...rest,
  };
  return (
    <Flex.column
      {...props}
      style={styles}
    >
      {children}
    </Flex.column>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  style: PropTypes.oneOfType([PropTypes.object]),
  raised: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['low, med, high'])]),
};

Card.defaultProps = {
  children: null,
  style: null,
  raised: false,
};

export default Card;
