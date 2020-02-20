import React, { Component } from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {

        state = {
            name: this.props.task.name,
            id: this.props.task.id,
            done: this.props.task.done
        }

    render() {
        return(
            <section className='todoItem'>
                <span className={this.state.done?'todoItem__name todoItem__name--done':'todoItem__name'} onClick={() => {this.props.changeState(this.state.id)}} >{this.state.name}</span>
                <span onClick={() => {this.props.deleteTask(this.state.id)}} className='todoItem__delete'><i className='fas fa-minus-circle'></i></span>
            </section>
        );
    }
}

export default ToDoItem