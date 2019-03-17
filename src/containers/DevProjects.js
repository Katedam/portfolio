import React from 'react';
import Album from '../components/Album';

const projects = [
  {
    url: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_300/v1552852568/IMG_6437.jpg',
    media: 'media',
    alt: 'alt',
    title: 'title',
    about: 'about',
    siteURL: 'https://www.github.com/katedam/',
    githubURL: 'https://www.github.com/katedam/'
  }
];

export default function DevProjects() {
  return (
    <Album projects={projects}/>
  );
}
