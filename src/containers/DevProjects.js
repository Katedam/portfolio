import React from 'react';
import Album from '../components/Album';

const projects = [
  {
    url: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_320/v1552876188/Screen_Shot_2019-03-07_at_6.16.54_AM.png',
    media: 'media',
    alt: 'alt',
    title: 'title',
    about: 'about',
    siteURL: 'https://www.github.com/katedam/',
    githubURL: 'https://www.github.com/katedam/simpsons-quote'
  }
];

export default function DevProjects() {
  return (
    <Album projects={projects}/>
  );
}
