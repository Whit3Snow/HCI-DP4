
import './style/App.css';
import challengesend from './components/challenge-send';
import management from './components/management';
import challenge from './components/challenge';
import mileage from './components/mileage';
import win from './components/win';
import check from './components/check';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <switch>
        <Route path="/challenge-send" exact component={challengesend}/>
        <Route path="/management" exact component={management}/>
        <Route path="/challenge" exact component={challenge}/>
        <Route path="/mileage" exact component={mileage}/>
        <Route path="/win" exact component={win}/>
        <Route path="/check" exact component={check}/>
      </switch>
    </Router>
  );
}

export default App;
