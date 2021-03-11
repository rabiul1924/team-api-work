
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home.js';
import NoMatch from './components/NoMatch/NoMatch.js';
import TeamDetail from './components/TeamDetail/TeamDetail.js';



function App() {

  return (
    <Router>
    <Switch>
    <Route path="/home">
          <Home/>
        </Route>
        <Route path="/team/:teamId">
          <TeamDetail/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
            <NoMatch />
          </Route>
    </Switch>
  </Router>
  );
}

export default App;
