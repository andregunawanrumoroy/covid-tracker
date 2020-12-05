import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Global, Indonesia, Provinsi } from "./Halaman";

const App = () => {
  return (
    <div>
      <div className="Judul">
        <table>
          <h1>Covid Tracker</h1>
        </table>
      </div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Global</Link>
            </li>
            <li>
              <Link to="/Indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="./Provinsi">Provinsi</Link>
            </li>
          </ul>
        </nav>
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
      </div>
    </Router>
    </div>
  );
};

export default App;