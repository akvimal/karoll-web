import React from "react";
import { Router, Route, Link, Redirect } from "react-router-dom";

import { authenticationService } from "./services/authentication.service";
import { userService } from "./services/user.service";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: authenticationService.currentUserValue,
      userFromApi: null,
    };
  }

  componentDidMount() {
    const { currentUser } = this.state;
    console.log("2 >> ", currentUser);
    userService.getByUsername(currentUser.username).then((res) => {
      this.setState({ userFromApi: res });
    });
  }

  render() {
    const { currentUser, userFromApi } = this.state;
    console.log(currentUser);
    return (
      <div>
        <h1>Home</h1>
        <p>You're logged in with React & JWT!!</p>
        <p>
          Your role is: <strong>{currentUser.roles[0]}</strong>.
        </p>
        <p>This page can be accessed by all authenticated users.</p>
        <div>
          Current user from secure api end point:
          {userFromApi && (
            <ul>
              <li>
                {userFromApi.firstName} {userFromApi.lastName}
              </li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}
