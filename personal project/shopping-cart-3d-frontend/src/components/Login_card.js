import React, { Component } from 'react'
import  { Row, Input, Button, Checkbox } from 'antd';

export default class Login_card extends Component {
    render() {
        return (
            <Row style={{width:200}}>
                <span>Email</span>
                <Input placeholder="Basic usage" />
                <span>Password</span> 
                <Input placeholder="Basic usage" />
                <Button >Login</Button> 
                <Checkbox></Checkbox>Remember Me
            </Row>
        )
    }
}
