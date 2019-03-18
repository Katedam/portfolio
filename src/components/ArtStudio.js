import React from 'react';
import { Link } from 'react-router-dom';
import Figure from './Figure';
import styles from '../styles/artStudio.css';

export default function ArtStudio() {
  return (
    <section className={styles.artStudio}>
      <header>
        <h1>Art Studio</h1>
      </header>
      <main>
        <ul>
          <li>
            <h2>Ceramic - Fiber</h2>
            <Link to="/3dAlbum">
              <Figure url="https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_300/v1552852568/IMG_6437.jpg" alt="clay vessel with fiber decoration"/>
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
  );
}
