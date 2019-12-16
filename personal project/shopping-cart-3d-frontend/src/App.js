import React from 'react';
import FirstPage from './pages/FirstPage';
import { Route, Switch } from 'react-router-dom'
import HeaderBar from './components/Header_bar';

function App() {
  return (
    <>
      <HeaderBar/>
      <Switch>
        <Route exact path="/" component={FirstPage} />
      </Switch>
    </>
  );
}

export default App;
