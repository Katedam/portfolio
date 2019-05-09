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
          <p>As a Full-stack Developer with a background in arts education I enjoy making accessible tools that improve the community. When I am not building components and working on my debugging superpowers, I enjoy hiking with my philosophical pup and partner, making food, and working in the art studio.</p>
        </article>
      </section>
    
      <section className={styles.section}>
        <article>
          <h2>Highlights</h2>
          <ul>
            <li>
              <span>Collaboration:</span> compassion and empathy are two key strengths which makes me an effective collaborator.
            </li>
            <li>
              <span>Continuous Growth:</span> as a life-long learner, I know the value of constructive feedback and, not only seek it out but also, use it as a tool to proactively improve and grow.
            </li>
            <li>
              <span>Effective Communicator:</span> as a teacher, I learned that listening is the most important part of being an effective communicator and, if my feedback is requested, I do so with words and tone that are constructive and empowering.
            </li>
            <li>
              <span>Adaptable:</span> a desire and ability to adapt, evolve, and take on new challenges is one of the many reasons I transitioned into tech. 
            </li> 
          </ul>
        </article>
      </section>
    </main>
  );
}
