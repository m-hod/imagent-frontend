import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
