import React, { Component } from 'react'
import  { Row, Input, Button, Checkbox, Col } from 'antd';

export default class LoginCard extends Component {
    render() {
        return (
            <Row style={{width:250}}>
                <div style={{margin:'10px 0px'}}>Email</div>
                <Input style={{marginBottom:'7px'}} placeholder='' />
                <div style={{margin:'10px 0px'}}>Password</div> 
                <Input style={{marginBottom:'7px'}} placeholder='' />
                <Col span={24} style={{display:'flex',justifyContent:'space-around',alignItems:'center',margin:'10px 0px'}}>
                    <Button>Login</Button> 
                    <Row>
                        <Checkbox></Checkbox>&nbsp;&nbsp;
                        <span>Remember Me</span>
                    </Row>
                </Col>
            </Row>
        )
    }
}
