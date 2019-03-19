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
        <header>
          <Link to="/" title="logo links to home"><Logo /></Link>
        </header>
        <main>

          <Link to="/home" title="In mobile links to home and toggles nav menu">
            <label htmlFor="navMenu">Show Nav Menu</label>
            <div id="navMenu" className={styles.menuArrow} onClick={this.handleClick}>MENU
            </div>
          </Link>

          <ul className={this.state.toggle ? styles.show : styles.hide }>
            <li onClick={this.handleClick}>
              <Link to="/devprojects" title="link to Developer portfolio">DEVELOPER</Link>
            </li>
            <li onClick={this.handleClick}>
              <Link to="/techstack" title="link to technologies">TECH STACK</Link>
            </li>
            <li onClick={this.handleClick}>
              <Link to="/artstudio" title="link to art studio">ART STUDIO</Link>
            </li>
            <li onClick={this.handleClick}>
              <Link to="/contact" title="link to contact">CONTACT</Link>
            </li>
            <li>
              <a title="link to view resume in new tab" target="_blank" rel='noopener noreferrer' href='https://www.canva.com/design/DADRV2MZo2E/sCf0cigLV8DZzmCA69udBA/view?website#4'>RESUME</a>
            </li>
          </ul>
        </main>
      </nav>
    );
  }
}

