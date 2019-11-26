import React from 'react'
import styles from './productitem.module.css'
import { Card,Row } from 'antd';
const { Meta } = Card;

function ProductItem(props) {
  const {productName ,image,price} =props
    // console.log(props)
  return (
    // <div>
    //     <div className={styles.product_align}>
    //         <div><img className ={styles.imgsize} src = {image}/></div>
    //         <div className = {styles.name_header}>{productName}</div>
    //         <div>Price : {price} THB</div>
    //     </div>
    // </div>
    <Row type="flex" justify="center">
      <Card
        hoverable 
        style={{ width: 240 , margin:'20px'}}
        cover={<img src= {image} />}> 
        <Meta title={productName}/>Price : {price} THB
      </Card>
    </Row>
  )
}

export default ProductItem
