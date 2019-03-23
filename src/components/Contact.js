import React from 'react';
import { A } from '../styles/mainStyles';
import styles from '../styles/contact.css';

export default function Contact() {
  return (
    <ul className={styles.ul}>
      <li><A href='#'>hello@katedameron.com</A></li>
      <li><A href='https://www.linkedin.com/in/kate-dameron/'><img src="../../assets/color/iconfinder_linkedin_252090.png" alt="LinkedIn icon"/></A></li>
      <li><A href='https://github.com/Katedam'><img src="../../assets/color/iconfinder_github2_252065.png" alt="Github icon"/></A></li>
      <li><A href='https://twitter.com/katerj'><img src="../../assets/color/iconfinder_f-twitter_256_282459.png" alt="Twitter icon"/></A></li>
      <li><A href='https://www.instagram.com/katedameron/'><img src="../../assets/color/iconfinder_Instagram_381384.png" alt="Instagram icon"/></A></li>
    </ul>
  );
}
