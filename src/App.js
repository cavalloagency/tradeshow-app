import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import AdminScreen from "./components/AdminScreen";
import PublicScreen from "./components/PublicScreen";
import AuthProvider from "./components/Auth";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={PublicScreen} />
        <Route exact path={"/login"} component={Login} />
        <PrivateRoute exact path="/admin" component={AdminScreen} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
