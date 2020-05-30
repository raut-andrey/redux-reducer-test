import { combineReducers } from 'redux';

import switchReducer from './switchReducer/reducer';
import objectReducer from './objectReducer/reducer';

export default combineReducers({
  switchReducer,
  objectReducer
});
