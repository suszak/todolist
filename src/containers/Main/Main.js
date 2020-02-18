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

    render() {
        return(
            <main className='main'>
                <NavBar state={this.state} onUpdate={this.updateValue} updateTaskList={this.updateTaskList} />
                <ToDoList state={this.state} />
            </main>
        )
    }
}

export default Main 