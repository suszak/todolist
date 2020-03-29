import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';
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

    render() {
        const { match } = this.props;

        if(this.state.taskExist) {
            return(
                <main className='Edit'> 
                    <p>Edit task: {match.params.taskId} </p>
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