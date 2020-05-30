import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Checker from './Checker';

import { toggleFirst, toggleMiddle, toggleLast } from 'store/switchReducer/action';

const SwitchCheck = (props) => (
  <Checker
    firstAction={props.toggleFirst}
    middleAction={props.toggleMiddle}
    lastAction={props.toggleLast}
    repeat={props.repeat}
  />
);

SwitchCheck.propTypes = {
  repeat: PropTypes.number,
  toggleFirst: PropTypes.func,
  toggleMiddle: PropTypes.func,
  toggleLast: PropTypes.func
};

SwitchCheck.defaultProps = {
  repeat: 1_000_000,
  toggleFirst: () => null,
  toggleMiddle: () => null,
  toggleLast: () => null
};

const connectFunction = connect(null, { toggleFirst, toggleMiddle, toggleLast });

export default connectFunction(memo(SwitchCheck));
