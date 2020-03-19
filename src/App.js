import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminScreen from "./components/AdminScreen";
import PublicScreen from "./components/PublicScreen";
import AuthProvider from "./components/Auth";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={PublicScreen} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/admin" component={AdminScreen} />
      </Router>
    </AuthProvider>
  );
}

export default App;
