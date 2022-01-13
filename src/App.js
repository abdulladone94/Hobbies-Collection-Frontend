import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Login from "./login";

export const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value={"UserContext"}>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
