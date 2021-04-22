import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Report from "./pages/Report";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/not-found">
            <NotFound />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
