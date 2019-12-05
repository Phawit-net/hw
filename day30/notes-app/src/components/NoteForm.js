import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addNote } from '../redux/actions/actions';
import store from '../redux/store/store'
import moment from 'moment';

import { Input, Typography, Button, Select, Row, Col, DatePicker,Icon } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
const { Text } = Typography;

class NoteForm extends Component {
    constructor(props) {
        super(props)
        this.state={
          title:'',
          content:'',
          tag:'lucy'
        }
      }

    handleChange = (key,value) =>{
        this.setState({
            [key]:value
        })
    }

    handleClick = (e) =>{
        if (this.state.title === '' || this.state.content === '' ){
            return 
        }
        let currentDate = moment().format("D MMM, YYYY, hh:mm a")
        this.props.addNewNote(this.state.title,this.state.content,currentDate,this.state.tag)
        localStorage.setItem('notes',JSON.stringify(store.getState())) 
        this.setState({
            title:'',
            content:''
        })
      }

    disabledDate = (current) => {
        let customDate = moment().format("DD/MMYYYY")
        return current && current < moment(customDate, "DD-MM-YYYY");
    }

    render() {
        const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
        return (
            <>
                <Col span={6} style={{backgroundColor:'#1890ff'}}>
                    <Row style={{padding:'10px 20px'}}>
                        <Text strong style={{color:'#fff' , fontSize : '20px'}}>Note App</Text>
                    </Row>
                    <Row style={{padding:'10px 20px', backgroundColor:'#ededed'}}>
                        <Text strong  style={{fontSize : '20px'}}>Title</Text>
                        <Input 
                            style ={{marginTop:'7px',marginBottom:'7px',boxShadow: '2px 2px 5px #adadad'}} 
                            placeholder="Title" 
                            name="title" 
                            onChange = {(e)=> this.handleChange('title',e.target.value)}
                            value = {this.state.title}/>
                        <Text strong style={{fontSize : '20px'}}>Description</Text>
                        <TextArea 
                            style ={{marginTop:'7px',marginBottom:'7px',boxShadow: '2px 2px 5px #adadad'}} 
                            rows={4} 
                            placeholder="Type something"
                            name="content" 
                            onChange = {(e)=> this.handleChange('content',e.target.value)}
                            value = {this.state.content}/>
                        <Col>
                            <Icon type="tag"/>&nbsp;&nbsp;
                            <Text strong style={{fontSize : '20px'}}>Tag</Text>
                            <Select 
                                onChange={(value)=> this.handleChange('tag',value)}
                                defaultValue="lucy"
                                style ={{width:'150px',marginLeft:'10px',marginTop:'7px',marginBottom:'7px',boxShadow: '2px 2px 5px #adadad'}} >
                                <Option value="lucy"><i class="fa fa-circle" style={{fontSize: '11px', color:'#f7434c'}}></i>&nbsp;&nbsp; Lucy</Option>
                                <Option value="jack"><i class="fa fa-circle"style={{fontSize: '11px' , color:'#fad714'}}></i>&nbsp;&nbsp; Jack</Option>
                                <Option value="project"><i class="fa fa-circle"style={{fontSize: '11px' , color:'#68ef25'}}></i>&nbsp;&nbsp; Project</Option>
                            </Select>
                        </Col>   
                        <Col>
                            <Icon type="calendar"/>&nbsp;&nbsp;
                            <Text strong style={{fontSize : '20px'}}>Due Date</Text>
                            <DatePicker 
                                style ={{marginLeft:'10px',marginTop:'7px',boxShadow: '2px 2px 5px #adadad'}}
                                format={dateFormatList} 
                                disabledDate={this.disabledDate}/>
                        </Col>
                        <Button 
                            style ={{marginTop:'7px',marginBottom:'7px',boxShadow: '2px 2px 5px #adadad' }} 
                            type="primary" 
                            size='large'
                            onClick = {this.handleClick}>
                            Add
                        </Button>
                        <div style={{borderTopWidth:'thin'}}></div>
                    </Row>
                </Col>
            </>
        )
    }
}

const mapDispatchToProps ={
    addNewNote : addNote 
  }

export default connect(null ,mapDispatchToProps )(NoteForm)