import React from 'react';
import SectionHeader from './SectionHeader';
import { Item } from '../styles/techStack';
import styles from '../styles/techStack.css';

export default function TechStack() {
  return (
    <>
    <SectionHeader headerText="TechStack"/>
    <ul className={styles.list}>
      {/* <Item>
        <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1553012906/semi-circle2-invert.png" alt="semi-circle shape decoration in yellow"/>
      </Item> */}
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049056/html-flat.png" alt="html icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049056/iconfinder_icon-12-file-css_315605.png" alt="css icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049056/iconfinder_code-programming-javascript-software-develop-command-language_652581.png" alt="JavaScript icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049056/nodejslogo.png" alt="Node.js icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049056/iconfinder_react_1296845.png" alt="React icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049056/iconfinder_code-programming-javascript-jquery-develop-framework-language_652582.png" alt="jQuery icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049056/1_lBW3KS3I68NnxoB7_maVBA.png" alt="Redux icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049056/express.png" alt="Express icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049056/icon_mongodb.png" alt="mongoDB icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049057/postgresql-9-1175120.png" alt="PostgreSQL icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049057/scrum.png" alt="Agile icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049057/tdd.png" alt="Test Driven Development icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049056/iconfinder_social_media_social_media_logo_git_2993773.png" alt="git version control icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049056/npm-3-1175132.png" alt="node package manager icon"/></Item>
      <Item><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049057/vscode.png" alt="VSCode editor icon"/></Item>
    </ul>
    </>
  );
}
