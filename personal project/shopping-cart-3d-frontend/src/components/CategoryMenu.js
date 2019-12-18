import React, { Component } from 'react'
import  { Menu, Row, Col } from 'antd';
import './CategoryMenu.css';
import Axios from 'axios';

export default class CategoryMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
          categoryList: []
        }
      }

    componentDidMount() {
        Axios.get('http://localhost:8080/categories')
          .then(result => {
            this.setState({
                categoryList: result.data
            })
          })
          console.log(this.state)
      }

    render() {
        return (
            <Row>
                <Menu mode="horizontal" style={{height:100,boxShadow: '0px 14px 29px -5px rgba(0,0,0,0.75)',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#555b68'}}>                   
                    {this.state.categoryList.map(cat => 
                    <Menu.Item key={cat.name} style={{width:90}}>
                        <Row>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                <img src = {cat.icon} alt={cat.name} style={{paddingTop:'5px'}}/>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                {cat.name}
                            </Col>
                        </Row>
                    </Menu.Item>)}
                </Menu>
                <Menu mode="horizontal" style={{ position: 'relative',zIndex : -1,display:'flex',justifyContent:'center',backgroundColor:'#23272c'}}>                   
                    {this.state.categoryList.map(cat => 
                    <Menu.Item key={cat.name} style={{width:90}}>
                        <Row>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                <img src = {cat.icon} alt={cat.name} style={{paddingTop:'5px'}}/>
                            </Col>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                {cat.name}
                            </Col>
                        </Row>
                    </Menu.Item>)}
                </Menu>
            </Row>
        )
    }
}
