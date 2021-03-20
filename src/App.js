import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/Provider";
import routes from "./routes/Routes";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact
              path={route.path}
              render={(props) => <route.component {...props} />}
            />
          ))}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
