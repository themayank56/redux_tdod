import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store/Store';
import {Provider} from  "react-redux";
import Navbar from './Navbar';
import A1reacttodo from './Acomponent/A1reacttodo';
import A2reduxtodo from './Acomponent/A2reduxtodo';
import A2value from './Acomponent/A2value';

export default function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
      <Navbar />
      <hr />
        <Switch>
          <Route exact path="/" component={A1reacttodo} />
          <Route exact path="/reduxtodo" component={A2reduxtodo} />
          <Route exact path="/a2value" component={A2value} />

        </Switch>
      </Router>
      </Provider>
    </>
  )
}

