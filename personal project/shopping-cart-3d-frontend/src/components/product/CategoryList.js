import React, { Component } from "react";
import { Menu, Row, Col } from "antd";
import "./CategoryList.css";

export default class CategoryList extends Component {
  renderCategoryList() {
    return this.props.categoryList.map(cat => (
      <Menu.Item key={cat.id} style={{ width: 90 }}>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <img src={cat.icon} alt={cat.name} style={{ paddingTop: "5px" }} />
        </Col>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          {cat.name}
        </Col>
      </Menu.Item>
    ));
  }
  renderSubCategoryList(catId) {
    return this.props.subCategoryList
      .filter(filter => filter.category_id == catId)
      .map(subCat => (
        <Menu.Item key={subCat.name} style={{ width: 90 }}>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            {subCat.name}
          </Col>
        </Menu.Item>
      ));
  }

  render() {
    const { onClick, selectedId } = this.props
    return (
      <Row>
        <Menu
          // selectedKeys={[(selectedId === null) ? null : selectedId.toString()]}
          onClick={onClick}
          mode="horizontal"
          style={{
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#555b68"
          }}>
          {this.renderCategoryList()}
        </Menu>
        <Menu
          mode="horizontal"
          style={{
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#23272c",
            color: "#fff"
          }}>
          {this.renderSubCategoryList(selectedId)}
        </Menu>
      </Row>
    );
  }
}
