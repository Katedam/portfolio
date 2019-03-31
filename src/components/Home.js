import React from 'react';
import styles from '../styles/home.css';

export default function Home() {
  return (
    <main className={styles.home}>
      <header>
        <h1>Kate  R  Dameron</h1>
        <h2>Full-Stack</h2>
        <h2>Developer</h2>
      </header>
      <img 
        id={styles.desk} 
        src='https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_200/v1553993220/kari-shea-226153-unsplash.jpg' 
        alt='desk with chair and mac book'/>
      <img 
        id={styles.fatHalfOne}
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/a_90/v1553444925/semi-circle1-yellow.png" 
        alt="half circle shape"/>
      <img
        id={styles.skinnyHalfOne}
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,h_100/v1553994751/semi-circle2.png"
        alt="half circle shape"/>
      <img
        id={styles.skinnyHalfTwo}
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,h_100/a_180/v1553994751/semi-circle2.png"
        alt="half circle shape"/>
      <img
        id={styles.cup}
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_250/v1553993214/artem-sapegin-199614-unsplash.jpg"
        alt="computer and red cup on desk" />
      <img
        id={styles.landscapeOne}
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_400/v1553389397/IMG_7162_2.jpg"
        alt="landscape of lower Utah"/>
      <img
        id={styles.skinnyHalfThree}
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,h_250/v1553012906/semi-circle2-invert.png"
        alt="half circle shape"/>
      <img
        id={styles.skinnyHalfFour}
        src="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,h_250/a_180/v1553012906/semi-circle2-invert.png"
        alt="half circle shape"/>
    </main>
  );
}
