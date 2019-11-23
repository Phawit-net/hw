import React from 'react';
import './App.css';
import Category from './components/category'
import ProductItem from './components/productitem'


class App extends React.Component {
  state = {
    productCategory:[
      {id : 1 ,name : 'Uniqlo'},
      {id : 2 ,name : 'SmartPhone'},
      {id : 3 ,name : 'Computer'},
    ],
    productItems :[
      {categoryId : 1 , id :1 ,name :'ULTRA LIGHT DOWN JACKET',price :1900, image : 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/400711/item/goods_69_400711.jpg?width=2000'},
      {categoryId : 1 , id :2 ,name :'EZY ANKLE PANTS',price :790,image:'https://de9luwq5d40h2.cloudfront.net/catalog/product/large_image/07_418713.jpg'},
      {categoryId : 1 , id :3 ,name :'DRY STRETCH SWEAT PANTS',price :590 ,image:'https://d15udtvdbbfasl.cloudfront.net/catalog/product/large_image/08_164206.jpg'},
      {categoryId : 2 , id :4 ,name :'HUAWEI P30 Aurora',price :13690,image:'https://prodbccmultimediaweu.blob.core.windows.net/productimages/products/262742/PI_636896829788799892_zoom.jpg'},
      {categoryId : 2 , id :5 ,name :'IPHONE 11',price :24900, image:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX0H2?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1567304952459'},
      {categoryId : 2 , id :6 ,name :'SAMSUNG Galaxy A80',price :18990,image:'https://csmobiles.com/15440-large_default/samsung-galaxy-a80-a805-128gb-dual-sim-black.jpg'},
      {categoryId : 3 , id :7 ,name :'DELL INSPIRON',price :42690,image:'https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/p/w/pwb000240042.jpg'},
      {categoryId : 3 , id :8 ,name :'ASUS ROG STRIX',price :30900 ,image:'https://images-na.ssl-images-amazon.com/images/I/81TKu9gu%2BqL._SL1500_.jpg'},
      {categoryId : 3 , id :9 ,name :'ACER SWIFT',price :24990,image:'https://www.jib.co.th/img_master/product/original/20191001092321_35381_287_1.jpg'}
    ],
    cartItem :[]
  } 

  render(){
    return (
      <div className='container'>
        <div className = 'border'>
        {this.state.productCategory.map(({name,id}) =>(
          <Category 
            name= {name}
          />
        ))} 
        </div>

        <div className = 'border'>
          <div className ='product'>Product</div>
          <div className= 'productitem'>
            {this.state.productItems.map(({name,id,price,image}) =>(
              <ProductItem 
                productName= {name}
                price = {price}
                image={image}
              />
            ))} 
          </div>
        </div>

        <div className = 'border'>
          cart
        </div>
      </div>
      )
    }
  }

export default App;
