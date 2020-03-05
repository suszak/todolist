import React, { Component } from 'react';
import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';

class ToDoList extends Component {
    render() {
        return(
            <section className='todoList'>
                {(this.props.state.tasks !== '')?this.props.state.tasks.map((task) => <ToDoItem task={task} deleteTask={this.props.deleteTask} changeState={this.props.changeState} changeImportantState={this.props.changeImportantState} key={task.id}/>):''}
            </section>
        )
    }
}

export default ToDoList