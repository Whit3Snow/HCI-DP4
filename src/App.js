import logo from './logo.svg';
import './App.css';
import management from './components/management';
import popup from './components/Main';
import mileage from './components/Mileage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <switch>
        <Route path="/manage" exact component={management} />
        <Route path="/mileage1" exact component={popup} />
        <Route path="/mileage" exact component={mileage} />
      </switch>
    </Router>
    
  );
}

export default App;
