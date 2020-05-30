import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Slider from '@material-ui/core/Slider';
import Footer from 'components/Footer';
import SwitchCheck from 'components/SwitchCheck';
import ObjectCheck from 'components/ObjectCheck';

import { withStyles } from '@material-ui/core/styles';
import { addDotsToNumber } from 'utils';

class Sections extends PureComponent {
  state = { repeat: 2_500_000 }

  onSliderChange = (ev, repeat) => {
    this.setState({ repeat });
  }

  render() {
    return (
      <>
        <SliderContainer>
          <h2>Set the number of repetitions</h2>

          <p>
            Call each reducer
            <b>{addDotsToNumber(this.state.repeat)}</b>
            times
          </p>

          <StyledSlider
            min={1}
            max={5_000_000}
            onChange={this.onSliderChange}
            value={this.state.repeat}
            color="primary"
          />
        </SliderContainer>

        <Container>
          <div>
            <h1>Reducer with a switch</h1>

            <h4>Code sample</h4>

            <div className="code-preview">
              {`switch (type) {
  case FIRST: {
    const newStore = { ...store };
    cb();
    return newStore;
  }
  case 'SWITCH__TEST_TYPE--2': { return store; }
  ...
  ...
  ...
  case 'SWITCH__TEST_TYPE--499': { return store; }
  case MIDDLE: {
    const newStore = { ...store };
    cb();
    return newStore;
  }
  case 'SWITCH__TEST_TYPE--501': { return store; }
  ...
  ...
  ...
  case 'SWITCH__TEST_TYPE--999': { return store; }
  case LAST: {
    const newStore = { ...store };
    cb();
    return newStore;
  }
  
  default:
    return store;
  }`}
            </div>
          </div>

          <SwitchCheck repeat={this.state.repeat} />

          <div>
            <div>
              <h1>Reducer with a objects</h1>

              <h4>Code sample</h4>

              <div className="code-preview">
                {`const functions = {
  [FIRST]: (store) => ({ ...store }),
  'OBJECT__TEST_TYPE--2': (store) => store,
  ...
  ...
  ...
  'OBJECT__TEST_TYPE--499': (store) => store,
  [MIDDLE]: (store) => ({ ...store }),
  'OBJECT__TEST_TYPE--501': (store) => store,
  ...
  ...
  ...
  'OBJECT__TEST_TYPE--999': (store) => store,
  [LAST]: (store) => ({ ...store })
};

export default (store = initialStore, { type, cb = () => null }) => {
  if (!functions[type]) { return store; }

  const newStore = functions[type](store);

  cb();

  return newStore
}`}
              </div>
            </div>
          </div>

          <ObjectCheck repeat={this.state.repeat} />
        </Container>

        <Footer />
      </>
    );
  }
}

const sliderHeight = 10;
const StyledSlider = withStyles({
  root: {
    height: `${sliderHeight}px`,
    maxWidth: '600px'
  },
  rail: {
    height: `${sliderHeight}px`
  },
  track: {
    height: `${sliderHeight}px`
  },
  thumb: {
    width: `${sliderHeight + 10}px`,
    height: `${sliderHeight + 10}px`
  }
})(Slider);

const SliderContainer = styled.div`
  text-align: center;
  padding: 30px;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  
  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 5px;
  }

  b {
    margin: 0 10px
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  justify-items: stretch;
  margin-bottom: 30px;
  grid-template-areas: 'switch-info obj-info' 'switch-test obj-test';

  > :nth-child(1) {
    grid-area: switch-info;
  }

  > :nth-child(2) {
    grid-area: switch-test;
  }

  > :nth-child(3) {
    grid-area: obj-info;
  }

  > :nth-child(4) {
    grid-area: obj-test;
  }

  h1 {
    text-align: center;
    margin-bottom: 40px;
  }

  h4 {
    text-align: center;
    margin-bottom: 10px;
  }

  > :first-child, > :nth-child(2) {
    border-right: 1px solid white;
  }

  > * {
    padding: 30px;
  }

  .code-preview {
    white-space: pre-wrap;
    font-family: monospace;
    padding: 16px;
    line-height: 1.45;
    background-color: #434343;
    border-radius: 3px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'switch-info' 'switch-test' 'obj-info' 'obj-test';

    && > * {
      border-right: none;
    }

    > :nth-child(2) {
      border-bottom: 1px solid white;
    }
  }
`;

export default Sections;
