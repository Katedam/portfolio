import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import Home from '../Home';
import ArtStudio from '../ArtStudio';
import ThreeDeeAlbum from '../../containers/ThreeDeeAlbum';
import TwoDeeAlbum from '../../containers/TwoDeeAlbum';
import DevProjects from '../../containers/DevProjects';
import TechStack from '../TechStack';
import Contact from '../Contact';
import Nav from '../Nav';
import { Wrapper, MainWrapper } from '../../styles/mainStyles';
import 'normalize.css';


export default function App() {
  return ( 
    <Router>
      <>
      <Wrapper>
        <Nav />
        <MainWrapper>
          <Switch>
            <Route path="/devprojects" component={DevProjects}></Route>
            <Route path="/artstudio" component={ArtStudio}></Route>
            <Route path="/3dAlbum" component={ThreeDeeAlbum}></Route>
            <Route path="/2dAlbum" component={TwoDeeAlbum}></Route>
            <Route path="/techstack" component={TechStack}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </MainWrapper>
      </Wrapper>
      </>
    </Router>
  );
}
