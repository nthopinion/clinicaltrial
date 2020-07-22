import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Home } from "./pages/Home";
import { Enroll } from "./pages/Enroll";
import { Login } from "./pages/Login";
import { AppProvider } from "./providers/AppContext";
import { AppContext } from "./providers/AppContext";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <AuthenticatedRoute path="logout">Log out</AuthenticatedRoute>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <AuthenticatedRoute path="/enroll">
          <Enroll></Enroll>
        </AuthenticatedRoute>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

// const renderLogoutLink = () => (
//   <div>
//     <Link onClick={handleLogoutClick} to="/">
//       Logout
//     </Link>
//   </div>
// );

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={() => (auth.isAuthenticated() ? children : <Redirect to="/" />)}
    ></Route>
  );
};

function App() {
  return (
    <div>
      <Router>
        <AppProvider>
          <div>
            <AppRoutes />
          </div>
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
