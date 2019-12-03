import React from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import NotesList from './components/NotesList'
 
function App() {
  return (
    <div className="App">
      <h1>React-Redux Notes app</h1>

      <NoteForm />
      <hr />
      <NotesList />
    </div>
  )
}

export default App
