import React, { Component } from 'react'
import {Row,Col} from 'antd'
import Categories from './Categories'
import Products from './Products'
import Cart from './Cart'
import {uniqueId} from 'lodash'
import Axios from 'axios'

export class ShoppingCart extends Component {
  constructor(props){
    super(props)
    this.state ={
      categoriesList: [],
      productsList: [],
      cart : [],
      selectedCategoriesId : null
    }
    this.handleCategoriesId = this.handleCategoriesId.bind(this)
    this.handleClickAddToCart = this.handleClickAddToCart.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleDeleteAllProductInCart = this.handleDeleteAllProductInCart.bind(this)  //>>>>>NEW
  }

  // async componentDidMount(){
  //   const result1 = await Axios.get('http://localhost:3030/product-category')
  //   const result2 = await Axios.get('http://localhost:3030/product')
  //   this.setState({
  //     productsList : result2.data,
  //     categoriesList : result1.data,
  //     selectedCategoriesId : result1.data[0].id
  //  })
  // }

  componentDidMount(){
    Axios.get('http://localhost:3030/product-category')
    .then(result1 => {
      this.setState({
        categoriesList:result1.data,
        selectedCategoriesId : result1.data[0].id
      })
    })
    Axios.get('http://localhost:3030/product')
    .then(result2 => {
      this.setState({
        productsList : result2.data
      })
    })
  }

  filterProducts(){
    const id = this.state.selectedCategoriesId;
    if(id == null){
      return []
    } else {
      return this.state.productsList.filter(product => product.ProductCategoryId == id)
      
    }
  }

  handleCategoriesId(id){
    this.setState({
      selectedCategoriesId :id 
    })
  }

  handleClickAddToCart(product){
    if(this.state.cart.find(cartItem => cartItem.product.id === product.id)){   //check ว่า product ที่กดมีid ตรงกับในcartไหม
      this.setState({
        cart:this.state.cart.map(cartItem =>  //กดตัวซ้ำจะเอามาเช็ค ถ้าที่กดมีในcart
          cartItem.product.id === product.id ? 
          {...cartItem , amount : cartItem.amount +1} : cartItem) //เป็นจริงจะreturn อันเดิม ที่มีamountเพิ่ม ถ้าfalseจะreturn เดิม
      })
    }else{
      this.setState({
        cart:[...this.state.cart,{uid : uniqueId() , product, amount :1}]  //set เข้าครั้งแรก 
      })
    }
    // this.setState({
    //   cart : this.state.cart.concat(product)
    // })
  }

  handleDelete(cartItem){
    this.setState({
      cart : this.state.cart.filter(cart => cart !== cartItem )
    })
    console.log(cartItem)
  }

  handleDeleteAllProductInCart(){   //>>>>>NEW
    this.setState({
      cart:[]
    })
  }

  render() {
    return (
      <Row type='flex'justify='center'>
        <Col span={3}>
          <Categories
            category = {this.state.categoriesList}
            handleCategoriesIdFunc = {this.handleCategoriesId}
            selectedId = {this.state.selectedCategoriesId}/>
        </Col>
        <Col span={13}>
          <Products
            products = {this.filterProducts()}
            handleClickAddToCartFunc = {this.handleClickAddToCart}/>
        </Col>
        <Col span={6}>
          <Cart
            cart = {this.state.cart}
            handleDeleteFunc = {this.handleDelete}
            // >>>>>NEW
            handleDeleteAllProductInCart = {this.handleDeleteAllProductInCart}/>  
            {/* //>>>>>NEW */}
        </Col>
      </Row>
    )
  }
}

export default ShoppingCart
