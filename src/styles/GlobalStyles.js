import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    list-style: none;
    color: inherit;
    text-decoration: none;
  }

  html {
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    color: white;
    background-color: #1b1b1b;
  }

  html,
  body,
  #root {
    height: 1px;
    min-height: 100%;
  }

  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 'settings' 'main' 'footer';

    > :nth-child(1) {
      grid-area: settings;
    }

    > :nth-child(2) {
      grid-area: main;
    }

    > footer {
      grid-area: footer;
    }
  }
`;
