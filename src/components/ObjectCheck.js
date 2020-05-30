import React, { memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Checker from './Checker';

import { toggleFirst, toggleMiddle, toggleLast } from 'store/objectReducer/action';

const ObjectCheck = (props) => (
  <Checker
    firstAction={props.toggleFirst}
    middleAction={props.toggleMiddle}
    lastAction={props.toggleLast}
    repeat={props.repeat}
  />
);

ObjectCheck.propTypes = {
  repeat: PropTypes.number,
  toggleFirst: PropTypes.func,
  toggleMiddle: PropTypes.func,
  toggleLast: PropTypes.func
};

ObjectCheck.defaultProps = {
  repeat: 1_000_000,
  toggleFirst: () => null,
  toggleMiddle: () => null,
  toggleLast: () => null
};

const connectFunction = connect(null, { toggleFirst, toggleMiddle, toggleLast });

export default connectFunction(memo(ObjectCheck));
