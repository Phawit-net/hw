import React from 'react'
import styles from './content.module.css'

function Content(props) {
    const {menuName,contentText} =props
  return (
    <div>
        <div className = {styles.text}>
            <h1>{menuName.toUpperCase()}</h1>
            <p>{contentText}</p>
        </div>
    </div>
  )
}

export default Content
