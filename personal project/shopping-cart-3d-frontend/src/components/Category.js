import React, { Component } from "react";
import { Menu, Row, Col } from "antd";

export default class Category extends Component {
  render() {
    const cat = this.props;
    return (
      <>
        <Menu.Item key={cat.name} style={{ width: 90 }}>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <img src={cat.icon} alt={cat.name} style={{ paddingTop: "5px" }} />
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            {cat.name}
          </Col>
        </Menu.Item>
      </>
    );
  }
}
