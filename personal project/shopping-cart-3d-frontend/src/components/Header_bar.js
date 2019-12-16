import React, { Component } from 'react'
import  { Menu, Row, Col ,Popover ,Button } from 'antd';
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
            <Row >
                <Col span={12}>
                    <Menu mode="horizontal" style={{backgroundColor:'#23272c',display: 'flex'}}>
                        <Menu.Item style={{width:90,padding:20 , color:"#fff"}}>
                            LOGO
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col span={12}>
                    <Menu mode="horizontal" style={{backgroundColor:'#23272c',display: 'flex', justifyContent:'flex-end'}}>
                        <Menu.Item style={{width:90,padding:20 , color:"#fff"}}>
                            <Popover placement="bottomRight" title='asd' content='asdassda' trigger="click">
                                LOGIN
                            </Popover>
                        </Menu.Item>                        
                    </Menu>
                </Col>
                <Col span={24}>
                <Menu mode="horizontal" style={{boxShadow: '0px 2px 18px 0px rgba(0,0,0,0.75)'}}>                   
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
                </Col>
            </Row>
        )
    }
}
