import React, { Component } from 'react'
import  { Menu, Row, Col } from 'antd';
import './Header_bar.css';

export default class HeaderBar extends Component {
    render() {
        return (
            <Row style={{width:'100vw'}}>
                <Menu mode="horizontal" style={{boxShadow: '0px 2px 18px 0px rgba(0,0,0,0.75)'}}>
                    <Menu.Item key="architecture" style={{width:90}}>
                        <Row>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                <img src = 'https://drive.google.com/uc?id=1J0gDpk5BsLRh2ck_J7vYBN9AHG-2Xv9m' alt='Architectures'/>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                Architectures
                            </Col>
                        </Row>
                    </Menu.Item>
                    <Menu.Item key="character" style={{width:90}}>
                        <Row>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                <img src = 'https://drive.google.com/uc?id=1ddNeayh5R4C9GQ6uHaYq5VSiFopFXJMS' alt='Characters'/>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                Characters
                            </Col>
                        </Row>
                    </Menu.Item>
                    <Menu.Item key="vehicle" style={{width:90}}>
                        <Row>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                <img src = 'https://drive.google.com/uc?id=1fKh1z1wpHWG_QXFGt3r-hzmjL_ehkmm-' alt='Vehicles'/>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                Vehicles
                            </Col>
                        </Row>                       
                    </Menu.Item>
                    <Menu.Item key="animal" style={{width:90}}>
                        <Row>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                <img src = 'https://drive.google.com/uc?id=1zteA9-guY6LOgadIfq1oSHLpWBpaImQj' alt='Animals'/>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                Animals
                            </Col>
                        </Row>                        
                    </Menu.Item>
                    <Menu.Item key="weapon" style={{width:90}}>
                        <Row>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                <img src = 'https://drive.google.com/uc?id=1ZwVbC1NVBjnMfvwXOehlhbUGZv7EwZYE' alt='Weapons'/>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                Weapons
                            </Col>
                        </Row>                         
                    </Menu.Item>
                    <Menu.Item key="furniture" style={{width:90}}>
                        <Row>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                <img src = 'https://drive.google.com/uc?id=1WwKQZplSffQIt_7MMvFLDcrQgovw7M3t' alt='Furnitures'/>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                Furnitures
                            </Col>
                        </Row>                          
                    </Menu.Item>
                    <Menu.Item key="food" style={{width:90}}>
                        <Row>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                <img src = 'https://drive.google.com/uc?id=1COB1IGbavEElgd0lE3p8risH09gTEzj6' alt='Foods'/>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                Foods
                            </Col>
                        </Row>   
                    </Menu.Item>
                    <Menu.Item key="food" style={{width:90}}>
                        <Row>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                <img src = 'https://drive.google.com/uc?id=157yEhJLBOXBlKvJ7czg6oU9Uoel7wxDG' alt='Plants'/>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                Plants
                            </Col>
                        </Row>   
                    </Menu.Item>
                    <Menu.Item key="food" style={{width:90}}>
                        <Row>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                <img src = 'https://drive.google.com/uc?id=1Y-1kfaoYeKVYWwWwE_bjnzRpvjRO4kgO' alt='Electronics'/>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                            Electronics
                            </Col>
                        </Row>   
                    </Menu.Item>
                </Menu>
            </Row>
        )
    }
}
