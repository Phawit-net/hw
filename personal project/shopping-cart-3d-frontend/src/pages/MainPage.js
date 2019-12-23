import React, { Component } from "react";
import ProductCard from "../components/product/ProductCard";
import CategoryList from "../components/product/CategoryList";
import Axios from "axios";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      subCategoryList: [],
      productList: [],
      selectedCategoriesId: null,
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:8080/categories")
      .then(result => {
        this.setState({
          categoryList: result.data,
          selectedCategoriesId: result.data[0].id
        });
      })

    Axios.get("http://localhost:8080/subcategories")
      .then(result => {
        this.setState({
          subCategoryList: result.data
        });
      })
  }

  handleClick = e => {
    this.setState({
      selectedCategoriesId: e.key
    }, () => {
      Axios.get(`http://localhost:8080/products/${this.state.selectedCategoriesId}`)
        .then(result => {
          this.setState({
            productList: result.data
          });
        })
    })
  }

  render() {
    return (
      <div>
        <CategoryList
          categoryList={this.state.categoryList}
          subCategoryList={this.state.subCategoryList}
          onClick={this.handleClick}
          selectedId={this.state.selectedCategoriesId}/>
        <ProductCard
          productList={this.state.productList}/>
      </div>
    );
  }
}
