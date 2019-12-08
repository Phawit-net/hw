import React, { Component } from 'react'
import { Carousel } from 'antd';
import './img_category.css';

export class ImgCategory extends Component {
    render() {
        return (
            <div className ='imgCat'>
                <Carousel autoplay>
                    <div>
                        <img src ='https://drive.google.com/uc?id=1JRzBkOSiz5f795mDdasGY63IEdGDnstl'/>
                    </div>
                    <div>
                        <img src= 'https://drive.google.com/uc?id=1sgtSTGX-VBQUbtfKjGccrE9GxRUPpjP0'/>
                    </div>
                    <div>
                        <img src= 'https://drive.google.com/uc?id=16Aan8TFAZaJx9OaOIjOxJuBlrFJtPhJS'/>
                    </div>
                </Carousel>
                <Carousel autoplay>
                    <div>
                        <img src ='https://drive.google.com/uc?id=1JRzBkOSiz5f795mDdasGY63IEdGDnstl'/>
                    </div>
                    <div>
                        <img src= 'https://drive.google.com/uc?id=1sgtSTGX-VBQUbtfKjGccrE9GxRUPpjP0'/>
                    </div>
                    <div>
                        <img src= 'https://drive.google.com/uc?id=16Aan8TFAZaJx9OaOIjOxJuBlrFJtPhJS'/>
                    </div>
                </Carousel>
          </div>
        )
      }
    }
    
export default ImgCategory