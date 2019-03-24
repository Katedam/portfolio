import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/" title="logo links to home"><Logo /></NavLink>
        </header>

        <main>
          <NavLink 
            to="/" 
            title="In mobile links to home and toggles nav menu">
            <label htmlFor="navMenu">Show Nav Menu</label>
            <div 
              id="navMenu" 
              className={styles.menuArrow}
              onClick={this.handleClick}>
            MENU
            </div>
          </NavLink>

          <ul className={this.state.toggle ? styles.show : styles.hide }>
            <li onClick={this.handleClick}>
              <NavLink 
                to="/devprojects" 
                activeClassName={styles.selected} 
                title="link to Developer portfolio">
                DEVELOPER
              </NavLink>
            </li>
            <li onClick={this.handleClick}>
              <NavLink 
                to="/techstack" 
                activeClassName={styles.selected} 
                title="link to technologies">
              TECH STACK
              </NavLink>
            </li>
            <li onClick={this.handleClick}>
              <NavLink 
                to="/artstudio" 
                activeClassName={styles.selected} 
                title="link to art studio">
              ART STUDIO
              </NavLink>
            </li>
            <li onClick={this.handleClick}>
              <NavLink 
                to="/about" 
                activeClassName={styles.selected} 
                title="link to about page">
                ABOUT
              </NavLink>
            </li>
            <li onClick={this.handleClick}>
              <NavLink 
                to="/contact" 
                activeClassName={styles.selected} 
                title="link to contact">
              CONTACT
              </NavLink>
            </li>
            <li>
              <a 
                title="link to view resume in new tab" 
                target="_blank" 
                rel='noopener noreferrer' 
                href='https://www.canva.com/design/DADRV2MZo2E/sCf0cigLV8DZzmCA69udBA/view?website#4'>
                RESUME
              </a>
            </li>
          </ul>
        </main>
      </nav>
    );
  }
}

