import React from 'react'
import styles from './tabmenu.module.css'

function TabMenu(props) {
    const {menuName,menuId,onClickMenu,} =props
  return (
    <div>
        <button className = {styles.button}
             onClick = {onClickMenu}>
                 {menuName}
        </button>
    </div>
  )
}

export default TabMenu
