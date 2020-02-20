import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <nav className="navigationBar">
                <input type='text' placeholder='Type your task here...' className='navigationBar__input' onChange={this.props.updateDraft} value={this.props.state.draft}></input>
                <input type='text' placeholder='Type location here...' className='navigationBar__input' onChange={this.props.updateCity} value={this.props.state.city}></input>
                <button className='navigationBar__button' onClick={this.props.updateTaskList} >Add task</button>
            </nav>
        );
    }
}

export default NavBar