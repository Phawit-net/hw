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
            <div style= {{width:'300px'}}>
                <Row>
                    <Text strong>Title</Text>
                    <Input 
                        style ={{marginTop:'7px',marginBottom:'7px',boxShadow: '2px 2px 5px #adadad'}} 
                        placeholder="Title" 
                        name="title" 
                        onChange = {(e)=> this.handleChange('title',e.target.value)}
                        value = {this.state.title}/>
                    <Text strong>Description</Text>
                    <TextArea 
                        style ={{marginTop:'7px',marginBottom:'7px',boxShadow: '2px 2px 5px #adadad'}} 
                        rows={4} 
                        placeholder="Type something"
                        name="content" 
                        onChange = {(e)=> this.handleChange('content',e.target.value)}
                        value = {this.state.content}/>
                    <Col>
                        <Text strong>Tag</Text>
                        <Select 
                            onChange={(value)=> this.handleChange('tag',value)}
                            defaultValue="lucy"
                            style ={{width:'150px',marginLeft:'10px',marginTop:'7px',marginBottom:'7px',boxShadow: '2px 2px 5px #adadad'}} >
                            <Option value="lucy">Lucy</Option>
                            <Option value="jack">Jack</Option>
                            <Option value="project">Project</Option>
                        </Select>
                    </Col>   
                    <Text strong>Due Date</Text>
                    <DatePicker 
                        style ={{marginLeft:'10px',marginTop:'7px',marginBottom:'7px',boxShadow: '2px 2px 5px #adadad'}}
                        format={dateFormatList} 
                        disabledDate={this.disabledDate}/>
                    <Button 
                        style ={{marginTop:'7px',marginBottom:'7px',boxShadow: '2px 2px 5px #adadad' }} 
                        type="primary" 
                        size='large'
                        onClick = {this.handleClick}>
                        Add
                    </Button>
                    <div style={{borderTopWidth:'thin'}}></div>
                </Row>
            </div>
        )
    }
}

const mapDispatchToProps ={
    addNewNote : addNote 
  }

export default connect(null ,mapDispatchToProps )(NoteForm)