import React, { Component } from 'react'
import { Carousel ,Row,Col} from 'antd';
import './img_category.css';

export class ImgCategory extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col span={8}>
                        <Carousel autoplay>
                            <div>
                                <img style ={{width:492 ,height:430}}src ='https://drive.google.com/uc?id=1JRzBkOSiz5f795mDdasGY63IEdGDnstl' alt="building_img1"/>
                            </div>
                            <div>
                                <img style ={{width:492 ,height:430}}src= 'https://drive.google.com/uc?id=1sgtSTGX-VBQUbtfKjGccrE9GxRUPpjP0'alt="building_img2"/>
                            </div>
                            <div>
                                <img style ={{width:492 ,height:430}}src= 'https://drive.google.com/uc?id=16Aan8TFAZaJx9OaOIjOxJuBlrFJtPhJS' alt="building_img3"/>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={8}>
                        <Carousel autoplay>
                            <div>
                                <img style ={{width:480 ,height:510}} src ='https://drive.google.com/uc?id=1BeFRCp54NVcxZ4i1OC11lRPXE6Nr5i0k' alt="animal_img1"/>
                            </div>
                            <div>
                                <img style ={{width:480 ,height:510}} src= 'https://drive.google.com/uc?id=14dwj4-Rey2pPfBa2aLwvw9ZAUhwC5MbO' alt="animal_img2"/>
                            </div>
                            <div>
                                <img style ={{width:480 ,height:510}} src= 'https://drive.google.com/uc?id=1dnwRKyLQkD2L6vozYO97NmGsE1GYKkt_'alt="animal_img3"/>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={8}>
                        <Carousel autoplay>
                            <div>
                                <img style ={{width:492 ,height:480}} src ='https://drive.google.com/uc?id=1-pTNUPFJaQx40A8mgKirvRqKLmhkEkgB' alt="furniture_img1"/>
                            </div>
                            <div>
                                <img style ={{width:492 ,height:480}}  src= 'https://drive.google.com/uc?id=1H4daiA5p0cphZgaw2WwRsYlOtYbTGd6e' alt="furniture_img2"/>
                            </div>
                            <div>
                                <img style ={{width:492 ,height:480}}  src= 'https://drive.google.com/uc?id=1XeFcPt8bOIo2sklL63M1OWtRzo-b9G7s'alt="furniture_img3"/>
                            </div>
                            <div>
                                <img style ={{width:492 ,height:480}}  src= 'https://drive.google.com/uc?id=1s2s1NCNDhHY-6mBin5ZeRvsHwWLsqTzl'alt="furniture_img4"/>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </>
        )
      }
    }
    
export default ImgCategory