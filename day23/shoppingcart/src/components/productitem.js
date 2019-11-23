import React from 'react'
import styles from './productitem.module.css'

function ProductItem(props) {
  const {productName ,image,price} =props
    console.log(image)
  return (
    <div>
        <div className={styles.product_align}>
            <div><img className ={styles.imgsize} src = {image}/></div>
            <div className = {styles.name_header}>{productName}</div>
            <div>Price : {price} THB</div>
        </div>
    </div>
  )
}

export default ProductItem
