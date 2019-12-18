import React, { Component } from 'react'
import ProductCard from '../components/product/ProductCard'
import CategoryMenu from '../components/CategoryMenu';
import { Row, Input, Button, Checkbox  } from 'antd';

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <CategoryMenu/>
                <ProductCard/>
            </div>
        )
    }
}
