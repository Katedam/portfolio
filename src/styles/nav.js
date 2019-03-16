import styled from 'styled-components';

export const StyledNav = styled.nav `
  @media (min-width: 700px) {
    border-right: black solid 2px;
  }
`;

export const StyledLi = styled.li `
  text-align: left;
  padding: 0.5em 0;
  font-size: 2em;

  .subList {
    display: block;
  }
`;
