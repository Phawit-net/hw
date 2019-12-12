import React from 'react';
import FirstPage from './pages/FirstPage';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={FirstPage} />
      </Switch>
    </>
  );
}

export default App;
