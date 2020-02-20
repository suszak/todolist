import React, { Component } from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
    render() {
        return(
            <section className='todoItem'>
                <span className={this.props.task.done?'todoItem__name todoItem__name--done':'todoItem__name'} onClick={() => {this.props.changeState(this.props.task.id)}} >{this.props.task.name}</span>
                <span onClick={() => {this.props.deleteTask(this.props.task.id)}} className='todoItem__delete'><i className='fas fa-minus-circle'></i></span>
            </section>
        );
    }
}

export default ToDoItem