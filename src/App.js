import React, { memo } from 'react';

import { Provider } from 'react-redux';
import Sections from 'components/Sections';

import store from 'store';

function App() {
  return (
    <Provider store={store}>
      <Sections />
    </Provider>
  );
}

export default memo(App);
