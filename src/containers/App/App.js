import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'

class App extends Component {
  tasksList = [{name: 'First task', id: 0, done: false}, {name: 'Second task', id: 1, done: false}];

  render() {
    return(
      <div className='app'>
        <Header />
        <Main tasks={this.tasksList}/>
        <Footer />
      </div>
    )
  }
}

export default App;
