import React from 'react';
import { List } from '../styles/mainStyles';
import { Item, ListTitle } from '../styles/techStack';
import styles from '../styles/techStack.css';

export default function TechStack() {
  return (
    <ul className={styles.list}>
      <ListTitle>Languages
        <List>
          <Item>HTML - </Item>
          <Item>CSS - </Item>
          <Item>JavaScript</Item>
        </List>
      </ListTitle>
      <ListTitle>Framworks/Libraries
        <List>
          <Item>Node - </Item>
          <Item>React - </Item>
          <Item>Redux - </Item>
          <Item>Express - </Item>
          <Item>jQuery</Item>
        </List>
      </ListTitle>
      <ListTitle>Databases
        <List>
          <Item>MongoDB - </Item>
          <Item>PostgreSQL</Item>
        </List>
      </ListTitle>
      <ListTitle>Dev Practices
        <List>
          <Item>Agile - </Item>
          <Item>TDD</Item>
        </List>
      </ListTitle>
      <ListTitle>Version Control
        <List>
          <Item>Git</Item>
        </List>
      </ListTitle>
    </ul>
  );
}
