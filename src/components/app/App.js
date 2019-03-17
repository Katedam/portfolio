import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import Home from '../Home';
import 'normalize.css';
import ArtStudio from '../ArtStudio';


export default function App() {
  return ( 
    <Router>
      <>
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/artstudio" component={ArtStudio}></Route>
      </Switch>
      </>
    </Router>
  );
}
