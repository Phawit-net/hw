import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';

import { Typography,Row,Col} from 'antd';
const { Text } = Typography;

function App() {
  return (
    <>
      <Row type='flex' style={{height:'100vh'}}>
        <NoteForm/>
        <NotesList/>
      </Row>
    </>
  );
}

export default App;
