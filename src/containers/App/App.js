import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Edit from '../Edit/Edit';
import SiteNotFound from '../SiteNotFound/SiteNotFound';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';


class App extends Component {
  render() {
    return(
      <Router>
        <div className='app'>
          <Header />

          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>

            <Route exact path="/todolist/">
              <Main/>
            </Route>

            <Route path="/editTask/:taskId">
              <Edit />
            </Route>
            
            <Route path="*">
              <SiteNotFound/>
            </Route>
          </Switch>
          
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
