import React from 'react';
import './ToDoItem.css';

class ToDoItem extends React.Component {
    state = {
        name: this.props.name,
        done: false
    }

    changeState = () => {
        this.setState({done: !this.state.done});
    }

    render() {
        return(
            <section className='todoItem'>
                <span className={this.state.done?'todoItem__name todoItem__name--done':'todoItem__name'} onClick={this.changeState} >{this.props.name}</span>
                <span onClick={this.props.deleteTask}><i className='fas fa-minus-circle todoItem__delete'></i></span>
            </section>
        );
    }
}

export default ToDoItem