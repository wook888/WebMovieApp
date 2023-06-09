import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/hello" element={<h1>Hello</h1>} />
      <Route exact path="/movie/:id" element={<Detail />} />
      <Route exact path="/" element={<Home />} />
    </Router>
  );
}

export default App;
