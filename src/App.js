import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store/Store';
import {Provider} from  "react-redux";
import Navbar from './Navbar';
import CreatePost from './Acomponent/CreatePost';
import Todo from './Acomponent/Todo';


export default function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
      <Navbar />
      <hr />
        <Switch>
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/createpost" component={CreatePost} />
        </Switch>
      </Router>
      </Provider>
    </>
  )
}

