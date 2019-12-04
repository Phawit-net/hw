import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import NotesCard from './components/NotesCard';
import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';

import { Typography,Row,Col} from 'antd';
const { Text } = Typography;

function App() {
  return (
    <>
      <Row type='flex' justify ='center'>
        <Col span={6} style={{backgroundColor:'#1890ff',paddingTop:'20px'}}>
          {/* <div style={{padding:'20px 20px 10px 20px' ,backgroundColor:'#1890ff' ,width:'340px'}}> */}
            <Text strong style={{color:'#fff' , fontSize : '20px'}}>Note App</Text>
          {/* </div> */}
            <Row style={{backgroundColor:'#ededed',padding:'10px 25px'}}>
            <div style={{padding:'20px', backgroundColor:'#ededed' ,width:'340px'}}>
              <NoteForm/>
              <hr/>
              {/* <NotesList/> */}
            </div>
          </Row>
        </Col>
        {/* <Col span={18} style={{backgroundColor:'#fff', paddingTop:'20px'}}> */}
          <NotesList/>
          {/* <Row style={{backgroundColor:'#f9f9f9',padding:'10px 25px',height:'400px'}}> */}
            
          {/* </Row> */}
        {/* </Col> */}
      </Row>
    </>
  );
}

export default App;
