import React from 'react';
import { A } from '../styles/mainStyles';
import styles from '../styles/contact.css';

export default function Contact() {
  return (
    <ul className={styles.ul}>
      <li><A href='#'>hello@katedameron.com</A></li>
      <li><A href='https://github.com/Katedam'>Github</A></li>
      <li><A href='https://www.linkedin.com/in/kate-dameron/'>LinkedIn</A></li>
      <li><A href='https://twitter.com/katerj'>Twitter</A></li>
      <li><A href='https://www.instagram.com/katedameron/'>Instagram</A></li>
    </ul>
  );
}
