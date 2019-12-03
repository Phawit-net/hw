import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addNote } from '../redux/actions/actions';
import store from '../redux/store/store'

import { Input,Typography,Button} from 'antd';
const { TextArea } = Input;
const { Text } = Typography;

class NoteForm extends Component {
    constructor(props) {
        super(props)
        this.state={
          title:'',
          content:''
        }
      }

    handleChange = (key,value) =>{
        this.setState({
            [key]:value
        })
    }

    handleClick = (e) =>{
        if (this.state.title === '' || this.state.content === ''){
            return 
        }
        this.props.addNewNote(this.state.title,this.state.content)
        localStorage.setItem('notes',JSON.stringify(store.getState())) 
        this.setState({
            title:'',
            content:''
        })
      }

    render() {
        return (
            <div style= {{width:'300px'}}>
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
                <Button 
                    style ={{marginTop:'7px',marginBottom:'7px',boxShadow: '2px 2px 5px #adadad' }} 
                    type="primary" 
                    size='large'
                    onClick = {this.handleClick}>
                    Add
                </Button>
                <div style={{borderTopWidth:'thin'}}></div>
            </div>
        )
    }
}

const mapDispatchToProps ={
    addNewNote : addNote 
  }

export default connect(null ,mapDispatchToProps )(NoteForm)