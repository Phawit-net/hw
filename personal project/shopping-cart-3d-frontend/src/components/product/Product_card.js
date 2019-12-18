import React, { Component } from 'react'
import './Product_card.css';
import { Card, Row, Col } from 'antd';
const { Meta } = Card;

export default class Product_card extends Component {
    render() {
        return (
            <Row>
                <Col span={4}>
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                        <Meta title="Europe Street beat"/>
                        Europe Street beat
                        www.instagram.com
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                        <Meta title="Europe Street beat"/>
                        Europe Street beat
                        www.instagram.com
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                        <Meta title="Europe Street beat"/>
                        Europe Street beat
                        www.instagram.com
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        cover={<img alt="example" src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" />}>
                        <Meta title="Europe Street beat"/>
                        Europe Street beat
                        www.instagram.com
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        cover={<img style={{width:300, height:300}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                        <Meta title="Europe Street beat"/>
                        Europe Street beat<br/>
                        www.instagram.com
                    </Card>
                </Col>
                <Col span={4}>
                    <Card
                        hoverable
                        style={{width:300}}
                        cover={<img alt="example" src="https://drive.google.com/uc?id=1JRzBkOSiz5f795mDdasGY63IEdGDnstl" />}>
                        <Meta title="Europe Street beat"/>
                        Europe Street beat
                        www.instagram.com
                    </Card>
                </Col>
            </Row>
        )
    }
}
