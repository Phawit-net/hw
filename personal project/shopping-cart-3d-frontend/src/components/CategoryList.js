import React, { Component } from "react";
import { Menu, Row, Col } from "antd";
import "./CategoryList.css";
import Category from "./Category";
import Subcategory from "./Subcategory";

export default class CategoryList extends Component {
  renderCategoryList() {
    return this.props.categoryList.map(cat => (
      <Menu.Item key={cat.name} style={{ width: 90 }}>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <img src={cat.icon} alt={cat.name} style={{ paddingTop: "5px" }} />
        </Col>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          {cat.name}
        </Col>
      </Menu.Item>
    ));
  }
  renderSubCategoryList() {
    return this.props.subCategoryList
      .filter(filter => filter.category_id == 1)
      .map(subCat => (
        <Menu.Item key={subCat.name} style={{ width: 90 }}>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            {subCat.name}
          </Col>
        </Menu.Item>
      ));
  }

  render() {
    const catId = this.props.selectedId
    return (
      <Row>
        <Menu
          onClick = {(e) => this.props.handleCategoriesIdFunc(e.key)}
          mode="horizontal"
          style={{
            height: 100,
            boxShadow: "0px 14px 29px -5px rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#555b68"
          }}
        >
          {this.renderCategoryList()}
        </Menu>
        <Menu
          mode="horizontal"
          style={{
            height: 50,
            boxShadow: "0px 14px 29px -5px rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#23272c",
            position: "relative",
            zIndex: -1,
            color: "#fff"
          }}
        >
          {this.renderSubCategoryList()}
        </Menu>
      </Row>
    );
  }
}
