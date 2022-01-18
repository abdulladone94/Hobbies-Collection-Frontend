import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Login from "./login";

export const UserContext = createContext();

function App() {
  const [logedUser, setLogedUser] = useState("User");

  return (
    <UserContext.Provider
      value={{
        logedUser,
        setLogedUser,
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
