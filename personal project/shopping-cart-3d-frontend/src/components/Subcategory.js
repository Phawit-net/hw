import React, { Component } from 'react'
import { Menu, Row, Col } from "antd";

export default class Subcategory extends Component {
    render() {
        const subcat = this.props;
        return (
        <>
            <Menu.Item key={subcat.name} style={{ width: 90 }}>
            <Col style={{ display: "flex", justifyContent: "center" }}>
                {subcat.name}
            </Col>
            </Menu.Item>
        </>
        )
    }
}
