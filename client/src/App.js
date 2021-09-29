import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";

import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
