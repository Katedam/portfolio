import React from 'react';
import Album from '../components/Album';

const projects = [
  {
    url: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_400/v1553368602/helena-hertz-256399-unsplash.jpg',
    media: 'React - Redux - Twilio - Node.js - Express - MongoDB - Auth0 - Styled-Components',
    alt: 'eucalyptus with a note pinned to it',
    title: 'Note to Self',
    about: 'Note to Self is a mindfulness tool for people seeking to rewire their inner dialogue. The user is able to create and schedule daily or weekly affirmations. They receive their mantras via sms message. Users may also use the affirmations journal to see annonymous words of wisdom from fellow app users. Additionally the "discover" feature allows users to search mental health articles',
    siteURL: 'https://www.github.com/note-to-self/',
    githubURL: 'https://www.github.com/note-to-self/'
  },
  {
    url: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_400/v1553368593/boris-smokrovic-131485-unsplash.jpg',
    media: 'React - Redux - Styled-components - Node.js - Express - MongoDB - Auth0',
    alt: 'a small bird',
    title: 'Chirp',
    about: 'Chirp is an imitation of twitter. Users log in with Auth0 and have a profile page. A user can create a new chirp and post it to the home page which displays the popular chirps',
    githubURL: 'https://www.github.com/katedam/chirp'
  },
  {
    url: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_400/v1553368591/843413c4dadef2fa7ed1d63d02130989.jpg',
    media: 'Node.js - Express - MongoDB',
    alt: 'a drawing of the Futurama spaceship',
    title: 'Futurama API',
    about: 'A RESTful api that returns random quotes from the show Futurama. Each quote includes the name of the character and their picture. Developers may use 4 different routes to return only a sample of given count of quotes, only quotes by a particular character or a sample of a given count of quotes by a particular character',
    githubURL: 'https://www.github.com/katedam/futurama-api'
  },
  {
    url: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_400/v1553368604/mohammad-metri-421904-unsplash.jpg',
    media: 'React - CSS',
    alt: 'Neon words on a brick wall saying - you are what you listen to',
    title: 'Artist Search',
    about: 'Artist Search is a simple React app that uses two different APIs. A user can search by artist name, select an artist to view their works, and then select a song to view the lyrics',
    githubURL: 'https://www.github.com/carpaika/artist-search/'
  },
  {
    url: 'https://res.cloudinary.com/dzxqhkyqd/image/upload/c_scale,w_400/v1553368591/screenshot.png',
    media: 'Node.js - Express - MongoDB - Inquirer - Figlet',
    alt: 'screenshot of the game in the command line',
    title: 'SimAlchemy',
    about: 'In this back-end app, we built a choose your own code school adventure for the command line. Teachers can log in and post up to 5 assignments to try and better their cohort\'s grades; includes app-wide unit and end-to-end test coverage.',
    siteURL: 'https://www.sim-alchemy.herokuapp.com',
    githubURL: 'https://github.com/team-sailboat/SimAlchemy'
  }
];

export default function DevProjects() {
  return (
    <Album projects={projects}/>
  );
}
