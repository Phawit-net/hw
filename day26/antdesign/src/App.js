import React from 'react';
import './App.css';
import {Button ,Icon,Switch} from 'antd';
import Todo from './components/todo'
import Slide from './components/slider';

function App() {
  return (
    <div className = 'App'>
      <Button>asd</Button>
      <Button type="primary" size={'large'} shape="round">
        <Icon type="smile" spin />
        Download
      </Button>
      <Todo/>
      <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
      <div>
        <Slide/>
      </div>
    </div>
  );
}

export default App;


