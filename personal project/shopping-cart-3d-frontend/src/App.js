import React from 'react';
import FirstPage from './pages/FirstPage';
import { Route, Switch } from 'react-router-dom'
import HeaderBar from './components/Header_bar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <HeaderBar/>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/main" component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
