import React from 'react';
import { Input,Button,Icon,Row,Col } from 'antd'

function App3() {
    return (
        <Row style={{height:'100vh'}}type="flex" justify="center">
            <Col span={8}>
                <Row type="flex" align="center">
                    <Icon type='facebook' style={{ fontSize: '150px', color :'#1890ff'}} theme="filled"/>
                    <Input style={{margin:'5px'}} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username"/>
                    <Input style={{margin:'5px'}} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
                    <Input style={{margin:'5px'}} placeholder="Confirm Password"/>
                    <Input style={{margin:'5px'}} placeholder="Name"/>
                    <Button type="primary" htmlType="submit" className="login-form-button">Signup</Button>
                </Row>
            </Col>
        </Row>
    );
}

export default App3;