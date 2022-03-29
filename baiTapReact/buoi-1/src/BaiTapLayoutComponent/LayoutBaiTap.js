import React, { Component } from "react";
import Header from "./Header.js";
import Content from "./Content.js";
import Card from "./Card.js";

export default class LayoutBaiTap extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <Content />
          <Card />
        </div>
      </div>
    );
  }
}
