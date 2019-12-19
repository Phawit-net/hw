import React, { Component } from 'react'
import './ProductCard.css';
import { Card, Row, Col } from 'antd';
const { Meta } = Card;

export default class ProductCard extends Component {
  render() {
    const { productList } = this.props
    return (
      <Row>
        {productList.map(product => (
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={product.image} />}>
              <Meta title={product.name} />
              price : {product.price}
              www.instagram.com
                    </Card>
          </Col>
        ))}
        {/* <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt="example" src="https://drive.google.com/uc?id=1JRzBkOSiz5f795mDdasGY63IEdGDnstl" />}>
            <Meta title="Europe Street beat" />
            Europe Street beat
            www.instagram.com
                    </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt="example" src="https://drive.google.com/uc?id=1JRzBkOSiz5f795mDdasGY63IEdGDnstl" />}>
            <Meta title="Europe Street beat" />
            Europe Street beat
            www.instagram.com
                    </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt="example" src="https://drive.google.com/uc?id=1JRzBkOSiz5f795mDdasGY63IEdGDnstl" />}>
            <Meta title="Europe Street beat" />
            Europe Street beat
            www.instagram.com
                    </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt="example" src="https://drive.google.com/uc?id=1JRzBkOSiz5f795mDdasGY63IEdGDnstl" />}>
            <Meta title="Europe Street beat" />
            Europe Street beat
            www.instagram.com
                    </Card>
        </Col> */}
      </Row>
    )
  }
}
