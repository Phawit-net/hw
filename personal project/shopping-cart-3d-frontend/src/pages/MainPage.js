import React, { Component } from "react";
import ProductCard from "../components/product/ProductCard";
import CategoryList from "../components/CategoryList";
import Axios from "axios";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      subCategoryList :[],
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:8080/categories")
      .then(result => {
        this.setState({
          categoryList: result.data,
          selectedCategoriesId :result.data[0].id
        });
      })

    Axios.get("http://localhost:8080/subcategories")
      .then(result => {
        this.setState({
          subCategoryList: result.data
        });
      })
  }

  handleCategoriesId(x){
    console.log(x)
  }

  render() {
    return (
      <div>
        <CategoryList 
            categoryList = {this.state.categoryList}
            subCategoryList = {this.state.subCategoryList}
            handleCategoriesIdFunc = {this.handleCategoriesId}/>
        <ProductCard />
      </div>
    );
  }
}
