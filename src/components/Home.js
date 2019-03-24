import React from 'react';
import styles from '../styles/home.css';

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Kate R. Dameron</h1>
      </header>

      <section className={styles.section}>
        <article>
          <h2>About</h2>
          <p>Fullstack Software Developer with a background in arts education in the non-profit sector seeking a role with a team where I may utilize my technical knowledge in combination with my createive skill-set to build innovative and dynamic applications that improve our community</p>
        </article>
      </section>
    
      <section className={styles.section}>
        <article>
          <h2>Stengths</h2>
          <p>Fullstack Software Developer with a background in arts education in the non-profit sector seeking a role with a team where I may utilize my technical knowledge in combination with my createive skill-set to build innovative and dynamic applications that improve our community</p>
        </article>
      </section>

      {/* <section className={styles.section}>
        <h2>Something else...</h2>
        <p>Fullstack Software Developer with a background in arts education in the non-profit sector seeking a role with a team where I may utilize my technical knowledge in combination with my createive skill-set to build innovative and dynamic applications that improve our community</p>
      </section> */}
    </main>
  );
}
