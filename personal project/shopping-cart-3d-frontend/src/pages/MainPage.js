import React, { Component } from 'react'
import Product_card from '../components/Product_card'
import CategoryMenu from '../components/Category_menu';
import { Row, Input, Button, Checkbox  } from 'antd';

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <CategoryMenu/>
                <Product_card/>
            </div>
        )
    }
}
