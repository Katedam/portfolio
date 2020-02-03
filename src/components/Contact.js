import React from 'react';
import SectionHeader from './SectionHeader';
import styled from 'styled-components';

// const Form = styled.form`
// width: 85%;
// margin: 3em auto;

// button {
//   width: 50%;
//   border-right: #a8bf6e solid 2px;
//   border-bottom: #91a55e solid 2px;
//   margin-left: 1em;
//   background-color: #d3fb6c;
//   padding: 0.5em;
// }
// @media (min-width: 1024px) {
//   width: 50%;
// }
// `;

// const Label = styled.label`
// display: block;
// font-family: "Ubuntu", sans-serif;
// margin: 1em;
// input {
//   margin-left: 1em;
//   border: black solid 0.5px;
// }

// textarea {
//   resize: none;
//   overflow: auto;
//   width: 100%;
//   height: 200px;
//   margin-top: 0.5em;
//   border: black solid 0.5px;
// }
// `;

const IconList = styled.ul`
  padding: 1em;
  margin: 0;
  list-style-type: none;
  list-style-type: none;
  padding: 0;
  justify-self: center;
  text-align: center;
  margin-bottom: 2em;
`;

const ListItem = styled.li`
  padding: 5px;
  display: inline;

  &:nth-of-type(1) {
    display: block;
    margin-bottom: 1em;
    font-family: "Ubuntu", sans-serif;
  }
`;

const Anchor = styled.a`
 text-decoration: none;
 color: black;
`;
const Icon = styled.img`width: 50px;`;

const Contact = () => (
  <>
  <SectionHeader headerText="Get in touch"/>

  {/* <Form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <Label>Name <input type="text" name="name" /></Label>   
    <Label>Email <input type="email" name="email" /></Label>
    <Label>Message <textarea name="message"></textarea></Label>
    <button type="submit">Send</button>
  </Form> */}

  <IconList>
    <ListItem>
      <a href='href="mailto:hello@katedameron.com"'>hello@katedameron.com</a>
    </ListItem>
    <ListItem>
      <Anchor href='https://www.linkedin.com/in/kate-dameron/'><Icon src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049081/iconfinder_linkedin_252090.png" alt="LinkedIn icon"/></Anchor>
    </ListItem>
    <ListItem>
      <Anchor href='https://github.com/Katedam'><Icon src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049081/iconfinder_github2_252065.png" alt="Github icon"/></Anchor>
    </ListItem>
    <ListItem>
      <Anchor href='https://twitter.com/katerj'><Icon src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049081/iconfinder_f-twitter_256_282459.png" alt="Twitter icon"/></Anchor>
    </ListItem>
    <ListItem>
      <Anchor href='https://www.instagram.com/katedameron/'><Icon src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049081/iconfinder_Instagram_381384.png" alt="Instagram icon"/></Anchor>
    </ListItem>
  </IconList>
  </>
);

export default Contact;