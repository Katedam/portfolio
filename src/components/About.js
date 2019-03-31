import React from 'react';
import styles from '../styles/about.css';

export default function About() {
  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <h1>about</h1>
      </header>

      <section className={styles.section}>
        <article>
          <h2>About</h2>
          <p>Fullstack Software Developer with a background in arts education in the non-profit sector seeking a role with a team where I may utilize my technical knowledge in combination with my creative skill-set to build innovative and dynamic applications that improve our community</p>
        </article>
      </section>
    
      <section className={styles.section}>
        <article>
          <h2>Stengths</h2>
          <p>I have a strong understanding of the MERN stack. I enjoy working on a good puzzle and am always working on my debugging superpowers. I am highly motivated by goals and dedicated to improvement and growth with the onset of each new task. My adaptability and empathy make me a strong collaborator who values harmony when working towards a shared mission and vision</p>
        </article>
      </section>

      {/* <section className={styles.section}>
        <h2>Something else...</h2>
        <p>Fullstack Software Developer with a background in arts education in the non-profit sector seeking a role with a team where I may utilize my technical knowledge in combination with my createive skill-set to build innovative and dynamic applications that improve our community</p>
      </section> */}
    </main>
  );
}