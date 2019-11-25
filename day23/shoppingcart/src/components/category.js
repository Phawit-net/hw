import React from 'react'
import styles from './category.module.css'

function Category(props) {
  const {name,onCategory} =props

  return (
    <div className = {styles.container} onClick={onCategory}>
        {name}
    </div>
  )
}

export default Category
