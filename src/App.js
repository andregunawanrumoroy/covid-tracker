import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Global, Indonesia, Provinsi } from "./Halaman";



const App = () => {
  return (
    <div>
      <div classname="Header">
        <h1>Covid Tracker</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Global</Link>
          </li>
          <li>
            <Link to="/Indonesia">Indonesia</Link>
          </li>
          <li>
            <Link to="/Provinsi">Provinsi</Link>
          </li>
        </ul>
      </nav>
      <Router>
        <Switch>
          <Route path="/Global">
            <Global />
          </Route>
          <Route path="/Indonesia">
            <Indonesia />
          </Route>
          <Route path="/">
            <Provinsi />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;