import React, { Component } from 'react'
import  { Menu, Row, Col } from 'antd';
import './Header_bar.css';
import Axios from 'axios';

export default class HeaderBar extends Component {
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
            <Row style={{width:'100vw'}}>
                <Menu mode="horizontal" style={{boxShadow: '0px 2px 18px 0px rgba(0,0,0,0.75)'}}>                   
                    {this.state.categoryList.map(cat => 
                    <Menu.Item key={cat.name} style={{width:90}}>
                        <Row>
                            <Col style={{display:'flex',justifyContent:'center'}}>
                                <img src = {cat.icon} alt={cat.name}/>
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
