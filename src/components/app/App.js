import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import Nav from '../Nav';
import 'normalize.css';

export default function App() {
  return ( 
    <Router>
      <>
      <Nav />
      <Switch>
        
      </Switch>
      </>
    </Router>
  );
}
