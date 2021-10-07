import React, { Component } from "react";
import { Table } from "reactstrap";
import NewGroupModal from "./NewGroupModal";

import ConfirmRemovalModal2 from "./ConfirmRemovalModal";

class GroupList extends Component {
  render() {
    const groups = this.props.groups;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {!groups || groups.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            groups.map(group => (
              <tr key={group.id}>
                <td>{group.name}</td>
                <td>{group.description}</td>
                <td>
                    <button type="button" className="btn btn-primary btn-lg">Large button</button>
                    <button type="button" className="btn btn-secondary btn-lg">Large button</button></td>
                  <td align="center">
                  <NewGroupModal
                    create={false}
                    group={group}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal2
                    pk={group.pk}
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

export default GroupList;
