import React, { Component } from 'react';
import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';

class ToDoList extends Component {
    state = {
        tasks: this.props.tasks
    }
    
    render() {
        return(
            <section className='todoList'>
                {this.state.tasks.map(task => <ToDoItem name={task} />)}
            </section>
        )
    }
}

export default ToDoList