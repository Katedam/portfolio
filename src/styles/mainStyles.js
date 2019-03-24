import styled from 'styled-components';

export const Wrapper = styled.div `
  overflow: scroll;
  display: grid;
  grid-template-columns: 100%;
  background-color: whitesmoke;

  @media (min-width: 700px) {
    grid-template-columns: 25% 75%;
  }
`;

export const MainWrapper = styled.div `
  background-color: whitesmoke;
  box-shadow: inset 5px 0 5px -2px #e0dfdf;
}
`;

export const List = styled.ul `
  padding: 1em;
  margin: 0;
  list-style-type: none;
`;

export const HiddenList = styled(List) `
  display: none;
`;

export const A = styled.a `
  text-decoration: none;
  color: black;
`;

