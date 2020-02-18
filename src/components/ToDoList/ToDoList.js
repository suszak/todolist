import React, { Component } from 'react';
import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';

class ToDoList extends Component {
    render() {
        return(
            <section className='todoList'>
                {this.props.tasks.map(task => <ToDoItem name={task.name} />)}
            </section>
        )
    }
}

export default ToDoList