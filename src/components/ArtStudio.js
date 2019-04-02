import React from 'react';
import { Link } from 'react-router-dom';
import Figure from './Figure';
import styles from '../styles/artStudio.css';

export default function ArtStudio() {
  return (
    <>
      <header>
        <h1>Art Studio</h1>
        <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/a_270/v1553999875/triangle_copy.png"/>
      </header>
    <section className={styles.artStudio}>
      <main>
        <ul>
          <li>
            <h2>Ceramic - Fiber</h2>
            <Link to="/3dAlbum">
              <Figure url="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_300/v1553379268/IMG_6437.jpg" alt="clay vessel with fiber decoration"/>
            </Link>
          </li>
          <li>
            <h2>Paint - Pencil</h2>
            <Link to="/2dAlbum">
              <Figure url="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552852892/IMG_6807.jpg" alt="oil painting of a dog"/>
            </Link>
          </li>
        </ul>
      </main>
    </section>
    </>
  );
}
