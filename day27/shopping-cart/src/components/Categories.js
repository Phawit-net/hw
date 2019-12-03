import React, { Component } from 'react'
import { Menu } from 'antd'
export class Categories extends Component {
  // constructor(props){
  //   super(props)
  //    const {category} = props
  // }
  renderCategories(){
    return this.props.category.map(category=>
      <Menu.Item key={category.id}>
        <span>{category.name}</span>
      </Menu.Item>
    )
  }

  render() {
    const catId = this.props.selectedId
    return (
      <div>
        <Menu selectedKeys = {[(catId === null) ? null : catId.toString()]}
         onClick = {(e) => this.props.handleCategoriesIdFunc(e.key)} >
          {this.renderCategories()}
        </Menu>
      </div>
    )
  }
}

export default Categories
