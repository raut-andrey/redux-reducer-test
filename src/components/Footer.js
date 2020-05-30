import React, { memo } from 'react';
import styled from 'styled-components';

import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return (
    <StyledFooter>
      <a
        href="https://github.com/raut-andrey"
        target="_blank"
        rel="noopener noreferrer"
      >
        Andrey Raut
        <GitHubIcon />
      </a>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  text-align: center;
  padding: 15px;
  margin-top: 50px;

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;

    svg {
      margin-left: 10px;
    }

    :hover {
      transform: scale(1.1);
    }
  }
`;

export default memo(Footer);
