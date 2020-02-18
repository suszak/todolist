import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'

class App extends Component {
  tasksList = ['First task', 'Second task'];

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
