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
            const idArray = tasksArray.map(task => {
                    return task.id;    
                }
            );
            tasksArray.push({name: this.state.draft, id: Math.max(...idArray)+1, done: false});
            this.setState({tasks: tasksArray, draft: ''});
        }
    }

    deleteTask = (taskId) => {
        let idArray = this.state.tasks.map(task => {
            return task.id;
        });

        let newArray = this.state.tasks;
        newArray.splice(idArray.findIndex((value) => {
            return value === taskId;
        }), 1);
        
        this.setState({tasks: newArray});
    }

    
    changeState = (taskId) => {
        const idArray = this.state.tasks.map(task => {
            return task.id;
        });
        const index = idArray.findIndex((value) => {
            return value === taskId;
        });

        let newArray = this.state.tasks;
        
        newArray[index] = {name: newArray[index].name, id: newArray[index].id, done: !newArray[index].done};
        
        this.setState({tasks: newArray});
    }

    render() {
        return(
            <main className='main'>
                <NavBar state={this.state} onUpdate={this.updateValue} updateTaskList={this.updateTaskList} />
                <ToDoList state={this.state} deleteTask={this.deleteTask} changeState={this.changeState}/>
            </main>
        )
    }
}

export default Main 