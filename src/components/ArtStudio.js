import React from 'react';
import { Link } from 'react-router-dom';
import Figure from './Figure';

export default function ArtStudio() {
  return (
    <>
    <h1>Art Studio</h1>
    <ul>
      <li>Ceramic / Fiber
        <Link to="/3dAlbum">
          <Figure imageURL="" alt=""/>
        </Link>
      </li>
      <li>Paint / Pencil
        <Link to="/2dAlbum">
          <Figure imageURL="" alt=""/>
        </Link>
      </li>
    </ul>
    </>
  );
}
