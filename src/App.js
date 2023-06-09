import React from "react";
import { Router, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/hello" element={<h1>Hello</h1>} />
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Router>
  );
}

export default App;
