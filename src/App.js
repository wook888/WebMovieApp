import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/movie/:id"}>
          <Detail />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/"}>
          <Home />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/search/:search"}></Route>
      </Switch>
    </Router>
  );
}

export default App;
