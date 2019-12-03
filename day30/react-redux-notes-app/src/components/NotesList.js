import React from 'react'
import {connect} from 'react-redux'
import {removeNote,showActive,showInActive} from '../redux/actions/actions'


class NotesList extends React.Component {
  constructor(props) {
    super(props)
  }

  handleDeleteNote =(id) => () =>{
    this.props.removeNewNote(id)
  }

  render() {
    let visibility = this.props.visibility
    let notes = this.props.notes.filter(note => note.status === visibility)
    // console.log(this.props.notes)
    return (
      <>
        <h3>Notes</h3>
        <button onClick = {()=>this.props.showActive()} >Show active notes </button>
        <button onClick = {()=>this.props.showInActive()}>Show inactive notes </button>
        <ul>
        {
          notes.map(note=>(
            <li key = {note.id}>
              <b>{note.title}</b>
              <button onClick = {this.handleDeleteNote(note.id)}>x</button>
              <br />
              <span>{note.content}</span>
            </li>
          ))
         } 
        </ul>
      </>
    )
  }
}

//จะทำให้ state ใน store กลายเป็น props ของ component
const mapStateToProps = function(state){
  return {
    notes :state.notes,
    visibility :state.visibility
  }
}

const mapDispatchToProps = {
  removeNewNote : removeNote, 
  showActive : showActive,
  showInActive :showInActive
}

export default connect(mapStateToProps ,mapDispatchToProps )(NotesList)