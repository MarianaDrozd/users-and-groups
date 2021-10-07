import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewUserForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    group: "",
    admin: "",
  };

  componentDidMount() {
    if (this.props.user) {
      const { username, email, password, group, admin } = this.props.user;
      this.setState({ username, email, password, group, admin });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createUser = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editUser = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.user ? this.editUser : this.createUser}>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input
            type="username"
            name="username"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.username)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            type="password"
            name="password"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.password)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="group">Group:</Label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="users">users</option>
              <option value="moderators">moderators</option>
              <option value="admins">admins</option>
            </select>
        </FormGroup>
        <FormGroup>
          <Label for="admin">Admin:</Label>
          <Input
            type="checkbox"
            name="admin"
            onChange={this.onChange}
          />
        </FormGroup>
        <Button onClick='Submit'>Send</Button>
      </Form>
    );
  }
}

export default NewUserForm;
