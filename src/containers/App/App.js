import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'

class App extends Component {
  tasksList = [];

  componentWillMount() {
    // read local storage
    if(!localStorage.getItem('tasksArray')) {
      this.tasksList = [];      
    } else {
      let tasksArrayString = localStorage.getItem('tasksArray');
      tasksArrayString = tasksArrayString.split('|');

      let tasksArray = tasksArrayString.map((task) => {
          return JSON.parse(task);
      })

      tasksArray.forEach(element => {
        element.deadline = new Date(element.deadline);
      });

      this.tasksList = tasksArray;
    }
  }

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
