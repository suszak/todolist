import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'

class App extends Component {
  tasksList = [{id: 0, name: 'First task', city: 'Cieszyn', done: false}, {id: 1, name: 'Second task', city: 'Warszawa', done: false}];

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
