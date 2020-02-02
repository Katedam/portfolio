import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.section`
  animation: transitionOpac 1s linear;
  width: 100%;
  padding: 5% auto;
  opacity: 1;

  @keyframes transitionOpac {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Article = styled.article`
  font-family: "Ubuntu", sans-serif;
  background-color: white;
  box-shadow: 1px 1px 3px #cbccc9;
  border-radius: 3px;
  padding: 5px;
  padding-left: 8px;
  width: 75%;
  margin: 0 auto;
`;

const CardHeader = styled.h2`
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 3px;
`;

const TextBlock = styled.p`line-height: 1.5em;`;

const Card = ({ title, text }) => (
  <CardWrapper>
    <Article>
      <CardHeader>{title}</CardHeader>
      <TextBlock>{text}</TextBlock>
    </Article>
  </CardWrapper>
)

export default Card;