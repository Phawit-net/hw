import React from 'react'
import {connect} from 'react-redux'
import {addNote} from '../redux/actions/actions'

class NoteForm extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      title:'',
      content:''
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state.title , this.state.content)

    // คือ store.dispatch(addNote(title,content))
    this.props.addNewNote(this.state.title,this.state.content)
  }

  handleTitleChange = (e) =>{
    this.setState({
      title : e.target.value
    })
  }
  
  handleContentChange = (e) =>{
    this.setState({
      content : e.target.value
    })
  }

  // รวบfunctionเป็นfunctionเดียว
  // handleChange = (key,value) =>{
  //   this.setState({
  //     [key]:value
  //   })
  // }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <h3>Add a Note</h3>
        Title: <br />
        <input 
          type="text" 
          name="title" 
          onChange = {this.handleTitleChange}  // onChange = {(e)=> this.handleChange('title',e.target.value)} 
          value = {this.state.title}/>
        <br />
        Content: <br />
        <textarea 
          name="content" 
          cols="30" 
          rows="5"
          onChange = {this.handleContentChange} 
          value = {this.state.content}></textarea>
        <br />
        <button type="submit" >Add Note</button>
      </form>
    )
  }
}

const mapDispatchToProps ={
  addNewNote : addNote  // addNewNote คือprops ที่จะเรียกใช้
}

export default connect(null ,mapDispatchToProps )(NoteForm)