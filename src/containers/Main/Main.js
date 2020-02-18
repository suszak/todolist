import React, { Component } from 'react';
import './Main.css';
import NavBar from '../../components/NavBar/NavBar'
import ToDoList from '../../components/ToDoList/ToDoList'

class Main extends Component {
    state = {
        tasks: this.props.tasks
    }

    render() {
        return(
            <main className='main'>
                <NavBar tasks={this.state.tasks} />
                <ToDoList tasks={this.state.tasks} />
            </main>
        )
    }
}

export default Main 