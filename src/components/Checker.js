import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import Button from '@material-ui/core/Button';
import { addDotsToNumber, round } from 'utils';

class Checker extends PureComponent {
  state = {
    inProgress: false,
    first: null,
    middle: null,
    last: null
  };

  runFirstTest = () => {
    this.test(this.props.firstAction, 'first');
  }

  runMiddleTest = () => {
    this.test(this.props.middleAction, 'middle');
  }

  runLastTest = () => {
    this.test(this.props.lastAction, 'last');
  }

  inProgress = false;
  test = async (func = () => null, name = '') => {
    if (this.inProgress) { return; }
    this.inProgress = true;

    await new Promise((res) => {
      this.setState({ inProgress: true }, () => {
        setTimeout(res, 100);
      });
    });

    const start = +new Date();
    for (let i = 0; i < this.props.repeat; i++) {
      await new Promise((res) => {
        func(res); // So you can be sure that it waiting for the reducer.
      });
    }
    const end = +new Date();

    this.setState({ [name]: end - start }, () => {
      this.inProgress = false;
      this.setState({ inProgress: false });
    });
  }

  getPerEach = (time) => {
    if (!time) { return null; }

    return ` (${round(time / this.props.repeat, 10)}ms per item)`;
  }

  render() {
    return (
      <Container>
        <ScrollBlocker hide={this.state.inProgress} />

        {this.state.inProgress && (
          <div className="loader">
            <h1>In progress...</h1>
          </div>
        )}

        <div className="button-container">
          <Button
            color="primary"
            variant="contained"
            onClick={this.runFirstTest}
          >
            FIRST
          </Button>

          <Button
            color="primary"
            variant="contained"
            onClick={this.runMiddleTest}
          >
            MIDDLE
          </Button>

          <Button
            color="primary"
            variant="contained"
            onClick={this.runLastTest}
          >
            LAST
          </Button>
        </div>

        <ul>
          <li>
            {'First reducer\'s item: '}

            <b>
              {`${addDotsToNumber(this.state.first ?? 0)}ms`}

              {this.getPerEach(this.state.first)}
            </b>
          </li>

          <li>
            {'Middle reducer\'s item: '}

            <b>
              {`${addDotsToNumber(this.state.middle ?? 0)}ms `}

              {this.getPerEach(this.state.middle)}
            </b>
          </li>

          <li>
            {'Last reducer\'s item: '}

            <b>
              {`${addDotsToNumber(this.state.last ?? 0)}ms `}

              {this.getPerEach(this.state.last)}
            </b>
          </li>
        </ul>
      </Container>
    );
  }
}

const Container = styled.div`
  && {
    padding-top: 0;
  }

  .loader {
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0000009c;
  }

  .button-container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 0 40px 0;
  }

  li {
    text-align: center;
    padding: 10px 0;
  }
`;

const ScrollBlocker = createGlobalStyle`
  body {
    overflow: ${({ hide }) => hide ? 'hidden' : 'unset'};
  }
`;

Checker.propTypes = {
  firstAction: PropTypes.func,
  middleAction: PropTypes.func,
  lastAction: PropTypes.func,
  repeat: PropTypes.number
};

Checker.defaultProps = {
  firstAction: () => null,
  middleAction: () => null,
  lastAction: () => null,
  repeat: 1_000_000
};

export default Checker;
