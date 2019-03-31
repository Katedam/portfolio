import React from 'react';
import styles from '../styles/about.css';

export default function About() {
  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <h1>About</h1>
        <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/a_270/v1553999875/triangle_copy.png"/>
      </header>

      <section className={styles.section}>
        <article>
          <h2>Bio</h2>
          <p>As a Full-stack Developer with a background in arts education I enjoy making accessible tools that improve our community. When I am not building components and working on my debugging superpowers - I like hiking with my philosophical pup and husband, baking and making art.</p>
        </article>
      </section>
    
      <section className={styles.section}>
        <article>
          <h2>Highlights</h2>
          <p>I have a strong understanding of the MERN stack. I enjoy dissecting a good puzzle and working on my debugging superpowers. I am highly motivated by goals and dedicated to improvement and growth with the onset of each new task. My adaptability and empathy make me a strong collaborator who values harmony when working towards a shared mission and vision. I find mob and pair programming to be highly valuable both educationally and collaboratively.</p>
        </article>
      </section>
    </main>
  );
}
