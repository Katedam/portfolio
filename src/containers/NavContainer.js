import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import styles from '../styles/nav.css';
import TeckStack from '../components/TechStack';
import Contact from '../components/Contact';

export default class NavContainer extends PureComponent {
  state = {
    toggle: false
  }

  clickHandler = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    return (
      <nav className={styles.nav}>
        <Link to="/"><Logo /></Link>
        <ul>
          <li>DEV PROJECTS</li>
          <li>TECH STACK
            <TeckStack toggle={this.toggle} onClick={this.clickHandler} />
          </li>
          <li>ART STUDIO</li>
          <li>CONTACT
            <Contact toggle={this.toggle} onClick={this.clickHandler} />
          </li>
          <li><a target="_blank" rel='noopener noreferrer' href='https://www.canva.com/design/DADRV2MZo2E/sCf0cigLV8DZzmCA69udBA/view?website#4'>RESUME</a></li>
        </ul>
      </nav>
    );
  }
}



