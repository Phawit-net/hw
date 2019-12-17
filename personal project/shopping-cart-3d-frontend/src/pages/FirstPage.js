import React, { Component } from 'react'
import { Row } from 'antd';
import SearchBox from '../components/Search_input';
import ImgCategory from '../components/Img_category';
import CanvasView from '../components/Canvas_view';

export default class FirstPage extends Component {
    render() {
        return (
            <>
                <div>
                    <Row type='flex' justify="center" align="middle" >
                        <SearchBox/>
                        <CanvasView/>
                    </Row>
                    <ImgCategory/>
                </div>
            </>
        )
    }
}
