import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import Home from '../Home';
import ArtStudio from '../ArtStudio';
import TechStack from '../TechStack';
import Contact from '../Contact';
import Album from '../Album';
import Nav from '../Nav';
import 'normalize.css';


export default function App() {
  return ( 
    <Router>
      <>
      <Nav />
      <Switch>
        <Route path="/devprojects" component={Album}></Route>
        <Route path="/artstudio" component={ArtStudio}></Route>
        <Route path="/techstack" component={TechStack}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      </>
    </Router>
  );
}
