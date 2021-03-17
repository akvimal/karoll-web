import React from "react";
import { Router, Route, Link, Redirect } from "react-router-dom";

import { history } from "./helpers/history";
import { Role } from "./helpers/role";
import { authenticationService } from "./services/authentication.service";
import { PrivateRoute } from "./components/PrivateRoute";
import HomePage from "./Pages/HomePage";

import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import VerifyPage from "./Pages/VerifyPage";
import SettingsPage from "./Pages/SettingsPage";
import ModulesPage from "./Pages/ModulesPage";

import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isAdmin: false,
      validLogin: "",
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) => {
      this.setState({
        validLogin: x && x.valid,
        currentUser: x,
        isAdmin:
          x && x.roles && x.roles.findIndex((r) => r === Role.Admin) >= 0,
      });
    });
  }

  logout() {
    fetch(`/api/logout`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${authenticationService.currentUserValue.token}`,
      },
    }).then((res) => {
      authenticationService.logout();
      history.push("/login");
    });
  }

  render() {
    const { currentUser, isAdmin } = this.state;

    return (
      <Router history={history}>
        <div>
          <Redirect to="./login"></Redirect>
          {currentUser && (
            <>
              <Redirect to="./objectives"></Redirect>
              <HomePage
                isAdmin={isAdmin}
                currentUser={currentUser}
                logout={this.logout}
              ></HomePage>
            </>
            // <nav className="navbar navbar-expand navbar-dark bg-dark">
            //   <div className="navbar-nav">
            //     <Link to="/" className="nav-item nav-link">
            //       Home
            //     </Link>
            //     <Link to="/settings" className="nav-item nav-link">
            //       Settings
            //     </Link>
            //     <Link to="/modules" className="nav-item nav-link">
            //       Modules
            //     </Link>
            //     {isAdmin && (
            //       <Link to="/admin" className="nav-item nav-link">
            //         Admin
            //       </Link>
            //     )}
            //     <a onClick={this.logout} className="nav-item nav-link">
            //       Logout
            //     </a>
            //   </div>
            // </nav>
          )}

          {/* <PrivateRoute exact path="/" component={HomePage} /> */}

          <Route
            path="/login"
            render={(props) => (
              <LoginPage {...props} valid={this.state.validLogin} />
            )}
          />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/verify" component={VerifyPage} />
          {/* <Route path="/settings" component={SettingsPage} /> */}
          <Route path="/modules" component={ModulesPage} />
        </div>
      </Router>
    );
  }
}

export default App;
