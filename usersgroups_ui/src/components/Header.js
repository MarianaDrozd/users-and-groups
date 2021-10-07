import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrolJRiEFTV7D9hPXPZFhdfqat8uEcSOnK0w&usqp=CAU"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
         />
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>App with React + Django</h1>
      </div>
    );
  }
}

export default Header;