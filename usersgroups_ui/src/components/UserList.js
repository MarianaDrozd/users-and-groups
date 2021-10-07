import React, { Component } from "react";
import { Table } from "reactstrap";
import NewUserModal from "./NewUserModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class UserList extends Component {
  render() {
    const users = this.props.users;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>id</th>
            <th>Email</th>
            <th>Group</th>
            <th>Admin</th>
            <th>Actions</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {!users || users.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.pk}>
                <td>{user.email}</td>
                <td>{user.group}</td>
                <td>{user.admin}</td>
                <td>
                    <button type="button" className="btn btn-primary btn-lg">Large button</button>
                    <button type="button" className="btn btn-secondary btn-lg">Large button</button></td>
                  <td align="center">
                  <NewUserModal
                    create={false}
                    user={user}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={user.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default UserList;