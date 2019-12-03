import React, { Component } from 'react'
import {Card ,Button,Icon,Tag} from 'antd'
import {connect} from 'react-redux'
import { removeNote } from '../redux/actions/actions'
import store from '../redux/store/store'

class NotesList extends Component {

    handleDelete =(id)=>() =>{
        this.props.removeNewNote(id) 
        localStorage.setItem('notes',JSON.stringify(store.getState()))
    }

    
    render() {
        // this.dateTime()
        return (
            <>
            {this.props.notes.map(note => (
                <Card 
                    key = {note.id}
                    title={note.title}                     
                    // extra={<Button type="danger" onClick = {this.handleDelete(note.id)}>delete</Button>} 
                    extra={<Icon 
                        type="delete" 
                        onClick = {this.handleDelete(note.id)} 
                        theme="filled" 
                        style={{fontSize:'20px',color:'#ff4545'}}/>
                        } 
                    bordered={true} 
                    style={{ width: 300 ,marginTop:'10px',boxShadow: '2px 2px 5px #adadad'}}
                    headStyle={{color:'#ff5452'}}
                    bodyStyle ={{padding : '12px 24px'}}>
                    <p>
                        {note.content} 
                    </p>
                    <div>
                        {note.currentDate}
                        <Tag color="magenta">{note.tag}</Tag>
                    </div>
                </Card>  
            ))}   
            </>                                
        )
    }
}
const mapStateToProps = function(state){
    return {
      notes :state.notes,
    }
  }

const mapDispatchToProps ={
    removeNewNote : removeNote 
}

export default connect(mapStateToProps,mapDispatchToProps)(NotesList)