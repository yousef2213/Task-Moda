import React, { Component } from "react";
import Navbar from "./Navbar";
export default class Layout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row position-relative">
          <div className="coll-1 py-0 px-0 nav-bar-backGround">
            <Navbar />
          </div>
          <div className="col-11 col-md-11 col-lg-11 px-0 mx-auto rounded">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
