import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Product from './Product'


export class Products extends Component {
renderProducts(){
  return this.props.products.map(product=>
    <Col span={8}>
      <Product productDetail = {product}
      handleClickAddToCartFunc = {this.props.handleClickAddToCartFunc}/>
    </Col>  
  )
}

  render() {
    return (
      <div>
        <Row>
          {this.renderProducts()}
        </Row>
      </div>
  )
  }
}

export default Products
