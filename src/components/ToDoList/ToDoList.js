import React, { Component } from 'react';
import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';

class ToDoList extends Component {
    render() {
        return(
            <section className='todoList'>
                {this.props.state.tasks.map(task => <ToDoItem name={task} deleteTask={this.props.deleteTask} />)}
            </section>
        )
    }
}

export default ToDoList