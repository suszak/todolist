import React, { Component } from 'react';
import './Main.css';
import NavBar from '../../components/NavBar/NavBar'
import ToDoList from '../../components/ToDoList/ToDoList'

class Main extends Component {
    state = {
        tasks: this.props.tasks,
        draft: ''
    }

    updateValue = (event) => {
        this.setState({draft: event.target.value});
    }

    updateTaskList = () => {
        if(this.state.draft) {
            let tasksArray = this.state.tasks;
            tasksArray.push(this.state.draft);
            this.setState({tasks: tasksArray, draft: ''});
        }
    }

    deleteTask = (event) => {
        let tasksArray = this.state.tasks;
        let newArray = tasksArray.filter(task => {
            return (task === event.target.parentElement.parentElement.parentElement.querySelector('.todoItem__name').innerText)?"":task;
        });
        this.setState({tasks: newArray});
    }

    render() {
        return(
            <main className='main'>
                <NavBar state={this.state} onUpdate={this.updateValue} updateTaskList={this.updateTaskList} />
                <ToDoList state={this.state} deleteTask={this.deleteTask} />
            </main>
        )
    }
}

export default Main 