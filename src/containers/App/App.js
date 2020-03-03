import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'

class App extends Component {
  tasksList = [{id: 0, name: 'First task', city: 'Cieszyn', deadline: new Date(), done: false, important: false}, {id: 1, name: 'Second task', city: 'Warszawa', deadline: new Date(), done: false, important: true}];

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
