import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import styles from '../styles/nav.css';

export default class Nav extends PureComponent {

  state ={
    toggle: false
  }

  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    return (
      <nav className={styles.nav}>
        <Link to="/"><Logo /></Link>

        <Link to="/home">
          <label htmlFor="navMenu">Show Nav Menu</label>
          <div id="navMenu" className={styles.menuArrow} onClick={this.handleClick}>MENU
          </div>
        </Link>

        <ul className={this.state.toggle ? styles.show : styles.hide }>
          <li onClick={this.handleClick}>
            <Link to="/devprojects">DEVELOPER</Link>
          </li>
          <li onClick={this.handleClick}>
            <Link to="/techstack">TECH STACK</Link>
          </li>
          <li onClick={this.handleClick}>
            <Link to="/artstudio">ART STUDIO</Link>
          </li>
          <li onClick={this.handleClick}>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <a target="_blank" rel='noopener noreferrer' href='https://www.canva.com/design/DADRV2MZo2E/sCf0cigLV8DZzmCA69udBA/view?website#4'>RESUME</a>
          </li>
        </ul>
      </nav>
    );
  }
}

