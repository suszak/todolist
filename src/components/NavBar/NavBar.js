import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    state = {
        tasks: this.props.tasks,
        draft: ''
    }

    updateValue = (event) => {
        this.setState({draft: event.target.value});
    }

    addTask = () => {
        if(this.state.draft) {
            this.state.tasks.push(this.state.draft);
            this.setState({draft: ''});
        }
    }

    render() {
        return(
            <nav className="navigationBar">
                <input type='text' placeholder='Type your task here...' className='navigationBar__input' onChange={this.updateValue} value={this.state.draft}></input>
                <button className='navigationBar__button' onClick={this.addTask} >Add task</button>
            </nav>
        );
    }
}

export default NavBar