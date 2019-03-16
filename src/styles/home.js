import styled from 'styled-components';

export const Main = styled.main `
  @media (min-width: 700px) {
    display: grid; 
    grid-template-columns: 30% 70%;
  }
`;

export const Section = styled.section `
  display: none;

  @media (min-width: 700px) {
    display: block;
  }
`;
