import React, { Component } from 'react'
import  { Menu, Row, Col ,Popover ,Button } from 'antd';
import './Header_bar.css';
import Login_card from './Login_card';

export default class HeaderBar extends Component {

    render() {
        return (
            <Row >
                <Col span={12} style={{backgroundColor:'#23272c'}}>
                    <div style={{display: 'flex',padding:14 , color:"#fff"}}>
                        LOGO
                    </div>
                    
                    {/* <Menu mode="horizontal" style={{backgroundColor:'#23272c',display: 'flex'}}>
                        <Menu.Item style={{width:90,padding:20 , color:"#fff"}}>
                            LOGO
                        </Menu.Item>
                    </Menu> */}
                </Col>
                <Col span={12} style={{backgroundColor:'green'}}>
                    <div style={{display: 'flex',padding:14 , color:"#fff" ,justifyContent:'flex-end'}}>
                        <Popover placement="bottom" title={<Login_card/>} content='Forgot Password?' trigger="click">
                            LOGIN
                        </Popover>
                        <span> or </span>
                        Create Account
                    </div>
                    {/* <Menu mode="horizontal" style={{backgroundColor:'#23272c',display: 'flex', justifyContent:'flex-end'}}>
                        <Menu.Item style={{width:90,padding:20 , color:"#fff"}}>
                            <Popover placement="bottomRight" title='asd' content='asdassda' trigger="click">
                                LOGIN
                            </Popover>
                        </Menu.Item>                        
                    </Menu> */}
                </Col>               
            </Row>
        )
    }
}
