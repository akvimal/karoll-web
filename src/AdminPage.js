import React from "react";
import axios from "axios";
import API from "./config/api";

import { userService } from "./services/user.service";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      userId: "",
      adminRole: "",
    };
  }

  componentDidMount() {
    userService.getAll().then((users) => this.setState({ users }));
  }
  onroleHandler = (value, id) => {
    this.setState({ userId: id });
    this.setState({ adminRole: value });
  };

  onUpdateHandler = () => {
    console.log(this.state.userId, this.state.adminRole);
    this.setState({ changeForAdminId: "" });
    this.setState({ adminRole: "" });
    API.post(`/api/users/userId`, {
      role: this.state.adminRole,
      userId: this.state.userId,
    }).then((res) => {
      // console.log(res.data);
      userService.getAll().then((users) => this.setState({ users }));
    });
  };

  render() {
    const { users } = this.state;
    console.log(users);
    return (
      <div>
        <h1>Admin</h1>
        <p>This page can only be accessed by administrators.</p>
        <div>
          All users from secure (admin only) api end point:
          {users && (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.firstName} {user.lastName} role:{" "}
                  {user.roles[0].Role.name}
                  <Row>
                    <Col>
                      <Form.Group
                        controlId="exampleForm.ControlSelect1"
                        style={{ width: "30vw" }}
                      >
                        <Form.Label>Change role:</Form.Label>
                        <FormControl
                          as="select"
                          defaultValue={user.roles[0].Role.name}
                          onChange={(e) =>
                            this.onroleHandler(e.target.value, user.id)
                          }
                        >
                          <option>User</option>
                          <option>Admin</option>
                        </FormControl>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Button onClick={() => this.onUpdateHandler()}>
                        Update
                      </Button>
                    </Col>{" "}
                  </Row>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
