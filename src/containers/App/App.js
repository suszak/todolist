import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Edit from '../Edit/Edit';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


class App extends Component {
  render() {
    return(
      <Router>
        <div className='app'>
          <Header />

          <Switch>
            <Route exact path="/todolist/">
              <Main/>
            </Route>

            <Route path="/editTask/:taskId">
              <Edit />
            </Route>
            
            <Route path="*">
              <p>Page not found.</p>
            </Route>
          </Switch>
          
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
