import React, { Component } from 'react';
import './Main.css';
import NavBar from '../../components/NavBar/NavBar'
import ToDoList from '../../components/ToDoList/ToDoList'

class Main extends Component {
    tasksList = [
        {name: 'First task', done: 0},
        {name: 'Second task', done: 0}
    ];

    render() {
        return(
            <main className='main'>
                <NavBar />
                <ToDoList tasks={this.tasksList}/>
            </main>
        )
    }
}

export default Main 