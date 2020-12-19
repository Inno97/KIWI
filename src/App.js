import './App.css';
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router , Route, Switch, Redirect } from "react-router-dom";
import Booking from './pages/Booking.js';
import Feedback from './pages/Feedback.js';
import Home from './pages/Home.js';
import Keips from './pages/Keips.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/booking'>
            <Booking />
          </Route>
          <Route exact path='/feedback'>
            <Feedback />
          </Route>
          <Route exact path='/keips'>
            <Keips />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
