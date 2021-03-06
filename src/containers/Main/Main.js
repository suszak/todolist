import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar'
import ToDoList from '../../components/ToDoList/ToDoList'
import './Main.css';

class Main extends Component {
    state = {
        tasks: '',
        draft: '',
        city: '',
        deadline: '',
        important: ''
    }

    // Update draft input value:
    updateDraft = (event) => {
        this.setState({draft: event.target.value});
    }

    // Update city input value:
    updateCity = (event) => {
        this.setState({city: event.target.value});
    }

    // Update deadline input value:
    updateDate = (value) => {
        this.setState({deadline: value});
    }

    // Add new task:
    updateTaskList = () => {
        if(!this.state.draft || !this.state.city || !this.state.deadline || this.state.draft.indexOf('|') !== -1 || this.state.city.indexOf('|') !== -1) {
            if(!this.state.draft) {
                document.querySelector('#draftInput').classList.add('task__input--empty');
                document.querySelector('#taskTooltip').classList.add('tooltip--visible');
            } if(!this.state.city) {
                document.querySelector('#cityInput').classList.add('city__input--empty');
                document.querySelector('#cityTooltip').classList.add('tooltip--visible');
            } if(!this.state.deadline) {
                document.querySelector('#deadlineInput').classList.add('deadline__input--empty');
                document.querySelector('#deadlineTooltip').classList.add('tooltip--visible');
            }
            if(this.state.draft.indexOf('|') !== -1) {
                document.querySelector('#draftInput').classList.add('task__input--empty');
                document.querySelector('#taskTooltipSign').classList.add('tooltip--visible');
            } if(this.state.city.indexOf('|') !== -1) {
                document.querySelector('#cityInput').classList.add('city__input--empty');
                document.querySelector('#cityTooltipSign').classList.add('tooltip--visible');
            }
        } else {
            let tasksArray = this.state.tasks;
            const idArray = tasksArray.map(task => {
                    return task.id;
                }
            );
            
            document.querySelector('#draftInput').classList.remove('task__input--empty');
            document.querySelector('#cityInput').classList.remove('city__input--empty');

            tasksArray.push({name: this.state.draft, city: this.state.city, id: (Math.max(...idArray)<0)?0:Math.max(...idArray)+1, deadline: this.state.deadline, done: false, important: false});
            this.setState({tasks: tasksArray, draft: '', city: '', deadline: ''}, this.sortingTasks);
        }
    }

    // Delete task:
    deleteTask = (taskId) => {
        let idArray = this.state.tasks.map(task => {
            return task.id;
        });

        let newArray = this.state.tasks;
        newArray.splice(idArray.findIndex((value) => {
            return value === taskId;
        }), 1);
        
        this.setState({tasks: newArray}, this.sortingTasks);
    }

    // Change state done/todo
    changeState = (taskId) => {
        const idArray = this.state.tasks.map(task => {
            return task.id;
        });
        const index = idArray.findIndex((value) => {
            return value === taskId;
        });

        let newArray = this.state.tasks;
        
        newArray[index] = {name: newArray[index].name, id: newArray[index].id, city: newArray[index].city, deadline: newArray[index].deadline, done: !newArray[index].done, important: newArray[index].important};
        
        this.setState({tasks: newArray}, this.sortingTasks);
    }

    // Change important state
    changeImportantState = (taskId) => {
        const idArray = this.state.tasks.map(task => {
            return task.id;
        });
        const index = idArray.findIndex((value) => {
            return value === taskId;
        });

        let newArray = this.state.tasks;
        
        newArray[index] = {name: newArray[index].name, id: newArray[index].id, city: newArray[index].city, deadline: newArray[index].deadline, done: newArray[index].done, important: !newArray[index].important};
        
        this.setState({tasks: newArray}, this.sortingTasks);
    }

    // Sorting tasks
    sortingTasks = () => {
        const importantArray = [];
        const unimportantArray = [];

        if(this.state.tasks !== '') {
            this.state.tasks.map((task) => {
                if(task.important) {
                    importantArray.push(task);
                    return task;
                } else {
                    unimportantArray.push(task);
                    return task;
                }
            })

            importantArray.sort(function(a, b) {
                return a.deadline - b.deadline;
            })

            unimportantArray.sort(function(a, b) {
                return a.deadline - b.deadline;
            })

            const sortedArray = [...importantArray, ...unimportantArray];
            this.setState({tasks: sortedArray});

            // format array of objects to string
            let localTasksArray = sortedArray.map((task) => {
                return JSON.stringify(task);
            });
  
            localTasksArray = localTasksArray.join('|');

            // save to local storage
            localStorage.setItem('tasksArray', localTasksArray);
        }
    }

    UNSAFE_componentWillMount() {
        // read local storage
        if(!localStorage.getItem('tasksArray')) {
            this.setState({tasks: []});      
        } else {
            let tasksArrayString = localStorage.getItem('tasksArray');
            tasksArrayString = tasksArrayString.split('|');
    
            let tasksArray = tasksArrayString.map((task) => {
                return JSON.parse(task);
            })
    
            tasksArray.forEach(element => {
            element.deadline = new Date(element.deadline);
            });
    
            this.setState({tasks: tasksArray});

            // sorting array
            this.sortingTasks();
        }
    }

    render() {
        return(
            <main className='main'>
                <NavBar state={this.state} updateDraft={this.updateDraft} updateCity={this.updateCity} updateDate={this.updateDate} updateTaskList={this.updateTaskList} />
                <ToDoList state={this.state} deleteTask={this.deleteTask} changeState={this.changeState} changeImportantState={this.changeImportantState} />
            </main>
        )
    }
}

export default Main 