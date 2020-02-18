import React from 'react';
import './ToDoItem.css';

class ToDoItem extends React.Component {
    state = {
        done: false
    }

    changeState = () => {
        this.setState({done: !this.state.done});
    }

    render() {
        return(
            <section className='todoItem'>
                <span className={this.state.done?'todoItem__name todoItem__name--done':'todoItem__name'} onClick={this.changeState}>{this.props.name}</span>
                <i className='fas fa-minus-circle todoItem__delete'></i>
            </section>
        );
    }
}

export default ToDoItem