import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import SiteNotFound from '../SiteNotFound/SiteNotFound';
import './Edit.css';

class Edit extends Component {
    state = {
        task: [],
        taskExist: false
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    blurTimeoutTaskName;
    blurTimeoutTaskCity;
    blurTimeoutDeadline;
    informationTimeout;

    UNSAFE_componentWillMount() {
        // read local storage
        if(!localStorage.getItem('tasksArray')) {
            this.setState({task: []});
        } else {
            let tasksArrayString = localStorage.getItem('tasksArray');
            tasksArrayString = tasksArrayString.split('|');
    
            let tasksArray = tasksArrayString.map((task) => {
                return JSON.parse(task);
            })
    
            tasksArray.forEach(element => {
            element.deadline = new Date(element.deadline);
            });

            let task = tasksArray.filter((element) => {
                return element.id === parseInt(this.props.match.params.taskId)
            })
    
            if(task.length !== 0) {
                this.setState({
                    task: task,
                    taskExist: true
                });
            }
        }
    }

    inputFocused = (sectionName) => {
        document.querySelector(`.${sectionName}__label`).classList.add(`${sectionName}__label--active`);
        document.querySelector(`#${sectionName}Tooltip`).classList.remove('tooltip--visible');
        document.querySelector(`#${sectionName}TooltipSign`).classList.remove('tooltip--visible');
    }

    inputUnfocused = (sectionName) => {
        if (!document.querySelector(`.${sectionName}__input`).value) {
            document.querySelector(`.${sectionName}__label`).classList.remove(`${sectionName}__label--active`);
        }
    }

    moveLabel = () => {
        if(!document.querySelector('.taskName__input').value) {
            document.querySelector('.taskName__label').classList.remove('taskName__label--active');
        }

        if(!document.querySelector('.taskCity__input').value) {
            document.querySelector('.taskCity__label').classList.remove('taskCity__label--active');
        }

        if(!document.querySelector('.deadline__input').value) {
            document.querySelector('.deadline__label').classList.remove('deadline__label--active');
        }
    }

    updateName = (event) => {
        let temp = this.state.task;
        temp[0].name = event.target.value;
        this.setState({
            task: temp
        })
    }

    updateCity = (event) => {
        let temp = this.state.task;
        temp[0].city = event.target.value;
        this.setState({
            task: temp
        })
    }

    updateDate = (newDate) => {
        let temp = this.state.task;
        temp[0].deadline = newDate;

        this.setState({
            task: temp
        }, () => {clearTimeout(this.blurTimeoutDeadline)});
    }

    updateTask = () => {
        if(!this.state.task[0].name || !this.state.task[0].city || !this.state.task[0].deadline || this.state.task[0].name.indexOf('|') !== -1 || this.state.task[0].city.indexOf('|') !== -1) {
            if(!this.state.task[0].name) {
                document.querySelector('#taskName').classList.add('taskName__input--empty');
                document.querySelector('#taskNameTooltip').classList.add('tooltip--visible');
            } if(!this.state.task[0].city) {
                document.querySelector('#taskCity').classList.add('taskCity__input--empty');
                document.querySelector('#taskCityTooltip').classList.add('tooltip--visible');
            } if(!this.state.task[0].deadline) {
                document.querySelector('#deadlineInput').classList.add('deadline__input--empty');
                document.querySelector('#deadlineTooltip').classList.add('tooltip--visible');
            }
            if(this.state.task[0].name.indexOf('|') !== -1) {
                document.querySelector('#taskName').classList.add('taskName__input--empty');
                document.querySelector('#taskNameTooltipSign').classList.add('tooltip--visible');
            } 
            if(this.state.task[0].city.indexOf('|') !== -1) {
                document.querySelector('#taskCity').classList.add('taskCity__input--empty');
                document.querySelector('#taskCityTooltipSign').classList.add('tooltip--visible');
            }
        } else {
            // read local storage
            if(!localStorage.getItem('tasksArray')) {
                return 0;
            } else {
                let tasksArrayString = localStorage.getItem('tasksArray');
                tasksArrayString = tasksArrayString.split('|');
        
                let tasksArray = tasksArrayString.map((task) => {
                    return JSON.parse(task);
                })
        
                tasksArray.forEach(element => {
                    element.deadline = new Date(element.deadline);
                });

                tasksArray = tasksArray.map((element) => {
                    if(element.id === parseInt(this.props.match.params.taskId)) {
                        return this.state.task[0];
                    } else {
                        return element; 
                    }
                });

                // format array of objects to string
                let localTasksArray = tasksArray.map((task) => {
                    return JSON.stringify(task);
                });
    
                localTasksArray = localTasksArray.join('|');

                // save to local storage
                localStorage.setItem('tasksArray', localTasksArray);
                document.querySelector('.information').style.display = 'flex';
                this.informationTimeout = setTimeout(() => {document.querySelector('.information').style.display = 'none';}, 5100);
            }
            document.querySelector('#taskName').classList.remove('taskName__input--empty');
            document.querySelector('#taskCity').classList.remove('taskCity__input--empty');
        }
    }

    componentWillUnmount() {
        clearTimeout(this.blurTimeoutTaskName);
        clearTimeout(this.blurTimeoutTaskCity);
        clearTimeout(this.blurTimeoutDeadline);
        clearTimeout(this.informationTimeout);
    }

    render() {
        if(this.state.taskExist) {
            return(
                <main className='Edit'> 
                    <h1 className='Edit__title'>Edit form</h1>

                    <section className='Edit__form'>
                    <section className='taskName'>
                            <div className='tooltip' id='taskNameTooltip'>It cannot be empty!</div>
                            <div className='tooltip' id='taskNameTooltipSign'>Don't use '|' inside!</div>
                            <label htmlFor='taskNameInput' className='taskName__label taskName__label--active'>Task name...</label>
                            <input type='text' name='taskNameInput' className='taskName__input' id='taskName' onChange={this.updateName} onFocus={() => {this.inputFocused('taskName'); clearTimeout(this.blurTimeoutTaskName)}} onBlur={() => {this.blurTimeoutTaskName = setTimeout(() => {this.inputUnfocused('taskName')}, 5000);}} value={this.state.task[0].name}></input>
                        </section>

                        <section className='taskCity'>
                            <div className='tooltip' id='taskCityTooltip'>It cannot be empty!</div>
                            <div className='tooltip' id='taskCityTooltipSign'>Don't use '|' inside!</div>
                            <label htmlFor='taskCityInput' className='taskCity__label taskCity__label--active'>City name...</label>
                            <input type='text' name='taskCityInput' className='taskCity__input' id='taskCity' onChange={this.updateCity} onFocus={() => {this.inputFocused('taskCity'); clearTimeout(this.blurTimeouttaskCity)}} onBlur={() => {this.blurTimeouttaskCity = setTimeout(() => {this.inputUnfocused('taskCity')}, 5000);}} value={this.state.task[0].city}></input>
                        </section>

                        <section className='deadline'>
                            <div className='tooltip' id='deadlineTooltip'>It cannot be empty!</div>
                            <div className='tooltip' id='deadlineTooltipSign'>Don't use '|' inside!</div>
                            <label htmlFor='deadlineInput' className='deadline__label deadline__label--active'>Set deadline...</label>
                            <DatePicker selected={this.state.task[0].deadline} onChange={this.updateDate} id='deadlineInput' name='deadlineInput' className='deadline__input' onFocus={() => {this.inputFocused('deadline'); clearTimeout(this.blurTimeoutDeadline)}} onBlur={() => {this.blurTimeoutDeadline = setTimeout(() => {this.inputUnfocused('deadline')}, 5000);}} value={this.state.task[0].deadline} dateFormat='dd/MM/yyyy' withPortal/>
                        </section>

                        <button className='button' onClick={async () => { await this.updateTask(); this.moveLabel()}}>Save changes</button>
                        <Link to={`/todolist`} ><button className='button'>Back</button></Link>
                    </section>

                    <section className='information'>
                            <p className='information__text'>Changes have been saved.</p>
                    </section>
                </main>
            )
        } else {
            return(
                <main className='Edit'> 
                    <SiteNotFound />
                </main>
            )
        }
    }
}

export default withRouter(Edit)