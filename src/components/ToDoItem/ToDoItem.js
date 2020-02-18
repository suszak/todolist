import React from 'react';
import './ToDoItem.css';

class ToDoItem extends React.Component {
    render() {
        return(
            <section className='todoItem'>
                <span className='todoItem__name'>{this.props.name}</span>
                <span className='todoItem__delete'>x</span>
            </section>
        );
    }
}

export default ToDoItem