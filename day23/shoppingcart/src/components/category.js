import React from 'react'
import styles from './category.module.css'

function Category(props) {
  const {name} =props

  return (
    <div className = {styles.container}>
        {name}
    </div>
  )
}

export default Category
