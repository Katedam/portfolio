import React from 'react';
import styles from '../styles/contact.css';

export default function Contact() {
  return (
    <ul className={styles.ul}>
      <li><a href='href="mailto:hello@katedameron.com"'>hello@katedameron.com</a></li>
      <li><a href='https://www.linkedin.com/in/kate-dameron/'><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049081/iconfinder_linkedin_252090.png" alt="LinkedIn icon"/></a></li>
      <li><a href='https://github.com/Katedam'><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049081/iconfinder_github2_252065.png" alt="Github icon"/></a></li>
      <li><a href='https://twitter.com/katerj'><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049081/iconfinder_f-twitter_256_282459.png" alt="Twitter icon"/></a></li>
      <li><a href='https://www.instagram.com/katedameron/'><img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554049081/iconfinder_Instagram_381384.png" alt="Instagram icon"/></a></li>
    </ul>
  );
}
