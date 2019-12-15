import React, { Component } from 'react'
import { Row } from 'antd';
import SearchBox from '../components/Search_input';
import ImgCategory from '../components/Img_category';
import HeaderBar from '../components/Header_bar';
import CanvasView from '../components/Canvas_view';

export default class FirstPage extends Component {
    render() {
        return (
            <>
                <div>
                    <HeaderBar/>
                    <Row type='flex' justify="center" align="middle" style={{backgroundColor:'#b0ddf9'}}>
                        <SearchBox/>
                        <CanvasView/>
                    </Row>
                    <ImgCategory/>
                </div>
            </>
        )
    }
}
