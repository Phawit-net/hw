import React, { Component } from 'react'
import { Table,Button,Row,Col,Statistic } from 'antd';
import Axios from 'axios'

export class Cart extends Component {
  
  handleClickCheckout(totalPrice){  //>>>>>NEW
    Axios.post('http://localhost:3030/add-order',{
      totalPrice :totalPrice,
      orderList:this.props.cart
    }).then(result=>{
      console.log(result)
      this.props.handleDeleteAllProductInCart()
    }).catch(err=>{
      console.log(err)
    })
  }
  

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'product.name',
      },
      {
        title: 'Price',
        dataIndex: 'product.price',
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
      },
      {
        title: 'Action',
        key: 'action',
      render: (text,cartItem) => <Button onClick = {()=>this.props.handleDeleteFunc(cartItem)}>Delete</Button>,  //สามารถ เอา text,cartItem มาใช้ได้
      } //cartItem คือ object ทั้งก้อนที่ถูกบันทึกไว้ จาก column 
    ];


    //>>>>>NEW
    let total = 0;
    const cartItems = this.props.cart

    for(let cartItem of cartItems){
      total += cartItem.amount * cartItem.product.price
    }

    return (
      <Row >
        <Col>
          <Row>
            <Table
            columns={columns}
            dataSource={this.props.cart}
            bordered
           />
          </Row>
          <Row type='flex' justify='end'>
            <Statistic title = 'Total price' value={total} precision={2} />
          </Row>
          <Row type='flex' justify='end'>
            <Button 
              onClick = {() => this.handleClickCheckout(total)}   //>>>>>NEW
              style={{ marginTop: 16 }} type="primary">
              Check out
            </Button>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Cart
