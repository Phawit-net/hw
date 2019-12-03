import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';

import { Typography} from 'antd';
const { Text } = Typography;

function App() {
  return (
    <div>
      <div style={{marginLeft:'20px',padding:'20px 20px 10px 20px' ,backgroundColor:'#1890ff' ,width:'340px'}}>
        <Text strong style={{color:'#fff' , fontSize : '20px'}}>Note App</Text>
      </div>
      <div style={{margin :'0px 20px' ,padding:'20px', backgroundColor:'#ededed' ,width:'340px'}}>
        <NoteForm/>
        <hr/>
        <NotesList/>
      </div>
    </div>
  );
}

export default App;
