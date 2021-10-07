import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL2 } from "../constants";

class NewGroupForm extends React.Component {
  state = {
    name: "",
    description: "",
  };

  componentDidMount() {
    if (this.props.group) {
      const { name, description } = this.props.group;
      this.setState({ name, description });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createGroup = e => {
    e.preventDefault();
    axios.post(API_URL2, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editGroup = e => {
    e.preventDefault();
    axios.put(API_URL2 + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.group ? this.editGroup : this.createGroup}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="name"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
        <Button onClick='Submit'>Send</Button>
      </Form>
    );
  }
}

export default NewGroupForm;
